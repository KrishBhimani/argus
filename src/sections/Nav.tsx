import { LINKS } from '../content';
import { Logo } from '../components/Logo';
import { CompassIcon, GitHubIcon, PackageIcon } from '../components/Icons';

const items = [
  { href: '#tour', label: 'Tour', Icon: CompassIcon },
  { href: LINKS.github, label: 'GitHub', Icon: GitHubIcon },
  { href: LINKS.pypi, label: 'PyPI', Icon: PackageIcon },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg-0/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2 font-medium text-ink-0 hover:text-ink-0">
          <Logo size={24} />
          Argus
        </a>
        <ul className="m-0 flex list-none gap-5 p-0 text-sm">
          {items.map(({ href, label, Icon }) => (
            <li key={label}>
              <a href={href} className="flex items-center gap-1.5 text-ink-1 hover:text-ink-0">
                <Icon />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
