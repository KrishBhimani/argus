import type { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';

export const metadata = {
  title: { default: 'Argus — see what Claude Code actually did', template: '%s · Argus docs' },
  description:
    'See what Claude Code actually did. Local-first observability for every session: which tools ran, what each sub-agent was told, which turn blew the budget.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/argus/favicon.svg" />
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#0b0d11" />
      </head>
      <body className="flex min-h-screen flex-col">
        <RootProvider theme={{ forcedTheme: 'dark', enabled: false }} search={{ enabled: false }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
