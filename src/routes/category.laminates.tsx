import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Download, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { EnquiryForm } from "@/components/enquiry-form";
import { CategoryContactInfo } from "@/components/category-contact-info";

export const Route = createFileRoute("/category/laminates")({
  head: () => ({
    meta: [
      {
        title: "High-Pressure Laminates — Greenlam, Mikasa & Merino | Jindal Timber Delhi",
      },
      {
        name: "description",
        content:
          "Authorised distributor of Greenlam Laminates, Mikasa Laminates and Merinolam in Jagatpuri, Delhi. 1mm & 0.8mm HPL sheets in 1000+ shades. View and download brand catalogue PDFs.",
      },
      {
        property: "og:title",
        content: "High-Pressure Decorative Laminates — Jindal Timber & Plywood",
      },
      {
        property: "og:description",
        content:
          "1mm & 0.8mm high-pressure laminates with anti-bacterial, scratch & heat resistant surfaces. Official brand PDF catalogues.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LaminatesCategoryPage,
});

const BRANDS = [
  {
    name: "Greenlam Laminates",
    logo: "https://vibe.filesafe.space/1789141610346617454/assets/b3f5a039-900a-48b7-bc37-82b1457a41d8.png",
    tagline: "World's Leading High-Pressure Laminate Brand",
    highlights: "1mm Decorative Laminates, Anti-Bacterial, Scratch Resistant, HD Textures",
    pdfTitle: "Greenlam Master Laminate Catalogue (PDF)",
    catalogueUrl: "https://www.greenlam.co.in/catalogue",
  },
  {
    name: "Mikasa Laminates",
    logo: "https://vibe.filesafe.space/1789141610346617454/assets/563e6066-90b6-40e6-bc05-07a5488e51bd.png",
    tagline: "Premium Architectural Surface Collections",
    highlights: "Abstract Finishes, Metallic Textures, Matte & High Gloss Sheets",
    pdfTitle: "Mikasa Laminates Collection Guide (PDF)",
    catalogueUrl: "https://www.mikasalaminates.com",
  },
  {
    name: "Merino Laminates",
    logo: "https://vibe.filesafe.space/1789141610346617454/assets/4a077d8d-a9f7-481b-aa9b-a19143cd7efd.png",
    tagline: "Merinolam & Speciality Architectural Surfaces",
    highlights: "Luvih Anti-Fingerprint, High Gloss Tuff, Digital & Compact Laminates",
    pdfTitle: "Merinolam Complete Catalogue (PDF)",
    catalogueUrl: "https://www.merinolam.com",
  },
];

const FEATURES = [
  "Over 1000+ shades, textures, woodgrains & high-gloss finishes in stock",
  "Anti-bacterial & anti-microbial surface treatments for healthy interiors",
  "Scratch, impact & heat resistant high-pressure laminates (1mm & 0.8mm)",
  "Speciality finishes: suede, matte, metallic, stone & digital prints",
  "Full sheet displays available at Jagatpuri, Delhi showroom",
];

const THICKNESS = [
  {
    grade: "1.5mm",
    tag: "Heavy Duty",
    title: "Premium Compact Grade",
    description:
      "The thickest decorative laminate — engineered for high-impact vertical surfaces, doors, and self-supporting panels that demand rigidity and longevity.",
    uses: [
      "Door shutters & modular wardrobe doors",
      "High-traffic commercial wall cladding",
      "Self-supporting partitions & cubicles",
    ],
  },
  {
    grade: "1.25mm",
    tag: "Architectural",
    title: "Enhanced Durability Grade",
    description:
      "A robust mid-heavy specification offering extra surface strength for areas exposed to frequent contact, abrasion, and wear.",
    uses: [
      "Office furniture & workstations",
      "Restaurant & hospitality counters",
      "Public interior wall panels",
    ],
  },
  {
    grade: "1.0mm",
    tag: "Standard",
    title: "General Purpose Grade",
    description:
      "The industry-standard decorative laminate — the ideal balance of durability, finish quality, and cost for most residential and commercial interiors.",
    uses: [
      "Modular kitchen shutters & cabinets",
      "Wardrobe exteriors & furniture",
      "Table & counter tops",
    ],
  },
  {
    grade: "0.8mm",
    tag: "Economy",
    title: "Light Decorative Grade",
    description:
      "A thinner decorative laminate suited for low-wear vertical applications where premium aesthetics are required without the cost of heavier grades.",
    uses: [
      "Interior wall paneling & accents",
      "Furniture side panels",
      "Decorative vertical surfaces",
    ],
  },
  {
    grade: "0.7mm",
    tag: "Liner",
    title: "Balancing Liner Grade",
    description:
      "A thin liner laminate applied to the reverse side of panels to balance stresses and prevent warping — essential for maintaining flat, stable shutters.",
    uses: [
      "Balancing reverse of doors & shutters",
      "Anti-warp application on panels",
      "Interior concealed surfaces",
    ],
  },
];

function LaminatesCategoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-deep pt-32 pb-20 text-cream">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://vibe.filesafe.space/1789141610346617454/assets/efc1abe0-1ad8-4b46-8496-9e01532f30ef.png"
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
              Surface Finishes
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-cream">
              High-Pressure <span className="text-gold">Laminates</span>
            </h1>
            <p className="mt-4 font-body text-base leading-relaxed text-cream/85 sm:text-lg">
              Authorized distributor of Greenlam, Mikasa Laminates, and Merinolam. Durable,
              decorative HPL sheets engineered for modular kitchens, wardrobes, and high-traffic
              commercial surfaces.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/category/veneers"
                className="inline-flex items-center gap-2 rounded-lg border border-cream/30 px-4 py-2 font-body text-xs font-semibold text-cream transition-colors hover:bg-cream/10"
              >
                Looking for Natural Veneers? →
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
                Durable Decorative Surfaces for Every Interior
              </h2>
              <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
                High-pressure laminates (HPL) are manufactured by pressing decorative paper
                saturated with resin under high heat and pressure. The result is a hard, durable
                surface that resists scratches, stains, and heat — ideal for modular kitchens and
                commercial furniture.
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
                Laminate Specifications
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-4 font-body text-sm">
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="font-bold text-primary">Standard Sheet Size</p>
                  <p className="mt-1 text-muted-foreground">8ft x 4ft (8x4 ft)</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="font-bold text-primary">Thickness</p>
                  <p className="mt-1 text-muted-foreground">1.0mm &amp; 0.8mm Premium</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="font-bold text-primary">Finish Options</p>
                  <p className="mt-1 text-muted-foreground">Suede, Gloss, Matt, Metallic, Stone</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="font-bold text-primary">Shades Available</p>
                  <p className="mt-1 text-muted-foreground">1000+ Solids, Woodgrains & Textures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thickness Sub-Categories */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Thickness Range
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Laminates by Thickness
            </h2>
            <p className="mt-3 font-body text-base text-muted-foreground">
              We stock the complete thickness range — from heavy-duty 1.5mm sheets to balancing
              liner grades. Select the right specification for your application.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {THICKNESS.map((t) => (
              <div
                key={t.grade}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-2xl font-extrabold text-primary">
                    {t.grade}
                  </span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 font-body text-[11px] font-semibold uppercase tracking-wider text-primary">
                    {t.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">{t.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                  {t.description}
                </p>
                <ul className="mt-4 space-y-1.5 font-body text-xs text-foreground/80">
                  {t.uses.map((u) => (
                    <li key={u} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {u}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands & PDF Catalogues */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Distributor Network
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Laminate Brand Collections &amp; Catalogues
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
                    <p className="font-semibold text-foreground">Features:</p>
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
                Laminate Enquiry
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
                Get Wholesale Rates &amp; Shade Cards
              </h2>
              <p className="mt-4 font-body text-base text-cream/80">
                Share your shade code, finish requirement, or project area. We supply full brand
                folders and shade cards to architects and contractors.
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
