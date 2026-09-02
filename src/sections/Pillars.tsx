import { pillars } from '../content';

export function Pillars() {
  return (
    <section aria-labelledby="why" className="mx-auto max-w-6xl px-5 py-16">
      <h2 id="why" className="m-0 text-sm font-medium uppercase tracking-wider text-ink-2">Why Argus</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {pillars.map((p) => (
          <article key={p.title} className="rounded-md border border-line bg-bg-1 p-6">
            <h3 className="m-0 text-lg font-semibold text-ink-0">{p.title}</h3>
            <p className="mt-3 mb-0 text-ink-1">{p.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
