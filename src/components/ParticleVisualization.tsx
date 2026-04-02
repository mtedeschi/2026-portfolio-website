"use client"

import { useEffect, useRef, useCallback, useState } from "react"

type ParticleShape = "circle" | "triangle" | "square" | "plus"

const PARTICLE_SHAPES: ParticleShape[] = ["circle", "triangle", "square", "plus"]

/** Strictly under 2.5% — sparse accent shapes */
/** ~2.42% — prior 2.2% increased by 10% */
const ACCENT_PARTICLE_RATIO = 0.022 * 1.1
/** Three accent colors (coral, teal, amber) — keep in sync with globals chart tokens */
const ACCENT_RGB: ReadonlyArray<readonly [number, number, number]> = [
  [232, 93, 76],
  [15, 118, 110],
  [202, 138, 4],
]

interface Particle {
  x: number
  y: number
  targetX: number
  targetY: number
  startX: number
  startY: number
  z: number
  size: number
  shape: ParticleShape
  /** null = neutral; 0–2 = ACCENT_RGB index */
  accent: 0 | 1 | 2 | null
  phase: number
  speed: number
  amplitude: number
  delay: number
  duration: number
  visible: boolean
  /** Animated 0–1, lerped toward visible for fade in/out */
  visibilityOpacity: number
}

const PARTICLE_COUNT = 600
const SHAPE_PARTICLE_RATIO = 0.7
const MIN_DURATION = 500
const MAX_DURATION = 2000
const FLOAT_AMPLITUDE = 10
const MOUSE_RADIUS = 250
const MOUSE_STRENGTH = 5
const MOBILE_BREAKPOINT = 768
const MOBILE_OPACITY_MULTIPLIER = 0.65
const MORPH_DURATION = 2500
const VISIBILITY_FADE_DURATION = 400

