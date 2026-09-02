import { tour } from '../content';
import { Frame } from '../components/Frame';

export function Tour() {
  return (
    <section id="tour" aria-labelledby="tour-heading" className="mx-auto max-w-6xl px-5 py-16">
      <h2 id="tour-heading" className="m-0 text-sm font-medium uppercase tracking-wider text-ink-2">A tour</h2>
      <div className="mt-6 flex flex-col gap-20">
        {tour.map((item, i) =>
          item.image ? (
            <article
              key={item.id}
              className={`flex flex-col gap-8 md:items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              <div className="md:w-1/3">
                <h3 className="m-0 text-2xl font-semibold text-ink-0">{item.title}</h3>
                <p className="mt-3 mb-0 text-ink-1">{item.body}</p>
              </div>
              <div className="md:w-2/3">
                <Frame shot={item.image} />
              </div>
            </article>
          ) : (
            <article key={item.id} className="rounded-md border border-line bg-bg-1 p-6 md:p-8">
              <h3 className="m-0 text-2xl font-semibold text-ink-0">{item.title}</h3>
              <p className="mt-3 mb-0 max-w-3xl text-ink-1">{item.body}</p>
            </article>
          ),
        )}
      </div>
    </section>
  );
}
