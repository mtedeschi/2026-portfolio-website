"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useSwipeGesture } from "@/hooks/useSwipeGesture"

interface ProjectGalleryCarouselProps {
  images: string[]
}

export function ProjectGalleryCarousel({ images }: ProjectGalleryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const { didSwipe, swipeHandlers } = useSwipeGesture(goToNext, goToPrevious)

  if (!images.length) return null

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex gap-4 md:gap-[clamp(1rem,2vw,1.5rem)] px-4 md:px-[clamp(2rem,8vw,4rem)] transition-transform duration-500 ease-out [--slide-offset:calc(100vw-3rem)] md:[--slide-offset:calc(22vw+clamp(1rem,2vw,1.5rem))] touch-pan-y"
        style={{
          transform: `translateX(calc(-${activeIndex} * var(--slide-offset)))`,
        }}
        onDragStart={(e) => e.preventDefault()}
        {...swipeHandlers}
      >
        {images.map((src, index) => {
          const isActive = index === activeIndex
          return (
            <button
              key={index}
              type="button"
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              onClick={(e) => {
                if (didSwipe.current) {
                  e.preventDefault()
                  return
                }
                setActiveIndex(index)
              }}
              className={`relative shrink-0 rounded-lg overflow-hidden transition-all duration-500 h-[60vh] md:h-[70vh] cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 select-none ${
                isActive
                  ? "w-[calc(100vw-4rem)] md:w-[50vw]"
                  : "w-[calc(100vw-4rem)] md:w-[22vw]"
              }`}
              aria-label={`View image ${index + 1} of ${images.length}`}
              aria-current={isActive ? "true" : undefined}
            >
              <div
                className="absolute inset-0 bg-muted bg-cover bg-center pointer-events-none select-none [user-drag:none] [-webkit-user-drag:none]"
                style={{ backgroundImage: `url(${src})` }}
              />
            </button>
          )
        })}
      </div>

      {images.length > 1 && (
        <div className="px-4 md:px-[clamp(2rem,8vw,4rem)] mt-[clamp(1.5rem,4vw,2.5rem)] flex items-center gap-[clamp(1rem,2vw,1.5rem)]">
          <div className="flex items-center gap-1 md:gap-[clamp(0.25rem,0.5vw,0.375rem)]">
            <button
              onClick={goToPrevious}
              className="min-w-11 min-h-11 md:min-w-0 md:min-h-0 p-[clamp(0.5rem,1.5vw,0.75rem)] rounded-full hover:bg-muted transition-colors flex items-center justify-center"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 md:w-[clamp(1rem,2vw,1.25rem)] md:h-[clamp(1rem,2vw,1.25rem)]" strokeWidth={1} />
            </button>
            <button
              onClick={goToNext}
              className="min-w-11 min-h-11 md:min-w-0 md:min-h-0 p-[clamp(0.5rem,1.5vw,0.75rem)] rounded-full hover:bg-muted transition-colors flex items-center justify-center"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 md:w-[clamp(1rem,2vw,1.25rem)] md:h-[clamp(1rem,2vw,1.25rem)]" strokeWidth={1} />
            </button>
          </div>
          <div className="flex items-center gap-[clamp(0.375rem,1vw,0.5rem)]">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-[clamp(0.5rem,1vw,0.625rem)] h-[clamp(0.5rem,1vw,0.625rem)] rounded-full transition-all ${
                  index === activeIndex
                    ? "bg-primary w-[clamp(1.5rem,3vw,2rem)]"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
