import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TeamMember } from "@/components/team-member"

export function FeaturedAgents() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-[#1A237E]">Our Expert Agents</h2>
            <p className="text-gray-600 mt-2">Meet our team of experienced real estate professionals</p>
          </div>
          <Button
            variant="outline"
            className="mt-4 md:mt-0 border-[#1A237E] text-[#1A237E] hover:bg-[#1A237E] hover:text-white"
          >
            <Link href="/agents">View All Agents</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TeamMember
            name="Muhammad Uzair Saleem"
            position="CEO"
            imageSrc="/placeholder.svg?height=300&width=300"
            phone="+92-300-0580099"
          />
          <TeamMember
            name="Muhammad Arslan Saleem"
            position="Agent"
            imageSrc="/placeholder.svg?height=300&width=300"
            phone="+92-333-6148031"
          />
          <TeamMember
            name="Ayaz Hassan"
            position="Co-Founder"
            imageSrc="/placeholder.svg?height=300&width=300"
            phone="+92-332-5250500"
          />
          <TeamMember
            name="Hassan Haider"
            position="Director"
            imageSrc="/placeholder.svg?height=300&width=300"
            phone="+92-307-3390778"
          />
        </div>
      </div>
    </section>
  )
}
