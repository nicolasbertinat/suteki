import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Bell, Calendar, MapPin, Tag, ExternalLink } from "lucide-react"

export const metadata = {
  title: "Novedades | Suteki - Canal de Actualizaciones",
  description: "Las ultimas novedades de Suteki: nuevos platos, promociones, eventos y mas. Tu canal oficial de actualizaciones.",
}

// Simulated news feed data - in production this would come from a CMS or database
const newsItems = [
  {
    id: "1",
    type: "promo",
    date: "2024-03-18",
    time: "14:30",
    title: "2x1 en Rolls seleccionados",
    content: "Este jueves de 18 a 21hs, todos los rolls de la linea Clasicos al 2x1. Solo para take away y delivery.",
    image: "/images/sushi-roll-1.jpg",
    link: null,
    location: "Todas las sucursales",
  },
  {
    id: "2",
    type: "nuevo",
    date: "2024-03-17",
    time: "11:00",
    title: "Nuevo: Roll Primavera Nikkei",
    content: "Salmon flambeado, palta, philadelphia, cubierto de mango fresco y reduccion de maracuya. Disponible desde hoy en todas las sucursales.",
    image: "/images/sushi-roll-2.jpg",
    link: null,
    location: null,
  },
  {
    id: "3",
    type: "evento",
    date: "2024-03-15",
    time: "09:00",
    title: "Masterclass de Sushi Gratuita",
    content: "El proximo sabado 23 de marzo a las 11hs, clase demostrativa gratuita en nuestra sucursal de Ramos. Cupos limitados, inscribite por WhatsApp.",
    image: "/images/sushi-course.jpg",
    link: "https://wa.me/5491112345678?text=Quiero inscribirme a la masterclass gratuita",
    location: "Ramos Mejia",
  },
  {
    id: "4",
    type: "info",
    date: "2024-03-14",
    time: "16:45",
    title: "Horario especial feriado",
    content: "El lunes 25 de marzo atenderemos en horario reducido de 12 a 16hs en todas las sucursales. El martes retomamos horario habitual.",
    image: null,
    link: null,
    location: "Todas las sucursales",
  },
  {
    id: "5",
    type: "promo",
    date: "2024-03-12",
    time: "10:00",
    title: "Combo Familia - Nuevo precio",
    content: "40 piezas variadas + 2 bebidas + postre. Ahora a $38.000. Ideal para compartir en casa. Disponible solo por delivery.",
    image: "/images/sushi-roll-3.jpg",
    link: null,
    location: null,
  },
  {
    id: "6",
    type: "nuevo",
    date: "2024-03-10",
    time: "12:00",
    title: "Nuevo Sake en carta",
    content: "Sumamos Hakutsuru Junmai a nuestra seleccion de sakes. Ideal para maridar con nuestros nigiris y sashimis. Pregunta a tu mozo por la recomendacion.",
    image: "/images/blog-sake-pairing.jpg",
    link: "/blog/maridaje-sake-sushi",
    location: null,
  },
  {
    id: "7",
    type: "evento",
    date: "2024-03-08",
    time: "18:00",
    title: "Catering en el Yacht Club",
    content: "Gracias al Yacht Club San Isidro por elegirnos para su evento de fin de temporada. Siempre es un placer llevar Suteki a bordo.",
    image: "/images/event-boat.jpg",
    link: null,
    location: "San Isidro",
  },
  {
    id: "8",
    type: "info",
    date: "2024-03-05",
    time: "11:30",
    title: "Nueva app de pedidos",
    content: "Ya podes descargar nuestra app desde Play Store y App Store. Pedidos mas rapidos, historial guardado y promos exclusivas para usuarios de la app.",
    image: null,
    link: "#",
    location: null,
  },
]

