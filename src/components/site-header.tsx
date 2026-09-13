import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, TreePine } from "lucide-react";

// "home" / "about" / "products" only exist as sections on the homepage.
// "contact" (the footer) is present on every page, so it can always be
// scrolled to in place instead of round-tripping through the homepage.
const NAV = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Products", id: "products" },
  { label: "Contact", id: "contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isCategoryPage = location.pathname.startsWith("/category/");

  // On the homepage, jump straight to the section. On every other page,
  // route back to the homepage first — except #contact (the footer, present
  // on every page) and #enquiry on category pages (which have their own
  // enquiry form section), which can stay in-page.
  const hrefFor = (id: string) => {
    if (isHome) return `#${id}`;
    if (id === "contact") return `#${id}`;
    if (id === "enquiry" && isCategoryPage) return `#${id}`;
    return `/#${id}`;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href={isHome ? "#home" : "/"} className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <TreePine className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-bold tracking-tight text-foreground">
              Jindal Timber &amp; Plywood
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Est. 1992 · Jagatpuri, Delhi
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={hrefFor(item.id)}
              className="font-body text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href={hrefFor("enquiry")}
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 font-body text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            Request a Quote
          </a>
        </nav>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={hrefFor(item.id)}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 font-body text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href={hrefFor("enquiry")}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 font-body text-sm font-semibold text-primary-foreground"
            >
              Request a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export { Link };
