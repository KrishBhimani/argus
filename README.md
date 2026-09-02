# argus (site)

The landing page and docs for [Argus](https://github.com/KrishBhimani/argus-code), the
local-first observability console for Claude Code. Live at
<https://krishbhimani.github.io/argus/>.

## Develop

```sh
npm install
npm run dev        # http://localhost:3000/argus/
npm run build      # static export into out/
npm run preview    # serve out/ (note: the site expects to live under /argus/)
```

## How it is put together

- Next.js 16 static export + [Fumadocs](https://fumadocs.dev). Dark only, no search.
  `basePath` is `/argus` and every page is emitted as `<path>/index.html`.
- **Docs** are `content/docs/*.mdx`, ordered by `content/docs/meta.json`. Each page has
  `title` and `description` frontmatter. Internal links are written as `/docs/<slug>/`
  (Next prepends the base path). Every page ends with "Verified against argus-code
  <version>" from `lib/site.ts`; bump it when the docs are re-checked against a release.
- **Landing page** copy lives in `lib/content.ts`; section components in
  `components/landing/`. Every sentence is trimmed argus-code README copy.
- **Screenshots** are hotlinked from `argus-code/assets/screenshots/` on GitHub and
  regenerated there with `scripts/screenshots/`. Nothing to update here.
- Design tokens in `app/global.css` are copied from the argus-code dashboard and mapped
  onto Fumadocs' `--color-fd-*` variables.
- Deploys to GitHub Pages on every push to `main` via `.github/workflows/pages.yml`.

No analytics, no third-party scripts.