// Lucide icon paths (24x24 viewBox)
// Each path is defined as an array of line segments for easy point sampling
const LUCIDE_ICONS: Record<string, { lines: [number, number, number, number][]; fills?: [number, number, number, number][] }> = {
  "arrow-right": {
    lines: [
      [5, 12, 19, 12],     // Horizontal line
      [12, 5, 19, 12],     // Top diagonal
      [12, 19, 19, 12],    // Bottom diagonal
    ],
  },
  "plus": {
    lines: [
      [12, 5, 12, 19],     // Vertical line
      [5, 12, 19, 12],     // Horizontal line
    ],
  },
  "lightbulb": {
    lines: [
      // Bulb outline (approximated as segments)
      [12, 2, 15.5, 3.5], [15.5, 3.5, 18, 6.5], [18, 6.5, 19, 10],
      [19, 10, 18, 13], [18, 13, 15, 16], [15, 16, 15, 18],
      [12, 2, 8.5, 3.5], [8.5, 3.5, 6, 6.5], [6, 6.5, 5, 10],
      [5, 10, 6, 13], [6, 13, 9, 16], [9, 16, 9, 18],
      // Base
      [9, 18, 15, 18],
      [9, 20, 15, 20],
      [10, 22, 14, 22],
    ],
  },
  "zap": {
    lines: [
      [13, 2, 3, 14],      // Top diagonal
      [3, 14, 12, 14],     // Middle horizontal
      [12, 14, 11, 22],    // Bottom diagonal
      [11, 22, 21, 10],    // Right diagonal
      [21, 10, 12, 10],    // Upper horizontal
      [12, 10, 13, 2],     // Close to top
    ],
  },
  "star": {
    lines: [
      [12, 2, 14.5, 9],    // Top to right-upper
      [14.5, 9, 22, 9.5],  // Right-upper to right point
      [22, 9.5, 16, 14],   // Right point to right-lower
      [16, 14, 18, 22],    // Right-lower to bottom-right
      [18, 22, 12, 17.5],  // Bottom-right to bottom
      [12, 17.5, 6, 22],   // Bottom to bottom-left
      [6, 22, 8, 14],      // Bottom-left to left-lower
      [8, 14, 2, 9.5],     // Left-lower to left point
      [2, 9.5, 9.5, 9],    // Left point to left-upper
      [9.5, 9, 12, 2],     // Left-upper to top
    ],
  },
  "heart": {
    lines: [
      // Left lobe
      [12, 6, 9, 3], [9, 3, 5, 3], [5, 3, 2, 6], [2, 6, 2, 10],
      [2, 10, 5, 15], [5, 15, 12, 21],
      // Right lobe
      [12, 6, 15, 3], [15, 3, 19, 3], [19, 3, 22, 6], [22, 6, 22, 10],
      [22, 10, 19, 15], [19, 15, 12, 21],
    ],
  },
  "circle": {
    lines: [
      // Approximate circle with segments
      [12, 2, 17, 3.5], [17, 3.5, 20.5, 7], [20.5, 7, 22, 12],
      [22, 12, 20.5, 17], [20.5, 17, 17, 20.5], [17, 20.5, 12, 22],
      [12, 22, 7, 20.5], [7, 20.5, 3.5, 17], [3.5, 17, 2, 12],
      [2, 12, 3.5, 7], [3.5, 7, 7, 3.5], [7, 3.5, 12, 2],
    ],
  },
  "square": {
    lines: [
      [3, 3, 21, 3],
      [21, 3, 21, 21],
      [21, 21, 3, 21],
      [3, 21, 3, 3],
    ],
  },
  "triangle": {
    lines: [
      [12, 2, 22, 20],
      [22, 20, 2, 20],
      [2, 20, 12, 2],
    ],
  },
  "trending-up": {
    lines: [
      [2, 17, 9, 10],
      [9, 10, 13, 14],
      [13, 14, 22, 5],
      [16, 5, 22, 5],
      [22, 5, 22, 11],
    ],
  },
  "earth": {
    lines: [
      // Outer circle
      [12, 2, 17, 3.5], [17, 3.5, 20.5, 7], [20.5, 7, 22, 12],
      [22, 12, 20.5, 17], [20.5, 17, 17, 20.5], [17, 20.5, 12, 22],
      [12, 22, 7, 20.5], [7, 20.5, 3.5, 17], [3.5, 17, 2, 12],
      [2, 12, 3.5, 7], [3.5, 7, 7, 3.5], [7, 3.5, 12, 2],
      // Vertical ellipse (meridian)
      [12, 2, 8, 7], [8, 7, 7, 12], [7, 12, 8, 17], [8, 17, 12, 22],
      [12, 2, 16, 7], [16, 7, 17, 12], [17, 12, 16, 17], [16, 17, 12, 22],
      // Horizontal line (equator)
      [2, 12, 22, 12],
    ],
  },
  "bot": {
    lines: [
      // Head outline
      [4, 8, 20, 8], [20, 8, 20, 18], [20, 18, 4, 18], [4, 18, 4, 8],
      // Antenna
      [12, 8, 12, 4], [10, 4, 14, 4],
      // Left eye
      [7, 11, 9, 11], [9, 11, 9, 13], [9, 13, 7, 13], [7, 13, 7, 11],
      // Right eye
      [15, 11, 17, 11], [17, 11, 17, 13], [17, 13, 15, 13], [15, 13, 15, 11],
      // Mouth
      [8, 15, 16, 15],
      // Ears
      [2, 10, 4, 10], [2, 10, 2, 14], [2, 14, 4, 14],
      [20, 10, 22, 10], [22, 10, 22, 14], [22, 14, 20, 14],
    ],
  },
  "send": {
    lines: [
      // Paper airplane shape
      [22, 2, 11, 13],
      [22, 2, 2, 9],
      [2, 9, 11, 13],
      [11, 13, 11, 22],
      [11, 22, 22, 2],
    ],
  },
}

