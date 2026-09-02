export const VERIFIED_VERSION = '0.5.2';

export type DocPage = { slug: string; title: string; description: string };
export type DocGroup = { title: string; pages: DocPage[] };

export const docsNav: DocGroup[] = [
  {
    title: 'Start',
    pages: [
      { slug: 'index', title: 'Getting started', description: 'Install Argus, run it once, and read the dashboard footer.' },
    ],
  },
  {
    title: 'CLI',
    pages: [
      { slug: 'cli', title: 'CLI reference', description: 'Every argus command, flag and default, and what each touches on disk.' },
      { slug: 'daemon', title: 'Daemon (argusd)', description: 'Keep ingesting when the dashboard is closed: start, stop, status, logs.' },
      { slug: 'search', title: 'Search & privacy', description: 'What transcript indexing stores, how to turn it on, and what never leaves your machine.' },
    ],
  },
  {
    title: 'Dashboard',
    pages: [
      { slug: 'dashboard', title: 'The dashboard', description: 'The sidebar, status dot, Ctrl+K palette, colour rules, and how cost is estimated.' },
      { slug: 'overview', title: 'Overview', description: 'Tiles, deltas, tokens per day, models, activity heatmaps and top sessions.' },
      { slug: 'sessions', title: 'Sessions', description: 'The session grid, filters, the duration × tokens scatter, and CSV export.' },
      { slug: 'session', title: 'Session detail', description: 'Session shape, the Overview and Timeline tabs, and resumed-session stitching.' },
      { slug: 'subagents', title: 'Sub-agents', description: 'Every sub-agent a session spawned: task given, tools, tokens, cost and timeline.' },
      { slug: 'models', title: 'Models', description: 'Tokens, cost and price efficiency per model, and model share over time.' },
      { slug: 'trends', title: 'Trends', description: 'Period-over-period tokens and cost, run rate, tokens per session, cache-read share.' },
      { slug: 'tools', title: 'Tools', description: 'Tool leaderboard, error rate, calls per day, MCP servers and sub-agent invocations.' },
      { slug: 'alerts', title: 'Alerts', description: 'The tool error-rate detector, its thresholds, and marking alerts seen.' },
      { slug: 'transcripts', title: 'Transcripts search', description: 'Searching prompts, replies, thinking and tool output with FTS5.' },
      { slug: 'settings', title: 'Settings', description: 'Indexing controls, pricing version, exports, ingest status and parse errors.' },
    ],
  },
];

export function allPages(): DocPage[] {
  return docsNav.flatMap((g) => g.pages);
}

export function pagePath(slug: string): string {
  return slug === 'index' ? 'docs/' : `docs/${slug}/`;
}
