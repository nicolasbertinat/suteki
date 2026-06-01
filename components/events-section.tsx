"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Ship, Users, Flame } from "lucide-react"

const experiences = [
  {
    id: "sushi-catering",
    title: "Sushi Catering",
    subtitle: "Eventos Privados",
    description: "Combinación de Sushi y Cocina Nikkei (rolls, ceviches, platos nikkei, cocina peruana). Modalidad presencial con sushi man en el lugar. Ideal para eventos privados.",
    image: "/images/event-catering.jpg",
    icon: Users,
  },
  {
    id: "experiencia-360",
    title: "Experiencia 360",
    subtitle: "Cocina en Vivo",
    description: "Una nueva propuesta integral de cocina asiática. Parrilla Japonesa fusión con platos realizados al carbón. Modalidad presencial con cocinero en el lugar. Ideal para eventos privados.",
    image: "/images/event-360.jpg",
    icon: Flame,
  },
  {
    id: "barcos-canoas",
    title: "Barcos & Canoas",
    subtitle: "Delivery Premium",
    description: "Una selección de nuestras mejores piezas de sushi, con una presentación en barco o canoa. Ideal para cumpleaños y eventos reducidos. Modalidad delivery.",
    image: "/images/event-barcos.jpg",
    icon: Ship,
  },
]

export function EventsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    const newIndex = dir === "left" 
      ? Math.max(0, activeIndex - 1)
      : Math.min(experiences.length - 1, activeIndex + 1)
    setActiveIndex(newIndex)
    
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth
      scrollRef.current.scrollTo({ left: newIndex * cardWidth, behavior: "smooth" })
    }
  }

  return (
    <section id="eventos" className="relative overflow-hidden py-16 lg:py-24" style={{ backgroundColor: "#F6EFE4" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="font-mono text-xs tracking-widest uppercase" style={{ color: "#3c3c3b" }}>
            Viví la experiencia Suteki
          </p>
          <h2 
            className="mt-2 text-4xl font-light tracking-wide lg:text-5xl"
            style={{ color: "#DC5D5D", fontFamily: "'Cubano', sans-serif" }}
          >
            Eventos y Catering
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-mono text-sm leading-relaxed" style={{ color: "#3c3c3b" }}>
            Descubrí nuestros eventos hechos a medida. Experiencias gastronómicas únicas 
            para cada ocasión, desde encuentros íntimos hasta grandes celebraciones.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={() => scroll("left")}
            disabled={activeIndex === 0}
            className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border transition-all disabled:opacity-30 lg:-left-6"
            style={{ borderColor: "#9c998a", color: "#3c3c3b" }}
            aria-label="Anterior experiencia"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Cards container */}
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scrollbar-hide"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {experiences.map((exp, idx) => (
              <div
                key={exp.id}
                className={`group relative flex w-full flex-none flex-col overflow-hidden rounded-lg transition-all duration-500 md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${
                  idx === activeIndex ? "scale-100 opacity-100" : "scale-95 opacity-80"
                }`}
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay verde */}
                  <div 
                    className="absolute inset-0" 
                    style={{ backgroundColor: "#9c998a", opacity: 0.6 }} 
                  />
                  
                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs tracking-widest uppercase" style={{ color: "#F6EFE4", opacity: 0.8 }}>
                      {exp.subtitle}
                    </p>
                    <h3 
                      className="text-xl font-bold uppercase tracking-wider"
                      style={{ color: "#F6EFE4" }}
                    >
                      {exp.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div 
                  className="flex flex-1 flex-col gap-4 p-5"
                  style={{ backgroundColor: "#F6EFE4" }}
                >
                  <p className="font-mono text-xs leading-relaxed" style={{ color: "#3c3c3b" }}>
                    {exp.description}
                  </p>
                  
                  <Link
                    href="/eventos"
                    className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded py-3 text-xs font-bold tracking-widest uppercase transition-all hover:opacity-80"
                    style={{ backgroundColor: "#9c998a", color: "#F6EFE4" }}
                  >
                    Consultar
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={() => scroll("right")}
            disabled={activeIndex === experiences.length - 1}
            className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full border transition-all disabled:opacity-30 lg:-right-6"
            style={{ borderColor: "#9c998a", color: "#3c3c3b" }}
            aria-label="Siguiente experiencia"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {experiences.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveIndex(idx)
                if (scrollRef.current) {
                  const cardWidth = scrollRef.current.offsetWidth / experiences.length
                  scrollRef.current.scrollTo({ left: idx * cardWidth, behavior: "smooth" })
                }
              }}
              className="h-2 rounded-full transition-all duration-300"
              style={{ 
                width: idx === activeIndex ? "32px" : "8px",
                backgroundColor: idx === activeIndex ? "#DC5D5D" : "#9c998a"
              }}
              aria-label={`Ir a experiencia ${idx + 1}`}
            />
          ))}
        </div>

        {/* Main CTA */}
        <div className="mt-12 text-center">
          <p className="font-mono text-sm" style={{ color: "#3c3c3b" }}>
            ¿Querés llevar tu evento al próximo nivel?
          </p>
          <Link
            href="/eventos"
            className="mt-4 inline-flex items-center gap-3 rounded-full px-10 py-4 text-sm font-bold tracking-widest uppercase transition-all hover:scale-105"
            style={{ backgroundColor: "#DC5D5D", color: "#F6EFE4" }}
          >
            Hablemos
          </Link>
        </div>
      </div>
    </section>
  )
}
