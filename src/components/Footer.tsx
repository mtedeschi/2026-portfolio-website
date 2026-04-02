import Link from "next/link"
import { Linkedin, Github, Heart, Bot } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-stone-200/60 bg-[#f5f0e8]/95 backdrop-blur-md supports-backdrop-filter:bg-[#f5f0e8]/80">
      <div className="w-full flex items-center justify-between px-4 md:px-[clamp(2rem,8vw,4rem)] py-[clamp(2rem,6vw,3rem)] gap-[clamp(1rem,4vw,2rem)]">
        {/* Left side - Name and tagline */}
        <div className="flex flex-col gap-2">
          <Link
            href="/"
            className="font-headline text-[clamp(1.35rem,3.2vw,1.65rem)] font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            Mike Tedeschi
          </Link>
          <div className="text-[clamp(0.75rem,1.5vw,0.875rem)] text-muted-foreground flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
            <span className="flex items-center gap-1">
              <Heart className="h-[clamp(0.75rem,1.5vw,0.875rem)] w-[clamp(0.75rem,1.5vw,0.875rem)] shrink-0" aria-hidden />
              Based in Philadelphia
            </span>
            <span className="flex items-center gap-1">
              <Bot className="h-[clamp(0.75rem,1.5vw,0.875rem)] w-[clamp(0.75rem,1.5vw,0.875rem)] shrink-0" aria-hidden />
              Made with Claude Code
            </span>
          </div>
        </div>

        {/* Right side - Social links (fluid spacing and sizing) */}
        <div className="flex items-center gap-[clamp(0.75rem,2vw,1rem)] flex-shrink-0">
          <Link
            href="https://linkedin.com/in/miketedeschi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors group"
            aria-label="LinkedIn"
          >
            <Linkedin
              className="h-[clamp(1.25rem,3vw,1.5rem)] w-[clamp(1.25rem,3vw,1.5rem)] transition-colors group-hover:text-accent"
              strokeWidth={1}
            />
          </Link>
          <Link
            href="https://github.com/mtedeschi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors group"
            aria-label="GitHub"
          >
            <Github
              className="h-[clamp(1.25rem,3vw,1.5rem)] w-[clamp(1.25rem,3vw,1.5rem)] transition-colors group-hover:text-accent"
              strokeWidth={1}
            />
          </Link>
        </div>
      </div>
    </footer>
  )
}
