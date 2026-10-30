import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://www.wyrmfernhall.com"),
  title: "Wyrmfern Hall | Magical Learning for Kids — Coming Soon",
  description: "Discover Wyrmfern Hall, an upcoming magical learning world for kids, with reading, math, science, creative activities, and adventures for curious minds.",
  applicationName: "Wyrmfern Hall",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Wyrmfern Hall",
    title: "Wyrmfern Hall | A World of Learning",
    description: "A little wonder. A world of learning. Magical reading, math, science, and creative adventures are taking shape for curious young minds.",
    images: [{
      url: "/images/wyrmfern-coming-soon.png",
      alt: "Wyrmfern Hall: a gold dragon guarding an open book in an enchanted forest. Coming soon.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wyrmfern Hall | A World of Learning",
    description: "An upcoming magical learning world for curious kids. Reading, math, science, and creative adventures.",
    images: ["/images/wyrmfern-coming-soon.png"],
  },
};

// Keep homepage-specific canonical settings off the root layout so future
// pages do not accidentally inherit the homepage's canonical URL.
export const homeMetadata: Metadata = {
  alternates: { canonical: "https://www.wyrmfernhall.com/" },
  openGraph: { ...siteMetadata.openGraph, url: "https://www.wyrmfernhall.com/" },
};
