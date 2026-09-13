import { createFileRoute } from "@tanstack/react-router";
import { QRCodeCanvas } from "qrcode.react";
import { useRef, useState } from "react";
import {
  Download,
  Share2,
  MessageCircle,
  Smartphone,
  ArrowLeft,
  Copy,
  CheckCircle2,
} from "lucide-react";
import { Header } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { Link } from "@tanstack/react-router";
import { BUSINESS } from "@/lib/business";

const SITE_URL = BUSINESS.siteUrl;

export const Route = createFileRoute("/qr-code")({
  head: () => ({
    meta: [
      {
        title: "QR Code — Jindal Timber & Plywood | Share on WhatsApp",
      },
      {
        name: "description",
        content:
          "Scan or download the Jindal Timber & Plywood QR code to share our website on WhatsApp with architects, designers and contractors.",
      },
      { property: "og:title", content: "Jindal Timber & Plywood — QR Code" },
      {
        property: "og:description",
        content:
          "Scan to visit Jindal Timber & Plywood — premium timber, plywood & architectural surfaces in Delhi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: QRCodePage,
});

function QRCodePage() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    const canvas = canvasRef.current?.querySelector("canvas");
    if (!canvas) return;
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "jindal-timber-plywood-qr.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `Jindal Timber & Plywood — Premium timber, plywood, veneers & architectural surfaces in Delhi. Trusted for 33+ years. Visit us: ${SITE_URL}`,
    );
    window.open(`https://wa.me/?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(SITE_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative overflow-hidden bg-forest-deep">
        <div className="absolute inset-0 opacity-15">
          <div className="h-full w-full bg-gradient-to-br from-forest-deep via-walnut/40 to-charcoal" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-cream/70 transition-colors hover:text-cream"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <div className="mt-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              <Smartphone className="h-3.5 w-3.5" /> Scan & Share
            </span>
            <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-cream sm:text-4xl">
              Your Website QR Code
            </h1>
            <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-cream/80">
              Scan this code with any phone camera to open our website instantly, or download the
              image and send it on WhatsApp to architects, designers and contractors.
            </p>
          </div>

          {/* QR Card */}
          <div className="mx-auto mt-10 max-w-sm">
            <div className="overflow-hidden rounded-2xl border border-border bg-cream shadow-[0_25px_70px_-30px_rgba(0,0,0,0.6)]">
              {/* Brand header */}
              <div className="bg-forest-deep px-6 py-5 text-center">
                <p className="font-display text-lg font-bold text-cream">
                  Jindal Timber &amp; Plywood
                </p>
                <p className="mt-0.5 font-body text-[11px] uppercase tracking-[0.15em] text-gold">
                  Trusted for 33+ Years · Jagatpuri, Delhi
                </p>
              </div>

              {/* QR */}
              <div
                ref={canvasRef}
                className="flex flex-col items-center justify-center bg-cream px-6 py-8"
              >
                <div className="rounded-xl bg-white p-4 shadow-inner">
                  <QRCodeCanvas
                    value={SITE_URL}
                    size={220}
                    level="H"
                    marginSize={0}
                    fgColor="#1a2e1f"
                    bgColor="#ffffff"
                  />
                </div>
                <p className="mt-4 font-body text-xs text-charcoal/70">Scan to visit our website</p>
              </div>

              {/* Footer strip */}
              <div className="bg-walnut px-6 py-3 text-center">
                <p className="font-body text-[11px] font-medium text-cream/90">
                  Premium Timber · Plywood · Veneers · Laminates · Boards · Panels
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 font-body text-sm font-semibold text-charcoal transition-all hover:bg-gold/90 hover:shadow-lg"
              >
                <Download className="h-4 w-4" /> Download QR
              </button>
              <button
                type="button"
                onClick={handleWhatsAppShare}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-cream/30 bg-cream/10 px-5 py-3 font-body text-sm font-semibold text-cream backdrop-blur-sm transition-all hover:bg-cream/20"
              >
                <MessageCircle className="h-4 w-4" /> Share on WhatsApp
              </button>
            </div>

            {/* Copy link */}
            <button
              type="button"
              onClick={handleCopyLink}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-cream/20 px-5 py-2.5 font-body text-xs font-medium text-cream/70 transition-colors hover:text-cream"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="h-3.5 w-3.5 text-gold" /> Link copied to clipboard
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" /> Copy website link
                </>
              )}
            </button>
          </div>

          {/* How to use */}
          <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-cream/15 bg-cream/5 p-6">
            <h2 className="flex items-center gap-2 font-display text-base font-bold text-cream">
              <Share2 className="h-4 w-4 text-gold" /> How to use this QR code
            </h2>
            <ul className="mt-4 space-y-3 font-body text-sm text-cream/80">
              <li className="flex gap-3">
                <span className="font-display font-bold text-gold">1.</span>
                <span>
                  Tap <strong className="text-cream">Download QR</strong> to save the image to your
                  phone or computer.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-display font-bold text-gold">2.</span>
                <span>
                  Open WhatsApp, attach the image in any chat, and send — recipients scan it to land
                  directly on our website.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-display font-bold text-gold">3.</span>
                <span>
                  Or tap <strong className="text-cream">Share on WhatsApp</strong> to send a
                  pre-written message with our link instantly.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="font-display font-bold text-gold">4.</span>
                <span>
                  Print the QR on visiting cards, invoices, or storefront signage for easy access.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
