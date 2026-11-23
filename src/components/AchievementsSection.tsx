import { ArrowUpRight } from 'lucide-react';
import {
  ACHIEVEMENT_CATEGORY_LABELS,
  type LocalizedPortfolioBundle,
} from '../data/i18n';

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
  const { lang, achievements, ui } = bundle;
  const [chapterIndex, chapterLabel] = ui.achievementsTag.split(' / ');

  if (achievements.length === 0) {
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
            {ui.achievementsMetaRight(achievements.length)}
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-block">
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
      </div>
    </section>
  );
}
