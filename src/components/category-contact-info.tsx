import { Phone, Mail, MessageCircle } from "lucide-react";
import { BUSINESS, whatsAppLink } from "@/lib/business";

/**
 * Shared phone / WhatsApp / email block used in every category page's
 * enquiry section. Centralised so contact details can't drift out of sync
 * across pages the way they previously did.
 */
export function CategoryContactInfo({ showAddress = false }: { showAddress?: boolean }) {
  return (
    <div className="mt-8 space-y-3 font-body text-sm">
      <p className="flex items-center gap-3">
        <Phone className="h-4 w-4 text-gold" /> {BUSINESS.phonePrimary} / {BUSINESS.phoneSecondary}
      </p>
      <p className="flex items-center gap-3">
        <MessageCircle className="h-4 w-4 text-gold" />
        <a
          href={whatsAppLink(
            "Hi Jindal Timber & Plywood, I'd like to enquire about your materials.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {BUSINESS.whatsappDisplay} (WhatsApp)
        </a>
      </p>
      <p className="flex items-center gap-3">
        <Mail className="h-4 w-4 text-gold" /> {BUSINESS.email}
      </p>
      {showAddress && <p className="mt-4 text-xs text-cream/60">{BUSINESS.addressFull}</p>}
    </div>
  );
}
