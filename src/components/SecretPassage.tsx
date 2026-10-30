"use client";

import { useRouter } from "next/navigation";

export default function SecretPassage() {
  const router = useRouter();
  function enter() {
    try { sessionStorage.setItem("wyrmfern-passage", "open"); }
    catch { /* Browsers with storage disabled can still enter this visit. */ }
    router.push("/lantern-vault?passage=star");
  }
  return (
    <div className="flex flex-col items-center pb-5 text-center">
      <p className="font-serif text-sm italic text-[#c5d0c3]">Some stars are doors in disguise.</p>
      <button type="button" onClick={enter} aria-label="Open the secret passage"
        className="mt-2 grid min-h-12 min-w-12 cursor-pointer place-items-center rounded-full border border-[#d4b56a]/40 text-3xl text-[#e7c778] transition hover:scale-110 hover:bg-[#d4b56a]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e7c778] motion-reduce:transform-none">
        <span aria-hidden="true">✦</span>
      </button>
    </div>
  );
}
