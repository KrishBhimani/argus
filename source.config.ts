import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import remarkGfm from 'remark-gfm';

export const docs = defineDocs({ dir: 'content/docs' });

export default defineConfig({
  mdxOptions: { remarkPlugins: [remarkGfm] },
});
