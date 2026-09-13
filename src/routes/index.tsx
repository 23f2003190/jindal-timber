import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Ruler,
  Layers,
  Award,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Building2,
  Hammer,
  Trees,
  PanelsTopLeft,
} from "lucide-react";
import { Header } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { EnquiryForm } from "@/components/enquiry-form";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { SaveContactCard } from "@/components/save-contact-card";
import { RatingsCTA } from "@/components/ratings-cta";
import { BUSINESS, whatsAppLink } from "@/lib/business";

const TEXTURE_IMG =
  "https://vibe.filesafe.space/1789141610346617454/assets/0200ba4a-79e7-400c-89ba-583cc17cb16f.png";

const PRODUCTS = [
  {
    title: "Premium Plywood (Marine & MR Grade)",
    desc: "Borer & termite-proof, calibrated plywood engineered for structural strength and moisture resistance in demanding interiors.",
    img: "https://vibe.filesafe.space/1789141610346617454/assets/7bc5eb0b-a025-4145-9857-5a4bf8e0bb94.png",
    icon: Layers,
    href: "/category/plywood",
    brands: "CenturyPly · Greenply · Kanchan",
  },
  {
    title: "Decorative Wood Veneers",
    desc: "Real sliced natural wood veneers — teak, walnut, oak & exotic species — for authentic grain finishes on statement interiors.",
    img: "https://vibe.filesafe.space/1789141610346617454/assets/5f6f6c28-ed38-4175-972e-a965a1779a46.png",
    icon: Trees,
    href: "/category/veneers",
    brands: "Mikasa · CenturyVeneers · Greenply",
  },
  {
    title: "High-Pressure Laminates",
    desc: "Durable 1mm & 0.8mm HPL sheets in 1000+ shades and textures — scratch, heat & stain resistant surfaces for modular interiors.",
    img: "https://vibe.filesafe.space/1789141610346617454/assets/efc1abe0-1ad8-4b46-8496-9e01532f30ef.png",
    icon: PanelsTopLeft,
    href: "/category/laminates",
    brands: "Greenlam · Mikasa · Merino",
  },
  {
    title: "HDHMR & MDF Boards",
    desc: "High-density moisture-resistant boards and MDF for precision-machined wardrobes, kitchens, and modular furniture.",
    img: "https://vibe.filesafe.space/1789141610346617454/assets/bec3e443-47f8-49bf-8354-d5f511252604.png",
    icon: Building2,
    href: "/category/boards",
    brands: "Action TESA · Greenpanel · Century Prowud",
  },
  {
    title: "Architectural Wall Panels",
    desc: "Louvers, WPC, and charcoal pine grove sheets for statement accent walls and contemporary facade detailing.",
    img: "https://vibe.filesafe.space/1789141610346617454/assets/ed28bc5b-a4fb-495c-8221-458be2938cd2.png",
    icon: PanelsTopLeft,
    href: "/category/panels",
    brands: "WPC Louvers · Charcoal · Facades",
  },
];

