import { NavBar } from "@/components/NavBar";
import { IconSearch } from "@/components/IconSearch";

export default function IconsPage() {
  return (
    <>
      <NavBar />

      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <h1 className="text-4xl font-semibold tracking-tight">Icons</h1>

          <p className="mt-3 text-base text-neutral-500">
            Browse the MyIcons collection.
          </p>
        </div>

        <IconSearch />
      </main>
    </>
  );
}
