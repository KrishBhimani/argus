import { LINKS } from '../content';
import { Logo } from '../components/Logo';

export function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg-0/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2 font-medium text-ink-0 hover:text-ink-0">
          <Logo size={24} />
          Argus
        </a>
        <ul className="m-0 flex list-none gap-5 p-0 text-sm">
          <li><a href="#tour" className="text-ink-1">Tour</a></li>
          <li><a href={LINKS.github} className="text-ink-1">GitHub</a></li>
          <li><a href={LINKS.pypi} className="text-ink-1">PyPI</a></li>
        </ul>
      </nav>
    </header>
  );
}
