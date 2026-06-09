"use client"

import Image from "next/image"

const favorites = [
  {
        name: "Spring Rolls",
        description: "Taquitos crujientes, salsa agridulce",
        image: "/images/producto-springrolls.jpg",
  },
  {
        name: "Ramen Suteki",
        description: "Caldo miso, chashu, huevo ajitsuke",
        image: "/images/producto-ramen.jpg",
  },
  {
        name: "Poke Bowl Salmon",
        description: "Salmon fresco, palta, sesamo",
        image: "/images/producto-poke.jpg",
  },
  {
        name: "Nigiris Seleccion",
        description: "Salmon, langostino, atun",
        image: "/images/producto-nigiris.jpg",
  },
  {
        name: "Tabla Suteki",
        description: "Mix de rolls y nigiris",
        image: "/images/producto-tabla-sushi.jpg",
  },
  {
        name: "De Mar Rebozado",
        description: "Langostinos tempura, palta, mayo",
        image: "/images/producto-mar-rebozado.jpg",
  },
  ]

export function FavoritesSection() {
    return (
          <section id="favoritos" className="relative py-12 sm:py-16 lg:py-24" style={{ backgroundColor: "#B0AF9F" }}>
            {/* Trama aletas verde como textura de fondo */}
                  <div
                            className="pointer-events-none absolute inset-0"
                            style={{
                                        backgroundImage: `url("/images/trama-aletas-verde.jpg")`,
                                        backgroundSize: "600px 750px",
                                        backgroundRepeat: "repeat",
                                        opacity: 0.25,
                                        mixBlendMode: "multiply",
                            }}
                          />
                  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                          <div>
                                    <h2
                                                  className="text-3xl tracking-wide sm:text-4xl lg:text-5xl"
                                                  style={{ color: "#F6EFE4", fontFamily: "'Cubano', sans-serif" }}
                                                >
                                                Los favoritos
                                    </h2>h2>
                          </div>div>
                  
                    {/* Grid */}
                          <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 md:grid-cols-3 lg:gap-6">
                            {favorites.map((item) => (
                        <div
                                        key={item.name}
                                        className="group flex flex-col overflow-hidden rounded-lg transition-all duration-300"
                                      >
                                      <div className="relative aspect-square overflow-hidden">
                                                      <Image
                                                                          src={item.image}
                                                                          alt={item.name}
                                                                          fill
                                                                          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                                                          sizes="(max-width: 768px) 50vw, 33vw"
                                                                        />
                                      </div>div>
                                      <div className="flex flex-1 flex-col p-2.5 sm:p-3" style={{ backgroundColor: "#9c998a" }}>
                                                      <h3 className="text-xs font-semibold text-[#f6efe4] line-clamp-1 sm:text-sm">
                                                        {item.name}
                                                      </h3>h3>
                                                      <p className="mt-0.5 text-[10px] text-[#f6efe4]/70 line-clamp-1 sm:text-[11px]">
                                                        {item.description}
                                                      </p>p>
                                      </div>div>
                        </div>div>
                      ))}
                          </div>div>
                  </div>div>
          </section>section>
        )
}</div>
