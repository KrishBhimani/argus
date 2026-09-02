import { docsNav, pagePath } from './nav';

const BASE = import.meta.env.BASE_URL;

function Links({ current }: { current: string }) {
  return (
    <nav aria-label="Docs">
      {docsNav.map((g) => (
        <div key={g.title} className="mb-5">
          <p className="m-0 mb-1.5 text-xs font-medium uppercase tracking-wider text-ink-2">{g.title}</p>
          <ul className="m-0 list-none p-0">
            {g.pages.map((p) => {
              const active = p.slug === current;
              return (
                <li key={p.slug}>
                  <a
                    href={BASE + pagePath(p.slug)}
                    aria-current={active ? 'page' : undefined}
                    className={`block border-l-2 py-1 pl-3 text-sm ${
                      active
                        ? 'border-accent text-ink-0'
                        : 'border-transparent text-ink-1 hover:border-line-2 hover:text-ink-0'
                    }`}
                  >
                    {p.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export function Sidebar({ current }: { current: string }) {
  return (
    <>
      <details className="mb-6 rounded-md border border-line bg-bg-1 p-3 md:hidden">
        <summary className="cursor-pointer text-sm font-medium text-ink-0">Docs navigation</summary>
        <div className="mt-3">
          <Links current={current} />
        </div>
      </details>
      <aside className="hidden md:block">
        <div className="sticky top-16 max-h-[calc(100vh-5rem)] overflow-y-auto pr-4">
          <Links current={current} />
        </div>
      </aside>
    </>
  );
}
