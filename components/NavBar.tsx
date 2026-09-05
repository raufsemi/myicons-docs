import Link from "next/link";

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#eaeaea] bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          MyIcons
        </Link>

        <nav className="flex items-center gap-6 text-sm text-[#666]">
          <Link href="/icons" className="transition-colors hover:text-black">
            Icons
          </Link>

          <Link
            href="/contribute"
            className="transition-colors hover:text-black"
          >
            Contribute
          </Link>

          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-black"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
