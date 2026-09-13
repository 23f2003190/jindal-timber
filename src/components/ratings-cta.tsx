import { Star, ExternalLink, Quote } from "lucide-react";
import { BUSINESS } from "@/lib/business";

/**
 * Customer ratings CTA. Directs visitors to the business's Google Business
 * Profile to leave a review. Replace GOOGLE_REVIEW_URL with the direct
 * "ask for review" link from your Google Business Profile dashboard for the
 * best conversion (Profile → Ask for reviews → Copy link).
 *
 * RATING / REVIEW_COUNT are intentionally left unset until they're filled in
 * with the real, current numbers from the Google Business Profile dashboard
 * (Google Maps → this listing → the star rating under the business name).
 * Do not hardcode a guessed number here — an inaccurate rating shown to
 * visitors is worse than showing no number at all.
 */
const GOOGLE_REVIEW_URL = `https://www.google.com/maps/search/?api=1&query=${BUSINESS.mapsQuery}`;

const RATING: number | null = null;
const REVIEW_COUNT: string | null = null;

const TESTIMONIALS = [
  {
    quote:
      "Genuine material, honest pricing, and always on time. Jindal sahab has supplied every one of our projects for years.",
    author: "Interior Design Studio",
    role: "Lajpat Nagar, Delhi",
  },
  {
    quote:
      "Best plywood stock in East Delhi. Calibrated sheets, proper bills, and warranty-backed brands. Highly recommended for contractors.",
    author: "Civil Contractor",
    role: "Noida, NCR",
  },
  {
    quote:
      "Their veneer range is exceptional. Rare species, clean grain, and they guide you on the right grade for every application.",
    author: "Architecture Firm",
    role: "New Delhi",
  },
];

export function RatingsCTA() {
  return (
    <section id="ratings" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Rating summary + CTA */}
          <div>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Customer Ratings
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Trusted &amp; Rated by Delhi's Builders
            </h2>
            <p className="mt-4 max-w-md font-body text-base leading-relaxed text-muted-foreground">
              Our reputation is built one project at a time. See what architects, designers, and
              contractors across Delhi NCR say about working with us — and share your own experience
              on Google.
            </p>

            {RATING !== null && REVIEW_COUNT !== null ? (
              <div className="mt-8 flex items-center gap-5 rounded-2xl border border-border bg-card p-6 shadow-[0_10px_40px_-25px_rgba(0,0,0,0.3)]">
                <div className="text-center">
                  <p className="font-display text-5xl font-extrabold text-primary">
                    {RATING.toFixed(1)}
                  </p>
                  <div className="mt-1 flex items-center justify-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.round(RATING) ? "fill-gold text-gold" : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="h-14 w-px bg-border" />
                <div>
                  <p className="font-display text-sm font-bold text-foreground">
                    {REVIEW_COUNT} Google Reviews
                  </p>
                  <p className="mt-1 font-body text-xs text-muted-foreground">
                    Rated across projects supplied over 33+ years of B2B partnerships in Delhi NCR.
                  </p>
                </div>
              </div>
            ) : (
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-card p-6 shadow-[0_10px_40px_-25px_rgba(0,0,0,0.3)]">
                <Star className="h-6 w-6 shrink-0 text-gold" />
                <p className="font-body text-sm text-muted-foreground">
                  See our current rating and reviews directly on Google.
                </p>
              </div>
            )}

            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-body text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-xl"
            >
              <Star className="h-4 w-4 fill-primary-foreground" />
              Rate Us on Google
              <ExternalLink className="h-4 w-4" />
            </a>
            <p className="mt-2 font-body text-xs text-muted-foreground">
              Opens our Google Business Profile — leave a star rating &amp; review in one tap.
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid gap-4">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.author}
                className="rounded-2xl border border-border bg-card p-6 shadow-[0_10px_40px_-25px_rgba(0,0,0,0.3)]"
              >
                <Quote className="h-6 w-6 text-gold" />
                <blockquote className="mt-3 font-body text-sm leading-relaxed text-foreground/90">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 font-display text-xs font-bold text-primary">
                    {t.author.charAt(0)}
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-foreground">{t.author}</p>
                    <p className="font-body text-xs text-muted-foreground">{t.role}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
