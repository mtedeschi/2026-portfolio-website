"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const navigationItems = [
  { label: "Explore my work", href: "/#case-studies" },
  { label: "Services", href: "/services" },
  { label: "AI Orchestration Sprint", href: "/services#ai-orchestration", inset: true },
  { label: "Concept to Execution Sprint", href: "/services#concept-to-execution", inset: true },
  { label: "This Week in AI", href: "/insights" },
  { label: "Work with me", href: "/contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="w-full relative h-[clamp(3.5rem,8vw,4rem)] flex items-center justify-between px-[clamp(1rem,4vw,2rem)]">
        {/* Left side - Menu button + Logo (15% larger) */}
        <div className="flex items-center gap-[clamp(0.5rem,1.5vw,0.75rem)] z-10">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-[clamp(2rem,5vw,2.5rem)] w-[clamp(2rem,5vw,2.5rem)] shrink-0 overflow-visible [&>svg]:size-auto! transition-all duration-200 hover:bg-primary/10 hover:text-primary active:scale-95 active:bg-primary/15"
              >
                <Menu className="h-[clamp(2.8125rem,6.75vw,3.375rem)] w-[clamp(2.8125rem,6.75vw,3.375rem)]" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[min(85vw,400px)] p-[clamp(1rem,4vw,1.5rem)] bg-background/90 backdrop-blur-sm"
            >
              <nav className="mt-[clamp(1.5rem,5vw,2rem)] flex flex-col gap-[clamp(0.75rem,2vw,1rem)]">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 text-[clamp(1rem,2.5vw,1.125rem)] font-medium transition-colors hover:text-primary"
                  >
                    {item.inset && (
                      <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                    )}
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link
            href="/"
            className="flex items-center text-[clamp(1.44rem,3.45vw,1.725rem)] font-normal transition-colors hover:text-primary uppercase tracking-wide"
            style={{ fontFamily: "var(--font-league-gothic)" }}
          >
            Mike Tedeschi
          </Link>
        </div>

        {/* Spacer for layout balance */}
        <div className="flex-1 min-w-0" aria-hidden />

        {/* Right side - Contact me button */}
        <div className="flex items-center justify-end z-10">
          <Button asChild size="sm" className="h-[clamp(2rem,5vw,2.5rem)] px-[clamp(0.75rem,2vw,1rem)] text-[clamp(0.75rem,1.5vw,0.875rem)]">
            <Link href="/contact">Work with me</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
