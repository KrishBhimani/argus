import { useState } from 'react';

type Props = { lines: readonly string[] };

export function InstallCommand({ lines }: Props) {
  const [copied, setCopied] = useState(false);

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
    <div className="flex items-stretch overflow-hidden rounded-md border border-line bg-bg-1 font-mono text-[15px]">
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
  );
}
