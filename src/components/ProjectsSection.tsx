import { useMemo, useState } from 'react';
import { ArrowUpRight, Search, X } from 'lucide-react';
import type { LocalizedPortfolioBundle } from '../data/i18n';
import {
  PROJECT_CATEGORIES,
  type ProjectCategory,
  type ProjectItem,
} from '../data/portfolio';
import { filterProjects } from '../utils/portfolio';
import { EditorialImage } from './EditorialImage';

interface ProjectsSectionProps {
  bundle: LocalizedPortfolioBundle;
  onSelectProject: (project: ProjectItem, triggerEl: HTMLButtonElement | null) => void;
}

export function ProjectsSection({
  bundle,
  onSelectProject,
}: ProjectsSectionProps) {
  const { projects, ui } = bundle;
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const visibleProjects = useMemo(
    () => filterProjects(projects, selectedCategory, searchQuery),
    [projects, selectedCategory, searchQuery]
  );

  const resetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  const [chapterIndex, chapterLabel] = ui.projectsTag.split(' / ');

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-white text-[#0B1220] py-24 lg:py-32 border-b border-[#E8EDF3]"
    >
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Homepage-Matched Technical Metadata Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-14 border-b border-[#E8EDF3] font-mono text-[11px] sm:text-xs tracking-[0.06em] uppercase tabular-nums reveal-block">
          <p className="flex items-center gap-2 text-[#0B1220] font-medium">
            <span className="text-[#2457D6]">{chapterIndex}</span>
            <span aria-hidden="true" className="text-[#CBD5E1]">
              /
            </span>
            <span>{chapterLabel}</span>
          </p>
          <p className="text-[#64748B]">{ui.projectsMetaRight}</p>
        </div>

        {/* Section Header + Search Toolbar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-[#E8EDF3] reveal-block">
          <div className="max-w-[54ch]">
            <h2
              id="projects-heading"
              className="font-serif italic text-[clamp(2.5rem,4.4vw,3.75rem)] font-normal tracking-[-0.018em] text-[#0B1220] leading-[1.02]"
            >
              {ui.projectsHeading}
            </h2>
            <p className="mt-4 text-base sm:text-[17px] leading-[1.68] text-[#475569]">
              {ui.projectsLead}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <label htmlFor="project-search" className="sr-only">
                {ui.projectsSearchLabel}
              </label>
              <Search
                className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="project-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder={ui.projectsSearchPlaceholder}
                className="w-full min-h-[44px] pl-10 pr-9 py-2 font-mono text-xs text-[#0B1220] placeholder:text-[#64748B] bg-[#F7F8FA] border border-[#D8E0EA] rounded-[4px] focus:bg-white focus:border-[#2457D6] transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  aria-label={ui.projectsSearchClear}
                  onClick={() => setSearchQuery('')}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 inline-flex items-center justify-center text-[#475569] hover:text-[#0B1220]"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Tabs + Tabular Count Row */}
        <div className="py-5 flex flex-wrap items-center justify-between gap-4 border-b border-[#E8EDF3]">
          <div
            role="tablist"
            aria-label={ui.projectsFilterAria}
            className="flex flex-wrap items-center gap-2"
          >
            {PROJECT_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`min-h-[38px] px-3.5 py-1.5 font-mono text-xs tracking-[0.06em] uppercase font-medium rounded-[4px] border transition-colors duration-150 whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-[#0B1220] border-[#0B1220] text-white'
                      : 'bg-white border-[#E2E8F0] text-[#475569] hover:text-[#0B1220] hover:border-[#94A3B8]'
                  }`}
                >
                  {ui.categoryLabels[category]}
                </button>
              );
            })}
          </div>

          <p
            aria-live="polite"
            className="font-mono text-xs tracking-[0.04em] uppercase tabular-nums text-[#64748B]"
          >
            {ui.projectsCount(visibleProjects.length, projects.length)}
          </p>
        </div>

        {/* Alternating Asymmetric Case-Study Bands or Honest Empty State */}
        {visibleProjects.length === 0 ? (
          <div
            data-testid="projects-empty-state"
            className="py-16 px-6 my-8 bg-[#F7F8FA] border border-[#E8EDF3] rounded-[4px] text-center"
          >
            <h3 className="font-serif italic text-2xl text-[#0B1220]">
              {ui.projectsEmptyTitle}
            </h3>
            <p className="mt-2 text-sm text-[#475569] max-w-[46ch] mx-auto">
              {ui.projectsEmptyBody(
                searchQuery || ui.categoryLabels[selectedCategory]
              )}
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 min-h-[44px] inline-flex items-center justify-center px-5 py-2.5 font-mono text-xs tracking-[0.08em] uppercase font-medium text-white bg-[#2457D6] hover:bg-[#315FC8] rounded-[4px] transition-colors"
            >
              {ui.projectsResetFilters}
            </button>
          </div>
        ) : (
          <div className="divide-y divide-[#E8EDF3]">
            {visibleProjects.map((project, rowIndex) => {
              const mediaFirst = rowIndex % 2 === 0;
              return (
                <article
                  key={project.id}
                  data-testid={`project-row-${project.id}`}
                  className="py-14 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center reveal-block"
                >
                  {/* Visual Preview Column (7 cols) */}
                  <div
                    className={`lg:col-span-7 ${
                      mediaFirst ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <button
                      type="button"
                      data-cursor="card"
                      aria-label={ui.projectsInspectAria(project.title)}
                      onClick={(event) => onSelectProject(project, event.currentTarget)}
                      className="group block w-full text-left border border-[#E2E8F0] hover:border-[#94A3B8] rounded-[4px] overflow-hidden bg-[#F7F8FA] p-1.5 transition-colors duration-200 focus-visible:outline-offset-4"
                    >
                      <div className="aspect-[16/9] w-full rounded-[2px] overflow-hidden">
                        <EditorialImage
                          asset={project.media}
                          className="w-full h-full"
                          imgClassName="transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                        />
                      </div>
                    </button>
                  </div>

                  {/* Case Study Copy Column (5 cols) */}
                  <div
                    className={`lg:col-span-5 ${
                      mediaFirst ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[11px] sm:text-xs tracking-[0.06em] uppercase tabular-nums text-[#64748B] mb-3">
                      <span className="text-[#2457D6] font-medium">
                        {project.index}
                      </span>
                      <span aria-hidden="true">/</span>
                      <span>{ui.categoryLabels[project.category]}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-2xl sm:text-[30px] font-bold tracking-[-0.025em] text-[#0B1220] leading-tight">
                      {project.title}
                    </h3>

                    <p className="mt-1.5 font-mono text-xs tracking-[0.04em] text-[#2457D6] font-medium">
                      {project.recognition}
                    </p>

                    <p className="mt-4 text-[15px] leading-[1.7] text-[#475569]">
                      {project.overview}
                    </p>

                    <div className="mt-5 pt-4 border-t border-[#E8EDF3] space-y-2 text-xs text-[#475569]">
                      <p>
                        <span className="font-mono uppercase tracking-[0.06em] text-[#0B1220] font-medium">
                          {ui.projectsRoleLabel}:
                        </span>{' '}
                        {project.role}
                      </p>
                      <p className="leading-relaxed">
                        <span className="font-mono uppercase tracking-[0.06em] text-[#0B1220] font-medium">
                          {ui.projectsStackLabel}:
                        </span>{' '}
                        {project.technologies.join(' · ')}
                      </p>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={(event) => onSelectProject(project, event.currentTarget)}
                        className="min-h-[44px] inline-flex items-center justify-center px-4.5 py-2.5 font-mono text-xs tracking-[0.08em] uppercase font-medium text-white bg-[#2457D6] hover:bg-[#315FC8] rounded-[4px] transition-colors duration-150 whitespace-nowrap shrink-0"
                      >
                        {ui.projectsReadCaseStudy}
                      </button>

                      {project.repositoryUrl && (
                        <a
                          href={project.repositoryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2.5 font-mono text-xs tracking-[0.06em] uppercase font-medium text-[#0B1220] bg-white border border-[#CBD5E1] hover:border-[#2457D6] hover:text-[#2457D6] rounded-[4px] transition-colors duration-150 whitespace-nowrap shrink-0"
                        >
                          <span>{ui.projectsViewSource}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      )}

                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2.5 font-mono text-xs tracking-[0.06em] uppercase font-medium text-[#2457D6] bg-white border border-[#CBD5E1] hover:border-[#2457D6] hover:text-[#315FC8] rounded-[4px] transition-colors whitespace-nowrap shrink-0"
                        >
                          <span>{ui.projectsOpenDemo}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      )}

                      {project.pitchDeckUrl && (
                        <a
                          href={project.pitchDeckUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2.5 font-mono text-xs tracking-[0.06em] uppercase font-medium text-[#0B1220] bg-white border border-[#CBD5E1] hover:border-[#2457D6] hover:text-[#2457D6] rounded-[4px] transition-colors duration-150 whitespace-nowrap shrink-0"
                        >
                          <span>{ui.projectsViewPitchDeck}</span>
                          <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
