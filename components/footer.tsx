import { Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// TikTok SVG icon (not in lucide-react)
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#DC5D5D" }}>
      {/* Desktop layout - Main row */}
      <div className="hidden sm:block mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 md:gap-12 py-4 md:py-6">
          {/* Logo - Desktop */}
          <a href="#inicio" className="flex-shrink-0">
            <Image
              src="/images/logo-footer.png"
              alt="Suteki"
              width={280}
              height={100}
              className="h-20 w-auto md:h-28 lg:h-32"
              priority
            />
          </a>

          {/* Nav links - Desktop */}
          <nav className="flex flex-1 items-center justify-center gap-8 md:gap-12">
            <a
              href="#favoritos"
              className="text-sm tracking-widest uppercase transition-opacity hover:opacity-70"
              style={{ color: "#F6EFE4" }}
            >
              Menú
            </a>
            <a
              href="#eventos"
              className="text-sm tracking-widest uppercase transition-opacity hover:opacity-70"
              style={{ color: "#F6EFE4" }}
            >
              Eventos
            </a>
            <a
              href="#sucursales"
              className="text-sm tracking-widest uppercase transition-opacity hover:opacity-70"
              style={{ color: "#F6EFE4" }}
            >
              Sucursales
            </a>
            <a
              href="/novedades"
              className="text-sm tracking-widest uppercase transition-opacity hover:opacity-70"
              style={{ color: "#F6EFE4" }}
            >
              Novedades
            </a>
          </nav>

          {/* Social icons - Desktop */}
          <div className="flex flex-shrink-0 items-center gap-2">
            <a
              href="https://www.instagram.com/suteki.sushi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full transition-opacity hover:opacity-70"
              style={{ backgroundColor: "#F6EFE4", color: "#DC5D5D" }}
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.tiktok.com/@sutekisushi_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full transition-opacity hover:opacity-70"
              style={{ backgroundColor: "#F6EFE4", color: "#DC5D5D" }}
              aria-label="TikTok"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile layout - Logo centered and very large */}
      <div className="sm:hidden">
        <div className="mx-auto max-w-full px-2 py-6 flex items-center justify-center">
          <a href="#inicio" className="flex-shrink-0 w-full max-w-xs">
            <Image
              src="/images/logo-footer.png"
              alt="Suteki"
              width={600}
              height={225}
              className="h-auto w-full"
              priority
            />
          </a>
        </div>
      </div>

      {/* Mobile nav */}
      <nav className="sm:hidden border-t" style={{ borderColor: "#c94f4f" }}>
        <div className="px-4 py-4 flex flex-wrap items-center justify-center gap-6">
          <a
            href="#favoritos"
            className="text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
            style={{ color: "#F6EFE4" }}
          >
            Menú
          </a>
          <a
            href="#eventos"
            className="text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
            style={{ color: "#F6EFE4" }}
          >
            Eventos
          </a>
          <a
            href="#sucursales"
            className="text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
            style={{ color: "#F6EFE4" }}
          >
            Sucursales
          </a>
          <a
            href="/novedades"
            className="text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
            style={{ color: "#F6EFE4" }}
          >
            Novedades
          </a>
        </div>
      </nav>

      {/* Mobile social icons */}
      <div className="sm:hidden border-t" style={{ borderColor: "#c94f4f" }}>
        <div className="px-4 py-4 flex items-center justify-center gap-3">
          <a
            href="https://www.instagram.com/suteki.sushi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-opacity hover:opacity-70"
            style={{ backgroundColor: "#F6EFE4", color: "#DC5D5D" }}
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.tiktok.com/@sutekisushi_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-opacity hover:opacity-70"
            style={{ backgroundColor: "#F6EFE4", color: "#DC5D5D" }}
            aria-label="TikTok"
          >
            <TikTokIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Privacy policy - Bottom */}
      <div
        className="border-t"
        style={{ borderColor: "#c94f4f" }}
      >
        <div className="px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-center">
          <Link
            href="/privacidad"
            className="text-[10px] sm:text-[11px] tracking-widest uppercase transition-opacity hover:opacity-70"
            style={{ color: "#F6EFE4", opacity: 0.7 }}
          >
            Política de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  )
}
