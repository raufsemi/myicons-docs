"use client";

import { useState } from "react";
import Link from "next/link";

import { icons } from "@/lib/icons";

export function IconSearch() {
  const [query, setQuery] = useState("");

  const filteredIcons = icons.filter((icon) => {
    const search = query.toLowerCase().trim();

    if (!search) return true;

    return (
      icon.name.toLowerCase().includes(search) ||
      icon.category.toLowerCase().includes(search)
    );
  });

  return (
    <div>
      {/* Search */}
      <div className="relative">
        <svg
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>

        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search icons..."
          className="h-12 w-full rounded-xl border border-neutral-200 bg-white pl-12 pr-4 text-sm outline-none transition-all placeholder:text-neutral-400 focus:border-neutral-400 focus:ring-4 focus:ring-neutral-100"
        />
      </div>

      {/* Results */}
      <div className="mt-8">
        {filteredIcons.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-sm font-medium">No icons found</p>
            <p className="mt-1 text-sm text-neutral-500">
              Try a different search.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-200 sm:grid-cols-3 lg:grid-cols-4">
            {filteredIcons.map((icon) => {
              const Icon = icon.component;

              return (
                <Link
                  key={icon.slug}
                  href={`/icons/${icon.slug}`}
                  className="group bg-white p-6 transition-colors hover:bg-neutral-50"
                >
                  <div className="flex aspect-square items-center justify-center">
                    <Icon
                      size={48}
                      className="transition-transform duration-200 group-hover:scale-110"
                    />
                  </div>

                  <div className="mt-5">
                    <p className="text-sm font-medium">{icon.name}</p>

                    <p className="mt-1 text-xs text-neutral-500">
                      {icon.category}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
