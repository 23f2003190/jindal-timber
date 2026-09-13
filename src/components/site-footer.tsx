import { Link, useLocation } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, TreePine, QrCode, MessageCircle } from "lucide-react";
import { BUSINESS, whatsAppLink } from "@/lib/business";

// "home" / "about" / "products" / "ratings" only exist as sections on the
// homepage. "enquiry" also exists locally on every /category/* page, so it
// can stay an in-page anchor there instead of round-tripping through "/".
const QUICK_LINKS = [
  { l: "Home", id: "home" },
  { l: "About Us", id: "about" },
  { l: "Products", id: "products" },
  { l: "Customer Ratings", id: "ratings" },
  { l: "Request a Quote", id: "enquiry" },
];

export function Footer() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isCategoryPage = location.pathname.startsWith("/category/");

  const hrefFor = (id: string) => {
    if (isHome) return `#${id}`;
    if (id === "enquiry" && isCategoryPage) return `#${id}`;
    return `/#${id}`;
  };

  return (
    <footer id="contact" className="bg-forest-deep text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Brand + contact */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cream/10 text-cream">
                <TreePine className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                Jindal Timber &amp; Plywood
              </span>
            </div>
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-cream/70">
              Delhi's most trusted source for premium timber, plywood, and architectural surfaces —
              engineered for strength and crafted for generations since 1992.
            </p>

            <ul className="mt-6 space-y-3 font-body text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="text-cream/85">{BUSINESS.addressFull}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
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
                <MessageCircle className="h-4 w-4 shrink-0 text-gold" />
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
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${BUSINESS.email}`} className="text-cream/85 hover:text-cream">
                  {BUSINESS.email}
                </a>
              </li>
            </ul>

            <p className="mt-6 font-body text-[11px] text-cream/50">
              GSTIN: {BUSINESS.gstin} · Udyam Reg. No: {BUSINESS.udyam}
            </p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Operating Hours
            </h3>
            <div className="mt-4 flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <div className="font-body text-sm text-cream/85">
                <p>Tuesday – Sunday</p>
                <p className="text-cream">10:00 AM – 7:30 PM</p>
                <p className="mt-2 rounded-md bg-cream/10 px-2 py-1 text-xs font-medium text-cream/70">
                  Closed on Mondays
                </p>
              </div>
            </div>

            <h3 className="mt-8 font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 font-body text-sm">
              {QUICK_LINKS.map((i) => (
                <li key={i.id}>
                  <a
                    href={hrefFor(i.id)}
                    className="text-cream/70 transition-colors hover:text-cream"
                  >
                    {i.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Map */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              Find Us
            </h3>
            <div className="mt-4 overflow-hidden rounded-xl border border-cream/15">
              <iframe
                title="Jindal Timber & Plywood location — Jagatpuri, Delhi"
                src={`https://www.google.com/maps?q=${BUSINESS.mapsQuery}&output=embed`}
                width="100%"
                height="240"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block grayscale-[0.2]"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/15 pt-6 sm:flex-row">
          <p className="font-body text-xs text-cream/60">
            © {new Date().getFullYear()} Jindal Timber &amp; Plywood. Proprietor: Naveen Jindal. All
            rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-body text-xs">
            <Link
              to="/qr-code"
              className="inline-flex items-center gap-1.5 text-gold/90 transition-colors hover:text-gold"
            >
              <QrCode className="h-3.5 w-3.5" /> Website QR Code
            </Link>
            <span className="text-cream/30">·</span>
            <Link to="/privacy-policy" className="text-cream/60 transition-colors hover:text-cream">
              Privacy Policy
            </Link>
            <span className="text-cream/30">·</span>
            <Link
              to="/terms-of-service"
              className="text-cream/60 transition-colors hover:text-cream"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
