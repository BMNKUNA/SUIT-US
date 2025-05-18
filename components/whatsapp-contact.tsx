"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppContact() {
  const phoneNumber = "+27676973871"
  const message = "Hello! I'm interested in your products and would like to know more."

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="mt-16 text-center space-y-4">
      <p className="text-lg opacity-80">
        If you did not find what you are looking for or need a specific designed outfit, please leave us a direct message via WhatsApp and we will get back to you ASAP
      </p>
      <button
        onClick={handleWhatsAppClick}
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full font-medium whatsapp-glow no-hover-bg"
      >
        <MessageCircle className="w-5 h-5" />
        WhatsApp us
      </button>
    </div>
  )
} 