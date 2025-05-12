"use client"

import { useState } from "react"
import Link from "next/link"
import { Building, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Building className="h-8 w-8 text-[#1A237E]" />
            <span className="text-2xl font-bold text-[#1A237E]">Azaan Associates</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#1A237E] font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#1A237E] font-medium">
              About Us
            </Link>
            <Link href="/properties" className="text-gray-700 hover:text-[#1A237E] font-medium">
              Properties
            </Link>
            <Link href="/agents" className="text-gray-700 hover:text-[#1A237E] font-medium">
              Agents
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#1A237E] font-medium">
              Contact
            </Link>
          </nav>

          <Button className="hidden md:block bg-[#1A237E] hover:bg-[#0D1B69]">
            <Link href="/contact">Get in Touch</Link>
          </Button>

          <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-[#1A237E] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-[#1A237E] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/properties"
              className="block text-gray-700 hover:text-[#1A237E] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Properties
            </Link>
            <Link
              href="/agents"
              className="block text-gray-700 hover:text-[#1A237E] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Agents
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-[#1A237E] font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full bg-[#1A237E] hover:bg-[#0D1B69]">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
