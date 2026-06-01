"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section
      id="inicio"
      className="relative flex h-screen flex-col items-center justify-center overflow-hidden"
    >
      {/* Background: overhead sushi photo with parallax */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${offsetY * 0.3}px)` }}
      >
        <Image
          src="/images/header-bg-sushi.jpg"
          alt="Suteki - Cocina Nikkei"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content - centered logo and CTA */}
      <div className="relative z-10 flex flex-col items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 px-6 text-center select-none pt-8 sm:pt-0">

        {/* Main logo with koi, Suteki text, 10年, and tagline */}
        <Image
          src="/images/logo-suteki.png"
          alt="Suteki - 10 años - Sushi Salads Cocina Nikkei"
          width={560}
          height={210}
          className="w-64 sm:w-80 md:w-96 lg:w-[480px] xl:w-[560px] h-auto drop-shadow-2xl"
          priority
        />

        {/* Hacer Pedido CTA - invisible layout anchor, measured by FloatingOrderButton */}
        <a
          id="hero-order-btn"
          href="https://pedir.suteki.com.ar/menu/SutekiSalad"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full px-7 py-[14px] opacity-0 pointer-events-none"
          style={{ backgroundColor: '#dc5d5d', minWidth: '200px', justifyContent: 'center' }}
        >
          <svg viewBox="0 0 24 24" fill="none" style={{ width: '20px', height: '20px', flexShrink: 0 }}>
            <path
              d="M12 2C6.48 2 2 6.04 2 11c0 2.13.82 4.07 2.17 5.57L3 22l5.43-1.17c1.13.37 2.33.57 3.57.57 5.52 0 10-4.04 10-9s-4.48-9-10-9z"
              fill="#f8f0e4"
            />
            <circle cx="8" cy="11" r="1.5" fill="#dc5d5d" />
            <circle cx="12" cy="11" r="1.5" fill="#dc5d5d" />
            <circle cx="16" cy="11" r="1.5" fill="#dc5d5d" />
          </svg>
          <span style={{ color: '#f8f0e4', fontWeight: 800, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Hacer Pedido
          </span>
        </a>
      </div>


    </section>
  )
}
