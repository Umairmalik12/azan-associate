import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TeamMember } from "@/components/team-member"

export default function AgentsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Agents</h1>
          <p className="text-xl max-w-3xl">Meet our team of experienced real estate professionals.</p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <TeamMember
            name="Muhammad Uzair Saleem"
            position="CEO"
            imageSrc="/placeholder.svg?height=300&width=300"
            phone="+92-300-0580099"
            bio="With over 10 years of experience in real estate, Uzair leads our team with vision and expertise. Specializing in luxury properties and commercial investments."
          />
          <TeamMember
            name="Muhammad Arslan Saleem"
            position="Agent"
            imageSrc="/placeholder.svg?height=300&width=300"
            phone="+92-333-6148031"
            bio="Arslan has a keen eye for property value and potential. His market knowledge and negotiation skills have helped countless clients find their perfect property."
          />
          <TeamMember
            name="Ayaz Hassan"
            position="Co-Founder"
            imageSrc="/placeholder.svg?height=300&width=300"
            phone="+92-332-5250500"
            bio="As co-founder, Ayaz brings strategic insight and international experience to our team. He specializes in Qatar properties and cross-border investments."
          />
          <TeamMember
            name="Hassan Haider"
            position="Director"
            imageSrc="/placeholder.svg?height=300&width=300"
            phone="+92-307-3390778"
            bio="Hassan oversees our operations with precision and care. His background in finance and real estate development provides valuable insights for our clients."
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}
