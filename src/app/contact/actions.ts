"use server"

import { Resend } from "resend"

const RESEND_FROM = "onboarding@resend.dev"
const CONTACT_EMAIL = "mike.tedeschi@gmail.com"

export type ContactFormState = {
  success?: boolean
  error?: string
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string)?.trim()
  const email = (formData.get("email") as string)?.trim()
  const phone = (formData.get("phone") as string)?.trim()
  const interest = (formData.get("interest") as string)?.trim()
  const message = (formData.get("message") as string)?.trim()

  if (!name) {
    return { success: false, error: "Please enter your name." }
  }
  if (!email) {
    return { success: false, error: "Please enter your email." }
  }
  if (!emailRegex.test(email)) {
    return { success: false, error: "Please enter a valid email address." }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set")
    return { success: false, error: "Something went wrong. Please try again." }
  }

  const resend = new Resend(apiKey)

  const subject = `Contact form: ${interest || "General"} from ${name}`

  const bodyHtml = `
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone || "—")}</p>
    <p><strong>What are you interested in?</strong> ${escapeHtml(interest || "—")}</p>
    <p><strong>Tell me more:</strong></p>
    <p>${escapeHtml(message || "—").replace(/\n/g, "<br>")}</p>
  `

  const { data, error } = await resend.emails.send({
    from: RESEND_FROM,
    to: [CONTACT_EMAIL],
    subject,
    html: bodyHtml,
  })

  if (error) {
    console.error("Resend error:", error)
    return { success: false, error: "Something went wrong. Please try again." }
  }

  return { success: true }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}
