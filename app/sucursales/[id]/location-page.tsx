"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Clock, ArrowLeft, Utensils, ShoppingBag, Navigation, ExternalLink, ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

interface Location {
  id: string
  name: string
  address: string
  phone: string
  image: string
  zone: string
  type: "restaurant" | "takeaway"
  orderUrl: string
  mapUrl: string
  coordinates: { lat: number; lng: number }
  hours: { label: string; days: string; time: string }[]
}

interface LocationPageProps {
  location: Location
}

// Sample reels data
const reelsData = [
  { id: 1, thumbnail: "/images/sushi-roll-1.jpg", title: "Preparando tu pedido" },
  { id: 2, thumbnail: "/images/sushi-roll-2.jpg", title: "Salmon roll fresco" },
  { id: 3, thumbnail: "/images/sushi-roll-3.jpg", title: "Arte en cada plato" },
  { id: 4, thumbnail: "/images/sushi-roll-4.jpg", title: "Calidad Suteki" },
]

// Sample gallery images
const galleryImages = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
]

export function LocationPage({ location }: LocationPageProps) {
  const reelsRef = useRef<HTMLDivElement>(null)
  const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(location.address)}&zoom=15`

  function scrollReels(direction: "left" | "right") {
    if (reelsRef.current) {
      const scrollAmount = 200
      reelsRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      })
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        {/* Back link - ABOVE the hero image */}
        <div className="mx-auto max-w-7xl px-6 py-4">
          <Link 
            href="/#sucursales" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a sucursales
          </Link>
        </div>

        {/* Hero */}
        <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
          <Image
            src={location.image}
            alt={`Suteki ${location.name}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className={`mb-4 flex items-center gap-2 rounded-full px-4 py-1 text-xs tracking-widest uppercase ${
              location.type === "restaurant" 
                ? "bg-accent text-accent-foreground" 
                : "bg-secondary text-secondary-foreground"
            }`}>
              {location.type === "restaurant" ? <Utensils className="h-3 w-3" /> : <ShoppingBag className="h-3 w-3" />}
              {location.type === "restaurant" ? "Restaurant" : "Take Away"}
            </span>
            <h1 className="font-serif text-4xl font-light text-white md:text-6xl">
              {location.name}
            </h1>
            <p className="mt-2 text-sm text-white/70">{location.zone.replace("-", " ").toUpperCase()}</p>
          </div>
        </section>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left - Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-light text-foreground">Información</h2>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Dirección</p>
                      <p className="text-muted-foreground">{location.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Teléfono</p>
                      <a 
                        href={`tel:${location.phone.replace(/\s|-/g, "")}`}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Horarios</p>
                      <div className="mt-2 space-y-2">
                        {location.hours.map((h) => (
                          <div key={h.label} className="text-muted-foreground">
                            <span className="font-medium text-foreground">{h.label}:</span>{" "}
                            {h.days} · {h.time}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={location.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 bg-primary py-4 text-sm font-medium tracking-widest uppercase text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <ExternalLink className="h-4 w-4" />
                  Hacer Pedido
                </a>
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 border border-primary py-4 text-sm font-medium tracking-widest uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Navigation className="h-4 w-4" />
                  Cómo llegar
                </a>
              </div>
            </div>

            {/* Right - Map */}
            <div className="h-[300px] overflow-hidden border border-border lg:h-auto lg:min-h-[400px]">
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Mapa de Suteki ${location.name}`}
              />
            </div>
          </div>

          {/* Reels Carousel */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-3xl font-light text-foreground">Reels</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => scrollReels("left")}
                  className="rounded-full border border-border p-2 text-foreground transition-all hover:border-primary hover:text-primary"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => scrollReels("right")}
                  className="rounded-full border border-border p-2 text-foreground transition-all hover:border-primary hover:text-primary"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div
              ref={reelsRef}
              className="flex gap-4 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {reelsData.map((reel) => (
                <div
                  key={reel.id}
                  className="group relative aspect-[9/16] w-40 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg sm:w-48"
                >
                  <Image
                    src={reel.thumbnail}
                    alt={reel.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 transition-all group-hover:bg-black/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-white/90 p-3 transition-transform group-hover:scale-110">
                      <Play className="h-5 w-5 text-foreground fill-foreground" />
                    </div>
                  </div>
                  <p className="absolute bottom-3 left-3 right-3 text-xs font-medium text-white line-clamp-2">
                    {reel.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="mt-16">
            <h2 className="font-serif text-3xl font-light text-foreground">Galería</h2>
            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 sm:gap-4">
              {galleryImages.map((img, idx) => (
                <div key={idx} className="group relative aspect-square overflow-hidden">
                  <Image
                    src={img}
                    alt={`Suteki ${location.name} - Imagen ${idx + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
