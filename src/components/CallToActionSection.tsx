"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export function CallToActionSection() {
  const pathname = usePathname()
  if (pathname === "/contact") return null

  return (
    <section
      className="w-full min-h-dvh flex items-center justify-center border-t border-stone-200/70 px-[clamp(2rem,8vw,4rem)] py-[clamp(4rem,12vw,8rem)] animate-in-view"
      aria-labelledby="cta-heading"
    >
      <div className="w-full lg:max-w-[60%] flex flex-col gap-[clamp(1.5rem,4vw,2.5rem)] items-center text-center">
        <h2
          id="cta-heading"
          className="text-[clamp(2.75rem,9vw,5.75rem)] font-bold leading-[1.05] tracking-tight"
        >
          Let&apos;s work together
        </h2>
        <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-muted-foreground leading-relaxed">
          If you&apos;re exploring how AI fits into your business, struggling to move from idea to execution, or need experienced design leadership to guide the way—I&apos;d love to talk.
        </p>
        <div className="pt-[clamp(0.5rem,2vw,1rem)]">
          <Button asChild size="lg" className="text-[clamp(0.875rem,2vw,1rem)] h-[clamp(2.75rem,7vw,3.5rem)] px-[clamp(1.5rem,4vw,2rem)]">
            <Link href="/contact">Work with me</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
