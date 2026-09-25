import Link from "next/link"

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Lumen home"
      className="inline-flex shrink-0 items-center gap-3"
    >
      <span
        className="bg-logo flex size-[34px] items-center justify-center rounded-[11px] shadow-logo"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="none">
          <path
            fill="white"
            fillRule="evenodd"
            d="M9.17 3.83a4 4 0 0 1 5.66 0l5.34 5.34a4 4 0 0 1 0 5.66l-5.34 5.34a4 4 0 0 1-5.66 0l-5.34-5.34a4 4 0 0 1 0-5.66l5.34-5.34ZM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      <span className="text-[22px] leading-none font-extrabold tracking-[-0.055em]">
        Lumen
      </span>
    </Link>
  )
}
