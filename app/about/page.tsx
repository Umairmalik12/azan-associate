import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TeamMember } from "@/components/team-member"
import { Building, MapPin, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />

      <section className="bg-gradient-to-r from-sky-700 to-sky-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About Azaan Associates</h1>
          <p className="text-xl max-w-3xl text-white/90">
            A trusted name in real estate across Pakistan and Qatar, dedicated to helping clients find their perfect
            property.
          </p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-sky-700">Our Story</h2>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Founded with a vision to transform the real estate landscape, Azaan Associates has grown to become a
              trusted name in property dealings across Pakistan and Qatar.
            </p>
            <p className="mb-4 text-gray-700 dark:text-gray-300">
              Our journey began with a simple mission: to provide honest, transparent, and professional real estate
              services that put our clients' needs first.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Today, we pride ourselves on our extensive portfolio of properties, our deep market knowledge, and our
              commitment to excellence in every transaction.
            </p>
          </div>
          <div className="bg-muted p-8 rounded-xl border border-border shadow-sm">
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Target className="text-sky-700 mr-4 h-8 w-8" />
                <h3 className="text-2xl font-bold text-sky-700">Our Mission</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                To provide exceptional real estate services with integrity, understanding our clients' needs and
                exceeding their expectations.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <Building className="text-sky-700 mr-4 h-8 w-8" />
                <h3 className="text-2xl font-bold text-sky-700">Our Vision</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                To be the most trusted and respected real estate company, known for our professionalism, market
                knowledge, and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-sky-700">Our Leadership Team</h2>
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

      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-sky-700">Our Offices</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { location: "Multan", address: "House No 56-A PIA Colony" },
            { location: "Islamabad", address: "Naval Anchorage Commercial II" },
            { location: "Lahore", address: "DHA Phase 8, Main Broadway Commercial" },
            { location: "Qatar", address: "Building Al Mansoura, Doha" },
          ].map(({ location, address }) => (
            <div key={location} className="bg-white dark:bg-muted p-6 rounded-lg border border-border shadow-sm">
              <div className="flex items-center mb-4">
                <MapPin className="text-sky-700 mr-2" />
                <h3 className="text-xl font-bold text-sky-700">{location}</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{address}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
