"use client"

import { usePathname } from "next/navigation"
import { useEffect, useLayoutEffect } from "react"

/** Matches `rootMargin` bottom inset so fallback uses the same visible band as IntersectionObserver. */
const VIEWPORT_BOTTOM_INSET_PX = 80

function getHighlightStrongs(): Element[] {
  if (typeof document === "undefined") return []
  const strongs = document.querySelectorAll("h1 strong, h2 strong, h3 strong")
  return Array.from(strongs)
}

/**
 * WebViews (e.g. LinkedIn) sometimes skip IO callbacks for very tall `.animate-in-view`
 * roots. If an element already overlaps the effective root (viewport minus bottom inset),
 * reveal it without waiting for the observer.
 */
function applyAnimateInViewViewportFallback(): void {
  const effectiveBottom = window.innerHeight - VIEWPORT_BOTTOM_INSET_PX
  if (effectiveBottom <= 0) return

  document.querySelectorAll(".animate-in-view:not(.in-view)").forEach((el) => {
    const rect = el.getBoundingClientRect()
    const overlaps =
      rect.bottom > 0 && rect.top < effectiveBottom && rect.right > 0 && rect.left < window.innerWidth
    if (overlaps) el.classList.add("in-view")
  })
}

export function InViewObserver() {
  const pathname = usePathname()

  // Jump to top instantly on route change (no smooth scroll) so scroll-based animations don’t fire
  useLayoutEffect(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" })
    } catch {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          }
        })
      },
      {
        rootMargin: `0px 0px -${VIEWPORT_BOTTOM_INSET_PX}px 0px`,
        threshold: 0,
      }
    )

    const observe = () => {
      document.querySelectorAll(".animate-in-view").forEach((el) => observer.observe(el))
      getHighlightStrongs().forEach((el) => observer.observe(el))
    }

    observe()
    applyAnimateInViewViewportFallback()

    const timeout = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        observe()
        applyAnimateInViewViewportFallback()
      })
    })

    const onReobserve = () => {
      observe()
      requestAnimationFrame(() => applyAnimateInViewViewportFallback())
    }
    window.addEventListener("reobserve-in-view", onReobserve)

    return () => {
      cancelAnimationFrame(timeout)
      window.removeEventListener("reobserve-in-view", onReobserve)
      observer.disconnect()
    }
  }, [pathname])

  return null
}