const typeConfig = {
  promo: { label: "Promo", color: "bg-red-500" },
  nuevo: { label: "Nuevo", color: "bg-primary" },
  evento: { label: "Evento", color: "bg-blue-500" },
  info: { label: "Info", color: "bg-muted-foreground" },
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr)
  const today = new Date()
  const yesterday = new Date(today)
  yesterday.setDate(yesterday.getDate() - 1)

  if (date.toDateString() === today.toDateString()) {
    return "Hoy"
  } else if (date.toDateString() === yesterday.toDateString()) {
    return "Ayer"
  } else {
    return date.toLocaleDateString("es-AR", {
      day: "numeric",
      month: "short",
    })
  }
}

export default function NovedadesPage() {
  // Group news by date
  const groupedNews = newsItems.reduce((acc, item) => {
    const dateKey = formatDate(item.date)
    if (!acc[dateKey]) {
      acc[dateKey] = []
    }
    acc[dateKey].push(item)
    return acc
  }, {} as Record<string, typeof newsItems>)

  return (
    <main className="min-h-screen bg-background">
      {/* Header - WhatsApp style sticky header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-2xl items-center gap-4 px-4 py-3">
          <Link 
            href="/" 
            className="flex items-center justify-center rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div className="flex flex-1 items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <span className="font-serif text-lg font-semibold">S</span>
            </div>
            <div>
              <h1 className="font-medium text-foreground">Suteki Novedades</h1>
              <p className="text-xs text-muted-foreground">Canal oficial</p>
            </div>
          </div>
          <button 
            className="flex items-center justify-center rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Activar notificaciones"
          >
            <Bell className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Channel Info Banner */}
      <div className="bg-secondary/50 py-4">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <p className="text-sm text-muted-foreground">
            Bienvenido al canal oficial de Suteki. Aca publicamos promociones, 
            novedades y eventos. Para pedidos usa WhatsApp directo.
          </p>
          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Hacer un pedido
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* News Feed */}
      <div className="mx-auto max-w-2xl px-4 py-6">
        {Object.entries(groupedNews).map(([dateLabel, items]) => (
          <div key={dateLabel} className="mb-8">
            {/* Date Separator */}
            <div className="mb-4 flex justify-center">
              <span className="rounded-full bg-secondary px-4 py-1 text-xs text-muted-foreground">
                {dateLabel}
              </span>
            </div>

            {/* Messages */}
            <div className="space-y-4">
              {items.map((item) => (
                <article
                  key={item.id}
                  className="overflow-hidden rounded-2xl bg-card shadow-sm"
                >
                  {/* Image */}
                  {item.image && (
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-4">
                    {/* Type Badge */}
                    <div className="mb-2 flex items-center gap-2">
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white ${
                          typeConfig[item.type as keyof typeof typeConfig].color
                        }`}
                      >
                        {typeConfig[item.type as keyof typeof typeConfig].label}
                      </span>
                      {item.location && (
                        <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {item.location}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h2 className="font-serif text-lg font-medium text-foreground">
                      {item.title}
                    </h2>

                    {/* Body */}
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.content}
                    </p>

                    {/* Link */}
                    {item.link && (
                      <a
                        href={item.link}
                        target={item.link.startsWith("http") ? "_blank" : undefined}
                        rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                      >
                        Ver mas
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}

                    {/* Time */}
                    <div className="mt-3 flex justify-end">
                      <span className="text-[10px] text-muted-foreground">
                        {item.time}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}

        {/* Blog Banner */}
        <div className="mb-6 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="flex items-center gap-4 p-5">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Tag className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="text-xs tracking-widest uppercase text-muted-foreground">Contenido en profundidad</p>
              <h3 className="mt-0.5 font-serif text-lg font-medium text-foreground">Blog Suteki</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Historia Nikkei, guias de maridaje, tecnicas de corte y mucho mas.
              </p>
            </div>
          </div>
          <div className="border-t border-border px-5 py-3">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Ir al blog
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* End of Feed */}
        <div className="py-8 text-center">
          <p className="text-sm text-muted-foreground">
            Estas al dia con todas las novedades
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Volver a Suteki
          </Link>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5491112345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </main>
  )
}
