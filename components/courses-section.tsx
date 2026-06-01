"use client"

import { Clock, Check, Users } from "lucide-react"

const benefits = [
  "Aprende tecnicas de nuestros chefs",
  "Conoce los secretos de la cocina Nikkei",
  "Llevate un kit de sushi a tu casa",
  "Unite a la comunidad Suteki",
]

export function CoursesSection() {
  return (
    <section id="cursos" className="relative overflow-hidden py-16 lg:py-24" style={{ backgroundColor: "#B0AF9F" }}>
      
      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-8">
        {/* Single course card - centered */}
        <div className="flex flex-col items-center text-center">
          <p className="text-xs tracking-widest uppercase text-primary">
            Sumate a la comunidad
          </p>
          <h2 className="mt-3 font-serif text-3xl font-light tracking-wide text-foreground sm:text-4xl lg:text-5xl text-balance">
            Curso de Sushi
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground max-w-md">
            Una experiencia para conocer nuestra cocina desde adentro. 
            Aprende, cocina y forma parte de Suteki.
          </p>

          {/* Duration badge */}
          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>3 horas de experiencia</span>
          </div>

          {/* Benefits grid */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 w-full max-w-lg">
            {benefits.map((item) => (
              <div 
                key={item} 
                className="flex items-center gap-3 border border-border bg-card px-4 py-3 text-left"
              >
                <Check className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/5491112345678?text=Hola! Quiero sumarme al curso de sushi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-primary px-6 py-3 text-xs font-medium uppercase tracking-wider text-primary-foreground transition-all hover:bg-primary/90"
          >
            <Users className="h-4 w-4" />
            Quiero participar
          </a>
        </div>
      </div>
    </section>
  )
}
