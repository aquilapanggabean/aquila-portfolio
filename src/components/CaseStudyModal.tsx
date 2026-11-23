import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import type { UiDictionary } from '../data/i18n';
import type { ProjectItem } from '../data/portfolio';
import { EditorialImage } from './EditorialImage';
import {
  SuperPlusBlueprintPlate,
  hasCustomVisualPlate,
} from './ProjectVisualPlate';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  ui: UiDictionary;
  onClose: () => void;
}

export function CaseStudyModal({ project, ui, onClose }: CaseStudyModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const [activeEscrowIndex, setActiveEscrowIndex] = useState(0);

  useEffect(() => {
    setActiveEscrowIndex(0);
  }, [project?.id]);

  useEffect(() => {
    if (!project) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  const escrowSteps = project.escrowStateMachine;
  const activeStep = escrowSteps?.[activeEscrowIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-modal-title"
    >
      <div
        className="fixed inset-0 bg-[#0B1220]/55 backdrop-blur-[2px] transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[900px] max-h-[90vh] flex flex-col overflow-hidden bg-white text-[#0B1220] border border-[#E2E8F0] rounded-[4px] shadow-[0_24px_60px_-20px_rgba(11,18,32,0.28)]">
        {/* Fixed Modal Header */}
        <div className="shrink-0 bg-white px-6 sm:px-8 py-5 border-b border-[#E8EDF3] flex items-start justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] sm:text-xs tracking-[0.06em] uppercase tabular-nums text-[#64748B]">
              <span className="text-[#2457D6] font-medium">{project.index}</span>
              <span aria-hidden="true" className="mx-2">/</span>
              <span>{ui.categoryLabels[project.category]}</span>
              <span aria-hidden="true" className="mx-2">·</span>
              <span>{project.year}</span>
            </p>
            <h2
              id="case-study-modal-title"
              className="mt-1 font-serif italic text-3xl sm:text-4xl font-normal tracking-[-0.015em] text-[#0B1220] leading-tight"
            >
              {project.title}
            </h2>
            <p className="mt-1 font-mono text-xs text-[#2457D6] font-medium">
              {project.recognition}
            </p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            aria-label={ui.modal.closeAria(project.title)}
            onClick={onClose}
            className="w-11 h-11 inline-flex items-center justify-center rounded-[4px] border border-[#E2E8F0] text-[#0B1220] hover:bg-[#F7F8FA] hover:border-[#0B1220] transition-colors shrink-0"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-7 space-y-8">
          <figure>
            <div className="aspect-[16/9] w-full rounded-[4px] border border-[#E8EDF3] overflow-hidden bg-[#F7F8FA]">
              {hasCustomVisualPlate(project.id) ? (
                <SuperPlusBlueprintPlate copy={ui.superPlusPlate} />
              ) : (
                <EditorialImage asset={project.media} className="w-full h-full" />
              )}
            </div>
            <figcaption className="mt-2.5 font-mono text-xs text-[#64748B]">
              {project.media.caption}
            </figcaption>
          </figure>

          {/* Problem & Contribution 2-column framing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#E8EDF3]">
            <div>
              <h3 className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#2457D6] font-medium mb-2.5">
                {ui.modal.problemHeading}
              </h3>
              <p className="text-[15px] leading-[1.7] text-[#0B1220]">
                {project.problem}
              </p>
            </div>
            <div>
              <h3 className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#2457D6] font-medium mb-2.5">
                {ui.modal.contributionHeading}
              </h3>
              <p className="text-[15px] leading-[1.7] text-[#475569]">
                {project.contribution}
              </p>
            </div>
          </div>

          {/* Interactive 4-Step Fund Custody State Machine (TiMu Flagship) */}
          {escrowSteps && activeStep && (
            <div className="pt-6 border-t border-[#E8EDF3]">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-5">
                <h3 className="font-serif italic text-2xl text-[#0B1220]">
                  {ui.modal.escrowHeading}
                </h3>
                <span className="font-mono text-xs text-[#64748B]">
                  {ui.modal.escrowHint}
                </span>
              </div>

              <div
                role="tablist"
                aria-label={ui.modal.escrowTabsAria}
                className="grid grid-cols-2 sm:grid-cols-4 border border-[#E2E8F0] rounded-[4px] overflow-hidden divide-y sm:divide-y-0 sm:divide-x divide-[#E2E8F0]"
              >
                {escrowSteps.map((step, index) => {
                  const isActive = index === activeEscrowIndex;
                  return (
                    <button
                      key={step.step}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveEscrowIndex(index)}
                      className={`p-4 text-left transition-colors duration-150 ${
                        isActive
                          ? 'bg-[#0B1220] text-white'
                          : 'bg-[#F7F8FA] text-[#0B1220] hover:bg-[#E8EDF3]/70'
                      }`}
                    >
                      <span
                        className={`block font-mono text-[11px] tracking-[0.06em] uppercase tabular-nums mb-1.5 ${
                          isActive ? 'text-[#94A3B8]' : 'text-[#2457D6]'
                        }`}
                      >
                        {ui.modal.stepPrefix} {step.step}
                      </span>
                      <span className="block text-sm font-semibold leading-snug">
                        {step.stateName}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div
                role="tabpanel"
                data-testid="escrow-state-detail"
                className="mt-4 p-5 bg-[#F7F8FA] border border-[#E8EDF3] rounded-[4px] space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-base font-bold text-[#0B1220]">
                    {activeStep.step}. {activeStep.stateName}
                  </h4>
                  <span className="font-mono text-xs text-[#475569]">
                    {ui.modal.primaryActor}: {activeStep.actor}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[#475569]">
                  {activeStep.summary}
                </p>
                <p className="pt-3 border-t border-[#E8EDF3] text-xs font-mono text-[#0B1220]">
                  {ui.modal.transitionGuard}: {activeStep.guardCondition}
                </p>
              </div>
            </div>
          )}

          {/* Metadata Ledger: Role, Technologies, Collaborators */}
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#E8EDF3]">
            <div>
              <dt className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#64748B] mb-1.5">
                {ui.modal.roleLabel}
              </dt>
              <dd className="text-sm font-semibold text-[#0B1220]">
                {project.role}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#64748B] mb-1.5">
                {ui.modal.methodsLabel}
              </dt>
              <dd className="text-sm text-[#0B1220] leading-relaxed">
                {project.technologies.join(' · ')}
              </dd>
            </div>
            {project.collaborators && project.collaborators.length > 0 && (
              <div className="sm:col-span-2 pt-4 border-t border-[#E8EDF3]">
                <dt className="font-mono text-[11px] tracking-[0.08em] uppercase text-[#64748B] mb-1.5">
                  {ui.modal.teamLabel}
                </dt>
                <dd className="text-sm font-medium text-[#0B1220]">
                  {project.collaborators.join(' · ')}
                </dd>
              </div>
            )}
          </dl>

          {/* Modal Footer Actions */}
          <div className="pt-6 border-t border-[#E8EDF3] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.repositoryUrl && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] inline-flex items-center gap-1.5 px-4.5 py-2.5 font-mono text-xs tracking-[0.08em] uppercase font-medium text-white bg-[#2457D6] hover:bg-[#315FC8] rounded-[4px] transition-colors"
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
                  className="min-h-[44px] inline-flex items-center gap-1.5 px-4 py-2.5 font-mono text-xs tracking-[0.06em] uppercase font-medium text-[#0B1220] border border-[#CBD5E1] hover:border-[#2457D6] hover:text-[#2457D6] rounded-[4px] transition-colors"
                >
                  <span>{ui.projectsOpenDemo}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="min-h-[44px] px-4 py-2.5 font-mono text-xs tracking-[0.06em] uppercase font-medium text-[#475569] hover:text-[#0B1220] border border-[#E2E8F0] hover:border-[#0B1220] rounded-[4px] transition-colors"
            >
              {ui.modal.closeButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
