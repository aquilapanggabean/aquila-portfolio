import { useCallback, useRef, useState } from 'react';
import { ArrowDown, Check, Mail } from 'lucide-react';
import type { LocalizedPortfolioBundle } from '../data/i18n';
import { InteractiveCursorCanvas } from './InteractiveCursorCanvas';

interface HeroSectionProps {
  bundle: LocalizedPortfolioBundle;
}

export function HeroSection({ bundle }: HeroSectionProps) {
  const { profile, ui } = bundle;
  const heroRef = useRef<HTMLElement | null>(null);
  const firstNameRef = useRef<HTMLSpanElement | null>(null);
  const lastNameRef = useRef<HTMLSpanElement | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handlePointerOffset = useCallback((normX: number, normY: number) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    if (firstNameRef.current) {
      firstNameRef.current.style.transform = `translate3d(${(normX * 5).toFixed(1)}px, ${(normY * 3).toFixed(1)}px, 0)`;
    }
    if (lastNameRef.current) {
      lastNameRef.current.style.transform = `translate3d(${(-normX * 6).toFixed(1)}px, ${(normY * 4).toFixed(1)}px, 0)`;
    }
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = profile.email;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedEmail(true);
    }

    window.setTimeout(() => {
      setCopiedEmail(false);
    }, 2800);
  };

  return (
    <section
      ref={heroRef}
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-x-clip bg-white text-[#0B1220] min-h-[min(100svh,820px)] pt-22 pb-8 lg:pt-24 lg:pb-11 flex flex-col justify-between border-b border-[#E8EDF3]"
    >
      {/* Interactive Cursor-Reactive Particle & Contour Field */}
      <InteractiveCursorCanvas
        hostRef={heroRef}
        onPointerOffset={handlePointerOffset}
      />

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-6 lg:px-10 flex-1 flex flex-col justify-between gap-6 lg:gap-8">
        {/* Top Technical Metadata Strip */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2.5 pt-2 font-mono text-[11px] sm:text-xs tracking-[0.06em] uppercase tabular-nums">
          <p className="flex flex-wrap items-center gap-2 text-[#475569]">
            <span
              aria-hidden="true"
              className="w-2 h-2 rounded-full bg-[#059669] shrink-0"
            />
            <span className="text-[#0B1220] font-medium">
              {profile.statusInstitution}
            </span>
            <span aria-hidden="true" className="text-[#CBD5E1]">
              /
            </span>
            <span className="text-[#64748B]">{profile.statusFaculty}</span>
          </p>

          <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[#475569]">
            <span>{profile.coordinates}</span>
            <span aria-hidden="true" className="text-[#CBD5E1]">
              ·
            </span>
            <span className="text-[#B45309] font-medium">
              {profile.badgeAdikara}
            </span>
            <span aria-hidden="true" className="text-[#CBD5E1]">
              ·
            </span>
            <span className="text-[#047857] font-medium">
              {profile.badgeMotionHack}
            </span>
          </p>
        </div>

        {/* Mid Asymmetric Positioning & Action Bar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end my-auto py-2 lg:py-5">
          <div className="lg:col-span-6 space-y-3.5">
            <p className="text-base sm:text-[17px] leading-[1.68] text-[#1E293B] max-w-[46ch]">
              {profile.positioning}
            </p>
            <p className="font-mono text-xs text-[#64748B]">
              {profile.scrollHint}
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-wrap items-center lg:justify-end gap-3">
            <a
              href="#projects"
              className="min-h-[46px] inline-flex items-center gap-3 px-5 py-2.5 font-mono text-xs font-medium tracking-[0.08em] uppercase text-white bg-[#2457D6] hover:bg-[#315FC8] border border-[#2457D6] hover:border-[#315FC8] rounded-[4px] transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              <span>{ui.heroViewProjects}</span>
              <ArrowDown className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              aria-label={`${ui.heroCopyEmailAria} ${profile.email}`}
              className="min-h-[46px] inline-flex items-center gap-2.5 px-5 py-2.5 font-mono text-xs text-[#0B1220] hover:text-[#2457D6] bg-white/90 hover:bg-[#F7F8FA] border border-[#CBD5E1] hover:border-[#2457D6] rounded-[4px] transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#059669]" aria-hidden="true" />
                  <span>{ui.heroEmailCopied}</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5 text-[#475569]" aria-hidden="true" />
                  <span>{profile.email}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Monumental Editorial Nameplate: container-query scaled so PANGGABEAN stays 100% intact */}
        <div className="@container pt-6 lg:pt-7 pb-1 border-t border-[#E8EDF3]">
          <h1 id="hero-heading" className="select-none">
            <span
              ref={firstNameRef}
              className="block font-serif italic font-normal text-[#0B1220] text-[clamp(2.25rem,7.2cqw,5.75rem)] leading-[1.04] tracking-[-0.015em] transition-transform duration-150 ease-out will-change-transform"
            >
              {profile.headlineFirst}
            </span>
            <span
              ref={lastNameRef}
              className="block mt-1 font-display font-extrabold uppercase text-[#0B1220] text-[clamp(1.35rem,7.45cqw,5.85rem)] leading-[0.96] tracking-[-0.03em] whitespace-nowrap transition-transform duration-150 ease-out will-change-transform"
            >
              {profile.headlineLast}
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
