import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Only public, indexable pages belong here. The secret vault is excluded.
  return [{ url: "https://www.wyrmfernhall.com/" }];
}
