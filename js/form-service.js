// form-service.js — Far Shore: send form submissions by email via Web3Forms (web3forms.com)
//
// Setup: paste the Access Key from your Web3Forms dashboard below. Submissions
// go to the email address the key was created for. The key is designed to be
// public, so it's fine in the page source.
//
// To switch to another service, only this file needs to change.

const ACCESS_KEY = "c5df50f4-b266-434f-81ed-b7ac51adacad";
const ENDPOINT = "https://api.web3forms.com/submit";

/**
 * Sends `fields` as an email. Field names become the row labels in the email.
 * Options: subject, replyTo (the visitor's address, so "Reply" goes to them),
 *          honeypot (value of the hidden spam-trap field).
 * Resolves on success; rejects with an Error otherwise.
 */
export async function sendForm(
  fields,
  { subject, replyTo, honeypot = "" } = {},
) {
  // Bots fill hidden fields; pretend it worked and send nothing
  if (honeypot) return { success: true };

  const payload = {
    access_key: ACCESS_KEY,
    subject,
    from_name: "Far Shore Website",
    ...fields,
  };
  if (replyTo) payload.replyto = replyTo;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    const data = await res.json().catch(() => ({}));
    // Web3Forms answers { success: true | false, message }
    if (!res.ok || data.success !== true) {
      throw new Error(data.message || `Form service returned ${res.status}`);
    }
    return data;
  } finally {
    clearTimeout(timer);
  }
}
