import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"
import { ArrowLeft, Clock, User } from "lucide-react"

export const metadata = {
  title: "Blog | Suteki - Cocina Nikkei",
  description: "Articulos sobre cocina Nikkei, tecnicas de sushi, maridajes y mas. Aprende sobre la fusion entre la gastronomia japonesa y peruana.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Volver</span>
          </Link>
          <Link href="/" className="font-serif text-2xl font-semibold tracking-wide text-foreground">
            Suteki
          </Link>
          <div className="w-16" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <span className="mb-4 inline-block text-xs tracking-[0.3em] uppercase text-primary">
            Nuestro Blog
          </span>
          <h1 className="font-serif text-4xl font-light tracking-wide text-foreground md:text-5xl lg:text-6xl">
            Sabores e Historias
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Exploramos la cultura Nikkei, compartimos tecnicas culinarias y 
            te contamos las historias detras de cada plato.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article 
                key={post.slug}
                className="group overflow-hidden rounded-lg bg-card transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-serif text-xl font-medium text-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="border-t border-border bg-secondary py-16">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="font-serif text-2xl font-light text-foreground md:text-3xl">
            Suscribite a nuestro newsletter
          </h2>
          <p className="mt-2 text-muted-foreground">
            Recibe recetas, tips y novedades de Suteki en tu correo.
          </p>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="tu@email.com"
              className="rounded-full border border-border bg-card px-6 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="rounded-full bg-primary px-8 py-3 text-sm font-medium uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Suscribirme
            </button>
          </form>
        </div>
      </section>

      {/* Footer link */}
      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <Link 
            href="/" 
            className="font-serif text-xl font-semibold tracking-wide text-foreground transition-colors hover:text-primary"
          >
            Suteki
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">
            Cocina Nikkei desde 2015
          </p>
        </div>
      </footer>
    </main>
  )
}
