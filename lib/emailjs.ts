import emailjs from "@emailjs/browser";

// Initialize EmailJS
// You'll need to set these environment variables or replace with your EmailJS credentials
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "your_public_key";

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  projectDetails: string;
  budget?: string;
  timeline?: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  try {
    // If EmailJS is not configured, log the data and return success (for development)
    if (SERVICE_ID === "your_service_id" || PUBLIC_KEY === "your_public_key") {
      console.log("EmailJS not configured. Form data:", data);
      return true; // Return true for development/testing
    }

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || "Not provided",
      message: data.message,
    };

    await emailjs.send(SERVICE_ID, "contact_template", templateParams, PUBLIC_KEY);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

export async function sendQuoteEmail(data: QuoteFormData): Promise<boolean> {
  try {
    // If EmailJS is not configured, log the data and return success (for development)
    if (SERVICE_ID === "your_service_id" || PUBLIC_KEY === "your_public_key") {
      console.log("EmailJS not configured. Quote form data:", data);
      return true; // Return true for development/testing
    }

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      project_type: data.projectType,
      project_details: data.projectDetails,
      budget: data.budget || "Not specified",
      timeline: data.timeline || "Not specified",
    };

    await emailjs.send(SERVICE_ID, "quote_template", templateParams, PUBLIC_KEY);
    return true;
  } catch (error) {
    console.error("Error sending quote email:", error);
    return false;
  }
}
