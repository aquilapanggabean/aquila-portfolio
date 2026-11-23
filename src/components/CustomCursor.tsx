import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import type { Language } from '../data/i18n';
import {
  resolveCursorState,
  type CursorMode,
  type CursorTargetLike,
} from '../utils/cursorState';

interface CustomCursorProps {
  lang: Language;
}

export function CustomCursor({ lang }: CustomCursorProps) {
  const [enabled, setEnabled] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const pointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const syncAvailability = () => {
      setEnabled(pointerQuery.matches && !motionQuery.matches);
    };

    syncAvailability();
    pointerQuery.addEventListener('change', syncAvailability);
    motionQuery.addEventListener('change', syncAvailability);

    return () => {
      pointerQuery.removeEventListener('change', syncAvailability);
      motionQuery.removeEventListener('change', syncAvailability);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const root = rootRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!root || !dot || !ring || !label) {
      return;
    }

    let isVisible = false;
    let isPressed = false;
    let currentMode: CursorMode = 'default';

    // Center all cursor layers on pointer coordinates via GSAP xPercent/yPercent
    gsap.set([dot, ring, label], { xPercent: -50, yPercent: -50, opacity: 0 });
    gsap.set(label, { scale: 0.8 });

    // Smooth GSAP quickTo interpolators (auto-sleep when idle; zero React re-renders)
    const moveDotX = gsap.quickTo(dot, 'x', { duration: 0.11, ease: 'power3.out' });
    const moveDotY = gsap.quickTo(dot, 'y', { duration: 0.11, ease: 'power3.out' });
    const moveRingX = gsap.quickTo(ring, 'x', { duration: 0.34, ease: 'power3.out' });
    const moveRingY = gsap.quickTo(ring, 'y', { duration: 0.34, ease: 'power3.out' });
    const moveLabelX = gsap.quickTo(label, 'x', { duration: 0.34, ease: 'power3.out' });
    const moveLabelY = gsap.quickTo(label, 'y', { duration: 0.34, ease: 'power3.out' });

    const applyModeVisuals = (mode: CursorMode, pressed: boolean) => {
      const pressFactor = pressed ? 0.86 : 1;
      root.dataset.cursorState = mode;

      if (mode === 'card') {
        gsap.to(ring, {
          scale: 2.35 * pressFactor,
          borderColor: '#2457D6',
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
          opacity: 1,
          duration: 0.26,
          ease: 'power2.out',
          overwrite: 'auto',
        });
        gsap.to(dot, {
          scale: 0.35,
          opacity: 0,
          duration: 0.18,
          ease: 'power2.out',
          overwrite: 'auto',
        });
        gsap.to(label, {
          opacity: 1,
          scale: 1 * pressFactor,
          duration: 0.2,
          ease: 'power2.out',
          overwrite: 'auto',
        });
        return;
      }

      gsap.to(label, {
        opacity: 0,
        scale: 0.8,
        duration: 0.14,
        ease: 'power2.out',
        overwrite: 'auto',
      });

      if (mode === 'interactive') {
        gsap.to(ring, {
          scale: 1.65 * pressFactor,
          borderColor: '#2457D6',
          backgroundColor: 'rgba(36, 87, 214, 0.08)',
          opacity: 1,
          duration: 0.22,
          ease: 'power2.out',
          overwrite: 'auto',
        });
        gsap.to(dot, {
          scale: 1.2 * pressFactor,
          backgroundColor: '#2457D6',
          opacity: 1,
          duration: 0.18,
          ease: 'power2.out',
          overwrite: 'auto',
        });
        return;
      }

      if (mode === 'text') {
        gsap.to(ring, {
          scale: 0.55 * pressFactor,
          borderColor: 'rgba(100, 116, 139, 0.45)',
          backgroundColor: 'rgba(255, 255, 255, 0)',
          opacity: 0.35,
          duration: 0.2,
          ease: 'power2.out',
          overwrite: 'auto',
        });
        gsap.to(dot, {
          scale: 0.65,
          backgroundColor: '#64748B',
          opacity: 0.35,
          duration: 0.18,
          ease: 'power2.out',
          overwrite: 'auto',
        });
        return;
      }

      // Default editorial cursor state
      gsap.to(ring, {
        scale: 1 * pressFactor,
        borderColor: 'rgba(11, 18, 32, 0.35)',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        opacity: 1,
        duration: 0.24,
        ease: 'power2.out',
        overwrite: 'auto',
      });
      gsap.to(dot, {
        scale: 1 * pressFactor,
        backgroundColor: '#0B1220',
        opacity: 1,
        duration: 0.18,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') {
        return;
      }

      if (!isVisible) {
        isVisible = true;
        gsap.set([dot, ring, label], { x: event.clientX, y: event.clientY });
        applyModeVisuals(currentMode, isPressed);
      } else {
        moveDotX(event.clientX);
        moveDotY(event.clientY);
        moveRingX(event.clientX);
        moveRingY(event.clientY);
        moveLabelX(event.clientX);
        moveLabelY(event.clientY);
      }

      const nextMode = resolveCursorState(event.target as CursorTargetLike | null);
      if (nextMode !== currentMode) {
        currentMode = nextMode;
        applyModeVisuals(currentMode, isPressed);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.pointerType === 'touch' || !isVisible) {
        return;
      }
      isPressed = true;
      applyModeVisuals(currentMode, true);
    };

    const handlePointerUp = () => {
      if (!isPressed) {
        return;
      }
      isPressed = false;
      if (isVisible) {
        applyModeVisuals(currentMode, false);
      }
    };

    const handlePointerLeave = () => {
      isVisible = false;
      isPressed = false;
      gsap.to([dot, ring, label], {
        opacity: 0,
        duration: 0.2,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerdown', handlePointerDown, { passive: true });
    window.addEventListener('pointerup', handlePointerUp, { passive: true });
    document.documentElement.addEventListener('mouseleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      document.documentElement.removeEventListener('mouseleave', handlePointerLeave);
      gsap.killTweensOf([dot, ring, label]);
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div
      ref={rootRef}
      data-testid="custom-cursor"
      data-cursor-state="default"
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
    >
      {/* Trailing architectural ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-7 h-7 rounded-full border border-[#0B1220]/35 will-change-transform"
      />

      {/* Native-resolution unscaled micro-label for card hover lens */}
      <span
        ref={labelRef}
        className="fixed top-0 left-0 font-mono text-[10px] font-semibold tracking-[0.14em] uppercase text-[#2457D6] select-none will-change-transform"
      >
        {lang === 'id' ? 'LIHAT' : 'VIEW'}
      </span>

      {/* Tight-tracking center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#0B1220] will-change-transform"
      />
    </div>
  );
}
