import Image from "next/image";
import { FaInstagram, FaTiktok, FaMapMarkerAlt } from "react-icons/fa";

export default function Home() {
  const items = [
    { label: "Classic Cinnamon Roll", src: "/rolls/classic-cinnamon-roll.png" },
    { label: "Oreo Cinnamon Roll", src: "/rolls/oreo-cinnamon-roll.png" },
    { label: "Biscoff Cinnamon Roll", src: "/rolls/biscoff-cinnamon-roll.png" },
    // { label: "Tres Leches Cake", src: "/rolls/tres-leches-cake.png" },
  ];

  return (
    <main suppressHydrationWarning className="bg-navy text-white">
      {/* HERO */}
      <section suppressHydrationWarning className="relative overflow-hidden">
        {/* Decorative halo */}
        <div
          suppressHydrationWarning
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 400px at 60% 10%, rgba(200,161,74,0.18), transparent 60%)",
          }}
        />

        <div className="mx-auto grid max-w-6xl px-6 pt-28 pb-16 md:grid-cols-2 md:gap-10 md:pt-36">
          <div className="relative z-10">
            <h1 className="font-serif text-4xl leading-tight md:text-6xl">
              <span className="text-gold">Royal</span> Cinnamon Crown
            </h1>
            <p className="mt-4 text-white/80 md:text-lg">
              Handcrafted cinnamon rolls and pastries. Premium flavor, accessible luxury.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://royal-cinnamon-crown.square.site/?location_id=L55FAE34VXP2H&fulfillment=PICKUP&utm_source=website&utm_medium=cta&utm_campaign=coming_soon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy transition hover:opacity-90"
              >
                View Menu (Square)
              </a>
              <a
                href="https://www.instagram.com/royalcinnamoncrown/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-gold/50 px-6 py-3 text-sm text-gold transition hover:bg-gold/10"
              >
                Order via Instagram DM
              </a>
            </div>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-3 py-1.5 text-xs text-gold">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
              Website under construction — Orders via Instagram DM
            </div>
          </div>

          {/* Hero image */}
          <div className="relative mt-10 md:mt-0">
            <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur-xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
              <Image suppressHydrationWarning
                src="/rolls/classic.png"
                alt="Classic Cinnamon Roll"
                width={600}
                height={450}
                className="w-full rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section suppressHydrationWarning className="mx-auto max-w-6xl px-6 py-14 md:py-16" id="menu">
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl">Our Rolls &amp; Pastries</h2>
          <p className="mt-3 text-white/70">
            A selection of handcrafted flavors, baked fresh and priced under $5.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ label, src }) => (
            <div
              key={label}
              className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-4 transition hover:bg-white/7"
            >
              <Image suppressHydrationWarning
                src={src}
                alt={label}
                width={400}
                height={300}
                className="w-full rounded-xl object-cover"
              />
              <div className="mt-3 flex items-center justify-between">
                <span className="text-white/90">{label}</span>
                <span className="rounded-full border border-gold/40 px-2 py-0.5 text-[11px] text-gold">
                  Popular
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://royal-cinnamon-crown.square.site/?location_id=L55FAE34VXP2H&fulfillment=PICKUP&utm_source=website&utm_medium=cta&utm_campaign=coming_soon_menu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-gold/50 px-6 py-3 text-sm text-gold transition hover:bg-gold/10"
          >
            See Full Menu on Square
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section suppressHydrationWarning className="relative bg-white/[0.03] ring-1 ring-white/10 py-14 md:py-16" id="about">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-serif text-3xl md:text-4xl">Baked Fresh Daily</h3>
              <p className="mt-3 text-white/75">
                Soft dough, signature glazes, and attention to detail. We focus on high-quality
                ingredients to deliver delicate and memorable flavors.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <video suppressHydrationWarning
                className="w-full h-56 object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/videos/baking-poster.jpg"
                preload="metadata"
              >
                <source src="/videos/baking.webm" type="video/webm" />
                <source src="/videos/baking.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section suppressHydrationWarning className="mx-auto max-w-6xl px-6 py-14 md:py-16" id="location">
        <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-6 md:p-8">
          <h3 className="font-serif text-2xl md:text-3xl flex items-center gap-2">
            <span className="text-gold inline-flex items-center" aria-hidden>
              <FaMapMarkerAlt size={18} />
            </span>
            Pickup — Fontana, CA (ZIP 92336)
          </h3>
          <p className="mt-2 text-white/75">
            Browse our menu on Square and place your order via Instagram DM. Pickup available in the 92336 area of Fontana, CA. Exact pickup location will be shared privately once your order is confirmed.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.instagram.com/royalcinnamoncrown/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-navy transition hover:opacity-90"
            >
              Order via Instagram DM
            </a>
            <a
              href="https://maps.google.com/?q=92336"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-gold/50 px-6 py-3 text-sm text-gold transition hover:bg-gold/10"
            >
              View Map
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/55">
        © 2025 Royal Cinnamon Crown. All rights reserved.
        <div className="mt-3 flex justify-center gap-6">
          <a
            href="https://www.instagram.com/royalcinnamoncrown/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gold hover:text-white transition"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://www.tiktok.com/@royalcinnamoncrown"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gold hover:text-white transition"
          >
            <FaTiktok /> TikTok
          </a>
        </div>
      </footer>
    </main>
  );
}