import { ASSETS, IMG } from '@/lib/content';

type Props = { name: string; alt: string };

/** A dashboard screenshot hotlinked from argus-code/assets/screenshots. */
export function Screenshot({ name, alt }: Props) {
  return (
    <figure className="my-6 overflow-hidden rounded-md border border-line bg-bg-1">
      <img
        src={`${ASSETS}/screenshots/${name}.png`}
        alt={alt}
        width={IMG.width}
        height={IMG.height}
        loading="lazy"
        decoding="async"
        className="my-0 block h-auto w-full"
      />
      <figcaption className="border-t border-line px-3 py-2 text-xs text-ink-2">{alt}</figcaption>
    </figure>
  );
}
