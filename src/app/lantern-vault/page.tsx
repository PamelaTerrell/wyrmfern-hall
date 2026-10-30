import type { Metadata } from "next";
import LanternVault from "./vault";

export const metadata: Metadata = {
  title: "The Lantern Vault | Wyrmfern Hall",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <LanternVault />;
}
