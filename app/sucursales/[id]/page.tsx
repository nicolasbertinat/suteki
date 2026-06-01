import { Metadata } from "next"
import { notFound } from "next/navigation"
import { locations } from "@/lib/locations-data"
import { LocationPage } from "./location-page"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const location = locations.find((l) => l.id === id)
  
  if (!location) {
    return { title: "Sucursal no encontrada | Suteki" }
  }

  return {
    title: `Suteki ${location.name} | Cocina Nikkei`,
    description: `Visitá Suteki ${location.name} en ${location.address}. ${location.type === "restaurant" ? "Restaurant" : "Take Away"} de cocina Nikkei.`,
  }
}

export async function generateStaticParams() {
  return locations.map((loc) => ({ id: loc.id }))
}

export default async function Page({ params }: PageProps) {
  const { id } = await params
  const location = locations.find((l) => l.id === id)

  if (!location) {
    notFound()
  }

  return <LocationPage location={location} />
}
