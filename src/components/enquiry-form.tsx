import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Loader2, CheckCircle2, Send } from "lucide-react";
import { trackEnquiry, type EnquiryValues } from "@/lib/enquiry-tracking";
import { BUSINESS } from "@/lib/business";

const MATERIALS = ["Plywood", "Veneers", "Boards", "Panels", "Other"];

const EMPTY: EnquiryValues = {
  name: "",
  company: "",
  phone: "",
  email: "",
  material: "",
  message: "",
  consent: false,
};

export function EnquiryForm() {
  const [values, setValues] = useState<EnquiryValues>(EMPTY);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryValues, string>>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  function validate(): boolean {
    const e: Partial<Record<keyof EnquiryValues, string>> = {};
    if (!values.name.trim()) e.name = "Please enter your name.";
    if (!values.company.trim()) e.company = "Please enter your firm name.";
    if (!values.phone.trim()) e.phone = "Please enter a phone number.";
    else if (!/^[+\d][\d\s-]{7,}$/.test(values.phone.trim()))
      e.phone = "Enter a valid phone number.";
    if (!values.email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      e.email = "Enter a valid email address.";
    if (!values.material) e.material = "Please select a material.";
    if (!values.consent)
      e.consent = "Please confirm you're okay with us contacting you about this enquiry.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    setSubmitError(null);
    try {
      await trackEnquiry(values);
      setStatus("success");
      setValues(EMPTY);
    } catch (err) {
      console.error("Enquiry submission failed:", err);
      setStatus("idle");
      setSubmitError(
        `We couldn't send your enquiry — please try again, or call us directly at ${BUSINESS.phonePrimary}.`,
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-4 font-display text-xl font-bold text-foreground">Enquiry Sent</h3>
        <p className="mt-2 max-w-sm font-body text-sm text-muted-foreground">
          Thank you for reaching out. Our team will get back to you within one business day to
          discuss your material requirements.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 font-body text-sm font-semibold text-primary hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-lg border border-input bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.3)] sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="f-name"
            className="mb-1.5 block font-body text-sm font-medium text-foreground"
          >
            Name <span className="text-destructive">*</span>
          </label>
          <input
            id="f-name"
            type="text"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            className={fieldClass}
            placeholder="Your full name"
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>

        <div>
          <label
            htmlFor="f-company"
            className="mb-1.5 block font-body text-sm font-medium text-foreground"
          >
            Company / Firm Name <span className="text-destructive">*</span>
          </label>
          <input
            id="f-company"
            type="text"
            value={values.company}
            onChange={(e) => setValues({ ...values, company: e.target.value })}
            className={fieldClass}
            placeholder="Your firm / studio name"
          />
          {errors.company && <p className="mt-1 text-xs text-destructive">{errors.company}</p>}
        </div>

        <div>
          <label
            htmlFor="f-phone"
            className="mb-1.5 block font-body text-sm font-medium text-foreground"
          >
            Phone Number <span className="text-destructive">*</span>
          </label>
          <input
            id="f-phone"
            type="tel"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            className={fieldClass}
            placeholder={BUSINESS.phonePrimary}
          />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>

        <div>
          <label
            htmlFor="f-email"
            className="mb-1.5 block font-body text-sm font-medium text-foreground"
          >
            Email <span className="text-destructive">*</span>
          </label>
          <input
            id="f-email"
            type="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            className={fieldClass}
            placeholder="you@firm.com"
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="f-material"
          className="mb-1.5 block font-body text-sm font-medium text-foreground"
        >
          Material Required <span className="text-destructive">*</span>
        </label>
        <select
          id="f-material"
          value={values.material}
          onChange={(e) => setValues({ ...values, material: e.target.value })}
          className={fieldClass}
        >
          <option value="" disabled>
            Select a material category
          </option>
          {MATERIALS.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
        {errors.material && <p className="mt-1 text-xs text-destructive">{errors.material}</p>}
      </div>

      <div className="mt-5">
        <label
          htmlFor="f-message"
          className="mb-1.5 block font-body text-sm font-medium text-foreground"
        >
          Message
        </label>
        <textarea
          id="f-message"
          rows={4}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          className={fieldClass}
          placeholder="Tell us about your project, quantities, sizes, or specifications required."
        />
      </div>

      <div className="mt-5">
        <label className="flex items-start gap-2.5 font-body text-xs text-muted-foreground">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={(e) => setValues({ ...values, consent: e.target.checked })}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-input text-primary focus:ring-primary/30"
          />
          <span>
            I agree to be contacted about this enquiry by phone, email, or WhatsApp (
            {BUSINESS.whatsappDisplay}), as described in the{" "}
            <Link to="/privacy-policy" className="font-medium text-primary hover:underline">
              Privacy Policy
            </Link>
            . <span className="text-destructive">*</span>
          </span>
        </label>
        {errors.consent && <p className="mt-1 text-xs text-destructive">{errors.consent}</p>}
      </div>

      {submitError && (
        <p className="mt-5 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-center font-body text-sm text-destructive">
          {submitError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-body text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Send Enquiry
          </>
        )}
      </button>
      <p className="mt-3 text-center font-body text-xs text-muted-foreground">
        We respond to all B2B enquiries within one business day.
      </p>
    </form>
  );
}
