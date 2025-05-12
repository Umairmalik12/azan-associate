import Link from "next/link"
import { Building, Facebook, Instagram, Mail, MapPin, Phone, Twitter, PhoneIcon as WhatsApp } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1A237E] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building className="h-8 w-8" />
              <span className="text-2xl font-bold">Azaan Associates</span>
            </div>
            <p className="mb-4">Deal in all kinds of properties – Pakistan & Qatar</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-[#FFD700]">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-[#FFD700]">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-[#FFD700]">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-[#FFD700]">
                <WhatsApp className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#FFD700]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FFD700]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-[#FFD700]">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/agents" className="hover:text-[#FFD700]">
                  Agents
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FFD700]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5" />
                <div>
                  <p>+92-300-0580099</p>
                  <p>+92-333-6148031</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <p>azan_associates1@hotmail.com</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Our Offices</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <p>Multan: House No 56-A PIA Colony</p>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <p>Islamabad: Naval Anchorage Commercial II</p>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <p>Lahore: DHA Phase 8, Main Broadway Commercial</p>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <p>Qatar: Building Al Mansoura, Doha</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
        <p> Created By Malik Umair Javed</p>
          <p>&copy; {new Date().getFullYear()} Azaan Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
