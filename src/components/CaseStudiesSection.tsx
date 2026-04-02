"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getProjectsList } from "@/data/projects"
import { useSwipeGesture } from "@/hooks/useSwipeGesture"
import { TAG_BADGE_CLASS } from "@/lib/tag-accent"

const caseStudies = getProjectsList()

export function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1))
  }

  const { didSwipe, swipeHandlers } = useSwipeGesture(goToNext, goToPrevious)

  return (
    <section id="case-studies" data-particle-shape="false" className="w-full pt-[120px] md:pt-[clamp(4rem,12vw,8rem)] pb-[clamp(4rem,12vw,8rem)] overflow-hidden animate-in-view">
      {/* Header */}
      <div className="px-4 md:px-[clamp(2rem,8vw,4rem)] mb-[clamp(2rem,6vw,4rem)]">
        <div className="flex flex-col gap-[clamp(1rem,3vw,1.5rem)] w-full lg:max-w-[80%]">
          <p className="text-[clamp(0.875rem,2vw,1rem)] font-semibold text-muted-foreground uppercase tracking-wide">
            Selected work
          </p>
          <h2 className="text-[clamp(2.5rem,7vw,4.25rem)] font-bold leading-[1.08] tracking-tight">
            My <strong>past projects</strong> demonstrating leadership, systems thinking, and measurable impact
          </h2>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        <div
          className="flex gap-4 md:gap-[clamp(1rem,2vw,1.5rem)] px-4 md:px-[clamp(2rem,8vw,4rem)] transition-transform duration-500 ease-out [--slide-offset:calc(100vw-3rem)] md:[--slide-offset:calc(22vw+clamp(1rem,2vw,1.5rem))] touch-pan-y"
          style={{
            transform: `translateX(calc(-${activeIndex} * var(--slide-offset)))`,
          }}
          onDragStart={(e) => e.preventDefault()}
          {...swipeHandlers}
        >
          {caseStudies.map((study, index) => {
            const isActive = index === activeIndex
            return (
              <Link
                key={index}
                href={`/projects/${study.id}`}
                draggable={false}
                onDragStart={(e) => e.preventDefault()}
                onClick={(e) => {
                  if (didSwipe.current) {
                    e.preventDefault()
                  }
                }}
                className={`relative shrink-0 rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500 h-[60vh] md:h-[70vh] block select-none ${
                  isActive
                    ? "w-[calc(100vw-4rem)] md:w-[50vw]"
                    : "w-[calc(100vw-4rem)] md:w-[22vw]"
                }`}
              >
                {/* Background Image - only shown on active card */}
                <div
                  className={`absolute inset-0 bg-muted bg-cover bg-center transition-opacity duration-500 [user-drag:none] [-webkit-user-drag:none] ${
                    isActive ? "opacity-100" : "opacity-30"
                  }`}
                  style={{
                    backgroundImage: `url(${study.image})`,
                  }}
                />
                {/* Gradient Overlay - only shown on active card */}
                <div className={`absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`} />

                {/* Content */}
                <div className={`absolute inset-0 flex flex-col justify-end backdrop-blur-md transition-all duration-500 ${
                  isActive 
                    ? "p-[clamp(1.5rem,3.75vw,2.5rem)] bg-black/40 supports-[backdrop-filter]:bg-black/30" 
                    : "p-[clamp(1.25rem,3vw,2rem)] bg-background/80 supports-[backdrop-filter]:bg-background/60 hover:bg-background/70"
                }`}>
                  <p className={`text-[clamp(0.75rem,1.5vw,0.875rem)] font-medium uppercase tracking-wide mb-[clamp(0.25rem,1vw,0.5rem)] transition-colors duration-500 ${
                    isActive ? "text-white/70" : "text-muted-foreground"
                  }`}>
                    {study.client}
                  </p>
                  <h3 className={`font-semibold leading-tight transition-all duration-500 ${
                    isActive ? "text-[clamp(1.5rem,4.5vw,2.5rem)] text-white" : "text-[clamp(1.25rem,3.5vw,2rem)] text-foreground"
                  }`}>
                    {study.title}
                  </h3>
                  <div 
                    className={`grid transition-all duration-500 ${
                      isActive ? "grid-rows-[1fr] opacity-100 mt-[clamp(0.5rem,1.5vw,0.75rem)]" : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[clamp(0.875rem,1.5vw,1rem)] text-white/80 leading-relaxed mb-[clamp(0.75rem,2vw,1rem)]" dangerouslySetInnerHTML={{ __html: study.summary }} />
                      <div className="flex flex-wrap gap-[clamp(0.375rem,1vw,0.5rem)]">
                        {study.tags.filter(Boolean).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`text-[clamp(0.625rem,1.25vw,0.75rem)] font-semibold px-[clamp(0.5rem,1.25vw,0.75rem)] py-[clamp(0.25rem,0.5vw,0.375rem)] rounded-full ${TAG_BADGE_CLASS}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Navigation Indicator */}
      <div className="px-4 md:px-[clamp(2rem,8vw,4rem)] mt-[clamp(1.5rem,4vw,2.5rem)]">
        <div className="flex items-center gap-[clamp(1rem,2vw,1.5rem)]">
          <div className="flex items-center gap-1 md:gap-[clamp(0.25rem,0.5vw,0.375rem)]">
            <button
              onClick={goToPrevious}
              className="min-w-11 min-h-11 md:min-w-0 md:min-h-0 p-[clamp(0.5rem,1.5vw,0.75rem)] rounded-full hover:bg-muted transition-colors flex items-center justify-center"
              aria-label="Previous case study"
            >
              <ChevronLeft className="w-5 h-5 md:w-[clamp(1rem,2vw,1.25rem)] md:h-[clamp(1rem,2vw,1.25rem)]" strokeWidth={1} />
            </button>
            <button
              onClick={goToNext}
              className="min-w-11 min-h-11 md:min-w-0 md:min-h-0 p-[clamp(0.5rem,1.5vw,0.75rem)] rounded-full hover:bg-muted transition-colors flex items-center justify-center"
              aria-label="Next case study"
            >
              <ChevronRight className="w-5 h-5 md:w-[clamp(1rem,2vw,1.25rem)] md:h-[clamp(1rem,2vw,1.25rem)]" strokeWidth={1} />
            </button>
          </div>
          <div className="flex items-center gap-[clamp(0.375rem,1vw,0.5rem)]">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-[clamp(0.5rem,1vw,0.625rem)] h-[clamp(0.5rem,1vw,0.625rem)] rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-primary w-[clamp(1.5rem,3vw,2rem)]"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to case study ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
