import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#062b20] text-[#f4e9cb]">
      <h1 className="sr-only">Wyrmfern Hall — Coming Soon</h1>

      <section
        aria-label="Welcome to Wyrmfern Hall"
        className="flex flex-1 items-center justify-center"
      >
        <div className="relative aspect-video w-full max-w-[1800px]">
          <Image
            src="/images/wyrmfern-coming-soon.png"
            alt="A golden dragon guards an open book in an enchanted forest. Wyrmfern Hall. A little wonder. A world of learning. Coming soon."
            fill
            priority
            sizes="100vw"
            className="object-contain"
          />
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-6 py-10 text-center sm:py-14">
        <h2 className="font-serif text-2xl sm:text-3xl">
          An adventure in learning is taking shape.
        </h2>
        <p className="mt-4 text-base leading-7 text-[#d3dfd2] sm:text-lg">
          Reading, mathematics, science, and creative discoveries
          for curious young minds.
        </p>
        <p className="mt-4 text-sm leading-6 text-[#c5d0c3]">
          Visit again for news from the Hall.
        </p>
      </section>

      <footer className="border-t border-[#d4b56a]/20 px-6 py-5 text-center text-xs text-[#c5d0c3]">
        © 2026 Wyrmfern Hall
      </footer>
    </main>
  );
}
