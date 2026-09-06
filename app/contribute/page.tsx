import Link from "next/link";

import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export default function ContributePage() {
  return (
    <>
      <NavBar />

      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-neutral-500">Open source</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Contribute to MyIcons
          </h1>

          <p className="mt-5 text-lg leading-8 text-neutral-500">
            Help grow the icon collection by creating, improving, or suggesting
            icons for the library.
          </p>
        </div>
        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-xl font-semibold">How to contribute</h2>

            <p className="mt-3 leading-7 text-neutral-600">
              Contributions are made through GitHub. You can add new icons,
              improve existing ones, fix issues, or suggest ideas for the
              library.
            </p>

            <a
              href="https://github.com/raufsemi/myicons"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-lg bg-black px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
            >
              View on GitHub
            </a>
          </section>

          <section className="border-t border-neutral-200 pt-12">
            <h2 className="text-xl font-semibold">Before contributing</h2>

            <ul className="mt-4 space-y-3 text-sm leading-6 text-neutral-600">
              <li>• Keep icons clean and consistent.</li>
              <li>• Use the existing icon structure.</li>
              <li>• Keep SVG markup optimized.</li>
              <li>• Make sure the icon works with the library API.</li>
              <li>• Include a clear description in your pull request.</li>
            </ul>
          </section>

          <section className="border-t border-neutral-200 pt-12">
            <h2 className="text-xl font-semibold">Have an icon request?</h2>

            <p className="mt-3 leading-7 text-neutral-600">
              If you dont want to contribute code, you can still suggest an icon
              or report an issue through GitHub.
            </p>

            <Link
              href="/icons"
              className="mt-6 inline-flex rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-neutral-50"
            >
              Browse icons
            </Link>
          </section>

          <section className="border-t border-neutral-200 pt-12">
            <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50">
              <div className="p-8 sm:p-10">
                {/* Label */}
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-950" />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                    Open Source Credit
                  </span>
                </div>

                {/* Heading */}
                <div className="mt-6 max-w-2xl">
                  <h2 className="text-3xl font-semibold tracking-[-0.04em] text-neutral-950">
                    Built with work from the community.
                  </h2>

                  <p className="mt-4 text-base leading-7 text-neutral-600">
                    MyIcons includes payment icons based on the original{" "}
                    <span className="font-medium text-neutral-950">
                      Payment-Icon
                    </span>{" "}
                    project by{" "}
                    <a
                      href="https://github.com/SnorSnor9998"
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-950"
                    >
                      SnorSnor9998
                    </a>
                    .
                  </p>
                </div>

                {/* Attribution */}
                <div className="mt-8 flex flex-col gap-5 rounded-2xl border border-neutral-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-neutral-950">
                      Original project
                    </p>

                    <p className="mt-1 text-sm text-neutral-500">
                      Payment-Icon by SnorSnor9998
                    </p>
                  </div>

                  <a
                    href="https://github.com/SnorSnor9998/Payment-Icon"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center justify-center rounded-xl bg-neutral-950 px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-lg"
                  >
                    View original project
                    <span className="ml-2 text-neutral-400">↗</span>
                  </a>
                </div>

                {/* Appreciation */}
                <p className="mt-6 text-sm leading-6 text-neutral-500">
                  Full credit and appreciation to SnorSnor9998 for the original
                  work. This project would not be possible without that
                  contribution to the open-source community.
                </p>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
    </>
  );
}
