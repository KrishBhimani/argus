import { privacy, LINKS } from '../content';

export function Privacy() {
  return (
    <section aria-labelledby="privacy" className="border-y border-line bg-bg-1">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <h2 id="privacy" className="m-0 text-sm font-medium uppercase tracking-wider text-ink-2">
          Privacy &amp; security
        </h2>
        <p className="mt-3 mb-0 text-ink-1">Argus is built for one person on one machine, and the defaults say so.</p>
        <ul className="m-0 mt-6 grid list-none gap-4 p-0 md:grid-cols-3">
          {privacy.map((p) => (
            <li key={p.title} className="rounded-md border border-line bg-bg-0 p-5">
              <strong className="font-semibold text-ink-0">{p.title}</strong>
              <p className="mt-2 mb-0 text-ink-1">{p.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 mb-0 text-sm">
          <a href={LINKS.privacy}>Read the full privacy notes on GitHub</a>
        </p>
      </div>
    </section>
  );
}
