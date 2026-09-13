import { MessageCircle } from "lucide-react";
import { whatsAppLink } from "@/lib/business";

/**
 * Fixed, site-wide click-to-chat button. Rendered once in the root layout so
 * it's available on every page, not just the homepage.
 */
export function WhatsAppButton() {
  const href = whatsAppLink(
    "Hi Jindal Timber & Plywood, I'd like to enquire about your materials.",
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" strokeWidth={0} />
    </a>
  );
}
