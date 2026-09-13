import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/site-header";
import { Footer } from "@/components/site-footer";
import { BUSINESS as B } from "@/lib/business";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      {
        title: "Privacy Policy — Jindal Timber & Plywood",
      },
      {
        name: "description",
        content:
          "Privacy policy for Jindal Timber & Plywood — how we collect, use, and protect your information for B2B enquiries and WhatsApp Business communications.",
      },
      {
        property: "og:title",
        content: "Privacy Policy — Jindal Timber & Plywood",
      },
      {
        property: "og:description",
        content:
          "How Jindal Timber & Plywood collects, uses, and protects your information for B2B enquiries and WhatsApp Business communications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPolicy,
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

function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="mt-3 font-body text-sm text-muted-foreground">
          Last updated: September 12, 2026
        </p>

        <div className="mt-10 space-y-8 font-body text-[0.95rem] leading-relaxed text-muted-foreground">
          <p>
            This Privacy Policy describes how {BUSINESS.name} ("we", "us", or "our") collects, uses,
            and protects your personal information when you contact us through this website, submit
            an enquiry form, or communicate with us via WhatsApp Business, telephone, or email.
          </p>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              1. Information We Collect
            </h2>
            <p className="mt-3">
              When you submit an enquiry or otherwise contact us, we may collect:
            </p>
            <ul className="mt-3 ml-6 list-disc space-y-2">
              <li>Your name and company / firm name</li>
              <li>Phone number and email address</li>
              <li>The materials you require and your project requirements</li>
              <li>Any additional information you voluntarily provide in your message</li>
            </ul>
            <p className="mt-3">
              We do not collect payment card details and this website does not process any online
              transactions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-foreground">
              2. How We Use Your Information
            </h2>
            <p className="mt-3">We use the information you provide to:</p>
            <ul className="mt-3 ml-6 list-disc space-y-2">
              <li>
                Respond to your enquiry and share material recommendations, availability, and
                wholesale pricing
              </li>
              <li>
                Communicate with you about your enquiry via WhatsApp Business, telephone, or email
              </li>
              <li>Provide quotations, order updates, and delivery information</li>
              <li>Maintain records of our B2B communications for service quality</li>
            </ul>
          </section>

          <section>
            <h2 className="mt-2 font-display text-xl font-bold text-foreground">
              3. WhatsApp Business Communications
            </h2>
            <p className="mt-3">
              We use WhatsApp Business API — provided by Meta Platforms, Inc. — to communicate with
              customers from our WhatsApp Business number,{" "}
              <span className="font-semibold text-foreground">{BUSINESS.whatsapp}</span>. We only
              message you on WhatsApp if you have opted in — either by ticking the WhatsApp consent
              checkbox on our enquiry form, or by messaging that number first. We do not add phone
              numbers to WhatsApp messaging lists without this affirmative opt-in.
            </p>
            <p className="mt-3">
              Messages we send relate to your specific enquiry — material recommendations,
              availability, pricing, quotations, and order or delivery updates. Message and data
              rates may apply according to your mobile carrier's plan. You may withdraw consent and
              opt out of WhatsApp communications at any time by replying{" "}
              <span className="font-semibold text-foreground">STOP</span> to any message we send, or
              by blocking/reporting the business number within WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="mt-2 font-display text-xl font-bold text-foreground">
              4. Sharing of Information
            </h2>
            <p className="mt-3">
              We do not sell, rent, or trade your personal information. We may share your
              information with service providers who help us operate our business (such as messaging
              and CRM platforms) solely for the purpose of responding to your enquiry. Where
              WhatsApp Business API is used, your phone number and message content are processed by
              Meta Platforms, Inc. in accordance with Meta's own Business Messaging Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="mt-2 font-display text-xl font-bold text-foreground">
              5. Data Retention
            </h2>
            <p className="mt-3">
              We retain your enquiry information for as long as reasonably necessary to respond to
              your request and to maintain business records, and thereafter in accordance with
              applicable legal requirements.
            </p>
          </section>

          <section>
            <h2 className="mt-2 font-display text-xl font-bold text-foreground">6. Your Rights</h2>
            <p className="mt-3">
              You may request access to, correction of, or deletion of your personal information by
              contacting us using the details below. We will respond to such requests in accordance
              with applicable law.
            </p>
          </section>

          <section>
            <h2 className="mt-2 font-display text-xl font-bold text-foreground">7. Security</h2>
            <p className="mt-3">
              We take reasonable technical and organisational measures to protect your personal
              information against unauthorised access, alteration, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="mt-2 font-display text-xl font-bold text-foreground">
              8. Changes to This Policy
            </h2>
            <p className="mt-3">
              We may update this Privacy Policy from time to time. The updated version will be
              posted on this page with a revised "last updated" date.
            </p>
          </section>

          <section>
            <h2 className="mt-2 font-display text-xl font-bold text-foreground">
              9. Grievance Officer
            </h2>
            <p className="mt-3">
              In accordance with the Information Technology Act, 2000 and rules made thereunder, the
              Grievance Officer for {BUSINESS.name} is:
            </p>
            <p className="mt-2 font-semibold text-foreground">{BUSINESS.proprietor}</p>
            <p className="mt-1">Proprietor, {BUSINESS.name}</p>
            <p className="mt-1">{BUSINESS.address}</p>
            <p className="mt-1">
              Email:{" "}
              <a
                href={`mailto:${BUSINESS.email}`}
                className="font-medium text-primary hover:underline"
              >
                {BUSINESS.email}
              </a>
            </p>
            <p className="mt-1">Phone: {BUSINESS.phones}</p>
            <p className="mt-3">
              We aim to acknowledge grievances within 48 hours and resolve them within 30 days.
            </p>
          </section>

          <section>
            <h2 className="mt-2 font-display text-xl font-bold text-foreground">10. Contact Us</h2>
            <p className="mt-3">For any questions regarding this Privacy Policy, please contact:</p>
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
