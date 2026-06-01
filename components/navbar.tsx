"use client"

import { useState } from "react"
import Image from "next/image"

const navLinks = [
  { label: "Nuestra Cocina", href: "#cocina" },
  { label: "Favoritos",      href: "#favoritos" },
  { label: "Eventos",        href: "#eventos" },
  { label: "Sucursales",     href: "#sucursales" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Fixed header - controls on right only */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav className="flex items-center justify-end px-4 py-4 sm:px-6">
          {/* Right side - menu button only */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => setOpen(!open)}
              className="relative flex h-12 w-12 items-center justify-center transition-all hover:scale-105"
              aria-label={open ? "Cerrar menu" : "Abrir menu"}
            >
              {/* Animated hamburger / X */}
              <span className="sr-only">{open ? "Cerrar" : "Menu"}</span>
              <span
                className={`absolute h-[2px] w-7 bg-white transition-all duration-300 ease-in-out ${
                  open ? "rotate-45" : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute h-[2px] w-7 bg-white transition-all duration-300 ease-in-out ${
                  open ? "-rotate-45" : "translate-y-2"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Full screen mobile menu overlay */}
      {open && (
        <div 
          className="fixed inset-0 z-[60]"
          style={{
            backgroundColor: "#3c3c3b"
          }}
        >
          {/* Close button in same position as hamburger */}
          <div className="absolute right-4 top-4 sm:right-6">
            <button
              onClick={() => setOpen(false)}
              className="relative flex h-12 w-12 items-center justify-center transition-all hover:scale-105"
              aria-label="Cerrar menu"
            >
              <span
                className="absolute h-[2px] w-7 rotate-45 bg-white transition-all duration-300"
              />
              <span
                className="absolute h-[2px] w-7 -rotate-45 bg-white transition-all duration-300"
              />
            </button>
          </div>

          {/* Menu content */}
          <div className="flex h-full flex-col items-center justify-center gap-4 px-6">
            {/* Logo in menu */}
            <a 
              href="/" 
              onClick={() => setOpen(false)}
              className="mb-2"
            >
              <Image
                src="/images/logo-header.png"
                alt="Suteki"
                width={400}
                height={150}
                className="w-64 h-auto sm:w-80"
              />
            </a>

            {/* Nav links */}
            <ul className="flex flex-col items-center gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2 text-xl tracking-widest uppercase text-white/90 transition-colors hover:text-white sm:text-2xl"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Secondary link */}
            <div className="flex flex-col items-center">
              <a
                href="#sumate"
                onClick={() => setOpen(false)}
                className="mt-2 block px-4 py-2 text-sm tracking-widest uppercase text-white/50 transition-colors hover:text-white/80"
              >
                Trabajá con nosotros
              </a>
            </div>

            {/* Order button in menu */}
            <a
              href="https://pedir.suteki.com.ar/menu/SutekiSalad"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] transition-transform hover:scale-105"
              style={{
                backgroundColor: "#DC5D5D",
                color: "#F6EFE4",
                fontFamily: "'Cubano', sans-serif"
              }}
            >
              {/* Chat icon */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-5 h-5 flex-shrink-0"
              >
                <path
                  d="M12 2C6.48 2 2 6.04 2 11c0 2.13.82 4.07 2.17 5.57L3 22l5.43-1.17c1.13.37 2.33.57 3.57.57 5.52 0 10-4.04 10-9s-4.48-9-10-9z"
                  fill="#F6EFE4"
                />
                <circle cx="8" cy="11" r="1.5" fill="#DC5D5D" />
                <circle cx="12" cy="11" r="1.5" fill="#DC5D5D" />
                <circle cx="16" cy="11" r="1.5" fill="#DC5D5D" />
              </svg>
              Hacer Pedido
            </a>
          </div>
        </div>
      )}
    </>
  )
}
