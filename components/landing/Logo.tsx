type Props = { size?: number; className?: string };

/** The Argus eye mark, inlined from argus-code/assets/logo.svg. */
export function Logo({ size = 28, className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 128 128"
      aria-hidden="true"
      className={className}
    >
      <rect width="128" height="128" rx="28" fill="#f0883e" />
      <g
        transform="translate(16,16) scale(4)"
        fill="none"
        stroke="#1a0f06"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </g>
    </svg>
  );
}
