"use client"

import Image from "next/image"
import Link from "next/link"
import { Leaf, ChevronLeft } from "lucide-react"

// Category data with images and veggie info
const categories = [
  {
    id: "entradas",
    name: "Entradas",
    image: "/images/category-entradas.jpg",
    description: "Gyosas, arrolladitos y más",
    hasVeggie: true,
  },
  {
    id: "salads",
    name: "Salads",
    image: "/images/category-salads.jpg",
    description: "Bowls frescos y nutritivos",
    hasVeggie: true,
  },
  {
    id: "sushi",
    name: "Sushi",
    image: "/images/category-sushi.jpg",
    description: "Rolls clásicos y especiales",
    hasVeggie: false,
  },
  {
    id: "combos",
    name: "Combos",
    image: "/images/sushi-roll-1.jpg",
    description: "Combinaciones para compartir",
    hasVeggie: false,
  },
  {
    id: "calentitos",
    name: "Calentitos",
    image: "/images/sushi-roll-4.jpg",
    description: "Hot rolls crujientes",
    hasVeggie: true,
  },
  {
    id: "piezas",
    name: "Piezas",
    image: "/images/sushi-roll-2.jpg",
    description: "Niguiris, sashimis y tiraditos",
    hasVeggie: false,
  },
  {
    id: "veggie",
    name: "Sushi Veggie",
    image: "/images/category-veggie.jpg",
    description: "100% opciones vegetarianas",
    hasVeggie: true,
    isFullVeggie: true,
  },
  {
    id: "ramen",
    name: "Ramen",
    image: "/images/category-ramen.jpg",
    description: "Sopas reconfortantes",
    hasVeggie: true,
  },
  {
    id: "principales",
    name: "Platos Principales",
    image: "/images/category-principales.jpg",
    description: "Chow mein, curry y más",
    hasVeggie: true,
  },
  {
    id: "salsas",
    name: "Salsas",
    image: "/images/gallery-3.jpg",
    description: "Complementos perfectos",
    hasVeggie: true,
  },
  {
    id: "bebidas",
    name: "Bebidas",
    image: "/images/gallery-5.jpg",
    description: "Refrescos y más",
    hasVeggie: true,
  },
]

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-foreground py-4 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-background text-xs tracking-wide">
            <ChevronLeft className="h-4 w-4" />
            Volver
          </Link>
          <Image
            src="/images/logo-suteki.svg"
            alt="Suteki"
            width={100}
            height={20}
            className="h-5 w-auto"
          />
          <div className="w-16" />
        </div>
      </header>

      {/* Hero */}
      <section className="bg-foreground px-4 pb-8 pt-4 sm:px-6">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="font-serif text-4xl font-light text-background sm:text-5xl">
            Nuestra Carta
          </h1>
          <p className="mt-2 text-sm text-background/70">
            Explorá todas las categorías de nuestro menú
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/menu/${category.id}`}
              className="group relative aspect-square overflow-hidden bg-card"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Veggie badge */}
              {category.hasVeggie && (
                <div className="absolute top-2 right-2">
                  <span className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[9px] font-medium ${
                    category.isFullVeggie 
                      ? "bg-green-600 text-white" 
                      : "bg-green-600/80 text-white"
                  }`}>
                    <Leaf className="h-2.5 w-2.5" />
                    {category.isFullVeggie ? "100% Veggie" : "Veggie"}
                  </span>
                </div>
              )}
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <h2 className="font-serif text-lg font-medium text-white sm:text-xl">
                  {category.name}
                </h2>
                <p className="mt-0.5 text-xs text-white/70 line-clamp-1">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA bottom */}
      <div className="sticky bottom-0 bg-primary p-4">
        <a
          href="https://pedir.suteki.com.ar"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-sm font-medium uppercase tracking-wider text-primary-foreground"
        >
          Hacer Pedido
        </a>
      </div>
    </main>
  )
}
