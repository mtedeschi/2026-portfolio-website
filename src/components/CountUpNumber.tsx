"use client"

import { useEffect, useRef, useState } from "react"

const DURATION_MS = 1600
const TICK_INTERVAL_MS = 40

interface CountUpNumberProps {
  value: number
  caption: string
}

export function CountUpNumber({ value, caption }: CountUpNumberProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true)
          }
        })
      },
      { rootMargin: "0px 0px -60px 0px", threshold: 0.2 }
    )

    const el = ref.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [hasAnimated])

  useEffect(() => {
    if (!hasAnimated) return

    const startTime = performance.now()
    const timer = setInterval(() => {
      const elapsed = performance.now() - startTime
      const progress = Math.min(elapsed / DURATION_MS, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * value)
      setDisplayValue(current)
      if (progress >= 1) clearInterval(timer)
    }, TICK_INTERVAL_MS)

    return () => clearInterval(timer)
  }, [hasAnimated, value])

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <span className="text-[clamp(3.125rem,10vw,5.625rem)] font-bold leading-none tracking-tight text-primary">
        {displayValue.toLocaleString()}
      </span>
      <span className="text-[clamp(0.875rem,1.5vw,1rem)] text-muted-foreground">
        {caption}
      </span>
    </div>
  )
}
