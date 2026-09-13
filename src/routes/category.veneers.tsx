import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Download,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Eye,
} from "lucide-react";
import { CategoryContactInfo } from "@/components/category-contact-info";
import { Header } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { EnquiryForm } from "@/components/enquiry-form";

export const Route = createFileRoute("/category/veneers")({
  head: () => ({
    meta: [
      {
        title: "Decorative Natural Wood Veneers — Mikasa & CenturyVeneers | Jindal Timber Delhi",
      },
      {
        name: "description",
        content:
          "Authorised distributor of Mikasa Veneers, CenturyVeneers and natural wood veneers in Jagatpuri, Delhi. Teak, walnut, oak & exotic species for statement interiors. View brand catalogue PDFs.",
      },
      {
        property: "og:title",
        content: "Decorative Natural Wood Veneers — Jindal Timber & Plywood",
      },
      {
        property: "og:description",
        content:
          "Real engineered wood veneers — teak, walnut, oak, smoked & exotic species — with official manufacturer PDF catalogues.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: VeneersCategoryPage,
});

const BRANDS = [
  {
    name: "Mikasa Veneers",
    logo: "https://vibe.filesafe.space/1789141610346617454/assets/563e6066-90b6-40e6-bc05-07a5488e51bd.png",
    tagline: "Real Engineered Wood Veneers",
    highlights: "Teak, Walnut, Oak, Smoked Wood & Exotic Natural Grain Species",
    pdfTitle: "Mikasa Veneers Lookbook & Catalogue (PDF)",
    catalogueUrl: "https://www.mikasaveneers.com",
  },
  {
    name: "CenturyVeneers",
    logo: "https://vibe.filesafe.space/1789141610346617454/assets/d63e2351-baec-4ae4-8de2-5d1edd53cd7e.png",
    tagline: "Premium Natural & Recon Veneer Collections",
    highlights: "Natural, Recon & Exotic Species with Prolam Pre-Finished Options",
    pdfTitle: "CenturyVeneers Catalogue (PDF)",
    catalogueUrl: "https://www.centuryply.com",
  },
  {
    name: "Greenply Veneers",
    logo: "https://vibe.filesafe.space/1789141610346617454/assets/29da15a2-2612-466d-b8c3-3689a2013818.svg",
    tagline: "Sliced Natural Wood Veneer Faces",
    highlights: "European & American Species, Flitch-Matched Sequential Layouts",
    pdfTitle: "Greenply Veneers Shade Guide (PDF)",
    catalogueUrl: "https://www.greenply.com",
  },
];

const EXCLUSIVE_VENEERS = [
  {
    name: "Natural Teak",
    species: "Tectona Grandis",
    desc: "The timeless classic. Tight, straight golden-brown grain with natural oil content that deepens beautifully over decades. The default choice for heritage interiors and executive offices.",
    img: "https://vibe.filesafe.space/1789141610346617454/assets/7af2e81a-0680-445f-9697-b6301d597bdf.png",
    tone: "Golden Brown",
  },
  {
    name: "American Walnut",
    species: "Juglans Nigra",
    desc: "Rich chocolate-brown with flowing cathedral grain. A statement species for luxury wardrobes, headboards, and feature doors where warmth and depth matter.",
    img: "https://vibe.filesafe.space/1789141610346617454/assets/7f433c5f-5a07-4852-92c5-ffe2492326f3.png",
    tone: "Deep Chocolate",
  },
  {
    name: "Smoked Oak",
    species: "Quercus Robur",
    desc: "Fumed oak with moody grey-brown tones and subtle ray fleck figure. A favourite of contemporary architects for minimalist, Scandinavian-inspired interiors.",
    img: "https://vibe.filesafe.space/1789141610346617454/assets/451dd190-347a-4856-a972-730da03734e9.png",
    tone: "Smoky Grey-Brown",
  },
  {
    name: "Exotic Burl",
    species: "Figured Burl",
    desc: "Rare swirling knotted grain in warm amber tones. Each sheet is one-of-a-kind — reserved for the most exclusive panelling, tabletops, and signature furniture pieces.",
    img: "https://vibe.filesafe.space/1789141610346617454/assets/2cb75e20-d3a2-4de4-96e5-98a869b1c20c.png",
    tone: "Warm Amber",
  },
  {
    name: "Birdseye Maple",
    species: "Acer Saccharum",
    desc: "Light creamy veneer with a distinctive pimpled 'birdseye' figure. Bright, elegant, and luminous — ideal for light-toned modern interiors and contrast detailing.",
    img: "https://vibe.filesafe.space/1789141610346617454/assets/478786dd-d689-49b6-9d54-9ecc1585c632.png",
    tone: "Creamy Pale",
  },
];

const FEATURES = [
  "Real sliced natural wood veneers sourced from sustainable European & American species",
  "Flitch-matched & sequential layouts for continuous grain flow across large panels",
  "Available in Teak, Walnut, Oak, Maple, Smoked & exotic burl species",
  "Prolam pre-finished options ready for direct lamination — no polishing required",
  "Full sheet displays & sample folders available at Jagatpuri, Delhi showroom",
];

function ExclusiveVeneerGallery() {
  const [active, setActive] = useState(0);
  const current = EXCLUSIVE_VENEERS[active];

  const go = (dir: number) => {
    setActive((prev) => (prev + dir + EXCLUSIVE_VENEERS.length) % EXCLUSIVE_VENEERS.length);
  };

  return (
    <section className="border-b border-border bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <Eye className="h-4 w-4" /> Exclusive Collection
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Explore Our Veneers, One Grain at a Time
          </h2>
          <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
            Click through each species to view its grain up close. Every veneer below is available
            on order at our Jagatpuri showroom — book-matched and ready for your next project.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Large display */}
          <div className="lg:col-span-3">
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-background shadow-[0_20px_60px_-30px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[4/3]">
                {EXCLUSIVE_VENEERS.map((v, i) => (
                  <img
                    key={v.name}
                    src={v.img}
                    alt={`${v.name} veneer — ${v.species}`}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                      i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
                    }`}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />

                {/* Prev / Next */}
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous veneer"
                  className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-cream/30 bg-charcoal/40 text-cream backdrop-blur-sm transition-all hover:bg-charcoal/70"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next veneer"
                  className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-cream/30 bg-charcoal/40 text-cream backdrop-blur-sm transition-all hover:bg-charcoal/70"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="font-body text-xs font-medium uppercase tracking-[0.18em] text-gold">
                        {current.tone}
                      </p>
                      <h3 className="mt-1 font-display text-2xl font-bold text-cream">
                        {current.name}
                      </h3>
                      <p className="font-body text-xs italic text-cream/70">{current.species}</p>
                    </div>
                    <span className="hidden rounded-full border border-cream/30 bg-cream/10 px-3 py-1 font-body text-xs font-semibold text-cream backdrop-blur-sm sm:block">
                      {active + 1} / {EXCLUSIVE_VENEERS.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description below large image */}
            <div className="mt-5 rounded-xl border border-border bg-background p-5">
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {current.desc}
              </p>
            </div>
          </div>

          {/* Thumbnail list */}
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-3">
              {EXCLUSIVE_VENEERS.map((v, i) => (
                <button
                  key={v.name}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-4 rounded-xl border p-3 text-left transition-all ${
                    i === active
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-border bg-background hover:border-primary/40 hover:bg-sand/50"
                  }`}
                >
                  <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg">
                    <img
                      src={v.img}
                      alt={v.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    {i === active && (
                      <div className="absolute inset-0 ring-2 ring-primary ring-inset" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p
                      className={`font-display text-sm font-bold ${
                        i === active ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {v.name}
                    </p>
                    <p className="mt-0.5 font-body text-xs text-muted-foreground">{v.tone}</p>
                  </div>
                  {i === active && <ChevronRight className="h-4 w-4 shrink-0 text-primary" />}
                </button>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-border bg-sand p-4">
              <p className="font-body text-xs leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Tip:</span> Tap a species or use the
                arrows to browse. Visit our showroom for full 8×4 ft sheet displays and sample
                folders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VeneersCategoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-deep pt-32 pb-20 text-cream">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://vibe.filesafe.space/1789141610346617454/assets/5f6f6c28-ed38-4175-972e-a965a1779a46.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-wider text-gold hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to All Categories
          </Link>
          <div className="mt-6 max-w-3xl">
            <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 font-body text-xs font-medium text-gold">
              Natural Wood Surfaces
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-cream">
              Decorative <span className="text-gold">Wood Veneers</span>
            </h1>
            <p className="mt-4 font-body text-base leading-relaxed text-cream/85 sm:text-lg">
              Authorized distributor of Mikasa Veneers, CenturyVeneers, and Greenply natural
              veneers. Bring the warmth and authenticity of real wood grain to statement doors, wall
              panels, and bespoke furniture.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/category/laminates"
                className="inline-flex items-center gap-2 rounded-lg border border-cream/30 px-4 py-2 font-body text-xs font-semibold text-cream transition-colors hover:bg-cream/10"
              >
                Looking for Laminates? →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & specs */}
      <section className="border-b border-border bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Category Highlights
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-foreground">
                Authentic Wood Grain for Fine Interiors
              </h2>
              <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
                Natural veneers are thin slices of real wood bonded to a substrate, delivering the
                genuine look, feel, and warmth of solid timber at a fraction of the cost. Unlike
                printed laminates, every veneer sheet carries a unique, natural grain pattern.
              </p>

              <ul className="mt-6 space-y-3 font-body text-sm text-foreground">
                {FEATURES.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-sand p-8">
              <h3 className="font-display text-xl font-bold text-foreground">
                Veneer Specifications
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-4 font-body text-sm">
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="font-bold text-primary">Standard Sheet Size</p>
                  <p className="mt-1 text-muted-foreground">8ft x 4ft (8x4 ft)</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="font-bold text-primary">Veneer Thickness</p>
                  <p className="mt-1 text-muted-foreground">0.5mm – 4mm Sliced Wood</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="font-bold text-primary">Popular Species</p>
                  <p className="mt-1 text-muted-foreground">Teak, Walnut, Oak, Smoked, Burl</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="font-bold text-primary">Match Types</p>
                  <p className="mt-1 text-muted-foreground">Book, Slip, Flitch & Sequential</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive veneer gallery — click through species one by one */}
      <ExclusiveVeneerGallery />

      {/* Brands & PDF Catalogues */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Distributor Network
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Veneer Brand Collections &amp; Catalogues
            </h2>
            <p className="mt-3 font-body text-base text-muted-foreground">
              Click below to view or download full PDF shade cards directly from our distributor
              brands.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-28 items-center justify-center rounded-lg border border-border bg-white p-2">
                        <img
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                      <h3 className="font-display text-base font-bold text-foreground">
                        {brand.name}
                      </h3>
                    </div>
                    <Sparkles className="h-5 w-5 shrink-0 text-gold" />
                  </div>
                  <p className="mt-2 font-body text-xs font-medium text-walnut">{brand.tagline}</p>

                  <div className="mt-4 font-body text-xs text-muted-foreground">
                    <p className="font-semibold text-foreground">Species & Finishes:</p>
                    <p className="mt-1">{brand.highlights}</p>
                  </div>
                </div>

                <div className="mt-8 border-t border-border pt-4">
                  <a
                    href={brand.catalogueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-3 py-2.5 font-body text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Download className="h-3.5 w-3.5" /> Catalogue PDF{" "}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Enquiry Form Section */}
      <section id="enquiry" className="bg-forest-deep py-20 text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Veneer Enquiry
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
                Get Wholesale Rates &amp; Sample Folders
              </h2>
              <p className="mt-4 font-body text-base text-cream/80">
                Share your species, code number, or project area. We supply full brand folders and
                shade cards to architects and contractors.
              </p>
              <CategoryContactInfo />
            </div>
            <EnquiryForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
