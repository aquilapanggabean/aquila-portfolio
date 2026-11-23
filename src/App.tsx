import { useEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getPortfolioBundle, type Language } from './data/i18n';
import type { ProjectItem } from './data/portfolio';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ContactFooterSection } from './components/ContactFooterSection';
import { CaseStudyModal } from './components/CaseStudyModal';

gsap.registerPlugin(ScrollTrigger);

const LANG_STORAGE_KEY = 'aquila_portfolio_lang';

function readInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en';
  }
  try {
    const stored = window.localStorage.getItem(LANG_STORAGE_KEY);
    if (stored === 'id' || stored === 'en') {
      return stored;
    }
  } catch {
    // Ignore storage access errors in sandboxed iframes
  }
  return 'en';
}

export default function App() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  const [language, setLanguage] = useState<Language>(readInitialLanguage);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isOverHero, setIsOverHero] = useState<boolean>(true);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const bundle = useMemo(() => getPortfolioBundle(language), [language]);

  const selectedProject = useMemo(
    () =>
      selectedProjectId
        ? bundle.projects.find((item) => item.id === selectedProjectId) ?? null
        : null,
    [bundle.projects, selectedProjectId]
  );

  // Sync document language attribute & persist user choice
  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, language);
    } catch {
      // Ignore storage access errors
    }
  }, [language]);

  // Purposeful one-shot GSAP ScrollTrigger choreography (MOTION 2, zero infinite loops)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion || !containerRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const blocks = gsap.utils.toArray<HTMLElement>('.reveal-block');
      blocks.forEach((block) => {
        gsap.fromTo(
          block,
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            ease: 'power2.out',
            clearProps: 'transform,opacity',
            scrollTrigger: {
              trigger: block,
              start: 'top 90%',
              once: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Scroll progress bar, header polarity switch, and scroll-spy active section
  useEffect(() => {
    const sectionIds = [
      'about',
      'projects',
      'achievements',
      'experience',
      'capabilities',
      'contact',
    ];

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollY / docHeight : 0);

      const heroEl = document.getElementById('top');
      if (heroEl) {
        const heroBottom = heroEl.offsetTop + heroEl.offsetHeight - 72;
        setIsOverHero(scrollY < heroBottom);
      }

      const probeY = scrollY + 140;
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probeY) {
          current = id;
        }
      }
      if (
        window.innerHeight + scrollY >=
        document.documentElement.scrollHeight - 40
      ) {
        current = 'contact';
      }
      setActiveSection(current);
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, []);

  const handleOpenProject = (
    project: ProjectItem,
    triggerEl: HTMLButtonElement | null
  ) => {
    lastTriggerRef.current = triggerEl;
    setSelectedProjectId(project.id);
  };

  const handleCloseProject = () => {
    setSelectedProjectId(null);
    requestAnimationFrame(() => {
      lastTriggerRef.current?.focus();
    });
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-[#0B1220]">
      <CustomCursor lang={language} />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#2457D6] focus:text-white focus:text-sm focus:font-medium focus:rounded-[4px]"
      >
        {bundle.ui.skipToContent}
      </a>

      <Navbar
        bundle={bundle}
        language={language}
        onChangeLanguage={setLanguage}
        activeSection={activeSection}
        isOverHero={isOverHero}
        scrollProgress={scrollProgress}
      />

      <main id="main-content">
        <HeroSection bundle={bundle} />
        <AboutSection bundle={bundle} />
        <ProjectsSection bundle={bundle} onSelectProject={handleOpenProject} />
        <AchievementsSection bundle={bundle} />
        <ExperienceSection bundle={bundle} />
        <CapabilitiesSection bundle={bundle} />
      </main>

      <ContactFooterSection bundle={bundle} />

      <CaseStudyModal
        project={selectedProject}
        ui={bundle.ui}
        onClose={handleCloseProject}
      />
    </div>
  );
}
