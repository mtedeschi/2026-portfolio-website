import type { Metadata } from "next"
import { ContactForm } from "./ContactForm"
import { pageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = pageMetadata({
  path: "/contact",
  title: "Contact - Mike Tedeschi",
  description:
    "Get in touch for design leadership, AI enablement, product strategy, or collaboration.",
})

const sectionPaddingX = "px-[clamp(2rem,8vw,4rem)]"
const eyebrow =
  "text-[clamp(0.875rem,2vw,1rem)] font-semibold text-muted-foreground uppercase tracking-wide"
const body = "text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed"

export default function ContactPage() {
  return (
    <section
      data-particle-shape="zap"
      className={`w-full pt-[120px] md:pt-[clamp(4rem,10vw,6rem)] md:min-h-[calc(100dvh-4rem)] flex items-center ${sectionPaddingX} animate-in-view`}
    >
      <div className="w-full lg:max-w-[70%] flex flex-col gap-[clamp(1.5rem,4vw,2.5rem)]">
        <p className={eyebrow}>Contact</p>
        <h1 className="text-[clamp(2.75rem,9vw,5.75rem)] font-bold leading-[1.05] tracking-tight">
          Let&apos;s work together
        </h1>
        <div className="flex flex-col gap-[clamp(1rem,2.5vw,1.25rem)]">
          <p className={body}>
            Whether you&apos;re exploring a new project, need fractional leadership, or want to
            talk through an idea—I&apos;d love to hear from you. Share a few details below and
            I&apos;ll get back to you soon.
          </p>
        </div>
        <div className="w-full max-w-xl pt-[clamp(0.5rem,2vw,1rem)] pb-[clamp(4rem,10vw,6rem)]">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
