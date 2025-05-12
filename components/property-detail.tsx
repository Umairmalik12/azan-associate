import { notFound } from "next/navigation"
import Image from "next/image"

const mockProperties = [
  {
    id: "1",
    title: "Luxury Villa in DHA Phase 5",
    price: "Rs. 75,000,000",
    location: "Lahore",
    type: "Residential",
    bedrooms: 5,
    bathrooms: 6,
    area: "500 sq. yards",
    image: "/placeholder.svg?height=500&width=800",
    agent: "Muhammad Uzair Saleem",
    agentPhone: "+92-300-0580099",
  },
  // add more items here as needed
]

export default function PropertyDetail({ params }: { params: { id: string } }) {
  const property = mockProperties.find((p) => p.id === params.id)

  if (!property) return notFound()

  return (
    <main className="min-h-screen bg-gray-100">
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">{property.title}</h1>
          <p className="text-lg">{property.location} • {property.type}</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-start">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src={property.image}
            alt={property.title}
            width={800}
            height={500}
            className="rounded-lg object-cover w-full"
          />
        </div>

        <div className="bg-white rounded-lg shadow p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Details</h2>
          <ul className="text-gray-700 space-y-2">
            <li><strong>Price:</strong> {property.price}</li>
            <li><strong>Bedrooms:</strong> {property.bedrooms}</li>
            <li><strong>Bathrooms:</strong> {property.bathrooms}</li>
            <li><strong>Area:</strong> {property.area}</li>
          </ul>

          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800">Agent Info</h3>
            <p className="text-gray-700"><strong>{property.agent}</strong></p>
            <p className="text-blue-700">{property.agentPhone}</p>
          </div>

          <button className="mt-8 w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow">
            Contact Agent
          </button>
        </div>
      </section>
    </main>
  )
}