function samplePointsFromLines(
  lines: [number, number, number, number][],
  centerX: number,
  centerY: number,
  scale: number,
  pointCount: number
): { x: number; y: number }[] {
  const points: { x: number; y: number }[] = []
  
  // Calculate total length of all lines
  let totalLength = 0
  const lineLengths = lines.map(([x1, y1, x2, y2]) => {
    const len = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    totalLength += len
    return len
  })
  
  // Sample points proportionally along lines
  const pointsPerLine = lines.map((_, i) => 
    Math.max(2, Math.floor((lineLengths[i] / totalLength) * pointCount * 0.7))
  )
  
  lines.forEach(([x1, y1, x2, y2], lineIndex) => {
    const numPoints = pointsPerLine[lineIndex]
    for (let i = 0; i < numPoints; i++) {
      const t = i / (numPoints - 1 || 1)
      // Transform from 24x24 viewBox to screen coordinates
      const x = centerX + ((x1 + (x2 - x1) * t) - 12) * scale * 16
      const y = centerY + ((y1 + (y2 - y1) * t) - 12) * scale * 16
      points.push({ x, y })
    }
  })
  
  // Add some fill points (scatter within bounding box)
  const fillCount = Math.floor(pointCount * 0.3)
  for (let i = 0; i < fillCount; i++) {
    // Pick a random line and add jitter around it
    const lineIndex = Math.floor(Math.random() * lines.length)
    const [x1, y1, x2, y2] = lines[lineIndex]
    const t = Math.random()
    const jitter = (Math.random() - 0.5) * 3
    const x = centerX + ((x1 + (x2 - x1) * t) - 12 + jitter) * scale * 16
    const y = centerY + ((y1 + (y2 - y1) * t) - 12 + jitter) * scale * 16
    points.push({ x, y })
  }
  
  return points
}

function generateShapePoints(
  iconName: string | null,
  centerX: number,
  centerY: number,
  width: number,
  height: number,
  scale: number
): { x: number; y: number }[] {
  // Dispersed/no shape
  if (!iconName) {
    const points: { x: number; y: number }[] = []
    for (let i = 0; i < 500; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
      })
    }
    return points
  }
  
  const icon = LUCIDE_ICONS[iconName]
  if (!icon) {
    console.warn(`Unknown icon: ${iconName}, using dispersed`)
    const points: { x: number; y: number }[] = []
    for (let i = 0; i < 500; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
      })
    }
    return points
  }
  
  return samplePointsFromLines(icon.lines, centerX, centerY, scale, 500)
}

// Keep the old functions for backward compatibility during transition
function generatePlusPointsLegacy(
  centerX: number,
  centerY: number,
  scale: number
): { x: number; y: number }[] {
  const points: { x: number; y: number }[] = []
  
  const armLength = 100 * scale
  const armWidth = 40 * scale
  
  // Horizontal arm
  for (let i = 0; i < 80; i++) {
    const t = i / 80
    const x = centerX - armLength + t * armLength * 2
    points.push({ x, y: centerY - armWidth / 2 })
    points.push({ x, y: centerY + armWidth / 2 })
  }
  
  // Vertical arm
  for (let i = 0; i < 80; i++) {
    const t = i / 80
    const y = centerY - armLength + t * armLength * 2
    points.push({ x: centerX - armWidth / 2, y })
    points.push({ x: centerX + armWidth / 2, y })
  }
  
  // Fill horizontal arm
  for (let i = 0; i < 60; i++) {
    points.push({
      x: centerX + (Math.random() - 0.5) * armLength * 2 * 0.9,
      y: centerY + (Math.random() - 0.5) * armWidth * 0.8,
    })
  }
  
  // Fill vertical arm
  for (let i = 0; i < 60; i++) {
    points.push({
      x: centerX + (Math.random() - 0.5) * armWidth * 0.8,
      y: centerY + (Math.random() - 0.5) * armLength * 2 * 0.9,
    })
  }
  
  // Fill center overlap
  for (let i = 0; i < 40; i++) {
    points.push({
      x: centerX + (Math.random() - 0.5) * armWidth * 0.8,
      y: centerY + (Math.random() - 0.5) * armWidth * 0.8,
    })
  }
  
  return points
}

function generateDispersedPoints(
  width: number,
  height: number
): { x: number; y: number }[] {
  const points: { x: number; y: number }[] = []
  
  for (let i = 0; i < 500; i++) {
    points.push({
      x: Math.random() * width,
      y: Math.random() * height,
    })
  }
  
  return points
}

