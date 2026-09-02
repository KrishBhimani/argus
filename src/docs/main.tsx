import { lazy, StrictMode, Suspense, type ComponentType } from 'react';
import { createRoot } from 'react-dom/client';
import type { MDXProps } from 'mdx/types';
import '../styles.css';
import { DocsLayout } from './DocsLayout';
import { mdxComponents } from './mdxComponents';
import { allPages } from './nav';

const modules = import.meta.glob<{ default: ComponentType<MDXProps> }>('./pages/*.mdx');

function currentSlug(): string {
  const prefix = import.meta.env.BASE_URL + 'docs/';
  const rest = location.pathname.startsWith(prefix) ? location.pathname.slice(prefix.length) : '';
  const slug = rest.replace(/\/+$/, '').replace(/^\/+/, '');
  return slug === '' ? 'index' : slug;
}

const slug = currentSlug();
const page = allPages().find((p) => p.slug === slug);
const loader = modules[`./pages/${slug}.mdx`];

function App() {
  if (!page || !loader) {
    return (
      <DocsLayout page={{ slug, title: 'Not found', description: 'There is no docs page at this address.' }}>
        <p>Pick a page from the navigation.</p>
      </DocsLayout>
    );
  }
  const Page = lazy(loader);
  return (
    <DocsLayout page={page}>
      <Suspense fallback={<p className="text-ink-2">Loading…</p>}>
        <Page components={mdxComponents} />
      </Suspense>
    </DocsLayout>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
