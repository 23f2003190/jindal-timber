import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  FileText,
  Download,
  ExternalLink,
  ShieldCheck,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { Header } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { EnquiryForm } from "@/components/enquiry-form";
import { CategoryContactInfo } from "@/components/category-contact-info";

export const Route = createFileRoute("/category/plywood")({
  head: () => ({
    meta: [
      {
        title: "Premium Plywood (Marine & MR Grade) — Jindal Timber & Plywood Delhi",
      },
      {
        name: "description",
        content:
          "Wholesale supplier of Borer & Termite Proof Marine Grade (BWP) and Moisture Resistant (MR) Plywood in Jagatpuri, Delhi. Authorised dealers of CenturyPly, Greenply, and Kanchan Plywood.",
      },
      {
        property: "og:title",
        content: "Premium Plywood Range — Jindal Timber & Plywood",
      },
      {
        property: "og:description",
        content:
          "Calibrated, termite-proof plywood for structural and interior projects in Delhi NCR. Direct authorized distribution for CenturyPly, Greenply, and Kanchan.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PlywoodCategoryPage,
});

const BRANDS = [
  {
    name: "CenturyPly",
    logo: "https://vibe.filesafe.space/1789141610346617454/assets/d63e2351-baec-4ae4-8de2-5d1edd53cd7e.png",
    tagline: "India's Most Trusted Plywood Brand",
    grades: "Club Prime, Bond 710, Sainik 710, Architect Ply",
    warranty: "Up to 30 Years / Lifetime Warranty",
    catalogueUrl: "https://www.centuryply.com/e-catalogue",
    pdfTitle: "CenturyPly Master Range Catalogue (PDF)",
  },
  {
    name: "Greenply",
    logo: "https://vibe.filesafe.space/1789141610346617454/assets/29da15a2-2612-466d-b8c3-3689a2013818.svg",
    tagline: "Zero Emission & Termite Proof Plywood",
    grades: "Green Club 500, Green Platinum, Green Gold, Ecotec",
    warranty: "Zero Emission E-0 Grade Certified",
    catalogueUrl: "https://www.greenply.com/e-catalogues",
    pdfTitle: "Greenply Technical & Product Guide (PDF)",
  },
  {
    name: "Kanchan Plywood",
    logo: "https://vibe.filesafe.space/1789141610346617454/assets/0fb27a34-fc10-4ce1-8829-2c309c4f5cc8.png",
    tagline: "Heavy-Duty Calibrated Marine Plywood",
    grades: "BWP Grade Marine Ply, Commercial MR Grade, Shuttering Ply",
    warranty: "100% Hardwood Core Guarantee",
    catalogueUrl: "https://www.kanchanplywood.com",
    pdfTitle: "Kanchan Plywood Product Specification Sheet (PDF)",
  },
];

const FEATURES = [
  "100% Borer & Termite Proof with Quad-Press Technology",
  "Calibrated Uniform Thickness for Flawless CNC & Edge Banding",
  "Boiling Water Proof (BWP IS:710) and Moisture Resistant (MR IS:303) Grades",
  "Zero Gap Core & High Screw-Holding Capacity for Heavy Joinery",
  "Wholesale Bulk Availability Direct from Jagatpuri Showroom",
];

const GALLERY = [
  {
    img: "https://vibe.filesafe.space/1789141610346617454/assets/935ea485-31de-49ac-8b56-34cb6f059301.png",
    alt: "Macro close-up of premium plywood edge grain showing stacked veneer layers",
    caption: "Calibrated Multi-Layer Veneer Core",
  },
  {
    img: "https://vibe.filesafe.space/1789141610346617454/assets/84939530-649d-4ce4-9ebc-437105001494.png",
    alt: "Neatly stacked premium marine grade plywood sheets in showroom",
    caption: "Wholesale Stock at Jagatpuri",
  },
  {
    img: "https://vibe.filesafe.space/1789141610346617454/assets/6afb900c-5afd-426e-99a0-f502a4454fa3.png",
    alt: "Close-up of smooth sanded calibrated plywood surface texture",
    caption: "Smooth Sanded Hardwood Face",
  },
  {
    img: "https://vibe.filesafe.space/1789141610346617454/assets/3039fa46-17c9-4f6e-8232-f0604d449ec8.png",
    alt: "Plywood used in modern modular kitchen interior construction",
    caption: "Engineered for Modular Interiors",
  },
];

function PlywoodCategoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-deep pt-32 pb-20 text-cream">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://vibe.filesafe.space/1789141610346617454/assets/7bc5eb0b-a025-4145-9857-5a4bf8e0bb94.png"
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
              Core Material Catalogue
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-cream">
              Premium Plywood <span className="text-gold">(Marine &amp; MR Grade)</span>
            </h1>
            <p className="mt-4 font-body text-base leading-relaxed text-cream/85 sm:text-lg">
              Engineered structural plywood designed for long-lasting interiors, kitchens, wardrobe
              carcasses, and demanding architectural projects in Delhi NCR. Tested against moisture,
              borers, termites, and seasonal warping.
            </p>
          </div>
        </div>
      </section>

      {/* Plywood Visual Gallery */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Material Gallery
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
              A Closer Look at Our Plywood
            </h2>
            <p className="mt-3 font-body text-base text-muted-foreground">
              From calibrated edge grain to finished interiors — the quality you can see and feel.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {GALLERY.map((g, i) => (
              <figure
                key={i}
                className={`group relative overflow-hidden rounded-2xl border border-border shadow-sm ${
                  i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <img
                  src={g.img}
                  alt={g.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    i === 0 ? "h-full min-h-[260px]" : "aspect-[4/3]"
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
                <figcaption className="absolute bottom-4 left-4 right-4">
                  <p className="font-display text-sm font-bold text-cream">{g.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Key specifications & details */}
      <section className="border-b border-border bg-card py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Category Overview
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-foreground">
                Engineered Strength for Architects &amp; Contractors
              </h2>
              <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
                At Jindal Timber &amp; Plywood, we supply calibrated marine-grade and MR-grade
                plywood that guarantees smooth surfaces, tight joints, and structural stability.
                Unlike low-grade uncalibrated sheets that bow or delaminate, our premium ply range
                ensures your interior shutters and carcasses stay true for decades.
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
                Available Thicknesses &amp; Sizes
              </h3>
              <p className="mt-2 font-body text-sm text-muted-foreground">
                Ready wholesale stock at our Jagatpuri, Delhi showroom:
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4 font-body text-sm">
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="font-bold text-primary">Standard Sizes</p>
                  <p className="mt-1 text-muted-foreground">
                    8ft x 4ft, 7ft x 4ft, 8ft x 3ft, 7ft x 3ft
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="font-bold text-primary">Thickness Range</p>
                  <p className="mt-1 text-muted-foreground">
                    6mm, 9mm, 12mm, 16mm, 18mm, 19mm, 25mm
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="font-bold text-primary">Grades</p>
                  <p className="mt-1 text-muted-foreground">
                    BWP (IS:710 Marine) &amp; MR (IS:303 Commercial)
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="font-bold text-primary">Application</p>
                  <p className="mt-1 text-muted-foreground">
                    Kitchens, Wardrobes, Beds, Wall Panelling
                  </p>
                </div>
              </div>
            </div>
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
              Authorized Brands &amp; Digital Catalogues
            </h2>
            <p className="mt-3 font-body text-base text-muted-foreground">
              Direct factory supply from India's most trusted plywood manufacturers with genuine
              warranties.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
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
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {brand.name}
                      </h3>
                    </div>
                    <ShieldCheck className="h-6 w-6 shrink-0 text-primary" />
                  </div>
                  <p className="mt-2 font-body text-xs font-medium text-walnut">{brand.tagline}</p>

                  <div className="mt-6 space-y-3 font-body text-sm">
                    <div>
                      <p className="font-semibold text-foreground">Featured Ranges:</p>
                      <p className="text-xs text-muted-foreground">{brand.grades}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Warranty / Certifications:</p>
                      <p className="text-xs text-muted-foreground">{brand.warranty}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-border pt-4">
                  <p className="font-body text-xs font-semibold text-foreground mb-2 flex items-center gap-1.5">
                    <FileText className="h-4 w-4 text-primary" /> Download / View E-Catalogue:
                  </p>
                  <a
                    href={brand.catalogueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-4 py-2.5 font-body text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Download className="h-3.5 w-3.5" /> {brand.pdfTitle}{" "}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-border bg-card p-8 text-center sm:flex sm:items-center sm:justify-between sm:text-left">
            <div>
              <h3 className="font-display text-lg font-bold text-foreground">
                Need wholesale bulk rate for a project?
              </h3>
              <p className="mt-1 font-body text-sm text-muted-foreground">
                Get factory-direct pricing for contractors, interior firms, and commercial builds.
              </p>
            </div>
            <a
              href="#enquiry"
              className="mt-4 sm:mt-0 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Request Bulk Rate Quote
            </a>
          </div>
        </div>
      </section>

      {/* Direct Enquiry Form Section */}
      <section id="enquiry" className="bg-forest-deep py-20 text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Plywood Order Enquiry
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
                Get Wholesale Rates for Plywood Sheets
              </h2>
              <p className="mt-4 font-body text-base text-cream/80">
                Specify your brand preference, thickness, grade (BWP/MR), and required quantity. Our
                team will send price quotes and stock confirmation promptly.
              </p>
              <CategoryContactInfo showAddress />
            </div>
            <EnquiryForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
