import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogPosts, getBlogPost, getRecentPosts } from "@/lib/blog-data"
import { ArrowLeft, Clock, User, Calendar, Share2 } from "lucide-react"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return { title: "Articulo no encontrado" }
  
  return {
    title: `${post.title} | Blog Suteki`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    notFound()
  }

  const recentPosts = getRecentPosts(3).filter((p) => p.slug !== slug)

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link 
            href="/blog" 
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Blog</span>
          </Link>
          <Link href="/" className="font-serif text-2xl font-semibold tracking-wide text-foreground">
            Suteki
          </Link>
          <button 
            className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Compartir articulo"
          >
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-[40vh] min-h-[300px] w-full md:h-[50vh]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-6 pb-8 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <span className="mb-4 inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl font-light tracking-wide text-foreground md:text-4xl lg:text-5xl text-balance">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {/* Meta */}
          <div className="mb-8 flex flex-wrap items-center gap-4 border-b border-border pb-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("es-AR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime} de lectura
            </span>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:font-light prose-h2:text-2xl prose-h3:text-xl prose-p:text-muted-foreground prose-p:leading-relaxed prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            {post.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="mt-8 mb-4 text-foreground">
                    {paragraph.replace("## ", "")}
                  </h2>
                )
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={index} className="mt-6 mb-3 text-foreground">
                    {paragraph.replace("### ", "")}
                  </h3>
                )
              }
              if (paragraph.trim()) {
                return (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                )
              }
              return null
            })}
          </div>

          {/* Share */}
          <div className="mt-12 border-t border-border pt-8">
            <p className="mb-4 text-sm text-muted-foreground">Compartir este articulo:</p>
            <div className="flex gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://suteki.com.ar/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-secondary px-4 py-2 text-sm text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Twitter
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://suteki.com.ar/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-secondary px-4 py-2 text-sm text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Facebook
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${post.title} https://suteki.com.ar/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-secondary px-4 py-2 text-sm text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {recentPosts.length > 0 && (
        <section className="border-t border-border bg-secondary py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-8 font-serif text-2xl font-light text-foreground">
              Otros articulos que te pueden interesar
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {recentPosts.slice(0, 2).map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group flex gap-4 rounded-lg bg-card p-4 transition-colors hover:bg-card/80"
                >
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-xs text-primary">{relatedPost.category}</span>
                    <h3 className="mt-1 font-serif text-lg font-medium text-foreground group-hover:text-primary">
                      {relatedPost.title}
                    </h3>
                    <span className="mt-1 text-xs text-muted-foreground">{relatedPost.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
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
