"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { submitContactForm, type ContactFormState } from "./actions"

const INTEREST_OPTIONS = [
  "Contract design & development",
  "Fractional design leadership",
  "AI enablement",
  "AI Orchestration Sprint",
  "Concept to Execution Sprint",
  "Workshop facilitation",
  "Job opportunity",
  "Something else",
]

const inputClass =
  "w-full rounded-lg border border-input bg-white px-[clamp(0.75rem,2vw,1rem)] py-[clamp(0.5rem,1.5vw,0.75rem)] text-[clamp(0.875rem,2vw,1rem)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"

export function ContactForm() {
  const [state, formAction, isPending] = useActionState<ContactFormState, FormData>(
    submitContactForm,
    {}
  )

  return (
    <form action={formAction} className="flex flex-col gap-[clamp(1.25rem,3vw,1.5rem)]">
      {state?.success && (
        <p className="text-[clamp(0.875rem,2vw,1rem)] text-primary font-medium">
          Thanks, I&apos;ll be in touch.
        </p>
      )}
      {state?.error && (
        <p className="text-[clamp(0.875rem,2vw,1rem)] text-destructive font-medium" role="alert">
          {state.error}
        </p>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="text-[clamp(0.875rem,2vw,1rem)] font-medium">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          required
          className={inputClass}
          placeholder="Your name"
          disabled={isPending}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="text-[clamp(0.875rem,2vw,1rem)] font-medium">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          className={inputClass}
          placeholder="you@example.com"
          disabled={isPending}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-phone" className="text-[clamp(0.875rem,2vw,1rem)] font-medium">
          Phone
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          className={inputClass}
          placeholder="Optional"
          disabled={isPending}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-interest" className="text-[clamp(0.875rem,2vw,1rem)] font-medium">
          What are you interested in?
        </label>
        <select
          id="contact-interest"
          name="interest"
          className={inputClass}
          disabled={isPending}
        >
          <option value="">Select an option</option>
          {INTEREST_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-[clamp(0.875rem,2vw,1rem)] font-medium">
          Tell me more
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          className={`${inputClass} min-h-[clamp(6rem,15vw,8rem)] resize-y`}
          placeholder="Share a bit about your project or question..."
          disabled={isPending}
        />
      </div>

      <div className="pt-[clamp(0.5rem,2vw,1rem)]">
        <Button
          type="submit"
          size="lg"
          disabled={isPending}
          className="text-[clamp(0.875rem,2vw,1rem)] h-[clamp(2.75rem,7vw,3.5rem)] px-[clamp(1.5rem,4vw,2rem)]"
        >
          {isPending ? "Sending…" : "Send message"}
        </Button>
      </div>
    </form>
  )
}
