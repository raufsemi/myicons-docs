import Image from "next/image";
import Link from "next/link";

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between rounded-2xl border border-neutral-200/70 bg-white/85 px-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-xl px-2.5 py-1.5 transition-colors hover:bg-neutral-100"
        >
          <div className="flex size-8 items-center justify-center rounded-lg bg-neutral-950 p-1.5 shadow-sm transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/raven.svg"
              alt="MyIcons"
              width={24}
              height={24}
              priority
              className="brightness-0 invert"
            />
          </div>

          <span className="text-[15px] font-semibold tracking-[-0.03em] text-neutral-950">
            MyIcons
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1">
          <Link
            href="/icons"
            className="rounded-xl px-3.5 py-2 text-[13px] font-medium text-neutral-600 transition-all hover:bg-neutral-100 hover:text-neutral-950"
          >
            Icons
          </Link>

          <Link
            href="/contribute"
            className="rounded-xl px-3.5 py-2 text-[13px] font-medium text-neutral-600 transition-all hover:bg-neutral-100 hover:text-neutral-950"
          >
            Contributions
          </Link>

          <a
            href="https://www.npmjs.com/package/@raufsemi/myicons"
            target="_blank"
            rel="noreferrer"
            aria-label="MyIcons on npm"
            className="ml-1 flex items-center justify-center rounded-xl  p-2.5 transition-all hover:border-neutral-300 hover:bg-neutral-100"
          >
            <Image src="/npm.svg" alt="npm" width={40} height={40} />
          </a>
        </nav>
      </div>
    </header>
  );
}
