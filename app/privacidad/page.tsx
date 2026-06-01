import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen py-16 px-4" style={{ backgroundColor: "#F6EFE4" }}>
      <div className="mx-auto max-w-3xl">

        {/* Back button */}
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
          style={{ color: "#DC5D5D" }}
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p
            className="mb-2 text-xs tracking-widest uppercase"
            style={{ color: "#9c998a" }}
          >
            Legal
          </p>
          <h1
            className="text-4xl md:text-5xl"
            style={{ color: "#3c3c3b", fontFamily: "'Cubano', sans-serif" }}
          >
            Política de Privacidad
          </h1>
          <p className="mt-3 text-sm" style={{ color: "#9c998a" }}>
            Fecha de última actualización: 25 de Septiembre
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8" style={{ color: "#3c3c3b" }}>

          <p className="leading-relaxed" style={{ color: "#5c5a50" }}>
            En Suteki, valoramos y respetamos su privacidad. Esta política de privacidad tiene como objetivo explicar cómo recopilamos, utilizamos y protegemos su información personal cuando visita nuestro sitio web.
          </p>

          <section>
            <h2 className="mb-3 text-lg font-semibold tracking-wide" style={{ color: "#3c3c3b" }}>
              Información que Recopilamos
            </h2>
            <p className="leading-relaxed" style={{ color: "#5c5a50" }}>
              Cuando visita nuestro sitio web, podemos recopilar información no identificable personalmente, como su dirección IP, tipo de navegador, sistema operativo y páginas visitadas. Esta información se utiliza para fines estadísticos y para mejorar la experiencia del usuario en nuestro sitio.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold tracking-wide" style={{ color: "#3c3c3b" }}>
              Uso de Cookies
            </h2>
            <p className="leading-relaxed" style={{ color: "#5c5a50" }}>
              Utilizamos cookies en nuestro sitio web para mejorar la navegación y personalizar su experiencia. Las cookies son pequeños archivos de texto que se almacenan en su dispositivo y nos permiten reconocerlo en futuras visitas. Puede configurar su navegador para que rechace las cookies, pero esto puede afectar la funcionalidad de nuestro sitio.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold tracking-wide" style={{ color: "#3c3c3b" }}>
              Redirección a la Aplicación de Pedidos
            </h2>
            <p className="leading-relaxed" style={{ color: "#5c5a50" }}>
              Nuestro sitio web redirecciona a los usuarios interesados en realizar pedidos a nuestra aplicación de pedidos externa. La recopilación y el tratamiento de datos personales en dicha aplicación están sujetos a su propia política de privacidad.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold tracking-wide" style={{ color: "#3c3c3b" }}>
              Comentarios y Reseñas
            </h2>
            <p className="leading-relaxed" style={{ color: "#5c5a50" }}>
              Ofrecemos a nuestros usuarios la posibilidad de dejar comentarios y reseñas en nuestro sitio web. Tenga en cuenta que la información proporcionada en estos comentarios será visible para otros usuarios y puede ser recopilada y utilizada por nosotros.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold tracking-wide" style={{ color: "#3c3c3b" }}>
              Seguridad de Datos
            </h2>
            <p className="leading-relaxed" style={{ color: "#5c5a50" }}>
              Tomamos medidas de seguridad para proteger su información personal contra el acceso no autorizado, la divulgación, la alteración o la destrucción. Sin embargo, tenga en cuenta que ninguna transmisión de datos por Internet o almacenamiento electrónico es completamente segura.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold tracking-wide" style={{ color: "#3c3c3b" }}>
              Cambios en la Política de Privacidad
            </h2>
            <p className="leading-relaxed" style={{ color: "#5c5a50" }}>
              Nos reservamos el derecho de actualizar o modificar esta política de privacidad en cualquier momento. Le recomendamos que consulte esta página periódicamente para estar al tanto de los cambios.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold tracking-wide" style={{ color: "#3c3c3b" }}>
              {"Póngase en Contacto con Nosotros"}
            </h2>
            <p className="leading-relaxed" style={{ color: "#5c5a50" }}>
              Si tiene preguntas o inquietudes sobre esta política de privacidad o la forma en que manejamos su información personal, no dude en ponerse en contacto con nosotros a través de{" "}
              <a
                href="mailto:sutekisalad@gmail.com"
                className="underline transition-opacity hover:opacity-70"
                style={{ color: "#DC5D5D" }}
              >
                sutekisalad@gmail.com
              </a>
              .
            </p>
          </section>

          {/* Footer note */}
          <div
            className="mt-4 border-t pt-8 text-sm"
            style={{ borderColor: "#9c998a40", color: "#9c998a" }}
          >
            <p>Al utilizar nuestro sitio web, usted acepta los términos de esta política de privacidad.</p>
            <p className="mt-2">Suteki — Isabel la Católica 913, Hurlingham, Provincia de Buenos Aires</p>
          </div>
        </div>
      </div>
    </main>
  )
}
