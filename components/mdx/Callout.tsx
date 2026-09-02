import { Callout as FdCallout } from 'fumadocs-ui/components/callout';
import type { ReactNode } from 'react';

type Props = { type?: 'note' | 'warning'; title?: string; children: ReactNode };

/** Thin wrapper so the existing MDX (`<Callout>`, `<Callout type="warning">`) keeps working. */
export function Callout({ type = 'note', title, children }: Props) {
  return (
    <FdCallout type={type === 'warning' ? 'warn' : 'info'} title={title}>
      {children}
    </FdCallout>
  );
}
