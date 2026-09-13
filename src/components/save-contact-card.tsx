import { useState } from "react";
import { Download, CheckCircle2, UserPlus } from "lucide-react";
import { BUSINESS } from "@/lib/business";

/**
 * vCard (.vcf) generator. When clicked, downloads a contact card that mobile
 * browsers open directly in the phone's native Contacts app — saving all
 * business details (name, phones, email, address, website) in one tap.
 */
function buildVCard(): string {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Jindal;Timber & Plywood;;;",
    `FN:${BUSINESS.tradeName}`,
    `ORG:${BUSINESS.tradeName}`,
    "TITLE:Timber, Plywood & Architectural Surfaces Distributor",
    `TEL;TYPE=CELL,VOICE:${BUSINESS.phonePrimaryTel}`,
    `TEL;TYPE=CELL,VOICE:${BUSINESS.phoneSecondaryTel}`,
    `TEL;TYPE=CELL,VOICE;X-WHATSAPP:+${BUSINESS.whatsappE164}`,
    `EMAIL;TYPE=WORK:${BUSINESS.email}`,
    `ADR;TYPE=WORK:;;${BUSINESS.addressLine} (${BUSINESS.landmark});Delhi;;110051;India`,
    `URL:${BUSINESS.siteUrl}`,
    "NOTE:Trusted for 33+ years in timber and plywood. Wholesale supplier of premium plywood, veneers, laminates, HDHMR/MDF boards and architectural wall panels. Open Tue-Sun, 10:00 AM - 7:30 PM. Closed Mondays.",
    "CATEGORIES:Building Materials,Plywood,Timber,Veneers,Laminates",
    "END:VCARD",
  ];
  return lines.join("\r\n");
}

export function SaveContactCard() {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    const vcard = buildVCard();
    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "jindal-timber-plywood.vcf";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setSaved(true);
    setTimeout(() => setSaved(false), 4000);
  };

  return (
    <button
      type="button"
      onClick={handleSave}
      className="group flex w-full items-center gap-4 rounded-xl border border-gold/30 bg-gold/10 p-4 text-left transition-all hover:border-gold/60 hover:bg-gold/15"
      aria-label="Save our contact details to your phone"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/20 text-gold transition-colors group-hover:bg-gold group-hover:text-charcoal">
        {saved ? <CheckCircle2 className="h-6 w-6" /> : <UserPlus className="h-6 w-6" />}
      </span>
      <span className="flex-1">
        <span className="block font-display text-sm font-bold text-cream">
          {saved ? "Contact Card Downloaded" : "Save Our Contact"}
        </span>
        <span className="mt-0.5 block font-body text-xs text-cream/70">
          {saved
            ? "Open the file to add us to your phonebook"
            : "Tap to save all details to your phone in one step"}
        </span>
      </span>
      <Download className="h-5 w-5 shrink-0 text-gold/70 transition-transform group-hover:translate-y-0.5" />
    </button>
  );
}
