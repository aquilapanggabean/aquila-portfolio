import type { LocalizedPortfolioBundle } from '../data/i18n';

interface CapabilitiesSectionProps {
  bundle: LocalizedPortfolioBundle;
}

export function CapabilitiesSection({ bundle }: CapabilitiesSectionProps) {
  const { capabilityGroups, ui } = bundle;
  const [chapterIndex, chapterLabel] = ui.capabilitiesTag.split(' / ');

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
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
          <p className="text-[#64748B]">{ui.capabilitiesMetaRight}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-14 items-end reveal-block">
          <div className="lg:col-span-5">
            <h2
              id="capabilities-heading"
              className="font-serif italic text-[clamp(2.5rem,4.4vw,3.75rem)] font-normal tracking-[-0.018em] text-[#0B1220] leading-[1.02]"
            >
              {ui.capabilitiesHeading}
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base sm:text-[17px] leading-[1.68] text-[#475569] max-w-[60ch]">
              {ui.capabilitiesLead}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-b border-[#E8EDF3] divide-y lg:divide-y-0 lg:divide-x divide-[#E8EDF3] reveal-block">
          {capabilityGroups.map((group) => (
            <div
              key={group.index}
              className="py-8 lg:py-10 lg:px-8 first:lg:pl-0 last:lg:pr-0 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-[#E8EDF3]">
                  <span className="font-mono text-xs tabular-nums tracking-[0.06em] text-[#2457D6] font-medium">
                    {group.index} /
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] text-[#0B1220] leading-snug mb-3">
                  {group.title}
                </h3>

                <p className="text-[15px] leading-[1.7] text-[#475569] mb-7">
                  {group.summary}
                </p>
              </div>

              <ul className="divide-y divide-[#E8EDF3] border-t border-[#E8EDF3]">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="py-3.5 text-[15px] font-medium text-[#1E293B]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
