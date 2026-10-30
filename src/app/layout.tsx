import type { Metadata } from "next";
import "./globals.css";

import { siteMetadata } from "./seo";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0 antialiased">{children}</body>
    </html>
  );
}
