import Link from "next/link";

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-base font-semibold tracking-[-0.02em] text-neutral-950"
        >
          MyIcons
        </Link>

        <nav className="flex items-center gap-1">
          <Link
            href="/icons"
            className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950"
          >
            Icons
          </Link>

          <Link
            href="/contribute"
            className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950"
          >
            Contribute
          </Link>

          <a
            href="https://www.npmjs.com/package/@raufsemi/myicons"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-950"
          >
            npm ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
