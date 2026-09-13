// CRM form-tracking helper for Jindal Timber & Plywood enquiry form.
// Standard fields use standard CRM keys; custom fields use registered IDs.

type StandardTrackingFieldKey = string;
type RegisteredCustomFieldId = string;
type TrackingCustomField = { value?: unknown; label: string };
type TrackingFileField = { file?: File; label: string };
type TrackingImageDataField = { dataUrl?: string; label: string };

export const TRACKING = {
  trackingId: "tk_79b4e74a9f3642309e95dd49085cbde4",
  locationId: "MiFDwHRpLlXiFux6cUlL",
  projectId: "1789141610346617454",
  formId: "jindal-wholesale-enquiry",
  formName: "Jindal Wholesale Enquiry",
  // Registered custom field ID for "Material Required"
  materialRequiredFieldId: "5t37IUHh8DvHMl3doeS6" as RegisteredCustomFieldId,
};

const postTrackingEvent = (
  trackingPayload: Record<string, unknown> & {
    formData: Record<StandardTrackingFieldKey, unknown>;
    formLabels: Record<StandardTrackingFieldKey, string>;
  },
  options: {
    customFields?: Record<RegisteredCustomFieldId, TrackingCustomField>;
    fileFields?: Record<RegisteredCustomFieldId, TrackingFileField>;
    imageDataFields?: Record<RegisteredCustomFieldId, TrackingImageDataField>;
  } = {},
) => {
  const { customFields = {}, fileFields = {}, imageDataFields = {} } = options;
  const eventPayload = {
    ...trackingPayload,
    formData: { ...trackingPayload.formData },
    formLabels: { ...trackingPayload.formLabels },
  };
  const body = new FormData();

  for (const [key, field] of Object.entries(customFields)) {
    if (field.value === undefined) continue;
    eventPayload.formData[key] = field.value;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(imageDataFields)) {
    const dataUrl = field.dataUrl;
    if (!dataUrl) continue;
    if (!dataUrl.startsWith("data:image/")) {
      throw new Error("Image data field must be a data:image/* base64 string");
    }
    eventPayload.formData[key] = dataUrl;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(fileFields)) {
    const file = field.file;
    if (!file) continue;
    if (file.size > 50 * 1024 * 1024) {
      throw new Error("File must be 50 MB or smaller");
    }
    eventPayload.formData[key] = {
      filename: file.name,
      size: file.size,
      type: file.type || "application/octet-stream",
    };
    eventPayload.formLabels[key] = field.label;
    body.append(key, file, file.name);
  }

  for (const key of Object.keys(eventPayload.formData)) {
    eventPayload.formLabels[key] ||= key;
  }

  body.append("event", JSON.stringify(eventPayload));

  // Give the CRM 10s to respond, then treat it as failed rather than hanging
  // the submit button forever.
  const requestInit: RequestInit = {
    method: "POST",
    headers: {
      version: "2021-07-28",
    },
    body,
  };
  if (typeof AbortSignal !== "undefined" && "timeout" in AbortSignal) {
    requestInit.signal = AbortSignal.timeout(10000);
  }

  return fetch("https://backend.leadconnectorhq.com/external-tracking/events", requestInit).then(
    (res) => {
      if (!res.ok) {
        throw new Error(`CRM tracking request failed with status ${res.status}`);
      }
    },
  );
};

export type EnquiryValues = {
  name: string;
  company: string;
  phone: string;
  email: string;
  material: string;
  message: string;
  // Explicit opt-in to being contacted about this enquiry via WhatsApp,
  // phone, or email — required by WhatsApp Business Messaging Policy and
  // recorded with the submission as evidence of consent.
  consent: boolean;
};

export function trackEnquiry(values: EnquiryValues): Promise<void> {
  const trackingPayload = {
    type: "external_form_submission",
    timestamp: Date.now(),
    formId: TRACKING.formId,
    formData: {
      // Standard CRM fields
      first_name: values.name,
      email: values.email,
      phone: values.phone,
      organization: values.company,
      calendar_notes: values.message,
      // Recorded as proof of opt-in for WhatsApp Business Messaging Policy.
      whatsapp_consent: values.consent ? "Yes" : "No",
    },
    formLabels: {
      first_name: "Name",
      email: "Email",
      phone: "Phone Number",
      organization: "Company / Firm Name",
      calendar_notes: "Message",
      whatsapp_consent: "Consented to WhatsApp / Phone / Email Contact",
    },
    url: window.location.href,
    title: document.title,
    path: window.location.pathname,
    userAgent: navigator.userAgent,
    trackingId: TRACKING.trackingId,
    locationId: TRACKING.locationId,
    projectId: TRACKING.projectId,
    sessionId: crypto.randomUUID(),
    properties: {
      deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
      source: "ai_studio",
      projectId: TRACKING.projectId,
      formName: TRACKING.formName,
    },
  };

  return postTrackingEvent(trackingPayload, {
    customFields: {
      [TRACKING.materialRequiredFieldId]: {
        value: values.material,
        label: "Material Required",
      },
    },
  });
}
