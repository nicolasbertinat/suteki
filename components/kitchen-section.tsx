"use client"
  
import Image from "next/image"
  import Link from "next/link"
    
export function KitchenSection() {
    return (
          <section id="cocina" className="relative overflow-hidden py-16 lg:py-24" style={{ backgroundColor: "#F6EFE4" }}>
            {/* Trama aletas crema como textura de fondo */}
                  <div
                            className="pointer-events-none absolute inset-0"
                            style={{
                                        backgroundImage: `url("/images/trama-aletas.jpg")`,
                                        backgroundSize: "600px 750px",
                                        backgroundRepeat: "repeat",
                                        opacity: 0.18,
                                        mixBlendMode: "multiply",
                            }}
                          />
                  <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
                            {/* Left content */}
                                    <div className="flex flex-col gap-6">
                                                <h2
                                                                className="leading-tight text-[#DC5D5D]"
                                                                style={{
                                                                                  fontFamily: "'Cubano', sans-serif",
                                                                                  fontSize: "clamp(2.5rem, 8vw, 4rem)",
                                                                                  letterSpacing: "0.02em",
                                                                }}
                                                              >
                                                              Nuestra
                                                              <br />
                                                              Cocina
                                                </h2>h2>
                                    
                                                <p className="text-sm leading-relaxed text-[#4a4a4a] sm:text-base font-mono">
                                                              Lo que comenzó con una ensalada de sushi, evolucionó a un menú
                                                              para todos los gustos.
                                                </p>p>
                                    
                                                <p className="text-sm leading-relaxed text-[#6b6b6b] sm:text-base font-mono">
                                                              Con tintes de cocina Nikkei, en nuestra carta van a encontrar
                                                              <span className="font-semibold text-[#4a4a4a]"> Salads</span>span>,
                                                              <span className="font-semibold text-[#4a4a4a]"> Sushi</span>span> y
                                                              <span className="font-semibold text-[#4a4a4a]"> Platos Calientes</span>span> creados
                                                              con pasión, texturas y sabores increíbles.
                                                </p>p>
                                    
                                                <p
                                                                className="text-[#DC5D5D] uppercase tracking-wide"
                                                                style={{
                                                                                  fontFamily: "'Cubano', sans-serif",
                                                                                  fontSize: "clamp(0.85rem, 3vw, 1.1rem)",
                                                                                  letterSpacing: "0.1em",
                                                                }}
                                                              >
                                                              ¡Te damos la bienvenida a nuestra casa!
                                                </p>p>
                                    
                                                <div className="mt-2">
                                                              <Link
                                                                                href="/menu"
                                                                                className="inline-flex items-center justify-center rounded-full px-8 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-all hover:scale-105"
                                                                                style={{
                                                                                                    backgroundColor: "#DC5D5D",
                                                                                                    color: "#F6EFE4"
                                                                                  }}
                                                                              >
                                                                              Ver Menú
                                                              </Link>Link>
                                                </div>div>
                                    </div>div>
                          
                            {/* Right image */}
                                    <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
                                                <Image
                                                                src="/images/SUTEKI_EDITADASALTA-102.jpg"
                                                                alt="Nuestra Cocina - Manos sosteniendo sushi"
                                                                fill
                                                                className="object-cover"
                                                                priority
                                                              />
                                    </div>div>
                          </div>div>
                  </div>div>
          </section>section>
        )
}</div>"use client"

import Image from "next/image"
import Link from "next/link"

export function KitchenSection() {
  return (
    <section id="cocina" className="relative overflow-hidden bg-[#F6EFE4] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-h2 lg:gap-20 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-6">
            {/* Title in Cubano */}
            <h2 
              className="leading-tight text-[#DC5D5D]"
              style={{
                fontFamily: "'Cubano', sans-serif",
                fontSize: "clamp(2.5rem, 8vw, 4rem)",
                letterSpacing: "0.02em",
              }}
            >
              Nuestra
              <br />
              Cocina
            </h2>

            {/* Body paragraphs in monospace */}
            <p className="text-sm leading-relaxed text-[#4a4a4a] sm:text-base font-mono">
              Lo que comenzó con una ensalada de sushi, evolucionó a un menú
              para todos los gustos.
            </p>

            <p className="text-sm leading-relaxed text-[#6b6b6b] sm:text-base font-mono">
              Con tintes de cocina Nikkei, en nuestra carta van a encontrar 
              <span className="font-semibold text-[#4a4a4a]"> Salads</span>, 
              <span className="font-semibold text-[#4a4a4a]"> Sushi</span> y 
              <span className="font-semibold text-[#4a4a4a]"> Platos Calientes</span> creados 
              con pasión, texturas y sabores increíble.
            </p>

            {/* Welcome message in Cubano */}
            <p 
              className="text-[#DC5D5D] uppercase tracking-wide"
              style={{
                fontFamily: "'Cubano', sans-serif",
                fontSize: "clamp(0.85rem, 3vw, 1.1rem)",
                letterSpacing: "0.1em",
              }}
            >
              ¡Te damos la bienvenida a nuestra casa!
            </p>

            {/* CTA button */}
            <div className="mt-2">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 font-mono text-xs font-bold uppercase tracking-wider transition-all hover:scale-105"
                style={{
                  backgroundColor: "#DC5D5D",
                  color: "#F6EFE4"
                }}
              >
                Ver Menú
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
            <Image
              src="/images/SUTEKI_EDITADASALTA-102.jpg"
              alt="Nuestra Cocina - Manos sosteniendo sushi"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
