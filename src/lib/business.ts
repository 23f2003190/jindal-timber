// Canonical business identity for Jindal Timber & Plywood.
//
// Single source of truth so the name, address, phone numbers, GSTIN, etc.
// never drift out of sync across pages (they previously did — e.g. two
// different address formats existed before this file was introduced).
// Registered details match the GST certificate (GSTIN 07AHOPJ7812L1ZV) and
// the Udyam/MSME certificate (UDYAM-DL-02-0012185) on file.
export const BUSINESS = {
  legalName: "Naveen Jindal",
  tradeName: "Jindal Timber & Plywood",
  proprietor: "Naveen Jindal",

  // Matches the GST registration certificate's "Address of Principal Place
  // of Business". "Opposite Gagan Vihar" is a local landmark for
  // way-finding, not part of the registered address, so it's kept separate.
  addressLine: "F-63, Parwana Road, Jagat Puri, East Delhi, Delhi - 110051",
  landmark: "Opposite Gagan Vihar",
  addressFull: "F-63, Parwana Road, Jagat Puri, East Delhi, Delhi - 110051 (Opposite Gagan Vihar)",

  phonePrimary: "+91 98711 97214",
  phonePrimaryTel: "+919871197214",
  phoneSecondary: "+91 96251 36025",
  phoneSecondaryTel: "+919625136025",

  // Dedicated WhatsApp Business number — kept separate from the calling
  // numbers above since a WhatsApp Business API number can't also run in a
  // personal WhatsApp app.
  whatsappDisplay: "+91 95552 54347",
  whatsappE164: "919555254347", // no "+" — required format for wa.me links

  email: "jindal.naveen17@gmail.com",

  gstin: "07AHOPJ7812L1ZV",
  udyam: "UDYAM-DL-02-0012185",

  // Used to build Google Maps search / embed links.
  mapsQuery: "Jindal+Timber+and+Plywood+Parwana+Road+Jagat+Puri+Delhi+110051",

  // Live custom domain (purchased 2026-09-13). Update this — and nothing
  // else — if the domain ever changes; every reference below reads from it.
  siteUrl: "https://jindaltimberplywood.in",
};

export function whatsAppLink(message: string): string {
  return `https://wa.me/${BUSINESS.whatsappE164}?text=${encodeURIComponent(message)}`;
}
