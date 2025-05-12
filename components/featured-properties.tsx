import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PropertyCard } from "@/components/property-card"

export function FeaturedProperties() {
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
  ]

  return (
    <section className="py-16 container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl font-bold text-[#1A237E]">Featured Properties</h2>
          <p className="text-gray-600 mt-2">Explore our handpicked selection of premium properties</p>
        </div>
        <Button
          variant="outline"
          className="mt-4 md:mt-0 border-[#1A237E] text-[#1A237E] hover:bg-[#1A237E] hover:text-white"
        >
          <Link href="/properties">View All Properties</Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  )
}
