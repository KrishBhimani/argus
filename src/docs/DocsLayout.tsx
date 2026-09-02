import type { ReactNode } from 'react';
import { Nav } from '../sections/Nav';
import { Footer } from '../sections/Footer';
import { Sidebar } from './Sidebar';
import { allPages, pagePath, VERIFIED_VERSION, type DocPage } from './nav';

const BASE = import.meta.env.BASE_URL;

export function DocsLayout({ page, children }: { page: DocPage; children: ReactNode }) {
  const pages = allPages();
  const i = pages.findIndex((p) => p.slug === page.slug);
  const prev = i > 0 ? pages[i - 1] : null;
  const next = i >= 0 && i < pages.length - 1 ? pages[i + 1] : null;
  return (
    <>
      <Nav />
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-[220px_minmax(0,1fr)]">
        <Sidebar current={page.slug} />
        <main className="min-w-0">
          <article className="prose prose-invert max-w-[72ch]">
            <h1>{page.title}</h1>
            <p className="lead">{page.description}</p>
            {children}
          </article>
          <nav
            aria-label="Previous and next"
            className="mt-12 flex justify-between gap-4 border-t border-line pt-6 text-sm"
          >
            <span>{prev && <a href={BASE + pagePath(prev.slug)}>← {prev.title}</a>}</span>
            <span>{next && <a href={BASE + pagePath(next.slug)}>{next.title} →</a>}</span>
          </nav>
          <p className="mt-6 font-mono text-xs text-ink-2">Verified against argus-code {VERIFIED_VERSION}.</p>
        </main>
      </div>
      <Footer />
    </>
  );
}
