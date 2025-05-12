import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedProperties } from "@/components/featured-properties"
import { FeaturedAgents } from "@/components/featured-agents"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { PropertySearch } from "@/components/property-search"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <PropertySearch />
      <FeaturedProperties />
      <FeaturedAgents />
      <Testimonials />
      <Footer />
    </main>
  )
}