function generateLightbulbPoints(
  centerX: number,
  centerY: number,
  scale: number
): { x: number; y: number }[] {
  const points: { x: number; y: number }[] = []

  // Bulb (top ellipse)
  const bulbRadiusX = 80 * scale
  const bulbRadiusY = 90 * scale
  const bulbCenterY = centerY - 40 * scale

  for (let i = 0; i < 280; i++) {
    const angle = (Math.PI * 2 * i) / 280
    const r = 1 + Math.random() * 0.3
    points.push({
      x: centerX + Math.cos(angle) * bulbRadiusX * r,
      y: bulbCenterY + Math.sin(angle) * bulbRadiusY * r,
    })
  }

  // Fill inside the bulb with scattered points
  for (let i = 0; i < 80; i++) {
    const angle = Math.random() * Math.PI * 2
    const radius = Math.random() * 0.7
    points.push({
      x: centerX + Math.cos(angle) * bulbRadiusX * radius,
      y: bulbCenterY + Math.sin(angle) * bulbRadiusY * radius,
    })
  }

  // Base/screw (bottom rectangle with threads)
  const baseTop = centerY + 50 * scale
  const baseWidth = 35 * scale
  const baseHeight = 50 * scale

  // Base outline
  for (let i = 0; i < 30; i++) {
    const t = i / 30
    points.push({ x: centerX - baseWidth, y: baseTop + t * baseHeight })
    points.push({ x: centerX + baseWidth, y: baseTop + t * baseHeight })
  }

  // Thread lines
  for (let i = 0; i < 4; i++) {
    const y = baseTop + (i + 0.5) * (baseHeight / 4)
    for (let j = 0; j < 8; j++) {
      const t = j / 8
      points.push({
        x: centerX - baseWidth + t * baseWidth * 2,
        y: y,
      })
    }
  }

  // Bottom cap
  for (let i = 0; i < 15; i++) {
    const t = i / 15
    points.push({
      x: centerX - baseWidth * 0.6 + t * baseWidth * 1.2,
      y: baseTop + baseHeight,
    })
  }

  // Connector between bulb and base
  const connectorTop = centerY + 30 * scale
  for (let i = 0; i < 20; i++) {
    const t = i / 20
    const width = baseWidth + (bulbRadiusX * 0.5 - baseWidth) * (1 - t)
    points.push({ x: centerX - width, y: connectorTop + t * 20 * scale })
    points.push({ x: centerX + width, y: connectorTop + t * 20 * scale })
  }

  return points
}

function drawShape(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  shape: ParticleShape,
  opacity: number,
  accent: 0 | 1 | 2 | null
) {
  let r: number
  let g: number
  let b: number
  let a: number
  if (accent !== null) {
    ;[r, g, b] = ACCENT_RGB[accent]
    a = opacity
  } else {
    r = 80
    g = 72
    b = 64
    a = opacity * 0.3
  }

  ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`
  ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a})`
  ctx.lineWidth = 1

  const half = size / 2

  if (shape === "circle") {
    ctx.beginPath()
    ctx.arc(x, y, half, 0, Math.PI * 2)
    ctx.fill()
    return
  }

  if (shape === "square") {
    ctx.fillRect(x - half, y - half, size, size)
    return
  }

  if (shape === "plus") {
    const thickness = size / 3
    ctx.fillRect(x - half, y - thickness / 2, size, thickness)
    ctx.fillRect(x - thickness / 2, y - half, thickness, size)
    return
  }

  // triangle (upward equilateral-ish)
  ctx.beginPath()
  ctx.moveTo(x, y - half)
  ctx.lineTo(x + half, y + half * 0.85)
  ctx.lineTo(x - half, y + half * 0.85)
  ctx.closePath()
  ctx.fill()
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}

interface ParticleVisualizationProps {
  enableMouseInteraction?: boolean
}

