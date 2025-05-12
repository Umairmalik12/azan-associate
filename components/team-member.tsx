import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PhoneIcon as WhatsApp } from "lucide-react"

interface TeamMemberProps {
  name: string
  position: string
  imageSrc: string
  phone: string
  bio?: string
}

export function TeamMember({ name, position, imageSrc, phone, bio }: TeamMemberProps) {
  return (
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-[300px]">
        <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-[#1A237E] font-medium mb-3">{position}</p>

        {bio && <p className="text-gray-600 mb-4 line-clamp-3">{bio}</p>}

        <Link href={`https://wa.me/${phone.replace(/[^0-9]/g, "")}`} target="_blank">
          <Button className="w-full bg-green-600 hover:bg-green-700">
            <WhatsApp className="mr-2 h-4 w-4" /> WhatsApp
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
