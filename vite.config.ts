import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { allPages, pagePath } from './src/docs/nav';

const here = path.dirname(fileURLToPath(import.meta.url));
const BASE = '/argus/';

function entryHtml(title: string, description: string): string {
  const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
  return `<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(title)} · Argus docs</title>
    <meta name="description" content="${esc(description)}" />
    <meta name="color-scheme" content="dark" />
    <meta name="theme-color" content="#0b0d11" />
    <link rel="icon" type="image/svg+xml" href="${BASE}favicon.svg" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${esc(title)} · Argus docs" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:image" content="https://raw.githubusercontent.com/KrishBhimani/argus-code/main/assets/hero.png" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/docs/main.tsx"></script>
  </body>
</html>
`;
}

/** Writes one static HTML entry per docs page (from nav.ts) and registers it as a build input. */
function docsEntries(): Plugin {
  const entries = allPages().map((p) => ({ ...p, file: path.join(here, pagePath(p.slug), 'index.html') }));
  const write = () => {
    for (const e of entries) {
      fs.mkdirSync(path.dirname(e.file), { recursive: true });
      fs.writeFileSync(e.file, entryHtml(e.title, e.description));
    }
  };
  return {
    name: 'docs-entries',
    config: () => ({
      build: {
        rollupOptions: {
          input: {
            main: path.join(here, 'index.html'),
            ...Object.fromEntries(entries.map((e) => [`docs-${e.slug}`, e.file])),
          },
        },
      },
    }),
    buildStart: write,
    configureServer: write,
  };
}

export default defineConfig({
  base: BASE,
  appType: 'mpa',
  plugins: [
    docsEntries(),
    {
      enforce: 'pre',
      ...mdx({
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
      }),
    },
    react(),
    tailwindcss(),
  ],
  build: { outDir: 'dist', emptyOutDir: true, sourcemap: false },
});
