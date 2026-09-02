export const ASSETS = 'https://raw.githubusercontent.com/KrishBhimani/argus-code/main/assets';

export const IMG = { width: 2880, height: 1760 } as const;

export type Shot = { src: string; alt: string };

const shot = (file: string, alt: string): Shot => ({ src: `${ASSETS}/${file}`, alt });

export const LINKS = {
  github: 'https://github.com/KrishBhimani/argus-code',
  pypi: 'https://pypi.org/project/argus-code/',
  architecture: 'https://github.com/KrishBhimani/argus-code/blob/main/ARCHITECTURE.md',
  privacy: 'https://github.com/KrishBhimani/argus-code#-privacy--security',
  license: 'https://github.com/KrishBhimani/argus-code/blob/main/LICENSE',
} as const;

export const hero = {
  title: 'See what Claude Code actually did.',
  tagline: 'The observability console for Claude Code — local-first, permanent, and honest about cost.',
  lede:
    'Claude Code writes a detailed transcript of every session — every turn, every token, every tool call, every sub-agent it spawned — and then tells you almost nothing about it. Argus tails those files into a SQLite archive on your machine, prices each turn, and serves a dashboard that answers the questions the transcripts never do: what am I spending, where did it go, and which turn made it so?',
  install: [
    { label: 'pip', lines: ['pip install argus-code', 'argus start'] },
    { label: 'uv', lines: ['uv tool install argus-code', 'argus start'] },
  ] as const,
  image: shot('hero.png', 'The Argus overview — tokens, cost, sessions and tool error rate at a glance'),
} as const;

export const pillars = [
  {
    title: 'It does forensics, not just totals.',
    body:
      'Argus keeps the structure of every session — turns, tool calls, sub-agents, cache reads — not just its sums. So you can find the turn that blew the budget, the tool that quietly started failing last Tuesday, and exactly what a sub-agent was told before it went off the rails.',
  },
  {
    title: 'It watches for you.',
    body:
      'Detectors re-check your data every 10 minutes against historical baselines and file alerts — a tool whose error rate doubles gets flagged the day it breaks, not when you happen to notice.',
  },
  {
    title: 'It accumulates.',
    body:
      'Claude Code rotates its own logs, so tools that read what is on disk see a sliding month. Once Argus has ingested a session the row stays forever; a few months in, Argus remembers sessions Claude has already forgotten.',
  },
] as const;

export type TourItem = { id: string; title: string; body: string; image?: Shot };

export const tour: readonly TourItem[] = [
  {
    id: 'sessions',
    title: 'Every session, priced',
    body:
      'A virtualised, sortable grid of every session you have ever run, with inline token bars and a duration × tokens scatter that makes outliers obvious. Filter by text, project, model or time window; export to CSV.',
    image: shot('screenshots/sessions.png', 'Sessions — sortable grid with duration × tokens scatter'),
  },
  {
    id: 'forensics',
    title: 'Session forensics',
    body:
      'Click a session and you get its shape — one bar per turn, cache reads beneath fresh tokens, failing turns in red — plus a cumulative-cost line, a tool mix with error segments, and a timeline where every turn expands into its tool calls, sizes, status and error text inline.',
    image: shot('screenshots/session-detail.png', 'Session detail — per-turn shape, cumulative cost, tool mix'),
  },
  {
    id: 'subagents',
    title: 'Sub-agent X-ray',
    body:
      'When a session delegates to sub-agents, Argus keeps each one: the task as it was given, its tools, tokens, cost, shape and full timeline — with an at-a-glance strip that turns red where an agent failed. No more guessing what that Task call actually did.',
    image: shot('screenshots/subagents.png', 'Sub-agents — task given, tools used, per-agent shape and cost'),
  },
  {
    id: 'trends',
    title: 'Trends that use rates, not totals',
    body:
      'This period vs last, a monthly run-rate projection, tokens per session, cache-read share, and $ per million tokens as you actually experienced it — so you can tell "I am working more" apart from "each session got more expensive".',
    image: shot('screenshots/trends.png', 'Trends — weekly tokens by model, run rate, unit cost'),
  },
  {
    id: 'tools',
    title: 'Tool health',
    body:
      "A leaderboard of every tool with its error share, calls per day stacked by tool, MCP servers, and sub-agent invocations by type. A detector re-checks error rates every 10 minutes against a 4-week baseline and files an alert when a tool's failures double.",
    image: shot('screenshots/tools.png', 'Tools — leaderboard with error segments and calls per day'),
  },
  {
    id: 'search',
    title: 'Full-text search (opt-in)',
    body:
      'Search every prompt you have typed and every assistant reply, thinking block and tool output. SQLite FTS5 — sub-millisecond, lexical, deterministic, offline. Off by default.',
  },
];

export const privacy = [
  {
    title: 'Binds to 127.0.0.1 only.',
    body: 'Nothing on your LAN, Wi-Fi or VPN can reach it.',
  },
  {
    title: 'No external requests, ever.',
    body:
      'Except argus pricing refresh, a manual command that fetches one JSON file. No telemetry, no analytics, no LLM calls.',
  },
  {
    title: 'Transcript indexing is opt-in.',
    body:
      'Cost and token analytics need no text content. Full-text search over prompts and transcripts requires an explicit opt-in.',
  },
] as const;

export const footer = {
  line: 'Built for one person on one machine.',
} as const;
