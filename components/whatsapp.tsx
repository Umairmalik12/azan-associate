import { PhoneIcon as WhatsAppIcon } from "lucide-react"

export function WhatsApp() {
  return (
    <a
      href="https://wa.me/923000580099"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors z-50"
      aria-label="Contact via WhatsApp"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  )
}
