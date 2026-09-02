import { footer, LINKS } from '@/lib/content';

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-ink-2 md:flex-row md:items-center md:justify-between">
      <p className="m-0">{footer.line}</p>
      <ul className="m-0 flex list-none gap-5 p-0">
        <li><a href={LINKS.github} className="text-ink-1">GitHub</a></li>
        <li><a href={LINKS.pypi} className="text-ink-1">PyPI</a></li>
        <li><a href={LINKS.architecture} className="text-ink-1">Architecture</a></li>
        <li><a href={LINKS.license} className="text-ink-1">MIT</a></li>
      </ul>
    </footer>
  );
}
