# argus (landing page)

The one-page site for [Argus](https://github.com/KrishBhimani/argus-code), the
local-first observability console for Claude Code. Live at
<https://krishbhimani.github.io/argus/>.

## Develop

```sh
npm install
npm run dev        # http://localhost:5173/argus/
npm run build      # type-check + production build into dist/
npm run preview    # serve dist/ at http://localhost:4173/argus/
```

## How it is put together

- Vite + React + TypeScript + Tailwind v4. Design tokens are copied from the
  argus-code dashboard so the page looks like the product.
- **All copy lives in `src/content.ts`.** Section components render that data
  and contain no prose. Every sentence is taken from the argus-code README;
  when the README changes, update `content.ts` to match.
- Screenshots are hotlinked from `argus-code/assets/` on GitHub. Regenerate
  them there and this site updates with no change here.
- Deploys to GitHub Pages on every push to `main` via
  `.github/workflows/pages.yml`.

No analytics, no third-party scripts.
