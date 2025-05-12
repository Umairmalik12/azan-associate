import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Khan",
      location: "Lahore",
      text: "Azaan Associates helped me find my dream home in DHA Lahore. Their team was professional, knowledgeable, and made the entire process smooth.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Fatima Malik",
      location: "Islamabad",
      text: "I was looking for a commercial property in Islamabad, and Azaan Associates provided exceptional service. They understood my requirements perfectly.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Mohammed Al-Thani",
      location: "Qatar",
      text: "Working with Azaan Associates for my property investment in Qatar was a great experience. Their cross-border expertise is truly valuable.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#1A237E]">What Our Clients Say</h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Don't just take our word for it - hear from some of our satisfied clients
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="border-none shadow-lg">
            <CardContent className="p-6">
              <Quote className="h-10 w-10 text-[#FFD700] mb-4" />
              <p className="text-gray-700 mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
