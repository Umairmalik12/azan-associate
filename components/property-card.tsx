"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Bath, Bed, Building, MapPin, Ruler, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface PropertyCardProps {
  property: {
    id: number
    title: string
    price: string
    location: string
    type: string
    bedrooms: number
    bathrooms: number
    area: string
    image: string
    agent: string
    agentPhone: string
  }
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [showDetails, setShowDetails] = useState(false)

  if (showDetails) {
    return (
      <Card className="p-6 space-y-4 shadow-lg border-none">
        <h2 className="text-2xl font-bold text-[#1A237E]">{property.title}</h2>
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          width={800}
          height={400}
          className="rounded-md object-cover"
        />
        <div className="text-gray-700">
          <p><strong>Location:</strong> {property.location}</p>
          <p><strong>Type:</strong> {property.type}</p>
          <p><strong>Price:</strong> {property.price}</p>
          <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
          <p><strong>Bathrooms:</strong> {property.bathrooms}</p>
          <p><strong>Area:</strong> {property.area}</p>
        </div>
        <div className="pt-4 border-t mt-4">
          <h4 className="text-lg font-semibold">Agent: {property.agent}</h4>
          <p className="text-blue-600">{property.agentPhone}</p>
          <Link href={`https://wa.me/${property.agentPhone.replace(/[^0-9]/g, "")}`} target="_blank">
            <Button className="mt-2 bg-green-600 hover:bg-green-700 text-white">
              <Phone className="h-4 w-4 mr-2" /> Chat on WhatsApp
            </Button>
          </Link>
        </div>
        <Button
          variant="outline"
          className="w-full border-[#1A237E] text-[#1A237E] hover:bg-[#1A237E] hover:text-white"
          onClick={() => setShowDetails(false)}
        >
          ← Back to List
        </Button>
      </Card>
    )
  }

  // Default card view
  return (
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-[200px]">
        <Image src={property.image || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
        <div className="absolute top-2 right-2 bg-[#1A237E] text-white px-3 py-1 rounded-full text-sm font-medium">
          {property.type}
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex items-center text-gray-500 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        <h3 className="text-xl font-bold mb-2 line-clamp-1">{property.title}</h3>

        <p className="text-[#1A237E] font-bold text-xl mb-4">{property.price}</p>

        <div className="flex justify-between text-gray-600">
          {property.bedrooms > 0 && (
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1" />
              <span>{property.bedrooms} Beds</span>
            </div>
          )}

          {property.bathrooms > 0 && (
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{property.bathrooms} Baths</span>
            </div>
          )}

          <div className="flex items-center">
            <Ruler className="h-4 w-4 mr-1" />
            <span>{property.area}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="bg-gray-50 p-6 border-t">
        <div className="w-full">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="bg-[#1A237E] text-white h-8 w-8 rounded-full flex items-center justify-center mr-2">
                <Building className="h-4 w-4" />
              </div>
              <span className="font-medium">{property.agent}</span>
            </div>
            <Link href={`https://wa.me/${property.agentPhone.replace(/[^0-9]/g, "")}`} target="_blank">
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                <Phone className="h-4 w-4 mr-1" /> Chat
              </Button>
            </Link>
          </div>

          <Button
            variant="outline"
            className="w-full border-[#1A237E] text-[#1A237E] hover:bg-[#1A237E] hover:text-white"
            onClick={() => setShowDetails(true)}
          >
            View Details
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
