"use client"

import { useState, useEffect, useCallback } from "react"

// Separate easing functions for shape vs position
// Shape: easeOutExpo — snaps to circle FAST
function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

// Position: easeInOutQuad — smooth travel to corner
function easeInOutQuad(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

export function FloatingOrderButton() {
  const [initialRect, setInitialRect] = useState<DOMRect | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const measureRect = useCallback(() => {
    const el = document.getElementById("hero-order-btn")
    if (el) setInitialRect(el.getBoundingClientRect())
  }, [])

  useEffect(() => {
    measureRect()
    window.addEventListener("resize", measureRect)
    return () => window.removeEventListener("resize", measureRect)
  }, [measureRect])

  useEffect(() => {
    const onScroll = () => {
      setScrollProgress(Math.min(1, window.scrollY / window.innerHeight))
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Don't render until we've measured the anchor element
  if (!initialRect) return null

  const isBallMode = scrollProgress >= 0.012
  const p = Math.min(1, scrollProgress / 0.012)
  
  // Separate easing for shape (fast snap) and position (smooth travel)
  const shapeP = easeOutExpo(p)
  const moveP = easeInOutQuad(p)

  const curveOffsetX = Math.sin(p * Math.PI) * 40
  const curveOffsetY = Math.sin(p * Math.PI) * -15

  // Target ball position: bottom-right corner
  const ballSize = 64
  const ballLeft = window.innerWidth - ballSize - 16
  const ballTop = window.innerHeight - ballSize - 24

  // Animated values: position uses moveP (smooth), shape uses shapeP (fast snap)
  const animLeft   = lerp(initialRect.left,  ballLeft + curveOffsetX, moveP)
  const animTop    = lerp(initialRect.top,   ballTop  + curveOffsetY, moveP)
  const animWidth  = lerp(initialRect.width, ballSize, shapeP)
  const animHeight = lerp(56, ballSize, shapeP)
  const animRadius = lerp(28, 32, shapeP)

  // Text fades out fast in first 25% of transition; icon stays fully visible
  const textOpacity = Math.max(0, 1 - p / 0.25)

  if (isBallMode) {
    // Ball mode: fixed to bottom-right, expands left on hover
    return (
      <a
        href="https://pedir.suteki.com.ar/menu/SutekiSalad"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hacer pedido"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: "fixed",
          zIndex: 50,
          bottom: "24px",
          right: "16px",
        }}
        className="block"
      >
        <div
          className="relative flex items-center justify-center overflow-hidden shadow-xl transition-all duration-500 ease-out"
          style={{
            width: isHovered ? "190px" : `${ballSize}px`,
            height: `${ballSize}px`,
            borderRadius: "32px",
            backgroundColor: "#dc5d5d",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            flexDirection: "row-reverse",
            paddingLeft: isHovered ? "16px" : undefined,
            paddingRight: isHovered ? "8px" : undefined,
          }}
        >
          <div className="relative flex items-center justify-center gap-2 flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="none" style={{ width: "24px", height: "24px", flexShrink: 0 }}>
              <path
                d="M12 2C6.48 2 2 6.04 2 11c0 2.13.82 4.07 2.17 5.57L3 22l5.43-1.17c1.13.37 2.33.57 3.57.57 5.52 0 10-4.04 10-9s-4.48-9-10-9z"
                fill="#f8f0e4"
              />
              <circle cx="8" cy="11" r="1.5" fill="#dc5d5d" />
              <circle cx="12" cy="11" r="1.5" fill="#dc5d5d" />
              <circle cx="16" cy="11" r="1.5" fill="#dc5d5d" />
            </svg>
            <span
              className="whitespace-nowrap uppercase transition-all duration-500 ease-out"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 800,
                color: "#f8f0e4",
                letterSpacing: "0.12em",
                opacity: isHovered ? 1 : 0,
                width: isHovered ? "auto" : "0px",
                overflow: "hidden",
                maxWidth: isHovered ? "120px" : "0px",
              }}
            >
              Hacer Pedido
            </span>
          </div>

          {/* Pulse ring on hover */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none transition-all duration-300"
            style={{
              border: "2px solid #f8f0e4",
              opacity: isHovered ? 0.4 : 0,
              transform: isHovered ? "scale(1.15)" : "scale(1)",
            }}
          />
        </div>
      </a>
    )
  }

  // Pill → ball morphing mode
  return (
    <a
      href="https://pedir.suteki.com.ar/menu/SutekiSalad"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hacer pedido"
      style={{
        position: "fixed",
        zIndex: 50,
        left: `${animLeft}px`,
        top: `${animTop}px`,
        width: `${animWidth}px`,
        height: `${animHeight}px`,
      }}
      className="block"
    >
      <div
        className="relative flex items-center justify-center overflow-hidden shadow-xl w-full h-full"
        style={{
          borderRadius: `${animRadius}px`,
          backgroundColor: "#dc5d5d",
        }}
      >
        <div className="relative flex items-center justify-center gap-3 px-5">
          <svg viewBox="0 0 24 24" fill="none" style={{ width: "20px", height: "20px", flexShrink: 0 }}>
            <path
              d="M12 2C6.48 2 2 6.04 2 11c0 2.13.82 4.07 2.17 5.57L3 22l5.43-1.17c1.13.37 2.33.57 3.57.57 5.52 0 10-4.04 10-9s-4.48-9-10-9z"
              fill="#f8f0e4"
            />
            <circle cx="8" cy="11" r="1.5" fill="#dc5d5d" />
            <circle cx="12" cy="11" r="1.5" fill="#dc5d5d" />
            <circle cx="16" cy="11" r="1.5" fill="#dc5d5d" />
          </svg>
          <span
            className="whitespace-nowrap uppercase"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              fontWeight: 800,
              color: "#f8f0e4",
              letterSpacing: "0.12em",
              opacity: textOpacity,
            }}
          >
            Hacer Pedido
          </span>
        </div>
      </div>
    </a>
  )
}
