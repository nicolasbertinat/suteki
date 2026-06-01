export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  author: string
  date: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "historia-cocina-nikkei",
    title: "La fascinante historia de la cocina Nikkei",
    excerpt: "Descubre como la fusion entre la tradicion culinaria japonesa y los sabores peruanos dio origen a una de las cocinas mas innovadoras del mundo.",
    content: `
La cocina Nikkei nace de la migracion japonesa a Peru a finales del siglo XIX. Los primeros inmigrantes llegaron en 1899 buscando nuevas oportunidades, trayendo consigo sus tradiciones culinarias ancestrales.

## El encuentro de dos mundos

Al llegar a Peru, los japoneses encontraron ingredientes desconocidos pero fascinantes: el aji amarillo, el cilantro, los citricos tropicales y una increible variedad de pescados del Pacifico Sur. En lugar de resistirse a estos nuevos sabores, los cocineros japoneses comenzaron a experimentar.

## Tecnicas japonesas, ingredientes peruanos

La precision en el corte del sashimi se combino con el ceviche peruano. El arroz de sushi se maridó con el aji. El resultado fue algo completamente nuevo: platos que honran ambas tradiciones mientras crean algo unico.

## Suteki y la tradicion Nikkei

En Suteki nos sentimos herederos de esta rica tradicion. Cada plato que preparamos es un homenaje a esos primeros cocineros que tuvieron la valentia de experimentar y crear algo nuevo.
    `,
    image: "/images/blog-nikkei-history.jpg",
    category: "Historia",
    author: "Chef Tanaka",
    date: "2024-03-15",
    readTime: "5 min",
  },
  {
    slug: "guia-cortes-salmon",
    title: "Guia definitiva: Los cortes del salmon para sushi",
    excerpt: "Aprende a identificar y apreciar los diferentes cortes del salmon, desde el cremoso belly hasta el firme lomo.",
    content: `
El salmon es uno de los pescados mas populares en el mundo del sushi, pero no todos los cortes son iguales. Conocer las diferencias te ayudara a apreciar mejor cada bocado.

## Los principales cortes

### Salmon Belly (Harasu)
Es la parte mas grasa y cremosa del salmon, ubicada en la zona ventral. Su textura es suave y se derrite en la boca. Ideal para nigiri de lujo.

### Lomo Central (Senaka)
El corte mas equilibrado, con buena proporcion de grasa y musculo. Es el mas versatil y se usa tanto para sashimi como para rolls.

### Salmon Back (Sebiro)
Ubicado cerca de la aleta dorsal, tiene menos grasa pero un sabor mas concentrado. Perfecto para quienes prefieren texturas mas firmes.

## Como elegir en Suteki

En nuestro menu, indicamos el tipo de corte en cada preparacion. No dudes en preguntar a nuestros itamaes sobre las caracteristicas de cada uno.
    `,
    image: "/images/blog-salmon-cuts.jpg",
    category: "Educacion",
    author: "Itamae Rodriguez",
    date: "2024-03-08",
    readTime: "4 min",
  },
  {
    slug: "maridaje-sake-sushi",
    title: "El arte del maridaje: Sake y sushi",
    excerpt: "Descubre como elegir el sake perfecto para acompanar cada tipo de sushi y elevar tu experiencia gastronomica.",
    content: `
El sake y el sushi comparten mas que un origen geografico. Juntos, crean armonias de sabor que elevan la experiencia de ambos.

## Tipos de sake y sus caracteristicas

### Junmai
Sake puro de arroz, sin alcohol añadido. Rico y con cuerpo, ideal para sushi con sabores intensos como el atun o preparaciones con salsa de soja.

### Ginjo
Mas delicado y aromatico. Perfecto para sashimi de pescados blancos y rolls con vegetales.

### Daiginjo
El mas refinado, con aromas florales y frutales. Reservalo para los nigiris mas premium y el omakase.

## Temperaturas de servicio

Contrario a lo que muchos creen, no todo el sake se sirve caliente. Los sakes premium como el Daiginjo se aprecian mejor frios, mientras que un Junmai puede disfrutarse tibio.

## Nuestra carta de sakes

En Suteki contamos con una seleccion curada de sakes importados. Nuestro sommelier puede guiarte en la eleccion perfecta para tu cena.
    `,
    image: "/images/blog-sake-pairing.jpg",
    category: "Maridaje",
    author: "Sommelier Martinez",
    date: "2024-03-01",
    readTime: "6 min",
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRecentPosts(limit: number = 3): BlogPost[] {
  return blogPosts.slice(0, limit)
}
