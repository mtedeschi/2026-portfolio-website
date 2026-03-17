"use client"

import { useRef, useCallback } from "react"

const SWIPE_THRESHOLD_PX = 50

export function useSwipeGesture(onSwipeLeft: () => void, onSwipeRight: () => void) {
  const startX = useRef<number | null>(null)
  const startY = useRef<number | null>(null)
  const didSwipe = useRef(false)

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    startX.current = e.clientX
    startY.current = e.clientY
    didSwipe.current = false
  }, [])

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (startX.current === null || startY.current === null) return
      const deltaX = e.clientX - startX.current
      const deltaY = e.clientY - startY.current
      startX.current = null
      startY.current = null

      const absX = Math.abs(deltaX)
      const absY = Math.abs(deltaY)
      if (absX > SWIPE_THRESHOLD_PX && absX > absY) {
        didSwipe.current = true
        if (deltaX > 0) {
          onSwipeRight()
        } else {
          onSwipeLeft()
        }
        setTimeout(() => {
          didSwipe.current = false
        }, 300)
      }
    },
    [onSwipeLeft, onSwipeRight]
  )

  return {
    didSwipe,
    swipeHandlers: {
      onPointerDown: handlePointerDown,
      onPointerUp: handlePointerUp,
      onPointerLeave: handlePointerUp,
      onPointerCancel: handlePointerUp,
    },
  }
}
