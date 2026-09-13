import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, FileText, Download, ExternalLink, Building2, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { EnquiryForm } from "@/components/enquiry-form";
import { CategoryContactInfo } from "@/components/category-contact-info";

export const Route = createFileRoute("/category/boards")({
  head: () => ({
    meta: [
      {
        title: "HDHMR & MDF Boards — Wholesale Supplier Delhi | Jindal Timber",
      },
      {
        name: "description",
        content:
          "High Density High Moisture Resistance (HDHMR) and MDF boards supplier in Jagatpuri, Delhi. Action TESA, Century Prowud, Greenpanel & Greenply HDHMR for precision CNC & modular kitchens.",
      },
      {
        property: "og:title",
        content: "HDHMR & MDF Boards — Jindal Timber & Plywood",
      },
      {
        property: "og:description",
        content:
          "Precision-machined moisture resistant boards for modern modular furniture, kitchens, and CNC routings.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BoardsCategoryPage,
});

const BRANDS = [
  {
    name: "Action TESA HDHMR",
    logo: "https://vibe.filesafe.space/1789141610346617454/assets/7dd5971c-c767-4d99-a823-aae930f0b614.png",
    tagline: "Pioneer in High Density Moisture Resistant Boards",
    description:
      "High density (>850 kg/m³) engineered boards ideal for kitchen shutters, bathroom cabinets, and CNC carving.",
    pdfTitle: "Action TESA HDHMR Technical Guide (PDF)",
    catalogueUrl: "https://www.actiontesa.com",
  },
  {
    name: "Greenpanel HDHMR & MDF",
    logo: "https://vibe.filesafe.space/1789141610346617454/assets/29da15a2-2612-466d-b8c3-3689a2013818.svg",
    tagline: "India's Largest Wood Panel Manufacturer",
    description:
      "Ultra-smooth surface density, zero emission E1 grade, and superior screw retention strength.",
    pdfTitle: "Greenpanel Product Catalogue (PDF)",
    catalogueUrl: "https://www.greenpanel.com",
  },
  {
    name: "Century Prowud MDF",
    logo: "https://vibe.filesafe.space/1789141610346617454/assets/d63e2351-baec-4ae4-8de2-5d1edd53cd7e.png",
    tagline: "Premium High Density Fibreboard",
    description:
      "Homogeneous density core with excellent routability, moisture defense, and termite resistance.",
    pdfTitle: "Century Prowud MDF Brochure (PDF)",
    catalogueUrl: "https://www.centuryply.com",
  },
];

const FEATURES = [
  "High Density Core (>850 kg/m³) prevents chipping during deep CNC routing",
  "Superior Moisture Resistance for kitchen cabinets & high-humidity zones",
  "Homogeneous surface provides mirror-like finish for PU paint & acrylic lamination",
  "Termite, Borer & Fungus Resistant formulation throughout the board density",
  "Wholesale ready stock at Jagatpuri, Delhi showroom for immediate site delivery",
];

function BoardsCategoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-forest-deep pt-32 pb-20 text-cream">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://vibe.filesafe.space/1789141610346617454/assets/bec3e443-47f8-49bf-8354-d5f511252604.png"
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
              Engineered Wood Panels
            </span>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl text-cream">
              HDHMR <span className="text-gold">&amp; MDF Boards</span>
            </h1>
            <p className="mt-4 font-body text-base leading-relaxed text-cream/85 sm:text-lg">
              High Density High Moisture Resistance (HDHMR) and MDF boards engineered for precision
              CNC routing, PU lacquer paint finishes, modular kitchen shutters, and interior
              wardrobes.
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
                Technical Superiority
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold text-foreground">
                Why Contractors Prefer HDHMR Over Conventional Particle Boards
              </h2>
              <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
                HDHMR boards combine the density of solid timber with the smooth finish of
                engineered fibreboards. Unlike particle board or standard MDF, HDHMR resists
                moisture absorption and holds screws firmly even after repeated door operations.
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
                Specifications &amp; Stock Availability
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-4 font-body text-sm">
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="font-bold text-primary">Sheet Sizes</p>
                  <p className="mt-1 text-muted-foreground">8ft x 4ft, 7ft x 4ft</p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="font-bold text-primary">Thickness Range</p>
                  <p className="mt-1 text-muted-foreground">
                    3mm, 5.5mm, 8mm, 11mm, 12mm, 16.75mm, 18mm
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="font-bold text-primary">Core Types</p>
                  <p className="mt-1 text-muted-foreground">
                    Green Core HDHMR, Exterior MDF, Interior MDF
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-background p-4">
                  <p className="font-bold text-primary">Finishes</p>
                  <p className="mt-1 text-muted-foreground">
                    Plain Raw, Prelam Woodgrain &amp; Solid Colors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands & PDFs */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Distributor Network
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Dealt In Leading HDHMR Brands &amp; Catalogues
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div>
                  <div className="mb-3 flex h-12 w-28 items-center justify-center rounded-lg border border-border bg-white p-2">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">{brand.name}</h3>
                  <p className="mt-1 font-body text-xs font-medium text-walnut">{brand.tagline}</p>
                  <p className="mt-4 font-body text-xs text-muted-foreground">
                    {brand.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-border pt-4">
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
        </div>
      </section>

      {/* Form */}
      <section id="enquiry" className="bg-forest-deep py-20 text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                HDHMR / MDF Enquiry
              </span>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">
                Get Wholesale Rates for Boards
              </h2>
              <p className="mt-4 font-body text-base text-cream/80">
                Contact Jindal Timber &amp; Plywood for bulk supply of HDHMR and MDF boards for
                interior and commercial projects across Delhi NCR.
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
