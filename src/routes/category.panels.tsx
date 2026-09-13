import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  FileText,
  Download,
  ExternalLink,
  PanelsTopLeft,
  CheckCircle2,
} from "lucide-react";
import { Header } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { EnquiryForm } from "@/components/enquiry-form";
import { CategoryContactInfo } from "@/components/category-contact-info";

export const Route = createFileRoute("/category/panels")({
  head: () => ({
    meta: [
      {
        title: "Architectural Wall Panels, WPC Louvers & Charcoal Sheets — Delhi",
      },
      {
        name: "description",
        content:
          "Fluted louvers, WPC wall panels, charcoal sheets, and pine grove architectural panels in Jagatpuri, Delhi. Direct wholesale supply from Jindal Timber & Plywood.",
      },
      {
        property: "og:title",
        content: "Architectural Wall Panels & Louvers — Jindal Timber",
      },
      {
        property: "og:description",
        content:
          "Statement wall panels, exterior WPC cladding, and acoustic fluted louvers for modern Delhi homes, offices and commercial facades.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PanelsCategoryPage,
});

const PRODUCTS_LIST = [
  {
    name: "Fluted WPC & Charcoal Louvers",
    description:
      "Modern fluted vertical panel sections for bed backdrops, TV unit walls, and office reception features.",
    pdfTitle: "WPC Louvers & Fluted Panel E-Catalogue (PDF)",
    catalogueUrl: "https://www.greenlam.co.in",
  },
  {
    name: "Exterior WPC Cladding Panels",
    description:
      "Weatherproof, UV-resistant wood polymer composite cladding panels for exterior building facades & balconies.",
    pdfTitle: "Exterior WPC Cladding Technical Specs (PDF)",
    catalogueUrl: "https://www.greenpanel.com",
  },
  {
    name: "Charcoal Pine Grove Sheets",
    description:
      "High-end charcoal acrylic acoustic louvers with metallic and matte wood-grain foil overlays.",
    pdfTitle: "Charcoal Wall Panel Lookbook (PDF)",
    catalogueUrl: "https://www.actiontesa.com",
  },
];

const FEATURES = [
  "100% Water-Proof & Termite-Proof Composite Formulations",
  "Pre-Finished & Ready-to-Install Panels (No Painting or Polishing Required)",
  "Interlocking Groove Mechanisms for Invisible Seamless Joints",
  "UV Resistant Finishes for Exterior Facades, Balconies & Main Doors",
  "Massive Variety of Wood, Metallic, Stone & Solid Charcoal Shades",
];

function PanelsCategoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-deep pt-32 pb-20 text-cream">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://vibe.filesafe.space/1789141610346617454/assets/ed28bc5b-a4fb-495c-8221-458be2938cd2.png"
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
              Statement Elevation
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-cream">
              Architectural Wall Panels <span className="text-gold">&amp; Louvers</span>
            </h1>
            <p className="mt-4 font-body text-base leading-relaxed text-cream/85 sm:text-lg">
              Contemporary fluted louvers, WPC exterior cladding, and charcoal accent sheets that
              create striking architectural statements in residential and commercial spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="border-b border-border bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Wall Cladding Solutions
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-foreground">
                Instant Luxury Elevation with Zero Polishing Rework
              </h2>
              <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
                Replace traditional messy timber slat installation with pre-finished WPC and
                charcoal louvers. Interlocking tongue-and-groove edges conceal screws completely
                while providing superior moisture defense.
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
                Panel Dimensions &amp; Application
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-4 font-body text-sm">
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="font-bold text-primary">Panel Lengths</p>
                  <p className="mt-1 text-muted-foreground">8ft, 9.5ft, 10ft height options</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="font-bold text-primary">Widths</p>
                  <p className="mt-1 text-muted-foreground">120mm to 300mm fluted planks</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="font-bold text-primary">Material</p>
                  <p className="mt-1 text-muted-foreground">WPC Polymer, Charcoal PS Composite</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="font-bold text-primary">Applications</p>
                  <p className="mt-1 text-muted-foreground">
                    TV Wall, Bed Backdrop, Exterior Facade
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogues */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Catalogue Download
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Louvers &amp; Panel Design Collections
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {PRODUCTS_LIST.map((prod) => (
              <div
                key={prod.name}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">{prod.name}</h3>
                  <p className="mt-3 font-body text-xs text-muted-foreground">{prod.description}</p>
                </div>

                <div className="mt-8 border-t border-border pt-4">
                  <a
                    href={prod.catalogueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-4 py-2.5 font-body text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Download className="h-3.5 w-3.5" /> {prod.pdfTitle}{" "}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="enquiry" className="bg-forest-deep py-20 text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Wall Panel Enquiry
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
                Request Wall Panel Samples &amp; Quotes
              </h2>
              <p className="mt-4 font-body text-base text-cream/80">
                Share your wall measurements or design drawings. We provide full louver shade cards
                and wholesale supply in Jagatpuri, Delhi.
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
