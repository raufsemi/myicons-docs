import Link from "next/link";
import { notFound } from "next/navigation";

import { icons } from "@/lib/icons";
import { NavBar } from "@/components/NavBar";
import { IconPlayground } from "@/components/IconPlayground";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function IconPage({ params }: Props) {
  const { slug } = await params;

  const icon = icons.find((icon) => icon.slug === slug);

  if (!icon) {
    notFound();
  }

  return (
    <>
      <NavBar />

      <main className="mx-auto max-w-7xl px-6 py-12">
        <Link
          href="/icons"
          className="text-sm text-neutral-500 hover:text-black"
        >
          ← Back to icons
        </Link>

        <div className="mt-10">
          <p className="text-sm text-neutral-500">{icon.category}</p>

          <h1 className="mt-2 text-4xl font-semibold tracking-tight">
            {icon.name}
          </h1>
        </div>

        <div className="mt-12">
          <IconPlayground icon={icon.slug} />
        </div>
      </main>
    </>
  );
}
