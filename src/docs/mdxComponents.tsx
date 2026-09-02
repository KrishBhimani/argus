import type { ComponentProps, ReactNode } from 'react';
import { ASSETS, IMG } from '../content';

type CalloutProps = { type?: 'note' | 'warning'; title?: string; children: ReactNode };

export function Callout({ type = 'note', title, children }: CalloutProps) {
  const warn = type === 'warning';
  return (
    <aside
      role="note"
      className={`not-prose my-6 rounded-md border px-4 py-3 text-[15px] leading-relaxed ${
        warn ? 'border-warn/40 bg-warn/5' : 'border-line-2 bg-bg-1'
      }`}
    >
      <p className={`m-0 mb-1 text-xs font-medium uppercase tracking-wider ${warn ? 'text-warn' : 'text-ink-2'}`}>
        {title ?? (warn ? 'Warning' : 'Note')}
      </p>
      <div className="text-ink-1 [&_a]:text-accent-ink [&_code]:rounded-sm [&_code]:border [&_code]:border-line [&_code]:bg-bg-2 [&_code]:px-1 [&_code]:font-mono [&_code]:text-[13px] [&_code]:text-ink-0 [&_p]:m-0">
        {children}
      </div>
    </aside>
  );
}

type ScreenshotProps = { name: string; alt: string };

export function Screenshot({ name, alt }: ScreenshotProps) {
  return (
    <figure className="not-prose my-6 overflow-hidden rounded-md border border-line bg-bg-1">
      <img
        src={`${ASSETS}/screenshots/${name}.png`}
        alt={alt}
        width={IMG.width}
        height={IMG.height}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full"
      />
      <figcaption className="border-t border-line px-3 py-2 text-xs text-ink-2">{alt}</figcaption>
    </figure>
  );
}

function Anchor(props: ComponentProps<'a'>) {
  const external = typeof props.href === 'string' && /^https?:\/\//.test(props.href);
  return <a {...props} rel={external ? 'noreferrer' : props.rel} />;
}

export const mdxComponents = { Callout, Screenshot, a: Anchor };