const TRUST = [
  {
    icon: ShieldCheck,
    title: "Decades, Not Seasons",
    desc: "Premium ply resists warping, delamination and decay for decades. Cheap boards swell and fail within a few monsoons — forcing costly rework and damaged reputations.",
  },
  {
    icon: Ruler,
    title: "Precision That Holds",
    desc: "Calibrated, dimensionally stable sheets stay flat and true. Low-grade boards bow and twist, ruining edge bands, shutters and CNC-machined joinery.",
  },
  {
    icon: Hammer,
    title: "Joints That Stay Tight",
    desc: "Dense, well-bonded cores grip screws and hinges firmly. Inferior cores crumble under load, leaving loose hinges and sagging shelves within months.",
  },
  {
    icon: Award,
    title: "Protected From Pests",
    desc: "Properly treated timber keeps borers and termites out. Untreated plywood is silently hollowed from within — invisible damage until the piece gives way.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Jindal Timber & Plywood — Premium Timber, Plywood & Architectural Surfaces in Delhi",
      },
      {
        name: "description",
        content:
          "Delhi's most trusted source for premium timber, plywood, veneers, HDHMR/MDF boards and architectural wall panels. Trusted by architects & contractors for 33+ years.",
      },
      {
        property: "og:title",
        content: "Jindal Timber & Plywood — Premium Materials, Lasting Partnerships",
      },
      {
        property: "og:description",
        content:
          "Premium timber, plywood, veneers & architectural surfaces in Jagatpuri, Delhi. 33+ years of B2B trust for architects, designers & contractors.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://vibe.filesafe.space/1789141610346617454/assets/14e7cdea-a4d4-4b7c-ab37-dd4a9d02ab17.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:image",
        content:
          "https://vibe.filesafe.space/1789141610346617454/assets/14e7cdea-a4d4-4b7c-ab37-dd4a9d02ab17.png",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <HeroSlideshow />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/95 via-forest-deep/70 to-charcoal/40" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-4 py-1.5 font-body text-xs font-medium uppercase tracking-[0.18em] text-cream backdrop-blur-sm">
              <Award className="h-3.5 w-3.5 text-gold" /> Trusted for 33+ Years
            </span>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-cream sm:text-5xl lg:text-6xl">
              Premium Materials.
              <span className="block text-gold">Lasting Partnerships.</span>
            </h1>
            <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-cream/85 sm:text-lg">
              Delhi's most trusted source for premium timber, plywood, and architectural surfaces
              for over 33 years — the preferred partner of architects, interior designers, and
              contractors.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-7 py-3.5 font-body text-sm font-semibold text-charcoal transition-all hover:bg-gold/90 hover:shadow-xl"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-cream/30 px-7 py-3.5 font-body text-sm font-semibold text-cream transition-all hover:bg-cream/10"
              >
                Explore Products
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust factors */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Why Quality Matters
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Cost of Compromise
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
              The price gap between premium and cheap materials is small. The cost of failure —
              rework, callbacks, and a damaged reputation — is not. Here is what genuinely better
              materials deliver.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST.map((t) => (
              <div key={t.title} className="group">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <t.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-foreground">{t.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our Catalogue
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Engineered Materials for Every Build
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
              From structural plywood to statement wall panels — a complete materials portfolio for
              architects and contractors.
            </p>
          </div>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <article
                key={p.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_10px_40px_-25px_rgba(0,0,0,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.4)]"
              >
                <Link to={p.href} className="relative aspect-[4/3] overflow-hidden block">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-cream/90 text-primary backdrop-blur-sm">
                    <p.icon className="h-5 w-5" />
                  </span>
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <Link to={p.href} className="group-hover:text-primary transition-colors">
                    <h3 className="font-display text-base font-bold leading-snug text-foreground">
                      {p.title}
                    </h3>
                  </Link>
                  <p className="mt-1.5 font-body text-xs font-semibold text-walnut">
                    Brands: {p.brands}
                  </p>
                  <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>
                  <Link
                    to={p.href}
                    className="mt-4 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    View Details &amp; E-Catalogues <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Brand trust banner */}
          <div className="mt-14 rounded-2xl border border-border bg-sand px-6 py-8 sm:px-10">
            <div className="text-center">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-walnut">
                Authorised Distributor Of
              </p>
              <p className="mt-1 font-display text-xl font-bold text-foreground">
                India's Most Trusted Material Brands
              </p>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {[
                {
                  name: "CenturyPly",
                  logo: "https://vibe.filesafe.space/1789141610346617454/assets/d63e2351-baec-4ae4-8de2-5d1edd53cd7e.png",
                },
                {
                  name: "Greenply",
                  logo: "https://vibe.filesafe.space/1789141610346617454/assets/29da15a2-2612-466d-b8c3-3689a2013818.svg",
                },
                {
                  name: "Greenlam",
                  logo: "https://vibe.filesafe.space/1789141610346617454/assets/b3f5a039-900a-48b7-bc37-82b1457a41d8.png",
                },
                {
                  name: "Mikasa Laminates",
                  logo: "https://vibe.filesafe.space/1789141610346617454/assets/563e6066-90b6-40e6-bc05-07a5488e51bd.png",
                },
                {
                  name: "Mikasa Veneers",
                  logo: "https://vibe.filesafe.space/1789141610346617454/assets/563e6066-90b6-40e6-bc05-07a5488e51bd.png",
                },
                {
                  name: "Kanchan Plywood",
                  logo: "https://vibe.filesafe.space/1789141610346617454/assets/0fb27a34-fc10-4ce1-8829-2c309c4f5cc8.png",
                },
              ].map((brand) => (
                <div
                  key={brand.name}
                  className="flex flex-col items-center justify-center rounded-xl border border-border bg-white p-3 text-center transition-all hover:border-primary/40 hover:shadow-sm"
                >
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="h-10 w-full object-contain p-1"
                    loading="lazy"
                  />
                  <span className="mt-1.5 font-display text-[11px] font-bold text-foreground">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center font-body text-sm text-muted-foreground">
              Genuine, warranty-backed materials from India's leading manufacturers — on every
              order.
            </p>
          </div>
        </div>
      </section>

      {/* About proprietor & legacy */}
      <section id="about" className="bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-[0_25px_70px_-30px_rgba(0,0,0,0.5)]">
                <img
                  src={TEXTURE_IMG}
                  alt="Premium plywood edge grain texture"
                  className="aspect-[4/5] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-cream/80">
                    Since 1992
                  </p>
                  <p className="mt-1 font-display text-2xl font-bold text-cream">
                    Jagatpuri, Delhi
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-4 hidden rounded-xl border border-border bg-background p-5 shadow-lg sm:block">
                <p className="font-display text-3xl font-extrabold text-primary">33+</p>
                <p className="font-body text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Years of Trust
                </p>
              </div>
            </div>

            <div>
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                The Legacy
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Three Decades of Reliability in Jagatpuri, Delhi
              </h2>
              <p className="mt-5 font-body text-base leading-relaxed text-muted-foreground">
                For over 33 years, Jindal Timber &amp; Plywood has been the cornerstone of premium
                engineered materials in Delhi. Founded and led by{" "}
                <span className="font-semibold text-foreground">Naveen Jindal</span>, the business
                has grown through an unwavering commitment to genuine materials, honest pricing, and
                dependable B2B partnerships.
              </p>
              <p className="mt-4 font-body text-base leading-relaxed text-muted-foreground">
                Architects, interior designers, and contractors across the NCR return to us project
                after project — knowing that every sheet we supply meets the structural and
                aesthetic standards their work demands.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { k: "33+", v: "Years in Business" },
                  { k: "1000+", v: "Projects Supplied" },
                  { k: "100%", v: "Genuine Materials" },
                ].map((s) => (
                  <div key={s.v} className="rounded-xl border border-border bg-background p-4">
                    <p className="font-display text-2xl font-bold text-primary">{s.k}</p>
                    <p className="mt-1 font-body text-xs text-muted-foreground">{s.v}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center gap-4 rounded-xl bg-sand p-5">
                <img
                  src={TEXTURE_IMG}
                  alt="Premium plywood edge texture"
                  className="h-16 w-16 rounded-lg object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-display text-sm font-bold text-foreground">Naveen Jindal</p>
                  <p className="font-body text-xs text-muted-foreground">
                    Proprietor · Jindal Timber &amp; Plywood
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer ratings */}
      <RatingsCTA />

      {/* Enquiry form */}
      <section id="enquiry" className="relative overflow-hidden bg-forest-deep">
        <div className="absolute inset-0 opacity-20">
          <img src={TEXTURE_IMG} alt="" className="h-full w-full object-cover" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="text-cream">
              <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Dealership &amp; Enquiry
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Let's Build Something That Lasts
              </h2>
              <p className="mt-5 max-w-md font-body text-base leading-relaxed text-cream/80">
                Share your project requirements and our team will respond with material
                recommendations, availability, and wholesale pricing within one business day.
                Trusted by architects, designers, and contractors across Delhi NCR.
              </p>

              <ul className="mt-8 space-y-4 font-body text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span className="text-cream/85">{BUSINESS.addressFull}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-gold" />
                  <a
                    href={`tel:${BUSINESS.phonePrimaryTel}`}
                    className="text-cream/85 hover:text-cream"
                  >
                    {BUSINESS.phonePrimary}
                  </a>
                  <span className="text-cream/40">·</span>
                  <a
                    href={`tel:${BUSINESS.phoneSecondaryTel}`}
                    className="text-cream/85 hover:text-cream"
                  >
                    {BUSINESS.phoneSecondary}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 shrink-0 text-gold" />
                  <a
                    href={whatsAppLink(
                      "Hi Jindal Timber & Plywood, I'd like to enquire about your materials.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/85 hover:text-cream"
                  >
                    {BUSINESS.whatsappDisplay} (WhatsApp)
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-gold" />
                  <a href={`mailto:${BUSINESS.email}`} className="text-cream/85 hover:text-cream">
                    {BUSINESS.email}
                  </a>
                </li>
              </ul>

              <div className="mt-8 max-w-md">
                <SaveContactCard />
              </div>
            </div>

            <EnquiryForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
