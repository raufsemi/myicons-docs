import type { MetadataRoute } from "next";

import { icons } from "@/lib/icons";

const baseUrl = "https://myicons.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/icons`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contribute`,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    ...icons.map((icon) => ({
      url: `${baseUrl}/icons/${icon.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
