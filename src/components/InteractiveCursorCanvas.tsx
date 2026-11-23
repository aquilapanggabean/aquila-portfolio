import { useEffect, useRef } from 'react';
import {
  computeDotDisplacement,
  createDotMatrix,
  stepRipples,
  type FieldDot,
  type RipplePulse,
} from '../utils/cursorField';

interface InteractiveCursorCanvasProps {
  hostRef: React.RefObject<HTMLElement | null>;
  onPointerOffset?: (normX: number, normY: number) => void;
}

export function InteractiveCursorCanvas({
  hostRef,
  onPointerOffset,
}: InteractiveCursorCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const offsetCallbackRef = useRef(onPointerOffset);
  offsetCallbackRef.current = onPointerOffset;

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = hostRef.current;
    if (!canvas || !host) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let dots: FieldDot[] = [];
    let ripples: RipplePulse[] = [];
    let rafId = 0;
    let isVisible = true;
    let pointerInside = false;

    const cursor = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    const getRingRadius = () => (width < 640 ? 74 : 112);

    const resize = () => {
      const rect = host.getBoundingClientRect();
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const spacing = width < 640 ? 22 : 24;
      dots = createDotMatrix(width, height, spacing);

      if (!pointerInside) {
        cursor.targetX = width * 0.52;
        cursor.targetY = height * 0.51;
        cursor.x = cursor.targetX;
        cursor.y = cursor.targetY;
      }
    };

    const drawFrame = (): boolean => {
      const ringRadius = getRingRadius();
      let stillMoving = false;

      // Smooth damped pointer tracking
      const lerpFactor = prefersReducedMotion ? 1 : 0.16;
      const cDx = cursor.targetX - cursor.x;
      const cDy = cursor.targetY - cursor.y;
      if (Math.abs(cDx) > 0.2 || Math.abs(cDy) > 0.2) {
        cursor.x += cDx * lerpFactor;
        cursor.y += cDy * lerpFactor;
        stillMoving = true;
      } else {
        cursor.x = cursor.targetX;
        cursor.y = cursor.targetY;
      }

      if (ripples.length > 0) {
        ripples = stepRipples(ripples, 7.5);
        if (ripples.length > 0) {
          stillMoving = true;
        }
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Subtle ambient radial wash centered on the cursor ring
      const haloGrad = ctx.createRadialGradient(
        cursor.x,
        cursor.y,
        ringRadius * 0.35,
        cursor.x,
        cursor.y,
        ringRadius * 2.8
      );
      haloGrad.addColorStop(0, 'rgba(36, 87, 214, 0.06)');
      haloGrad.addColorStop(0.5, 'rgba(15, 23, 42, 0.025)');
      haloGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = haloGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Subtle sweeping topographic contour curves that bend around the cursor
      ctx.lineWidth = 1;
      const phaseShift = (cursor.x / Math.max(width, 1)) * 0.65;
      for (let lineIdx = 0; lineIdx < 3; lineIdx += 1) {
        const baseY = height * (0.34 + lineIdx * 0.13);
        ctx.beginPath();
        ctx.strokeStyle =
          lineIdx === 1
            ? 'rgba(36, 87, 214, 0.12)'
            : 'rgba(15, 23, 42, 0.075)';

        const stepX = 20;
        for (let x = 0; x <= width + stepX; x += stepX) {
          const wave =
            Math.sin(x * 0.0042 + phaseShift + lineIdx * 1.4) * 26 +
            Math.cos(x * 0.0021 - phaseShift * 0.7 + lineIdx) * 14;
          let y = baseY + wave;

          const dx = x - cursor.x;
          const dy = y - cursor.y;
          const dist = Math.hypot(dx, dy);
          const bendRadius = ringRadius * 2.1;
          if (dist < bendRadius && dist > 0.001) {
            const push = Math.pow(1 - dist / bendRadius, 2) * 34;
            y += (dy / dist) * push;
          }

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // 3. Crisp pixel-square dot matrix with radial circular repulsion around cursor
      const smooth = prefersReducedMotion ? 1 : 0.2;
      for (let i = 0; i < dots.length; i += 1) {
        const dot = dots[i];
        const target = computeDotDisplacement(
          dot,
          cursor.x,
          cursor.y,
          ringRadius,
          ripples
        );

        const ddx = target.x - dot.x;
        const ddy = target.y - dot.y;
        if (Math.abs(ddx) > 0.18 || Math.abs(ddy) > 0.18) {
          dot.x += ddx * smooth;
          dot.y += ddy * smooth;
          stillMoving = true;
        } else {
          dot.x = target.x;
          dot.y = target.y;
        }

        const size = dot.size * target.scale;
        ctx.globalAlpha = Math.min(0.85, target.alpha * 0.95);
        ctx.fillStyle = dot.color;
        ctx.fillRect(dot.x - size * 0.5, dot.y - size * 0.5, size, size);
      }

      // 4. Crisp circular lens perimeter outline around cursor
      ctx.globalAlpha = pointerInside ? 0.3 : 0.18;
      ctx.strokeStyle = pointerInside ? '#2457D6' : '#64748B';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cursor.x, cursor.y, ringRadius - 2, 0, Math.PI * 2);
      ctx.stroke();

      // 5. Render active click ripples
      for (const ripple of ripples) {
        ctx.globalAlpha = ripple.strength * 0.34;
        ctx.strokeStyle = '#2457D6';
        ctx.lineWidth = 1.25;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.globalAlpha = 1;
      return stillMoving;
    };

    const tick = () => {
      if (!isVisible || document.hidden) {
        rafId = 0;
        return;
      }
      const needsMoreFrames = drawFrame();
      if (needsMoreFrames && !prefersReducedMotion) {
        rafId = window.requestAnimationFrame(tick);
      } else {
        rafId = 0;
      }
    };

    const wakeLoop = () => {
      if (prefersReducedMotion) {
        drawFrame();
        return;
      }
      if (!rafId && isVisible && !document.hidden) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      const localX = event.clientX - rect.left;
      const localY = event.clientY - rect.top;

      pointerInside = true;
      cursor.targetX = localX;
      cursor.targetY = localY;
      canvas.setAttribute('data-pointer-active', 'true');

      if (offsetCallbackRef.current && rect.width > 0 && rect.height > 0) {
        const normX = (localX / rect.width) * 2 - 1;
        const normY = (localY / rect.height) * 2 - 1;
        offsetCallbackRef.current(normX, normY);
      }

      wakeLoop();
    };

    const handlePointerLeave = () => {
      pointerInside = false;
      cursor.targetX = width * 0.52;
      cursor.targetY = height * 0.51;
      canvas.setAttribute('data-pointer-active', 'false');

      if (offsetCallbackRef.current) {
        offsetCallbackRef.current(0, 0);
      }

      wakeLoop();
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (prefersReducedMotion) {
        return;
      }
      const targetEl = event.target as HTMLElement | null;
      if (targetEl?.closest('a, button')) {
        return;
      }
      const rect = host.getBoundingClientRect();
      ripples.push({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        radius: 18,
        maxRadius: Math.max(width, height) * 0.42,
        strength: 0.9,
      });
      wakeLoop();
    };

    const handleVisibilityChange = () => {
      if (!document.hidden && isVisible) {
        wakeLoop();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true;
        if (isVisible) {
          wakeLoop();
        } else if (rafId) {
          window.cancelAnimationFrame(rafId);
          rafId = 0;
        }
      },
      { threshold: 0.05 }
    );

    const handleResize = () => {
      resize();
      // Snap dots immediately to displaced rest positions on initial/resize layout
      const ringRadius = getRingRadius();
      for (const dot of dots) {
        const target = computeDotDisplacement(dot, cursor.x, cursor.y, ringRadius);
        dot.x = target.x;
        dot.y = target.y;
      }
      drawFrame();
    };

    handleResize();
    observer.observe(host);

    window.addEventListener('resize', handleResize, { passive: true });
    host.addEventListener('pointermove', handlePointerMove, { passive: true });
    host.addEventListener('pointerleave', handlePointerLeave, { passive: true });
    host.addEventListener('pointerdown', handlePointerDown, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      host.removeEventListener('pointermove', handlePointerMove);
      host.removeEventListener('pointerleave', handlePointerLeave);
      host.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [hostRef]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      data-testid="hero-cursor-canvas"
      data-pointer-active="false"
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
    />
  );
}
