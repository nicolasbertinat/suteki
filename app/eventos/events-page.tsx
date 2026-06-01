"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Ship, Users, Flame, Send } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const experiences = [
  {
    id: "sushi-catering",
    title: "Sushi Catering",
    subtitle: "Eventos Privados",
    description: "Combinación de Sushi y Cocina Nikkei (rolls, ceviches, platos nikkei, cocina peruana). Modalidad presencial con sushi man en el lugar. Ideal para eventos privados.",
    features: ["Sushi man en vivo", "Variedad de rolls y ceviches", "Cocina Nikkei completa", "Ideal para 20+ personas"],
    image: "/images/event-catering.jpg",
    icon: Users,
  },
  {
    id: "experiencia-360",
    title: "Experiencia 360",
    subtitle: "Cocina en Vivo",
    description: "Una nueva propuesta integral de cocina asiática. Parrilla Japonesa fusión con platos realizados al carbón. Modalidad presencial con cocinero en el lugar. Ideal para eventos privados.",
    features: ["Parrilla Japonesa en vivo", "Platos al carbón", "Show cooking", "Experiencia inmersiva"],
    image: "/images/event-360.jpg",
    icon: Flame,
  },
  {
    id: "barcos-canoas",
    title: "Barcos & Canoas",
    subtitle: "Delivery Premium",
    description: "Una selección de nuestras mejores piezas de sushi, con una presentación en barco o canoa. Ideal para cumpleaños y eventos reducidos. Modalidad delivery.",
    features: ["Presentación premium", "Selección de las mejores piezas", "Delivery a domicilio", "Ideal para grupos pequeños"],
    image: "/images/event-barcos.jpg",
    icon: Ship,
  },
]

export function EventsPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    fecha: "",
    personas: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Redirect to WhatsApp with form data
    const message = `Hola! Quiero consultar por un evento.

Nombre: ${formData.nombre} ${formData.apellido}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Fecha: ${formData.fecha}
Personas: ${formData.personas}
Mensaje: ${formData.mensaje}`
    
    window.open(`https://wa.me/5491112345678?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <Image
            src="/images/event-catering.jpg"
            alt="Eventos Suteki"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <p className="text-xs tracking-widest uppercase text-white/70">
              Viví la experiencia Suteki
            </p>
            <h1 className="mt-2 font-serif text-5xl font-light text-white md:text-7xl">
              Eventos y Catering
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Descubrí nuestros eventos hechos a medida
            </p>
          </div>
        </section>

        {/* Back link */}
        <div className="mx-auto max-w-7xl px-6 py-6">
          <Link 
            href="/#eventos" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </div>

        {/* Experiences */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <h2 className="font-serif text-3xl font-light text-foreground">Nuestra propuesta</h2>
          
          <div className="mt-12 space-y-24">
            {experiences.map((exp, idx) => (
              <div 
                key={exp.id}
                className={`flex flex-col gap-8 lg:flex-row lg:items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden lg:w-1/2">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 lg:w-1/2 lg:px-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <exp.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-xs tracking-widest uppercase text-primary">
                    {exp.subtitle}
                  </p>
                  <h3 className="font-serif text-3xl font-light text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="mt-2 grid grid-cols-2 gap-2">
                    {exp.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-24" style={{ backgroundColor: "#943535" }}>
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center">
              <p className="text-xs tracking-widest uppercase text-primary-foreground/70">
                Experiencias
              </p>
              <h2 className="mt-2 font-serif text-4xl font-light text-primary-foreground">
                ¿Querés llevar tu evento al próximo nivel?
              </h2>
              <p className="mt-2 text-primary-foreground/80">¡Escribinos!</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="text-xs tracking-widest uppercase text-primary-foreground/70">
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="mt-2 w-full border-b border-primary-foreground/30 bg-transparent py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground focus:outline-none"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-primary-foreground/70">
                    Apellido
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.apellido}
                    onChange={(e) => setFormData({ ...formData, apellido: e.target.value })}
                    className="mt-2 w-full border-b border-primary-foreground/30 bg-transparent py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground focus:outline-none"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="text-xs tracking-widest uppercase text-primary-foreground/70">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 w-full border-b border-primary-foreground/30 bg-transparent py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground focus:outline-none"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-primary-foreground/70">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    className="mt-2 w-full border-b border-primary-foreground/30 bg-transparent py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground focus:outline-none"
                    placeholder="+54 9 11 1234 5678"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="text-xs tracking-widest uppercase text-primary-foreground/70">
                    Fecha y hora
                  </label>
                  <input
                    type="text"
                    value={formData.fecha}
                    onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                    className="mt-2 w-full border-b border-primary-foreground/30 bg-transparent py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground focus:outline-none"
                    placeholder="Fecha aproximada"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-primary-foreground/70">
                    Cantidad de personas
                  </label>
                  <input
                    type="text"
                    value={formData.personas}
                    onChange={(e) => setFormData({ ...formData, personas: e.target.value })}
                    className="mt-2 w-full border-b border-primary-foreground/30 bg-transparent py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground focus:outline-none"
                    placeholder="Número de invitados"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs tracking-widest uppercase text-primary-foreground/70">
                  Comentarios
                </label>
                <textarea
                  rows={4}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  className="mt-2 w-full resize-none border-b border-primary-foreground/30 bg-transparent py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground focus:outline-none"
                  placeholder="Contanos sobre tu evento..."
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 bg-primary-foreground py-4 text-sm font-medium tracking-widest uppercase text-[#943535] transition-all hover:bg-primary-foreground/90"
              >
                <Send className="h-4 w-4" />
                Hablemos
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
