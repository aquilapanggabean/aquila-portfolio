import { ArrowUpRight } from 'lucide-react';
import type { LocalizedPortfolioBundle } from '../data/i18n';
import { PORTFOLIO_MEDIA } from '../data/media';
import { EditorialImage } from './EditorialImage';

interface AboutSectionProps {
  bundle: LocalizedPortfolioBundle;
}

export function AboutSection({ bundle }: AboutSectionProps) {
  const { profile, ui } = bundle;
  const [chapterIndex, chapterLabel] = ui.aboutTag.split(' / ');

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
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
          <p className="text-[#64748B]">{ui.aboutMetaRight}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left 5 columns: Editorial serif heading + framed portrait */}
          <div className="lg:col-span-5 reveal-block">
            <h2
              id="about-heading"
              className="font-serif italic text-[clamp(2.5rem,4.4vw,3.75rem)] font-normal tracking-[-0.018em] text-[#0B1220] leading-[1.02]"
            >
              {ui.aboutHeading}
            </h2>

            <p className="mt-4 text-base sm:text-[17px] leading-[1.68] text-[#475569] mb-10 max-w-[42ch]">
              {ui.aboutLead}
            </p>

            <figure className="max-w-[380px]">
              <div className="aspect-[3/4] w-full rounded-[4px] border border-[#E8EDF3] overflow-hidden bg-[#F7F8FA] p-1.5">
                <div className="aspect-[3/4] w-full h-full rounded-[2px] overflow-hidden bg-[#1B1F24]">
                  <EditorialImage
                    asset={PORTFOLIO_MEDIA.profile.heroPortrait}
                    priority
                    darkSurface
                    imgClassName="object-top"
                  />
                </div>
              </div>
              <figcaption className="mt-3 text-xs text-[#64748B] font-mono leading-relaxed">
                {ui.aboutPortraitCaption}
              </figcaption>
            </figure>
          </div>

          {/* Right 7 columns: Narrative prose + hairline fact ledger + GitHub/LinkedIn links */}
          <div className="lg:col-span-7 lg:pt-3 reveal-block">
            <div className="space-y-6 text-base sm:text-[17px] leading-[1.72] text-[#1E293B] max-w-[64ch]">
              {profile.aboutProse.map((paragraph, index) => (
                <p key={index} className={index === 1 ? 'text-[#475569]' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>

            <dl className="mt-12 grid grid-cols-1 sm:grid-cols-3 border-t border-b border-[#E8EDF3] divide-y sm:divide-y-0 sm:divide-x divide-[#E8EDF3]">
              {profile.aboutFacts.map((fact) => (
                <div key={fact.label} className="py-6 sm:px-6 first:sm:pl-0 last:sm:pr-0">
                  <dt className="font-mono text-[11px] tracking-[0.06em] uppercase text-[#64748B] mb-2">
                    {fact.label}
                  </dt>
                  <dd className="text-[15px] font-semibold text-[#0B1220] leading-snug">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs tracking-[0.06em] uppercase">
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#0B1220] hover:text-[#2457D6] font-medium transition-colors"
              >
                <span>LinkedIn ({profile.linkedinHandle})</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <span aria-hidden="true" className="text-[#CBD5E1]">
                ·
              </span>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#0B1220] hover:text-[#2457D6] font-medium transition-colors"
              >
                <span>GitHub ({profile.githubHandle})</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
