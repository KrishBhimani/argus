import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Logo } from '@/components/landing/Logo';

// Note: Next.js prepends `basePath` to internal <Link> hrefs, so internal urls here
// are written WITHOUT the /argus prefix. External urls are absolute.
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <span className="flex items-center gap-2 font-medium">
        <Logo size={22} /> Argus
      </span>
    ),
    url: '/',
  },
  // `on: 'nav'` keeps these in the landing page header only; the docs sidebar would
  // otherwise repeat them above the page tree.
  links: [
    { text: 'Docs', url: '/docs/', active: 'nested-url', on: 'nav' },
    { text: 'Tour', url: '/#tour', on: 'nav' },
    { text: 'GitHub', url: 'https://github.com/KrishBhimani/argus-code', external: true, on: 'nav' },
    { text: 'PyPI', url: 'https://pypi.org/project/argus-code/', external: true, on: 'nav' },
  ],
  githubUrl: 'https://github.com/KrishBhimani/argus-code',
  themeSwitch: { enabled: false },
};
