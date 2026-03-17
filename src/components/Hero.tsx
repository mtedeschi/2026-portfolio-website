"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

function scrollToCaseStudies(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault()
  document.getElementById("case-studies")?.scrollIntoView({ behavior: "smooth" })
}

export function Hero() {
  return (
    <section data-particle-shape="trending-up" className="w-full pt-[120px] md:pt-0 md:min-h-[calc(100dvh-4rem)] flex items-center px-[clamp(2rem,8vw,4rem)] animate-in-view">
      <div className="w-full lg:max-w-[70%] flex flex-col gap-[clamp(1.5rem,4vw,2.5rem)]">
        {/* Eyebrow */}
        <p className="text-[clamp(0.875rem,2vw,1rem)] font-semibold text-muted-foreground uppercase tracking-wide">
          Design, Product, and Technology Leadership
        </p>

        {/* Headline */}
        <h1 className="text-[clamp(2rem,8vw,4.5rem)] font-bold leading-[1.1] tracking-tight">
          <strong>I lead design and product teams</strong> at the intersection of AI, technology, and business strategy.
        </h1>

        {/* Subhead */}
        <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-muted-foreground leading-relaxed">
          I operate at the intersection of design, product, and technology — helping organizations navigate digital transformation and implement AI in ways that are measurable, operationally integrated, and scalable.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-[clamp(0.75rem,2vw,1rem)] pt-[clamp(0.5rem,2vw,1rem)]">
          <Button 
            asChild
            size="lg"
            className="text-[clamp(0.875rem,2vw,1rem)] h-[clamp(2.75rem,7vw,3.5rem)] px-[clamp(1.5rem,4vw,2rem)]"
          >
            <Link href="#case-studies" onClick={scrollToCaseStudies}>
              View case studies
            </Link>
          </Button>
          <Button 
            asChild
            variant="outline"
            size="lg"
            className="text-[clamp(0.875rem,2vw,1rem)] h-[clamp(2.75rem,7vw,3.5rem)] px-[clamp(1.5rem,4vw,2rem)]"
          >
            <Link href="/contact">
              Work with me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
