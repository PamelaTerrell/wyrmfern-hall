import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wyrmfern Hall | Coming Soon",
  description:
    "A magical learning world is taking shape. Reading, mathematics, science, and creative adventures for curious young minds.",
};

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
