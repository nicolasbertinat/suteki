import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { HaySutekiSection } from "@/components/hay-suteki-section"
import { FavoritesSection } from "@/components/favorites-section"
import { EventsSection } from "@/components/events-section"
import { KitchenSection } from "@/components/kitchen-section"
import { LocationsSection } from "@/components/locations-section"
import { RecruitmentSection } from "@/components/recruitment-section"
import { Footer } from "@/components/footer"
import { FloatingOrderButton } from "@/components/floating-order-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HaySutekiSection />
      <KitchenSection />
      <FavoritesSection />
      <EventsSection />
      <LocationsSection />
      <RecruitmentSection />
      <Footer />
      <FloatingOrderButton />
    </main>
  )
}
