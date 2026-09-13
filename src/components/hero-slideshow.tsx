/**
 * Hero background slideshow — pure CSS crossfade + Ken Burns zoom.
 * No JS timers: each slide is a stacked <img> animated via keyframes,
 * so it works during SSR and needs no client hydration.
 */

export const HERO_SLIDES = [
  {
    src: "https://vibe.filesafe.space/1789141610346617454/assets/14e7cdea-a4d4-4b7c-ab37-dd4a9d02ab17.png",
    alt: "Luxurious modern wooden interior with walnut panels",
  },
  {
    src: "https://vibe.filesafe.space/1789141610346617454/assets/a53592f9-b022-4eeb-b889-5f5b25c4746e.png",
    alt: "Premium walnut kitchen with marble countertops",
  },
  {
    src: "https://vibe.filesafe.space/1789141610346617454/assets/1b2b9680-8d4f-4c52-8eed-4364f6314f5f.png",
    alt: "Modern office interior with architectural wood paneling",
  },
  {
    src: "https://vibe.filesafe.space/1789141610346617454/assets/63052a8e-8780-4c59-946d-d07121882fb7.png",
    alt: "Macro close-up of premium plywood edge grain texture",
  },
];

export function HeroSlideshow() {
  const total = HERO_SLIDES.length;
  // total cycle duration — must match the CSS keyframes below
  const cycle = total * 7; // seconds per slide

  return (
    <div className="hero-slideshow absolute inset-0 overflow-hidden">
      {HERO_SLIDES.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          loading={i === 0 ? "eager" : "lazy"}
          className="hero-slide"
          style={{
            animationDelay: `${i * 7}s`,
            animationDuration: `${cycle}s`,
          }}
        />
      ))}
      <style>{`
        .hero-slideshow .hero-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transform: scale(1.08);
          animation-name: hero-fade-zoom;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
          will-change: opacity, transform;
        }
        @keyframes hero-fade-zoom {
          0% { opacity: 0; transform: scale(1.08); }
          4% { opacity: 1; }
          21% { opacity: 1; }
          25% { opacity: 0; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.08); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-slideshow .hero-slide {
            animation: none;
            opacity: 1;
          }
          .hero-slideshow .hero-slide:not(:first-child) { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
