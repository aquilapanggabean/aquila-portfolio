import { useEffect, useState } from 'react';
import { Camera, Maximize2, X } from 'lucide-react';
import {
  EXPERIENCE_KIND_LABELS,
  type Language,
  type LocalizedPortfolioBundle,
} from '../data/i18n';
import type { ExperienceItem, ExperiencePhotoItem } from '../data/portfolio';
import { EditorialImage } from './EditorialImage';

interface ExperienceSectionProps {
  bundle: LocalizedPortfolioBundle;
}

function LedgerRows({
  items,
  lang,
}: {
  items: readonly ExperienceItem[];
  lang: Language;
}) {
  return (
    <div className="border-t border-b border-[#E8EDF3] divide-y divide-[#E8EDF3]">
      {items.map((entry) => (
        <div
          key={entry.id}
          className="py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start"
        >
          <div className="lg:col-span-3">
            <p className="font-mono text-xs tabular-nums tracking-[0.04em] text-[#475569]">
              {entry.period}
            </p>
            <p className="mt-1.5 font-mono text-[11px] tracking-[0.06em] uppercase text-[#2457D6] font-medium">
              {EXPERIENCE_KIND_LABELS[lang][entry.kind]}
            </p>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-xl font-bold tracking-[-0.02em] text-[#0B1220] leading-snug">
              {entry.role}
            </h4>
            <p className="mt-1.5 text-sm font-medium text-[#475569]">
              {entry.organization}
            </p>
          </div>

          <ul className="lg:col-span-5 space-y-2.5 text-[15px] sm:text-base leading-[1.7] text-[#475569]">
            {entry.highlights.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2.5 w-2 h-px bg-[#94A3B8] shrink-0"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function ExperienceSection({ bundle }: ExperienceSectionProps) {
  const {
    lang,
    experienceLedger,
    experiencePhotos,
    educationLedger,
    ui,
  } = bundle;
  const [chapterIndex, chapterLabel] = ui.experienceTag.split(' / ');
  const [activePhoto, setActivePhoto] = useState<ExperiencePhotoItem | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const openPhotoLightbox = (item: ExperiencePhotoItem) => {
    setActivePhotoIndex(0);
    setActivePhoto(item);
  };

  useEffect(() => {
    if (!activePhoto) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActivePhoto(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activePhoto]);

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
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
          <p className="text-[#64748B]">{ui.experienceMetaRight}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-14 items-end reveal-block">
          <div className="lg:col-span-5">
            <h2
              id="experience-heading"
              className="font-serif italic text-[clamp(2.5rem,4.4vw,3.75rem)] font-normal tracking-[-0.018em] text-[#0B1220] leading-[1.02]"
            >
              {ui.experienceHeading}
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base sm:text-[17px] leading-[1.68] text-[#475569] max-w-[60ch]">
              {ui.experienceLead}
            </p>
          </div>
        </div>

        <div className="reveal-block">
          <h3 className="font-mono text-[11px] sm:text-xs tracking-[0.06em] uppercase text-[#64748B] mb-5">
            {ui.experienceSubWork}
          </h3>
          <LedgerRows items={experienceLedger} lang={lang} />
        </div>

        {/* Visual Field & Event Photo Documentation Section */}
        {experiencePhotos.length > 0 && (
          <div
            data-testid="experience-photo-gallery"
            className="mt-16 reveal-block"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <h3 className="font-mono text-[11px] sm:text-xs tracking-[0.06em] uppercase text-[#64748B]">
                {ui.experienceSubPhotos}
              </h3>
              <p className="font-mono text-[11px] sm:text-xs tracking-[0.06em] uppercase text-[#64748B] tabular-nums">
                {ui.experiencePhotosNote}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experiencePhotos.map((item) => (
                <figure
                  key={item.id}
                  data-testid={`experience-photo-${item.id}`}
                  className="bg-white border border-[#E8EDF3] rounded-[4px] overflow-hidden flex flex-col justify-between"
                >
                  {item.media ? (
                    <button
                      type="button"
                      onClick={() => openPhotoLightbox(item)}
                      aria-label={`${ui.experienceInspectPhoto}: ${item.title}`}
                      data-cursor="project"
                      className="group relative block w-full text-left bg-[#F7F8FA] p-2 border-b border-[#E8EDF3]"
                    >
                      <div className="overflow-hidden rounded-[2px]">
                        <EditorialImage
                          asset={item.media}
                          imgClassName="transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                      <span className="absolute top-4 right-4 inline-flex items-center justify-center w-8 h-8 rounded-[4px] bg-white/90 border border-[#E8EDF3] text-[#0B1220] group-hover:text-[#2457D6] transition-colors">
                        <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                    </button>
                  ) : (
                    /* Clean Architectural 4:3 Documentary Photo Plate ready for personal event photography */
                    <div className="aspect-[4/3] w-full bg-[#F7F8FA] border-b border-[#E8EDF3] p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden">
                      {/* Subtle Swiss registration corner ticks */}
                      <span
                        aria-hidden="true"
                        className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#CBD5E1]"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#CBD5E1]"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#CBD5E1]"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#CBD5E1]"
                      />

                      <div className="flex items-center justify-between font-mono text-[11px] tracking-[0.06em] uppercase tabular-nums text-[#64748B]">
                        <span className="text-[#2457D6] font-medium">
                          {item.index}
                        </span>
                        <span>{item.period}</span>
                      </div>

                      <div className="my-auto py-4 text-center flex flex-col items-center justify-center gap-2.5">
                        <span className="w-10 h-10 rounded-[4px] border border-[#D8E0EA] bg-white flex items-center justify-center text-[#64748B]">
                          <Camera className="w-4 h-4" aria-hidden="true" />
                        </span>
                        <p className="font-serif italic text-xl sm:text-2xl text-[#0B1220]">
                          {item.title}
                        </p>
                        <p className="font-mono text-[11px] tracking-[0.06em] uppercase text-[#64748B]">
                          {ui.experiencePhotoSlotLabel}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[#E8EDF3] font-mono text-[10px] tracking-[0.04em] text-[#64748B]">
                        <span className="uppercase">{item.location}</span>
                        <span>{item.slotPath}</span>
                      </div>
                    </div>
                  )}

                  <figcaption className="p-5 sm:p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-base sm:text-lg font-bold tracking-[-0.02em] text-[#0B1220]">
                        {item.title}
                      </h4>
                      <span className="font-mono text-[11px] tabular-nums text-[#64748B]">
                        {item.period}
                        {item.gallery && item.gallery.length > 1
                          ? ` · ${ui.experiencePhotoCount(item.gallery.length)}`
                          : ''}
                      </span>
                    </div>
                    <p className="mt-1 font-mono text-[11px] tracking-[0.05em] uppercase text-[#2457D6]">
                      {item.role} · {item.organization}
                    </p>
                    <p className="mt-2.5 text-sm leading-[1.68] text-[#475569]">
                      {item.caption}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        <div className="mt-16 reveal-block">
          <h3 className="font-mono text-[11px] sm:text-xs tracking-[0.06em] uppercase text-[#64748B] mb-5">
            {ui.experienceSubEducation}
          </h3>
          <LedgerRows items={educationLedger} lang={lang} />
        </div>
      </div>

      {/* Lightbox when user clicks an Experience photo card */}
      {activePhoto && activePhoto.media && (() => {
        const gallery =
          activePhoto.gallery && activePhoto.gallery.length > 0
            ? activePhoto.gallery
            : [activePhoto.media];
        const currentAsset = gallery[activePhotoIndex] ?? activePhoto.media;
        return (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="exp-photo-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1220]/75 backdrop-blur-[2px] p-4 sm:p-6"
            onClick={() => setActivePhoto(null)}
          >
            <div
              className="w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white border border-[#E8EDF3] rounded-[4px] shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 px-6 py-4 border-b border-[#E8EDF3]">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.06em] uppercase text-[#2457D6] font-medium">
                    {activePhoto.index} · {activePhoto.period}
                  </p>
                  <h3
                    id="exp-photo-modal-title"
                    className="mt-1 text-lg sm:text-xl font-bold tracking-[-0.02em] text-[#0B1220]"
                  >
                    {activePhoto.title} · {activePhoto.role}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActivePhoto(null)}
                  aria-label={ui.modal.closeButton}
                  className="min-w-[40px] min-h-[40px] inline-flex items-center justify-center rounded-[4px] border border-[#E8EDF3] text-[#475569] hover:text-[#0B1220] hover:border-[#0B1220] transition-colors shrink-0"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
              <div className="p-4 sm:p-6 bg-[#F7F8FA]">
                <EditorialImage asset={currentAsset} priority />
              </div>
              <div className="px-6 py-4 border-t border-[#E8EDF3] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p className="text-sm text-[#475569]">{currentAsset.caption}</p>
                {gallery.length > 1 && (
                  <div
                    role="tablist"
                    aria-label={`${activePhoto.title} photos`}
                    className="flex items-center gap-2 shrink-0"
                  >
                    {gallery.map((photo, idx) => {
                      const isSelected = idx === activePhotoIndex;
                      return (
                        <button
                          key={photo.src}
                          type="button"
                          role="tab"
                          aria-selected={isSelected}
                          onClick={() => setActivePhotoIndex(idx)}
                          className={`min-h-[34px] px-3 py-1 font-mono text-[11px] tracking-[0.06em] uppercase tabular-nums rounded-[4px] border transition-colors ${
                            isSelected
                              ? 'bg-[#0B1220] border-[#0B1220] text-white'
                              : 'bg-white border-[#D8E0EA] text-[#475569] hover:border-[#2457D6] hover:text-[#2457D6]'
                          }`}
                        >
                          0{idx + 1}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
}
