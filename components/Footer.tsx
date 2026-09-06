import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-4 pb-6 pt-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-6 rounded-2xl border border-neutral-200/70 bg-white px-5 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.03)] sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label="MyIcons home"
          >
            <div className="flex size-8 items-center justify-center overflow-hidden rounded-lg bg-neutral-950 p-1.5 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/raven.svg"
                alt="MyIcons"
                width={24}
                height={24}
                className="brightness-0 invert"
              />
            </div>

            <div>
              <p className="text-sm font-semibold tracking-tight text-neutral-950">
                MyIcons
              </p>
              <p className="text-xs text-neutral-500">
                Built with love by{" "}
                <span className="font-medium text-neutral-700">@raufsemi</span>
              </p>
            </div>
          </Link>

          {/* Links */}
          <div className="flex items-center gap-1">
            <a
              href="https://www.threads.net/@raufsemi"
              target="_blank"
              rel="noreferrer"
              aria-label="Rauf Semi on Threads"
              className="flex size-10 items-center justify-center rounded-xl border border-neutral-200 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:bg-neutral-50 hover:shadow-sm"
            >
              <Image src="/threads.svg" alt="Threads" width={20} height={20} />
            </a>
          </div>
        </div>

        <p className="mt-5 text-center text-xs text-neutral-400">
          © {new Date().getFullYear()} MyIcons. Open source, built for
          developers.
        </p>
      </div>
    </footer>
  );
}
