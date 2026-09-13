import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { BUSINESS as B } from "@/lib/business";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      {
        title: "Terms of Service — Jindal Timber & Plywood",
      },
      {
        name: "description",
        content:
          "Terms of service for the Jindal Timber & Plywood website — usage terms for B2B enquiries and wholesale business communications.",
      },
      {
        property: "og:title",
        content: "Terms of Service — Jindal Timber & Plywood",
      },
      {
        property: "og:description",
        content:
          "Terms of service for the Jindal Timber & Plywood website — usage terms for B2B enquiries and wholesale business communications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TermsOfService,
});

const BUSINESS = {
  name: B.tradeName,
  proprietor: B.proprietor,
  address: B.addressFull,
  phones: `${B.phonePrimary}, ${B.phoneSecondary}`,
  whatsapp: B.whatsappDisplay,
  email: B.email,
  gstin: B.gstin,
  udyam: B.udyam,
};

function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="mx-auto max-w-3xl px-4 pt-32 pb-16 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-3 font-body text-sm text-muted-foreground">
          Last updated: September 12, 2026
        </p>

        <div className="mt-10 space-y-8 font-body text-[0.95rem] leading-relaxed text-muted-foreground">
          <p>
            These Terms of Service ("Terms") govern your use of the website operated by{" "}
            {BUSINESS.name} ( <span className="font-semibold text-foreground">"we"</span>,{" "}
            <span className="font-semibold text-foreground">"us"</span>, or{" "}
            <span className="font-semibold text-foreground">"our"</span>). By accessing or using
            this website, you agree to these Terms. If you do not agree, please do not use this
            website.
          </p>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">1. Business Nature</h2>
            <p className="mt-3">
              This website is a business-to-business (B2B) lead-generation and informational
              platform for {BUSINESS.name}. We are a wholesale and trade supplier of timber,
              plywood, veneers, boards, and architectural surfaces. This website does not offer
              online purchasing, e-commerce, or shopping-cart functionality. All transactions are
              conducted offline between the business and verified trade customers.
            </p>
          </section>

          <section>
            <h2 className="mt-2 font-display text-xl font-bold text-foreground">
              2. Use of the Website
            </h2>
            <p className="mt-3">
              You agree to use this website only for lawful purposes and in a manner that does not
              infringe the rights of, or restrict the use and enjoyment of, the website by any third
              party. You agree not to misuse the enquiry forms to submit false, misleading, or
              unsolicited communications.
            </p>
          </section>

          <section>
            <h2 className="mt-2 font-display text-xl font-bold text-foreground">
              3. Enquiries and Quotations
            </h2>
            <p className="mt-3">
              Submission of an enquiry form constitutes a request for information and does not
              constitute a binding order. All quotations for materials, pricing, and availability
              are provided at our discretion and are subject to confirmation, stock availability,
              and prevailing market rates at the time of order. Quotations are not legally binding
              until confirmed in writing by {BUSINESS.name}.
            </p>
          </section>

          <section>
            <h2 className="mt-2 font-display text-xl font-bold text-foreground">
              4. WhatsApp and Messaging Communications
            </h2>
            <p className="mt-3">
              We communicate with customers via WhatsApp Business API from our WhatsApp Business
              number, {BUSINESS.whatsapp}. We only message you on WhatsApp after you have opted in —
              by ticking the WhatsApp consent checkbox on our enquiry form, or by messaging us on
              that number first. Standard message and data rates may apply. You may withdraw consent
              and opt out of such communications at any time by replying{" "}
              <span className="font-semibold text-foreground">STOP</span> to any message, or by
              blocking/reporting the number within WhatsApp. See our{" "}
              <Link to="/privacy-policy" className="font-medium text-primary hover:underline">
                Privacy Policy
              </Link>{" "}
              for details on how WhatsApp messaging data is handled.
            </p>
          </section>

          <section>
            <h2 className="mt-2 font-display text-xl font-bold text-foreground">
              5. Intellectual Property
            </h2>
            <p className="mt-3">
              All content on this website — including text, logos, imagery, product descriptions,
              and design elements — is the property of {BUSINESS.name} or its licensors and is
              protected under applicable intellectual property laws. You may not reproduce,
              distribute, or otherwise use such content without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="mt-2 font-display text-xl font-bold text-foreground">
              6. Product Information
            </h2>
            <p className="mt-3">
              We endeavour to ensure that product descriptions and specifications displayed on this
              website are accurate. However, material specifications, colours, and availability may
              vary. Final specifications are confirmed at the point of order.
            </p>
          </section>

          <section>
            <h2 className="mt-2 font-display text-xl font-bold text-foreground">
              7. Limitation of Liability
            </h2>
            <p className="mt-3">
              To the fullest extent permitted by law, {BUSINESS.name} shall not be liable for any
              indirect, incidental, or consequential damages arising from the use of, or inability
              to use, this website.
            </p>
          </section>

          <section>
            <h2 className="mt-2 font-display text-xl font-bold text-foreground">
              8. Governing Law
            </h2>
            <p className="mt-3">
              These Terms are governed by the laws of India. Any disputes arising in connection with
              these Terms or the use of this website shall be subject to the exclusive jurisdiction
              of the courts of Delhi.
            </p>
          </section>

          <section>
            <h2 className="mt-2 font-display text-xl font-bold text-foreground">
              9. Changes to These Terms
            </h2>
            <p className="mt-3">
              We may revise these Terms at any time by updating this page. Your continued use of the
              website following any changes constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="mt-2 font-display text-xl font-bold text-foreground">10. Contact</h2>
            <p className="mt-3">For questions regarding these Terms, contact:</p>
            <p className="mt-2 font-semibold text-foreground">{BUSINESS.name}</p>
            <p className="mt-1">Proprietor: {BUSINESS.proprietor}</p>
            <p className="mt-1">{BUSINESS.address}</p>
            <p className="mt-1">Phone: {BUSINESS.phones}</p>
            <p className="mt-1">WhatsApp: {BUSINESS.whatsapp}</p>
            <p className="mt-1">
              Email:{" "}
              <a
                href={`mailto:${BUSINESS.email}`}
                className="font-medium text-primary hover:underline"
              >
                {BUSINESS.email}
              </a>
            </p>
            <p className="mt-1">GSTIN: {BUSINESS.gstin}</p>
            <p className="mt-1">Udyam Registration No: {BUSINESS.udyam}</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
