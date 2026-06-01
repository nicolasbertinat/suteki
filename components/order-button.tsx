"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function OrderButton() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <a
      href="https://pedir.suteki.com.ar"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hacer pedido"
      style={{
        position: "fixed",
        zIndex: 50,
        transition: "bottom 0.5s cubic-bezier(0.4,0,0.2,1), right 0.5s cubic-bezier(0.4,0,0.2,1), left 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.4,0,0.2,1)",
        bottom: scrolled ? "24px" : "80px",
        right: scrolled ? "16px" : undefined,
        left: scrolled ? undefined : "50%",
        transform: scrolled ? "none" : "translateX(-50%)",
      }}
      className="hover:scale-105 active:scale-95"
    >
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Component-14-bKouQEbLJhMiS5KanSZ9IaTnQtd9II.png"
        alt="Hacer pedido"
        width={200}
        height={100}
        className="drop-shadow-xl"
        style={{
          width: scrolled ? "144px" : "200px",
          transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)",
        }}
        priority
      />
    </a>
  )
}
