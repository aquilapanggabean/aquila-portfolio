import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import type { Language, LocalizedPortfolioBundle } from '../data/i18n';

interface NavbarProps {
  bundle: LocalizedPortfolioBundle;
  language: Language;
  onChangeLanguage: (lang: Language) => void;
  activeSection: string;
  isOverHero: boolean;
  scrollProgress: number;
}

export function Navbar({
  bundle,
  language,
  onChangeLanguage,
  activeSection,
  isOverHero,
  scrollProgress,
}: NavbarProps) {
  const { profile, navItems, ui } = bundle;
  const [mobileOpen, setMobileOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        requestAnimationFrame(() => triggerRef.current?.focus());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  const handleMobileNavClick = (href: string) => {
    setMobileOpen(false);
    const targetId = href.replace('#', '');
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderLanguageToggle = (compact = false) => (
    <div
      role="group"
      aria-label={ui.langGroupLabel}
      className={`inline-flex items-center border border-[#D8E0EA] rounded-[4px] bg-[#F7F8FA] p-0.5 font-mono text-[11px] tracking-[0.08em] uppercase ${
        compact ? 'shrink-0' : ''
      }`}
    >
      {(['en', 'id'] as const).map((code) => {
        const isSelected = language === code;
        return (
          <button
            key={code}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onChangeLanguage(code)}
            className={`px-2.5 py-1.5 rounded-[3px] font-medium transition-colors duration-150 ${
              isSelected
                ? 'bg-[#0B1220] text-white'
                : 'text-[#475569] hover:text-[#0B1220]'
            }`}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 border-b border-[#E8EDF3] text-[#0B1220] ${
          isOverHero
            ? 'bg-white/88 backdrop-blur-md'
            : 'bg-white/95 backdrop-blur-md'
        }`}
      >
        <div
          aria-hidden="true"
          className="absolute top-0 left-0 h-[2px] bg-[#2457D6] transition-transform duration-150 origin-left will-change-transform"
          style={{
            width: '100%',
            transform: `scaleX(${Math.max(0, Math.min(1, scrollProgress))})`,
          }}
        />

        <div className="max-w-[1320px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between gap-4 lg:gap-8">
          {/* Zone 1: Italic serif wordmark */}
          <a
            href="#top"
            className="font-serif italic text-[22px] font-semibold tracking-tight whitespace-nowrap shrink-0 text-[#0B1220] hover:text-[#2457D6] transition-colors duration-150"
          >
            {profile.shortBrand}
          </a>

          {/* Zone 2: 5 concise single-line navigation links */}
          <nav
            aria-label={ui.navAriaLabel}
            className="hidden md:flex items-center gap-6 lg:gap-7"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative py-1 font-mono text-xs tracking-[0.12em] uppercase font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                    isActive
                      ? 'text-[#2457D6]'
                      : 'text-[#475569] hover:text-[#0B1220]'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 right-0 -bottom-[2px] h-[2px] bg-[#2457D6] transition-transform duration-150 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Zone 3: EN/ID switcher + primary action (desktop) & mobile menu trigger */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {renderLanguageToggle(true)}

            <a
              href="#contact"
              className="hidden lg:inline-flex items-center justify-center gap-1.5 px-4 py-2 font-mono text-xs font-medium tracking-[0.08em] uppercase rounded-[4px] text-white bg-[#0B1220] hover:bg-[#2457D6] transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              <span>{ui.navCta}</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            <button
              ref={triggerRef}
              type="button"
              aria-label={ui.navMobileOpen}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
              onClick={() => setMobileOpen(true)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-[4px] text-[#0B1220] hover:bg-[#F7F8FA] transition-colors duration-150"
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={ui.navMobileDialog}
          id="mobile-navigation-drawer"
        >
          <div
            className="fixed inset-0 bg-[#0B1220]/45 backdrop-blur-[2px] transition-opacity"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-[320px] bg-white text-[#0B1220] border-l border-[#E8EDF3] flex flex-col justify-between p-6">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#E8EDF3]">
                <span className="font-serif italic text-xl font-semibold tracking-tight text-[#0B1220]">
                  {profile.shortBrand}
                </span>
                <button
                  ref={closeButtonRef}
                  type="button"
                  aria-label={ui.navMobileClose}
                  onClick={closeMobileMenu}
                  className="inline-flex items-center justify-center w-11 h-11 rounded-[4px] text-[#475569] hover:text-[#0B1220] hover:bg-[#F7F8FA] transition-colors"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>

              <div className="pt-5 flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#64748B]">
                  {ui.langGroupLabel}
                </span>
                {renderLanguageToggle()}
              </div>

              <nav aria-label={ui.navMobileDialog} className="mt-4 flex flex-col">
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(event) => {
                        event.preventDefault();
                        handleMobileNavClick(item.href);
                      }}
                      className={`min-h-[48px] flex items-center justify-between py-3 border-b border-[#E8EDF3] font-mono text-xs tracking-[0.1em] uppercase font-medium transition-colors ${
                        isActive ? 'text-[#2457D6]' : 'text-[#334155] hover:text-[#0B1220]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span
                        className={`font-mono text-xs tabular-nums ${
                          isActive ? 'text-[#2457D6]' : 'text-[#64748B]'
                        }`}
                      >
                        0{idx + 1}
                      </span>
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-[#E8EDF3] space-y-3">
              <a
                href={`mailto:${profile.email}`}
                onClick={() => setMobileOpen(false)}
                className="w-full min-h-[44px] inline-flex items-center justify-center px-4 py-2.5 font-mono text-xs tracking-[0.08em] uppercase font-medium text-white bg-[#2457D6] hover:bg-[#315FC8] rounded-[4px] transition-colors"
              >
                {ui.navMobileSendEmail}
              </a>
              <p className="font-mono text-xs text-[#64748B] truncate">
                {profile.email}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
