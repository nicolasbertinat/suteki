"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { MapPin, Utensils, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react"
import { locations, zones, type LocationType, type TakeAwayZone } from "@/lib/locations-data"

export function LocationsSection() {
  const [activeType, setActiveType] = useState<LocationType>("restaurant")
  const [selectedZone, setSelectedZone] = useState<TakeAwayZone>("gba-oeste")
  const carouselRef = useRef<HTMLDivElement>(null)

  // Get zones available for current type
  const availableZones = activeType === "restaurant"
    ? zones.filter(z => locations.some(l => l.type === "restaurant" && l.zone === z.id))
    : zones.filter(z => locations.some(l => l.type === "takeaway" && l.zone === z.id))

  // Get all locations in selected zone for current type
  const locationsInZone = locations.filter(
    l => l.type === activeType && l.zone === selectedZone
  )

  // When switching type, reset zone
  function handleTypeChange(type: LocationType) {
    setActiveType(type)
    setSelectedZone("gba-oeste")
  }

  function handleZoneChange(zone: TakeAwayZone) {
    setSelectedZone(zone)
    // Reset carousel scroll position
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: "smooth" })
    }
  }

  function scrollCarousel(direction: "left" | "right") {
    if (carouselRef.current) {
      const scrollAmount = 340
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
    }
  }

  return (
    <section id="sucursales" className="relative py-16 sm:py-24 lg:py-32" style={{ backgroundColor: "#B0AF9F" }}>
      {/* Pattern texture overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("/images/trama-aletas-verde.jpg")`,
          backgroundRepeat: "repeat",
          backgroundSize: "600px 750px",
          opacity: 0.25,
          mixBlendMode: "overlay",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <p className="font-mono text-xs tracking-widest uppercase" style={{ color: "#3c3c3b" }}>
            Sucursales
          </p>
          <h2 
            className="mt-2 text-4xl font-light tracking-wide lg:text-5xl"
            style={{ color: "#F6EFE4", fontFamily: "'Cubano', sans-serif" }}
          >
            Donde encontrarnos
          </h2>
        </div>

        {/* Toggle: Restaurant / Take Away */}
        <div className="mt-10 flex items-center justify-center">
          <div 
            className="inline-flex rounded-full p-1"
            style={{ backgroundColor: "#9c998a" }}
          >
            <button
              onClick={() => handleTypeChange("restaurant")}
              className="flex items-center gap-2 rounded-full px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-300"
              style={{ 
                backgroundColor: activeType === "restaurant" ? "#DC5D5D" : "transparent",
                color: activeType === "restaurant" ? "#F6EFE4" : "#F6EFE4"
              }}
            >
              <Utensils className="h-3.5 w-3.5" />
              Restaurant
            </button>
            <button
              onClick={() => handleTypeChange("takeaway")}
              className="flex items-center gap-2 rounded-full px-6 py-2.5 text-xs tracking-widest uppercase transition-all duration-300"
              style={{ 
                backgroundColor: activeType === "takeaway" ? "#DC5D5D" : "transparent",
                color: activeType === "takeaway" ? "#F6EFE4" : "#F6EFE4"
              }}
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              Take Away
            </button>
          </div>
        </div>

        {/* Zone chips */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {availableZones.map((z) => (
            <button
              key={z.id}
              onClick={() => handleZoneChange(z.id)}
              className="rounded-full border px-5 py-2 text-xs tracking-widest uppercase transition-all duration-300"
              style={{ 
                borderColor: selectedZone === z.id ? "#DC5D5D" : "#F6EFE4",
                backgroundColor: selectedZone === z.id ? "#DC5D5D" : "transparent",
                color: selectedZone === z.id ? "#F6EFE4" : "#F6EFE4"
              }}
            >
              {z.label}
            </button>
          ))}
        </div>

        {/* Carousel container */}
        <div className="relative mt-12">
          {/* Navigation arrows - only show if more than 1 location */}
          {locationsInZone.length > 1 && (
            <>
              <button
                onClick={() => scrollCarousel("left")}
                className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-background/90 p-2 text-foreground shadow-lg backdrop-blur-sm transition-all hover:border-primary hover:text-primary lg:-left-6"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-background/90 p-2 text-foreground shadow-lg backdrop-blur-sm transition-all hover:border-primary hover:text-primary lg:-right-6"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Carousel track */}
          <div
            ref={carouselRef}
            className={`flex gap-4 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory scrollbar-hide px-1 ${
              locationsInZone.length <= 2 ? "justify-center" : ""
            }`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {locationsInZone.map((loc) => (
              <div
                key={loc.id}
                className="group w-72 flex-shrink-0 snap-center overflow-hidden rounded-lg transition-all duration-500 sm:w-80"
                style={{ boxShadow: "0 2px 16px 0 rgba(40,36,30,0.18)" }}
              >
                {/* Image with name overlay */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={loc.image}
                    alt={`Sucursal ${loc.name}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  {/* Type badge */}
                  <div className="absolute right-3 top-3">
                    <span 
                      className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[9px] tracking-widest uppercase"
                      style={{ backgroundColor: "#7cb5a0", color: "#F6EFE4" }}
                    >
                      {loc.type === "restaurant" ? <Utensils className="h-2.5 w-2.5" /> : <ShoppingBag className="h-2.5 w-2.5" />}
                      {loc.type === "restaurant" ? "Restaurant" : "Take Away"}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 
                      className="text-2xl font-light"
                      style={{ color: "#F6EFE4", fontFamily: "'Playfair Display', serif" }}
                    >
                      {loc.name}
                    </h3>
                    <p className="mt-0.5 text-xs opacity-80" style={{ color: "#F6EFE4" }}>
                      {loc.address}
                    </p>
                  </div>
                </div>

                {/* Footer - buttons */}
                <div 
                  className="flex items-center gap-2 px-4 py-3"
                  style={{ backgroundColor: "#B0AF9F" }}
                >
                  <a
                    href={loc.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center rounded py-2.5 text-xs font-bold tracking-widest uppercase transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#DC5D5D", color: "#F6EFE4" }}
                  >
                    Pedir
                  </a>
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded border transition-opacity hover:opacity-80"
                    style={{ borderColor: "#DC5D5D", color: "#DC5D5D", backgroundColor: "#B0AF9F" }}
                    aria-label={`Ver ubicación de ${loc.name}`}
                  >
                    <MapPin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
