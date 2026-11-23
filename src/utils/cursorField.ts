/**
 * Pure deterministic math for the Hero interactive cursor dot-matrix field.
 * Decoupled from DOM/Canvas so physics and bounds can be unit-tested directly.
 */

export interface FieldDot {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  color: string;
  phase: number;
}

export interface RipplePulse {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  strength: number;
}

const PALETTE_NEUTRAL = '#94A3B8';
const PALETTE_MUTED = '#475569';
const PALETTE_ACCENTS = ['#2457D6', '#059669', '#D97706', '#0284C7'] as const;

function seededNoise(col: number, row: number): number {
  const n = Math.sin(col * 127.1 + row * 311.7) * 43758.5453123;
  return n - Math.floor(n);
}

export function createDotMatrix(
  width: number,
  height: number,
  spacing = 24
): FieldDot[] {
  if (width <= 0 || height <= 0 || spacing <= 4) {
    return [];
  }

  const dots: FieldDot[] = [];
  const centerX = width * 0.52;
  const centerY = height * 0.5;
  const maxRadialX = Math.max(width * 0.34, 240);
  const maxRadialY = Math.max(height * 0.48, 220);

  const cols = Math.ceil(width / spacing);
  const rows = Math.ceil(height / spacing);
  const offsetX = (width - cols * spacing) * 0.5 + spacing * 0.5;
  const offsetY = (height - rows * spacing) * 0.5 + spacing * 0.5;

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const baseX = offsetX + col * spacing;
      const baseY = offsetY + row * spacing;
      const normDx = (baseX - centerX) / maxRadialX;
      const normDy = (baseY - centerY) / maxRadialY;
      const radialDist = Math.hypot(normDx, normDy);

      const n1 = seededNoise(col, row);
      const n2 = seededNoise(col + 19, row + 7);

      // Keep a sculptural organic cloud concentrated around center with sparse outliers
      const keepProbability = Math.max(0.05, 1.05 - radialDist * 0.72);
      if (n1 > keepProbability) {
        continue;
      }

      let color: string = n2 > 0.45 ? PALETTE_NEUTRAL : PALETTE_MUTED;
      if (n2 > 0.84) {
        const accentIndex = Math.floor(seededNoise(col + 53, row + 29) * PALETTE_ACCENTS.length);
        color = PALETTE_ACCENTS[accentIndex];
      }

      const baseAlpha = Math.max(
        0.08,
        Math.min(0.56, (1.1 - radialDist * 0.65) * (0.28 + n2 * 0.36))
      );

      dots.push({
        baseX,
        baseY,
        x: baseX,
        y: baseY,
        size: n2 > 0.78 ? 2.6 : 2,
        baseAlpha,
        color,
        phase: n1 * Math.PI * 2,
      });
    }
  }

  return dots;
}

export interface DisplacedDotResult {
  x: number;
  y: number;
  alpha: number;
  scale: number;
  inRingHalo: boolean;
}

/**
 * Computes the cursor-reactive target position and luminance for a single dot.
 * Dots inside the circular cursor lens displace radially outward onto a crisp
 * circular halo ring, replicating the sculptural ring void around the cursor.
 */
export function computeDotDisplacement(
  dot: Pick<FieldDot, 'baseX' | 'baseY' | 'baseAlpha'>,
  cursorX: number,
  cursorY: number,
  ringRadius: number,
  ripples: readonly RipplePulse[] = []
): DisplacedDotResult {
  const dx = dot.baseX - cursorX;
  const dy = dot.baseY - cursorY;
  const dist = Math.hypot(dx, dy);

  let targetX = dot.baseX;
  let targetY = dot.baseY;
  let alpha = dot.baseAlpha;
  let scale = 1;
  let inRingHalo = false;

  const influenceRadius = ringRadius * 1.75;

  if (dist < influenceRadius) {
    const safeDist = dist < 0.001 ? 0.001 : dist;
    const nx = dx / safeDist;
    const ny = dy / safeDist;

    if (dist < ringRadius) {
      // Push inner dots smoothly out to the perimeter of the circular void
      const rimOffset = ringRadius + (dist / ringRadius) * 14;
      targetX = cursorX + nx * rimOffset;
      targetY = cursorY + ny * rimOffset;
      const rimProximity = 1 - Math.abs(dist - ringRadius * 0.72) / ringRadius;
      alpha = Math.min(0.92, dot.baseAlpha + 0.38 * Math.max(0.25, rimProximity));
      scale = 1.25;
      inRingHalo = true;
    } else {
      // Soft outer halo falloff
      const t = 1 - (dist - ringRadius) / (influenceRadius - ringRadius);
      const push = t * t * 16;
      targetX = dot.baseX + nx * push;
      targetY = dot.baseY + ny * push;
      alpha = Math.min(0.82, dot.baseAlpha + t * 0.24);
      scale = 1 + t * 0.18;
    }
  }

  // Apply click-triggered radial ripples
  for (const ripple of ripples) {
    const rdx = targetX - ripple.x;
    const rdy = targetY - ripple.y;
    const rDist = Math.hypot(rdx, rdy);
    const bandWidth = 46;
    const delta = Math.abs(rDist - ripple.radius);
    if (delta < bandWidth && rDist > 0.001) {
      const wave = Math.cos((delta / bandWidth) * (Math.PI * 0.5));
      const push = wave * ripple.strength * 14;
      targetX += (rdx / rDist) * push;
      targetY += (rdy / rDist) * push;
      alpha = Math.min(0.95, alpha + wave * ripple.strength * 0.28);
    }
  }

  return {
    x: targetX,
    y: targetY,
    alpha,
    scale,
    inRingHalo,
  };
}

export function stepRipples(
  ripples: readonly RipplePulse[],
  speed = 6.5
): RipplePulse[] {
  const next: RipplePulse[] = [];
  for (const ripple of ripples) {
    const nextRadius = ripple.radius + speed;
    if (nextRadius < ripple.maxRadius) {
      const progress = nextRadius / ripple.maxRadius;
      next.push({
        ...ripple,
        radius: nextRadius,
        strength: Math.max(0, 1 - progress),
      });
    }
  }
  return next;
}
