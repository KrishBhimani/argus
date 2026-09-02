import { IMG, type Shot } from '../content';

type Props = { shot: Shot; eager?: boolean };

/** Every screenshot gets the same border and shadow. Explicit dimensions prevent layout shift. */
export function Frame({ shot, eager = false }: Props) {
  return (
    <figure className="m-0 overflow-hidden rounded-md border border-line bg-bg-1 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
      <img
        src={shot.src}
        alt={shot.alt}
        width={IMG.width}
        height={IMG.height}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className="block h-auto w-full"
      />
    </figure>
  );
}
