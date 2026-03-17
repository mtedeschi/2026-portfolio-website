import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Services - Mike Tedeschi",
  description:
    "Design, product, and technology orchestrated for real impact. AI enablement, product leadership, advisory, and outcome-driven sprints.",
}

const sectionPadding = "pt-[120px] md:pt-[clamp(4rem,10vw,6rem)] pb-[clamp(4rem,10vw,6rem)]"
const sectionPaddingX = "px-[clamp(2rem,8vw,4rem)]"
const eyebrow = "text-[clamp(0.875rem,2vw,1rem)] font-semibold text-muted-foreground uppercase tracking-wide"
const heading = "text-[clamp(2rem,5.5vw,2.75rem)] font-bold leading-[1.1] tracking-tight"
const headingSmall = "text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold leading-[1.1] tracking-tight"
const body = "text-[clamp(1rem,2.5vw,1.25rem)] leading-relaxed"
const bodyMuted = "text-[clamp(0.875rem,2vw,1rem)] text-muted-foreground leading-relaxed"
const cardClass =
  "rounded-lg p-[clamp(1.5rem,4vw,2rem)] flex flex-col gap-[clamp(1rem,2.5vw,1.25rem)] bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        data-particle-shape="zap"
        className={`w-full pt-[120px] md:pt-0 md:min-h-[calc(100dvh-4rem)] flex items-center ${sectionPaddingX} animate-in-view`}
      >
        <div className="w-full lg:max-w-[70%] flex flex-col gap-[clamp(1.5rem,4vw,2.5rem)]">
          <p className={eyebrow}>Services</p>
          <h1 className="text-[clamp(2rem,8vw,4.5rem)] font-bold leading-[1.1] tracking-tight">
            Design. Product. Technology. <strong>Orchestrated for Real Impact.</strong>
          </h1>
          <div className="flex flex-col gap-[clamp(1rem,2.5vw,1.25rem)]">
            <p className={body}>
              I partner with organizations to turn ambition into execution—bridging design, product, and technology to deliver measurable outcomes.
              Whether acting as an advisor, embedded leader, or sprint partner, I bring a hands-on approach shaped by years of delivering high-impact digital products and transformation initiatives.
            </p>
          </div>
          <div className="pt-[clamp(0.5rem,2vw,1rem)]">
            <Button asChild size="lg" className="text-[clamp(0.875rem,2vw,1rem)] h-[clamp(2.75rem,7vw,3.5rem)] px-[clamp(1.5rem,4vw,2rem)]">
              <Link href="/contact">Work with me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section data-particle-shape="false" className={`w-full ${sectionPadding} ${sectionPaddingX} animate-in-view`}>
        <div className="flex flex-col gap-[clamp(3rem,8vw,5rem)]">
          <div className="flex flex-col gap-[clamp(1rem,3vw,1.5rem)] w-full lg:max-w-[60%]">
            <p className={eyebrow}>What I Do</p>
            <h2 className={headingSmall}>
              Capabilities that connect <strong>strategy to execution</strong>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(1.5rem,4vw,2rem)]">
            {/* AI Enablement */}
            <div className={cardClass}>
              <h3 className="text-[clamp(1.375rem,3.5vw,1.75rem)] font-semibold tracking-tight leading-tight">
                AI Enablement & Transformation
              </h3>
              <p className={bodyMuted}>
                I help organizations move beyond experimentation to real, measurable AI adoption.
              </p>
              <ul className="list-none space-y-[clamp(0.5rem,1.25vw,0.75rem)] text-[clamp(0.875rem,2vw,1rem)] text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary shrink-0" aria-hidden>·</span>
                  Identify high-value opportunities for AI
                </li>
                <li className="flex gap-2">
                  <span className="text-primary shrink-0" aria-hidden>·</span>
                  Map current-state processes and uncover inefficiencies
                </li>
                <li className="flex gap-2">
                  <span className="text-primary shrink-0" aria-hidden>·</span>
                  Design AI-enabled future-state workflows
                </li>
                <li className="flex gap-2">
                  <span className="text-primary shrink-0" aria-hidden>·</span>
                  Evaluate and integrate the right AI tools
                </li>
                <li className="flex gap-2">
                  <span className="text-primary shrink-0" aria-hidden>·</span>
                  Build internal capability
                </li>
              </ul>
            </div>
            {/* Product, Design & Experience */}
            <div className={cardClass}>
              <h3 className="text-[clamp(1.375rem,3.5vw,1.75rem)] font-semibold tracking-tight leading-tight">
                Product & Design Leadership
              </h3>
              <p className={bodyMuted}>
                From early concept through scaled delivery, I help teams create products that work—for users and the business.
              </p>
              <ul className="list-none space-y-[clamp(0.5rem,1.25vw,0.75rem)] text-[clamp(0.875rem,2vw,1rem)] text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary shrink-0" aria-hidden>·</span>
                  Product strategy and roadmap definition
                </li>
                <li className="flex gap-2">
                  <span className="text-primary shrink-0" aria-hidden>·</span>
                  UX and service design leadership
                </li>
                <li className="flex gap-2">
                  <span className="text-primary shrink-0" aria-hidden>·</span>
                  Experience strategy across digital ecosystems
                </li>
                <li className="flex gap-2">
                  <span className="text-primary shrink-0" aria-hidden>·</span>
                  Design system and platform thinking
                </li>
                <li className="flex gap-2">
                  <span className="text-primary shrink-0" aria-hidden>·</span>
                  Cross-functional team alignment
                </li>
              </ul>
            </div>
            {/* Advisory & Fractional */}
            <div className={cardClass}>
              <h3 className="text-[clamp(1.375rem,3.5vw,1.75rem)] font-semibold tracking-tight leading-tight">
                Advisory & Fractional Leadership
              </h3>
              <p className={bodyMuted}>
                Flexible, senior-level leadership without the overhead of a full-time hire.
              </p>
              <ul className="list-none space-y-[clamp(0.5rem,1.25vw,0.75rem)] text-[clamp(0.875rem,2vw,1rem)] text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary shrink-0" aria-hidden>·</span>
                  Fractional Head of Product / Design
                </li>
                <li className="flex gap-2">
                  <span className="text-primary shrink-0" aria-hidden>·</span>
                  Strategic advisory for digital and AI transformation
                </li>
                <li className="flex gap-2">
                  <span className="text-primary shrink-0" aria-hidden>·</span>
                  Design operations and team scaling
                </li>
                <li className="flex gap-2">
                  <span className="text-primary shrink-0" aria-hidden>·</span>
                  Executive stakeholder alignment and facilitation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sprint Offerings */}
      <section data-particle-shape="false" className={`w-full ${sectionPadding} ${sectionPaddingX} animate-in-view`}>
        <div className="flex flex-col gap-[clamp(3rem,8vw,5rem)]">
          <div className="flex flex-col gap-[clamp(1rem,3vw,1.5rem)] w-full lg:max-w-[60%]">
            <p className={eyebrow}>Sprint Offerings</p>
            <h2 className={headingSmall}>
              Structured, outcome-driven engagements
            </h2>
            <p className={body}>
              Designed to move quickly from ambiguity to clarity—and from ideas to execution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(1.5rem,4vw,2rem)]">
            {/* AI Orchestration Sprint */}
            <div id="ai-orchestration" className="scroll-mt-[clamp(6rem,15vw,8rem)] min-w-0">
              <div className={`${cardClass} gap-[clamp(1.5rem,4vw,2rem)] h-full flex flex-col`}>
                <div>
                  <p className="text-[clamp(0.8125rem,1.75vw,0.9375rem)] font-medium text-primary uppercase tracking-wide mb-1">
                    4–6 Weeks
                  </p>
                  <h3 className="text-[clamp(1.5rem,4vw,2rem)] font-bold tracking-tight leading-tight">
                    AI Orchestration Sprint
                  </h3>
                </div>
                <p className={bodyMuted}>
                  Most organizations struggle with AI not because of the tools—but because they don't know where it fits in their actual work. This sprint focuses on identifying where AI creates real value and designing workflows that make it usable, measurable, and scalable all tied to measureable business outcomes.
                </p>
                <div>
                  <h4 className="text-[clamp(1rem,2.5vw,1.125rem)] font-semibold mb-[clamp(0.75rem,2vw,1rem)]">Outcomes</h4>
                  <ul className="list-none space-y-[clamp(0.5rem,1.25vw,0.75rem)] text-[clamp(0.875rem,2vw,1rem)] text-muted-foreground">
                    <li className="flex gap-2">· Clear, actionable AI strategy tied to real workflows</li>
                    <li className="flex gap-2">· Defined future-state processes—not just ideas</li>
                    <li className="flex gap-2">· Tooling and implementation recommendations</li>
                    <li className="flex gap-2">· A business case grounded in measurable impact</li>
                    <li className="flex gap-2">· Optional working prototype to demonstrate value</li>
                  </ul>
                </div>
                <Button asChild size="lg" className="w-fit mt-auto">
                  <Link href="/contact">Plan your sprint</Link>
                </Button>
              </div>
            </div>

            {/* Concept to Execution Sprint */}
            <div id="concept-to-execution" className="scroll-mt-[clamp(6rem,15vw,8rem)] min-w-0">
              <div className={`${cardClass} gap-[clamp(1.5rem,4vw,2rem)] h-full flex flex-col`}>
                <div>
                  <p className="text-[clamp(0.8125rem,1.75vw,0.9375rem)] font-medium text-primary uppercase tracking-wide mb-1">
                    2–4 Weeks
                  </p>
                  <h3 className="text-[clamp(1.5rem,4vw,2rem)] font-bold tracking-tight leading-tight">
                    Concept to Execution Sprint
                  </h3>
                </div>
                <p className={bodyMuted}>
                  Great ideas are everywhere. Execution is where most teams get stuck. This sprint is designed to take a concept—whether it's a new product, internal tool, or experience—and turn it into a functional, testable solution in four weeks or less.
                </p>
                <div>
                  <h4 className="text-[clamp(1rem,2.5vw,1.125rem)] font-semibold mb-[clamp(0.75rem,2vw,1rem)]">Outcomes</h4>
                  <ul className="list-none space-y-[clamp(0.5rem,1.25vw,0.75rem)] text-[clamp(0.875rem,2vw,1rem)] text-muted-foreground">
                    <li className="flex gap-2">· A working, testable product—not just concepts or wireframes</li>
                    <li className="flex gap-2">· Validated direction based on real usage and feedback</li>
                    <li className="flex gap-2">· Foundation for scaling into a full product</li>
                    <li className="flex gap-2">· Accelerated timeline from idea to execution</li>
                  </ul>
                </div>
                <Button asChild size="lg" className="w-fit mt-auto">
                  <Link href="/contact">Build your product</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
