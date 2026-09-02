import { useState } from 'react';

export type InstallVariant = { label: string; lines: readonly string[] };

type Props = { variants: readonly InstallVariant[] };

export function InstallCommand({ variants }: Props) {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const lines = variants[active].lines;

  async function copy() {
    try {
      await navigator.clipboard.writeText(lines.join('\n'));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable (insecure context or denied). The text is still selectable.
    }
  }

  return (
    <div className="overflow-hidden rounded-md border border-line bg-bg-1">
      <div role="tablist" aria-label="Installer" className="flex gap-1 border-b border-line px-2 pt-2">
        {variants.map((v, i) => (
          <button
            key={v.label}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => { setActive(i); setCopied(false); }}
            className={`rounded-t-sm px-3 py-1 font-mono text-xs transition-colors ${
              i === active ? 'bg-bg-2 text-ink-0' : 'text-ink-2 hover:text-ink-1'
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>
      <div className="flex items-stretch font-mono text-[15px]">
        <pre className="m-0 flex-1 overflow-x-auto px-4 py-3 leading-7 text-ink-0">
          <code>
            {lines.map((line) => (
              <span key={line} className="block">
                <span className="select-none text-ink-2">$ </span>
                {line}
              </span>
            ))}
          </code>
        </pre>
        <button
          type="button"
          onClick={copy}
          aria-live="polite"
          className="border-l border-line px-4 text-sm text-ink-1 transition-colors hover:bg-bg-2 hover:text-ink-0"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
}
