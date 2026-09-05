import { NavBar } from "@/components/NavBar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar />

      <main>
        <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center px-6 text-center">
          <p className="mb-4 text-sm font-medium text-[#666]">
            React icon library
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Icons made for modern interfaces.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#666]">
            A simple collection of customizable React icons. Browse, preview,
            and copy exactly what you need.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <Link
              href="/icons"
              className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
            >
              Browse icons
            </Link>

            <a
              href="/contribute"
              className="rounded-lg border border-[#e5e5e5] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-[#f7f7f7]"
            >
              Documentation
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
