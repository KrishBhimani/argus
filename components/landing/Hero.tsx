import { hero, LINKS } from '@/lib/content';
import { Frame } from './Frame';
import { InstallCommand } from './InstallCommand';

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-5 pt-16 pb-12 md:pt-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="m-0 text-4xl font-semibold leading-tight tracking-tight text-ink-0 md:text-6xl">
          {hero.title}
        </h1>
        <p className="mt-4 text-lg text-accent-ink md:text-xl">{hero.tagline}</p>
        <p className="mt-6 text-base text-ink-1 md:text-lg">{hero.lede}</p>
        <div className="mx-auto mt-8 max-w-xl text-left">
          <InstallCommand variants={hero.install} />
        </div>
        <div className="mt-6 flex justify-center gap-3">
          <a
            href={LINKS.github}
            className="rounded-md border border-line-2 bg-bg-2 px-4 py-2 text-sm font-medium text-ink-0 hover:bg-bg-3 hover:text-ink-0"
          >
            View on GitHub
          </a>
          <a
            href="#tour"
            className="rounded-md px-4 py-2 text-sm font-medium text-ink-1 hover:text-ink-0"
          >
            Take the tour
          </a>
        </div>
      </div>
      <div className="mt-14">
        <Frame shot={hero.image} eager />
      </div>
    </section>
  );
}
