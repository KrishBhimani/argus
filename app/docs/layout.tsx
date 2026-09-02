import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { GitHubIcon } from '@/components/landing/Icons';
import { source } from '@/lib/source';

// `githubUrl` is left out here: Fumadocs would render it inside a bordered icon strip at
// the bottom of the sidebar. A plain icon link in the footer slot replaces it.
const { githubUrl, ...docsOptions } = baseOptions;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...docsOptions}
      sidebar={{
        footer: (
          <a
            href={githubUrl}
            rel="noreferrer"
            aria-label="Argus on GitHub"
            className="inline-flex w-fit items-center text-fd-muted-foreground hover:text-fd-foreground"
          >
            <GitHubIcon width={18} height={18} />
          </a>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
