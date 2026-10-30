import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { siteMetadata } from "./seo";
import "./globals.css";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-0 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}