export function ParticleVisualization({
  enableMouseInteraction: enableMouseInteractionProp = true,
}: ParticleVisualizationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const animationStartRef = useRef<number>(0)
  const frameRef = useRef<number>(0)
  const mouseInteractionRef = useRef(enableMouseInteractionProp)
  const isMobileRef = useRef(false)
  const [mouseInteractionEnabled, setMouseInteractionEnabled] = useState(enableMouseInteractionProp)
  
  const currentShapeRef = useRef<string>("arrow-right")
  const morphStartRef = useRef<number>(0)
  const isMorphingRef = useRef(false)
  const dimensionsRef = useRef({ width: 0, height: 0 })
  const lastFrameTimeRef = useRef<number>(0)

  useEffect(() => {
    mouseInteractionRef.current = mouseInteractionEnabled
  }, [mouseInteractionEnabled])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "i" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        setMouseInteractionEnabled((prev) => !prev)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const getShapePointsForIcon = useCallback((iconName: string | null, width: number, height: number) => {
    const isMobile = width < MOBILE_BREAKPOINT
    const shapeCenterX = isMobile ? width / 2 : width * 0.7
    const shapeCenterY = height / 2
    const scale = Math.min(width, height) / 400

    return generateShapePoints(iconName, shapeCenterX, shapeCenterY, width, height, scale)
  }, [])

  const morphToShape = useCallback((iconName: string | null) => {
    const shapeKey = iconName || "dispersed"
    if (currentShapeRef.current === shapeKey) return
    
    const { width, height } = dimensionsRef.current
    if (width === 0 || height === 0) return

    const targetPoints = getShapePointsForIcon(iconName, width, height)
    const shapeParticleCount = Math.floor(PARTICLE_COUNT * SHAPE_PARTICLE_RATIO)

    particlesRef.current.forEach((particle, i) => {
      const isShapeParticle = i < shapeParticleCount
      
      // Store current position as new start for morphing
      particle.startX = particle.x
      particle.startY = particle.y
      
      if (isShapeParticle && iconName) {
        const targetPoint = targetPoints[i % targetPoints.length]
        const jitter = 15
        particle.targetX = targetPoint.x + (Math.random() - 0.5) * jitter
        particle.targetY = targetPoint.y + (Math.random() - 0.5) * jitter
        particle.visible = true
      } else {
        particle.targetX = Math.random() * width
        particle.targetY = Math.random() * height
        // In dispersed state, only show 50% of particles
        particle.visible = iconName ? true : Math.random() > 0.9
      }
      
      // Reset timing for morph animation
      particle.delay = Math.random() * 200
      particle.duration = MORPH_DURATION + Math.random() * 300
    })

    currentShapeRef.current = shapeKey
    morphStartRef.current = performance.now()
    isMorphingRef.current = true
  }, [getShapePointsForIcon])

  const initParticles = useCallback((width: number, height: number, initialShape: string | null = "arrow-right") => {
    const isMobile = width < MOBILE_BREAKPOINT
    isMobileRef.current = isMobile
    dimensionsRef.current = { width, height }
    
    const targetPoints = getShapePointsForIcon(initialShape, width, height)
    currentShapeRef.current = initialShape || "dispersed"

    const particles: Particle[] = []
    const shapeParticleCount = Math.floor(PARTICLE_COUNT * SHAPE_PARTICLE_RATIO)
    const margin = 100

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const isShapeParticle = i < shapeParticleCount
      
      let targetX: number
      let targetY: number
      
      if (isShapeParticle) {
        const targetPoint = targetPoints[i % targetPoints.length]
        const jitter = 15
        targetX = targetPoint.x + (Math.random() - 0.5) * jitter
        targetY = targetPoint.y + (Math.random() - 0.5) * jitter
      } else {
        targetX = Math.random() * width
        targetY = Math.random() * height
      }

      // Start particles off-screen from a circular perimeter
      const centerX = width / 2
      const centerY = height / 2
      
      // Calculate angle from center to target
      const angle = Math.atan2(targetY - centerY, targetX - centerX)
      
      // Radius that ensures particles start off-screen (viewport diagonal + margin)
      const offscreenRadius = Math.sqrt(width * width + height * height) / 2 + margin + Math.random() * margin
      
      // Add slight angle variation for natural spread
      const angleVariation = (Math.random() - 0.5) * 0.15
      const finalAngle = angle + angleVariation
      
      const startX = centerX + Math.cos(finalAngle) * offscreenRadius
      const startY = centerY + Math.sin(finalAngle) * offscreenRadius

      const shape =
        PARTICLE_SHAPES[Math.floor(Math.random() * PARTICLE_SHAPES.length)]!
      const accent: 0 | 1 | 2 | null =
        Math.random() < ACCENT_PARTICLE_RATIO
          ? (Math.floor(Math.random() * 3) as 0 | 1 | 2)
          : null

      particles.push({
        x: startX,
        y: startY,
        targetX,
        targetY,
        startX,
        startY,
        z: Math.random(),
        size: isShapeParticle ? 4 + Math.random() * 6 : 3 + Math.random() * 4,
        shape,
        accent,
        phase: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 1.5,
        amplitude: FLOAT_AMPLITUDE + Math.random() * FLOAT_AMPLITUDE,
        delay: Math.random() * 300,
        duration: MIN_DURATION + Math.random() * (MAX_DURATION - MIN_DURATION),
        visible: true,
        visibilityOpacity: 1,
      })
    }

    particlesRef.current = particles
    animationStartRef.current = performance.now()
  }, [getShapePointsForIcon])

  const render = useCallback((time: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const width = canvas.width
    const height = canvas.height

    ctx.clearRect(0, 0, width, height)

    // Use morph start time if morphing, otherwise initial animation start
    const baseTime = isMorphingRef.current ? morphStartRef.current : animationStartRef.current
    const elapsed = time - baseTime
    const mouse = mouseRef.current
    const lastTime = lastFrameTimeRef.current
    lastFrameTimeRef.current = time
    const deltaTime = lastTime > 0 ? time - lastTime : 16

    // Check if morph animation is complete
    if (isMorphingRef.current) {
      const maxDuration = MORPH_DURATION + 500
      if (elapsed > maxDuration) {
        isMorphingRef.current = false
      }
    }

    particlesRef.current.forEach((particle) => {
      // Calculate per-particle progress based on its delay and duration
      const particleElapsed = Math.max(0, elapsed - particle.delay)
      const progress = Math.min(particleElapsed / particle.duration, 1)
      const easedProgress = easeOutCubic(progress)

      // Calculate floating offset (always active for seamless transition)
      const floatTime = time * 0.001 * particle.speed
      const floatX = Math.sin(floatTime + particle.phase) * particle.amplitude
      const floatY = Math.cos(floatTime * 0.7 + particle.phase) * particle.amplitude * 0.8

      // Calculate base position (interpolate from start to target+float)
      const targetWithFloatX = particle.targetX + floatX
      const targetWithFloatY = particle.targetY + floatY
      
      let baseX =
        particle.startX + (targetWithFloatX - particle.startX) * easedProgress
      let baseY =
        particle.startY + (targetWithFloatY - particle.startY) * easedProgress

      // Mouse interaction
      if (mouseInteractionRef.current) {
        const dx = baseX - mouse.x
        const dy = baseY - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_STRENGTH
          const angle = Math.atan2(dy, dx)
          baseX += Math.cos(angle) * force
          baseY += Math.sin(angle) * force
        }
      }

      particle.x = baseX
      particle.y = baseY

      // Animate visibility (fade in/out) toward target visible state
      const targetVisibility = particle.visible ? 1 : 0
      const visibilityStep = Math.min(1, deltaTime / VISIBILITY_FADE_DURATION)
      particle.visibilityOpacity += (targetVisibility - particle.visibilityOpacity) * visibilityStep

      // Skip drawing when effectively invisible
      if (particle.visibilityOpacity < 0.01) return

      // Neutral particles: z-depth + fade + mobile dim. Accent particles: full alpha when visible
      // (no z-depth or mobile attenuation so accent colors read at true strength).
      const baseOpacity = (0.12 + particle.z * 0.42) * 0.85
      const mobileMultiplier = isMobileRef.current ? MOBILE_OPACITY_MULTIPLIER : 1
      const opacityProgress = isMorphingRef.current ? 1 : easedProgress
      const v = particle.visibilityOpacity
      const opacity =
        particle.accent !== null
          ? opacityProgress * v
          : baseOpacity * opacityProgress * mobileMultiplier * v

      drawShape(
        ctx,
        particle.x,
        particle.y,
        particle.size,
        particle.shape,
        opacity,
        particle.accent
      )
    })

    // Self-scheduling animation frame (stable recursive loop)
    // eslint-disable-next-line react-hooks/immutability -- intentional rAF loop
    frameRef.current = requestAnimationFrame(render)
  }, [])

  // Scroll detection for section-based shape morphing
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight
      const viewportCenter = viewportHeight / 2

      // Find all sections with data-particle-shape attribute
      const sections = document.querySelectorAll("[data-particle-shape]")
      
      let closestShape: string | null = null
      let closestDistance = Infinity

      sections.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const sectionCenter = rect.top + rect.height / 2
        const distance = Math.abs(sectionCenter - viewportCenter)

        if (distance < closestDistance && rect.top < viewportHeight && rect.bottom > 0) {
          closestDistance = distance
          const shapeAttr = element.getAttribute("data-particle-shape")
          // "false" or empty string means dispersed
          closestShape = shapeAttr && shapeAttr !== "false" ? shapeAttr : null
        }
      })

      const shapeKey = closestShape || "dispersed"
      if (shapeKey !== currentShapeRef.current) {
        morphToShape(closestShape)
      }
    }

    // Debounce scroll handler
    let scrollTimeout: NodeJS.Timeout
    const debouncedScroll = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(handleScroll, 50)
    }

    window.addEventListener("scroll", debouncedScroll, { passive: true })
    
    // Initial check after a short delay to let DOM settle
    setTimeout(handleScroll, 100)

    return () => {
      window.removeEventListener("scroll", debouncedScroll)
      clearTimeout(scrollTimeout)
    }
  }, [morphToShape])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const MOBILE_RESIZE_DEBOUNCE_MS = 400
    const DESKTOP_RESIZE_DEBOUNCE_MS = 100
    /** On mobile, if only height changed by less than this, scale particles instead of re-initing (avoids flash from address bar). */
    const MOBILE_SOFT_RESIZE_HEIGHT_PX = 120

    let resizeTimeout: ReturnType<typeof setTimeout> | null = null

    const handleResize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const isMobile = w < MOBILE_BREAKPOINT
      const prev = dimensionsRef.current

      const dpr = window.devicePixelRatio || 1
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`

      const ctx = canvas.getContext("2d")
      if (ctx) {
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.scale(dpr, dpr)
      }

      const prevW = prev.width
      const prevH = prev.height
      dimensionsRef.current = { width: w, height: h }
      isMobileRef.current = isMobile

      // On mobile: if this looks like address bar show/hide (only height changed, by a small amount), scale existing particles instead of re-initing to avoid flash
      const heightOnly = prevW > 0 && prevH > 0 && w === prevW
      const smallHeightChange = prevH > 0 && Math.abs(h - prevH) <= MOBILE_SOFT_RESIZE_HEIGHT_PX
      if (isMobile && heightOnly && smallHeightChange && particlesRef.current.length > 0) {
        const scaleX = w / prevW
        const scaleY = h / prevH
        particlesRef.current.forEach((p) => {
          p.x *= scaleX
          p.y *= scaleY
          p.targetX *= scaleX
          p.targetY *= scaleY
          p.startX *= scaleX
          p.startY *= scaleY
        })
        return
      }

      const firstSection = document.querySelector("[data-particle-shape]")
      const initialShape = firstSection?.getAttribute("data-particle-shape")
      const shape = initialShape && initialShape !== "false" ? initialShape : "arrow-right"
      initParticles(w, h, shape)
    }

    const onResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout)
      const isMobile = window.innerWidth < MOBILE_BREAKPOINT
      const delay = isMobile ? MOBILE_RESIZE_DEBOUNCE_MS : DESKTOP_RESIZE_DEBOUNCE_MS
      resizeTimeout = setTimeout(handleResize, delay)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    handleResize()
    window.addEventListener("resize", onResize)
    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    frameRef.current = requestAnimationFrame(render)

    return () => {
      window.removeEventListener("resize", onResize)
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      if (resizeTimeout) clearTimeout(resizeTimeout)
      cancelAnimationFrame(frameRef.current)
    }
  }, [initParticles, render])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
