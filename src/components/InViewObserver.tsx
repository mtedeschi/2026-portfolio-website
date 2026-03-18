"use client"

import { usePathname } from "next/navigation"
import { useEffect, useLayoutEffect } from "react"

function getHighlightStrongs(): Element[] {
  if (typeof document === "undefined") return []
  const strongs = document.querySelectorAll("h1 strong, h2 strong, h3 strong")
  return Array.from(strongs)
}

export function InViewObserver() {
  const pathname = usePathname()

  // Jump to top instantly on route change (no smooth scroll) so scroll-based animations don’t fire
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
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
        rootMargin: "0px 0px -80px 0px",
        threshold: 0.1,
      }
    )

    const observe = () => {
      document.querySelectorAll(".animate-in-view").forEach((el) => observer.observe(el))
      getHighlightStrongs().forEach((el) => observer.observe(el))
    }

    observe()

    const timeout = requestAnimationFrame(() => {
      requestAnimationFrame(observe)
    })

    const onReobserve = () => {
      observe()
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
