import { useEffect, useState } from 'react';
import { ArrowUpRight, Maximize2, X } from 'lucide-react';
import {
  ACHIEVEMENT_CATEGORY_LABELS,
  type LocalizedPortfolioBundle,
} from '../data/i18n';
import type { CertificateItem } from '../data/portfolio';
import { EditorialImage } from './EditorialImage';

interface AchievementsSectionProps {
  bundle: LocalizedPortfolioBundle;
}

function isSafeExternalUrl(url: string | undefined): boolean {
  if (!url) {
    return false;
  }
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

export function AchievementsSection({ bundle }: AchievementsSectionProps) {
  const { lang, achievements, certificates, ui } = bundle;
  const [chapterIndex, chapterLabel] = ui.achievementsTag.split(' / ');
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);

  useEffect(() => {
    if (!activeCert) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveCert(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeCert]);

  if (achievements.length === 0 && certificates.length === 0) {
    return null;
  }

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
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
          <p className="text-[#64748B]">
            {ui.achievementsMetaRight(achievements.length, certificates.length)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-14 items-end reveal-block">
          <div className="lg:col-span-5">
            <h2
              id="achievements-heading"
              className="font-serif italic text-[clamp(2.5rem,4.4vw,3.75rem)] font-normal tracking-[-0.018em] text-[#0B1220] leading-[1.02]"
            >
              {ui.achievementsHeading}
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base sm:text-[17px] leading-[1.68] text-[#475569] max-w-[60ch]">
              {ui.achievementsLead}
            </p>
          </div>
        </div>

        {/* Honors Cards */}
        {achievements.length > 0 && (
          <div
            className={`grid grid-cols-1 ${
              achievements.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'
            } gap-6 reveal-block`}
          >
            {achievements.map((item, idx) => {
              const hasProof = isSafeExternalUrl(item.proofUrl);

              return (
                <article
                  key={item.id}
                  data-testid={`achievement-card-${item.id}`}
                  className="bg-white border border-[#E8EDF3] rounded-[4px] p-7 sm:p-8 flex flex-col justify-between gap-6"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-[#E8EDF3] font-mono text-[11px] sm:text-xs tracking-[0.06em] uppercase tabular-nums">
                      <span className="text-[#2457D6] font-medium">
                        {String(idx + 1).padStart(2, '0')} /{' '}
                        {ACHIEVEMENT_CATEGORY_LABELS[lang][item.category]}
                      </span>
                      <span className="text-[#64748B]">{item.year}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] text-[#0B1220] leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 font-mono text-xs text-[#64748B]">
                      {item.issuer}
                    </p>
                    <p className="mt-4 text-[15px] sm:text-base leading-[1.7] text-[#475569]">
                      {item.summary}
                    </p>
                  </div>

                  {hasProof && (
                    <div className="pt-4 border-t border-[#E8EDF3]">
                      <a
                        href={item.proofUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.06em] uppercase font-medium text-[#2457D6] hover:text-[#315FC8] transition-colors"
                      >
                        <span>{ui.achievementsVerifyLabel}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}

        {/* Official Certificate Photo Gallery (EPrT & ECCT) */}
        {certificates.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#E8EDF3] reveal-block">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-7">
              <h3 className="font-mono text-[11px] sm:text-xs tracking-[0.06em] uppercase text-[#64748B]">
                {ui.achievementsSubCertifications}
              </h3>
              <p className="font-mono text-[11px] sm:text-xs tracking-[0.06em] uppercase text-[#64748B] tabular-nums">
                TELKOM UNIVERSITY LANGUAGE CENTER
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {certificates.map((cert) => (
                <article
                  key={cert.id}
                  data-testid={`certificate-card-${cert.id}`}
                  className="bg-white border border-[#E8EDF3] rounded-[4px] overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Clickable 4:3 Certificate Photo Preview */}
                    <button
                      type="button"
                      onClick={() => setActiveCert(cert)}
                      aria-label={`${ui.achievementsInspectCert}: ${cert.title}`}
                      data-cursor="project"
                      className="group relative block w-full text-left bg-[#F7F8FA] p-4 sm:p-5 border-b border-[#E8EDF3] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2457D6]"
                    >
                      <div className="overflow-hidden rounded-[2px] border border-[#E2E8F0] bg-white">
                        <EditorialImage
                          asset={cert.media}
                          imgClassName="object-contain bg-white transition-transform duration-300 group-hover:scale-[1.015]"
                        />
                      </div>
                      <span className="mt-3 flex items-center justify-between font-mono text-[11px] tracking-[0.06em] uppercase text-[#64748B] group-hover:text-[#2457D6] transition-colors">
                        <span>
                          {cert.index} / {cert.code}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <span>{ui.achievementsInspectCert}</span>
                          <Maximize2 className="w-3 h-3" aria-hidden="true" />
                        </span>
                      </span>
                    </button>

                    {/* Certificate Metadata & Score Breakdown */}
                    <div className="p-6 sm:p-7">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b border-[#E8EDF3]">
                        <div>
                          <h4 className="text-lg sm:text-xl font-bold tracking-[-0.02em] text-[#0B1220] leading-snug">
                            {cert.title}
                          </h4>
                          <p className="mt-1 font-mono text-xs text-[#64748B]">
                            {cert.issuer}
                            {cert.certificateNumber ? ` · ${cert.certificateNumber}` : ''}
                          </p>
                        </div>
                        <div className="text-left sm:text-right font-mono tabular-nums">
                          <p className="text-sm font-semibold text-[#2457D6]">
                            {cert.scoreLabel}
                          </p>
                          <p className="text-[11px] uppercase tracking-[0.05em] text-[#475569]">
                            {cert.levelLabel}
                          </p>
                        </div>
                      </div>

                      <dl className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3">
                        {cert.breakdown.map((entry) => (
                          <div
                            key={entry.label}
                            className="border-l border-[#E8EDF3] pl-3"
                          >
                            <dt className="font-mono text-[10px] tracking-[0.06em] uppercase text-[#64748B]">
                              {entry.label}
                            </dt>
                            <dd className="mt-0.5 font-mono text-sm font-semibold tabular-nums text-[#0B1220]">
                              {entry.score}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>

                  <div className="px-6 sm:px-7 py-4 border-t border-[#E8EDF3] bg-[#FAFBFD] flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] tracking-[0.05em] uppercase tabular-nums">
                    <span className="text-[#64748B]">
                      {cert.issuedDate} · {ui.achievementsValidUntil} {cert.validUntil}
                    </span>
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#2457D6] hover:text-[#315FC8] font-medium transition-colors"
                    >
                      <span>{ui.achievementsOpenPdf}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Accessible Certificate Lightbox Modal */}
      {activeCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1220]/75 backdrop-blur-[2px] p-4 sm:p-6"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white border border-[#E8EDF3] rounded-[4px] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 px-6 py-4 border-b border-[#E8EDF3]">
              <div>
                <p className="font-mono text-[11px] tracking-[0.06em] uppercase text-[#2457D6] font-medium">
                  {activeCert.code} · {activeCert.scoreLabel} ({activeCert.levelLabel})
                </p>
                <h3
                  id="certificate-modal-title"
                  className="mt-1 text-lg sm:text-xl font-bold tracking-[-0.02em] text-[#0B1220]"
                >
                  {activeCert.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                aria-label={ui.achievementsClosePreview}
                className="min-w-[40px] min-h-[40px] inline-flex items-center justify-center rounded-[4px] border border-[#E8EDF3] text-[#475569] hover:text-[#0B1220] hover:border-[#0B1220] transition-colors shrink-0"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="p-4 sm:p-6 bg-[#F7F8FA]">
              <div className="border border-[#E2E8F0] rounded-[2px] bg-white overflow-hidden">
                <EditorialImage
                  asset={activeCert.media}
                  priority
                  imgClassName="object-contain bg-white"
                />
              </div>
            </div>

            <div className="px-6 py-4 border-t border-[#E8EDF3] flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
              <span className="text-[#64748B]">
                {activeCert.issuer} · {activeCert.issuedDate}
              </span>
              <a
                href={activeCert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#2457D6] hover:text-[#315FC8] font-medium uppercase tracking-[0.06em]"
              >
                <span>{ui.achievementsOpenPdf}</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
