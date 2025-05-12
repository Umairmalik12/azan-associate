import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PropertyFilters } from "@/components/property-filters"
import { PropertyCard } from "@/components/property-card"

export default function PropertiesPage() {
  // This would typically come from a database or API
  const properties = [
    {
      id: 1,
      title: "Luxury Villa in DHA Phase 5",
      price: "Rs. 75,000,000",
      location: "Lahore",
      type: "Residential",
      bedrooms: 5,
      bathrooms: 6,
      area: "500 sq. yards",
      image: "/placeholder.svg?height=300&width=500",
      agent: "Muhammad Uzair Saleem",
      agentPhone: "+92-300-0580099",
    },
    {
      id: 2,
      title: "Commercial Plaza",
      price: "Rs. 120,000,000",
      location: "Islamabad",
      type: "Commercial",
      bedrooms: 0,
      bathrooms: 4,
      area: "1000 sq. yards",
      image: "/placeholder.svg?height=300&width=500",
      agent: "Muhammad Arslan Saleem",
      agentPhone: "+92-333-6148031",
    },
    {
      id: 3,
      title: "Modern Apartment",
      price: "QAR 1,200,000",
      location: "Qatar",
      type: "Residential",
      bedrooms: 3,
      bathrooms: 2,
      area: "200 sq. meters",
      image: "/placeholder.svg?height=300&width=500",
      agent: "Ayaz Hassan",
      agentPhone: "+92-332-5250500",
    },
    {
      id: 4,
      title: "Farmhouse with Swimming Pool",
      price: "Rs. 45,000,000",
      location: "Multan",
      type: "Residential",
      bedrooms: 4,
      bathrooms: 5,
      area: "4 Kanal",
      image: "/placeholder.svg?height=300&width=500",
      agent: "Hassan Haider",
      agentPhone: "+92-307-3390778",
    },
    {
      id: 5,
      title: "Office Space in Business Bay",
      price: "Rs. 35,000,000",
      location: "Lahore",
      type: "Commercial",
      bedrooms: 0,
      bathrooms: 2,
      area: "5 Marla",
      image: "/placeholder.svg?height=300&width=500",
      agent: "Muhammad Uzair Saleem",
      agentPhone: "+92-300-0580099",
    },
    {
      id: 6,
      title: "Luxury Apartment with Sea View",
      price: "QAR 2,500,000",
      location: "Qatar",
      type: "Residential",
      bedrooms: 4,
      bathrooms: 3,
      area: "250 sq. meters",
      image: "/placeholder.svg?height=300&width=500",
      agent: "Ayaz Hassan",
      agentPhone: "+92-332-5250500",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Properties</h1>
          <p className="text-xl max-w-3xl">Explore our exclusive collection of properties across Pakistan and Qatar.</p>
        </div>
      </section>

      <section className="py-12 container mx-auto px-4">
        <PropertyFilters />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
