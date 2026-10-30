import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Allow crawling so engines can read the vault's existing noindex tag.
  // robots.txt controls crawling; it is not access control.
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.wyrmfernhall.com/sitemap.xml",
  };
}
