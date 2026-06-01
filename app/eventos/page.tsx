import { Metadata } from "next"
import { EventsPage } from "./events-page"

export const metadata: Metadata = {
  title: "Eventos y Catering | Suteki",
  description: "Viví la experiencia Suteki. Sushi Catering, Experiencia 360 y Barcos & Canoas para tus eventos privados.",
}

export default function Page() {
  return <EventsPage />
}
