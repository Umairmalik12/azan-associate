import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl">Get in touch with our team of real estate experts.</p>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-blue-900">Send Us a Message</h2>
            <ContactForm />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-8 text-blue-900">Our Offices</h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <MapPin className="text-blue-900 mr-2" />
                  <h3 className="text-xl font-bold">Multan</h3>
                </div>
                <p>House No 56-A PIA Colony</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <MapPin className="text-blue-900 mr-2" />
                  <h3 className="text-xl font-bold">Islamabad</h3>
                </div>
                <p>Naval Anchorage Commercial II</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <MapPin className="text-blue-900 mr-2" />
                  <h3 className="text-xl font-bold">Lahore</h3>
                </div>
                <p>DHA Phase 8, Main Broadway Commercial</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <MapPin className="text-blue-900 mr-2" />
                  <h3 className="text-xl font-bold">Qatar</h3>
                </div>
                <p>Building Al Mansoura, Doha</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <Phone className="text-blue-900 mr-4" />
                <div>
                  <p className="font-semibold">Phone Numbers:</p>
                  <p>+92-300-0580099</p>
                  <p>+92-333-6148031</p>
                  <p>+92-332-5250500</p>
                  <p>+92-307-3390778</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="text-blue-900 mr-4" />
                <div>
                  <p className="font-semibold">Email:</p>
                  <p>azan_associates1@hotmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
