import { useEffect, useState } from 'react';
import type { MediaAspectRatio, MediaAsset } from '../data/media';

interface EditorialImageProps {
  asset: MediaAsset;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  darkSurface?: boolean;
}

const ASPECT_CLASS_MAP: Record<MediaAspectRatio, string> = {
  '3/4': 'aspect-[3/4]',
  '4/3': 'aspect-[4/3]',
  '16/9': 'aspect-[16/9]',
};

export function EditorialImage({
  asset,
  className = '',
  imgClassName = '',
  priority = false,
  darkSurface = false,
}: EditorialImageProps) {
  const [failed, setFailed] = useState(false);
  const aspectClass = ASPECT_CLASS_MAP[asset.aspectRatio];

  useEffect(() => {
    setFailed(false);
  }, [asset.src]);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={asset.alt}
        className={`w-full ${aspectClass} flex flex-col items-start justify-between p-6 border ${
          darkSurface
            ? 'bg-[#101C30] border-[#1E293B] text-[#CBD5E1]'
            : 'bg-[#F7F8FA] border-[#E8EDF3] text-[#475569]'
        } ${className}`}
      >
        <span className="font-mono text-xs tabular-nums tracking-normal opacity-75">
          Media Preview
        </span>
        <p className="text-sm font-medium leading-relaxed max-w-[36ch]">
          {asset.caption}
        </p>
      </div>
    );
  }

  const fitClass = asset.fit === 'contain' ? 'object-contain' : 'object-cover';

  return (
    <div
      className={`w-full ${aspectClass} overflow-hidden ${
        darkSurface ? 'bg-[#101C30]' : 'bg-[#F7F8FA]'
      } ${className}`}
      style={asset.surfaceBg ? { backgroundColor: asset.surfaceBg } : undefined}
    >
      <img
        src={asset.src}
        alt={asset.alt}
        width={asset.width}
        height={asset.height}
        fetchPriority={priority ? 'high' : undefined}
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
        style={
          asset.objectPosition
            ? { objectPosition: asset.objectPosition }
            : undefined
        }
        className={`block w-full h-full ${aspectClass} ${fitClass} ${imgClassName}`}
      />
    </div>
  );
}
