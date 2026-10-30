import SecretPassage from "../components/SecretPassage";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#062b20] text-[#f4e9cb]">
      <h1 className="sr-only">Wyrmfern Hall — Coming Soon</h1>

      <section aria-label="Welcome to Wyrmfern Hall">
        <picture className="mx-auto block aspect-[2/3] w-full max-w-[1800px] md:aspect-video">
          <source
            media="(max-width: 767px)"
            srcSet="/images/wyrmfern-coming-soon-mobile.png"
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/wyrmfern-coming-soon.png"
            alt="A golden dragon guards an open book in an enchanted forest. Wyrmfern Hall. A little wonder. A world of learning. Coming soon."
            width={1672}
            height={941}
            fetchPriority="high"
            className="block h-full w-full object-contain"
          />
        </picture>
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

      <SecretPassage />
      <footer className="border-t border-[#d4b56a]/20 px-6 py-5 text-center text-xs text-[#c5d0c3]">
        © 2026 Wyrmfern Hall
      </footer>
    </main>
  );
}
