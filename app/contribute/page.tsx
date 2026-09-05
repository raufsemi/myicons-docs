import Link from "next/link";

import { NavBar } from "@/components/NavBar";

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
            <h2 className="text-xl font-semibold">Credits</h2>

            <p className="mt-3 leading-7 text-neutral-600">
              Some payment icons in MyIcons are based on the work from the
              Payment-Icon project by SnorSnor9998. We appreciate the original
              work and contribution to the open-source community.
            </p>

            <a
              href="https://github.com/SnorSnor9998/Payment-Icon"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-neutral-50"
            >
              View Payment-Icon ↗
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
