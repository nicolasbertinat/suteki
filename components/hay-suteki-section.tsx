"use client"

import Image from "next/image"

export function HaySutekiSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden" style={{ backgroundColor: "#DC5D5D" }}>
      {/* Subtle koi texture overlay */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url("/images/trama-koi.jpg")`,
          backgroundSize: "500px 500px",
          backgroundRepeat: "repeat",
          mixBlendMode: "multiply",
        }}
      />
      
      {/* Mobile version - vertical layout */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 py-12 md:hidden">
        <Image
          src="/images/hay-suteki-mobile.png"
          alt="Hay Suteki Hay Plan - Sushi, Salads, Cocina Nikkei"
          width={400}
          height={800}
          className="h-auto w-full max-w-sm"
          priority
          loading="eager"
        />
      </div>
      
      {/* Desktop version - horizontal layout */}
      <div className="relative z-10 hidden h-full w-full items-center justify-center px-8 py-16 md:flex lg:px-16">
        <Image
          src="/images/hay-suteki-hay-plan.png"
          alt="Hay Suteki Hay Plan - Sushi, Salads, Cocina Nikkei"
          width={1200}
          height={600}
          className="h-auto w-full max-w-6xl"
          loading="lazy"
        />
      </div>
    </section>
  )
}
