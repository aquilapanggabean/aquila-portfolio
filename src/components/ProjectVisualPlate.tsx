import type { UiDictionary } from '../data/i18n';

interface ProjectVisualPlateProps {
  projectId: string;
}

interface SuperPlusBlueprintPlateProps {
  copy: UiDictionary['superPlusPlate'];
}

/**
 * Light architectural visual plate for SuperPlus (MotionHack 5.0),
 * harmonized with the white editorial homepage aesthetic.
 */
export function SuperPlusBlueprintPlate({ copy }: SuperPlusBlueprintPlateProps) {
  return (
    <div
      role="img"
      aria-label={copy.ariaLabel}
      className="w-full h-full bg-[#F7F8FA] text-[#0B1220] p-6 sm:p-8 flex flex-col justify-between select-none relative overflow-hidden"
    >
      {/* Subtle architectural dot matrix echoing the Hero interactive backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-45 pointer-events-none bg-[radial-gradient(#94A3B8_1px,transparent_1px)] [background-size:20px_20px]"
      />

      <div className="relative z-10 flex items-center justify-between gap-4 border-b border-[#E2E8F0] pb-4">
        <div>
          <p className="font-mono text-[11px] tracking-[0.08em] uppercase tabular-nums text-[#64748B]">
            {copy.eyebrow}
          </p>
          <p className="mt-1 font-serif italic text-xl sm:text-2xl font-normal tracking-tight text-[#0B1220]">
            {copy.title}
          </p>
        </div>
        <span className="font-mono text-[11px] tracking-[0.08em] uppercase tabular-nums text-[#047857] bg-white border border-[#D8E0EA] px-2.5 py-1 rounded-[4px] shrink-0">
          {copy.badge}
        </span>
      </div>

      <div className="relative z-10 my-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {copy.milestones.map((item, idx) => (
          <div
            key={item.index}
            className={`p-4 rounded-[4px] border ${
              idx === 2
                ? 'bg-[#2457D6] border-[#2457D6] text-white'
                : 'bg-white border-[#E2E8F0] text-[#0B1220]'
            }`}
          >
            <span
              className={`block font-mono text-[11px] tracking-[0.08em] uppercase tabular-nums mb-2 ${
                idx === 2 ? 'text-white/80' : 'text-[#2457D6]'
              }`}
            >
              {copy.stagePrefix} {item.index}
            </span>
            <p className="text-sm font-semibold leading-snug">{item.phase}</p>
            <p
              className={`mt-1.5 text-xs leading-relaxed ${
                idx === 2 ? 'text-white/90' : 'text-[#475569]'
              }`}
            >
              {item.output}
            </p>
          </div>
        ))}
      </div>

      <div className="relative z-10 pt-3 border-t border-[#E2E8F0] flex items-center justify-between font-mono text-[11px] tracking-[0.06em] uppercase text-[#64748B]">
        <span>React · TypeScript · Vite</span>
        <span>{copy.footerRight}</span>
      </div>
    </div>
  );
}

export function hasCustomVisualPlate(
  projectId: ProjectVisualPlateProps['projectId']
): boolean {
  return projectId === 'superplus';
}
