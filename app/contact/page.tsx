"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, MessageSquare } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleWhatsAppContact = () => {
    if (!message.trim() || !name.trim()) return

    setIsSubmitting(true)

    // Format message for WhatsApp
    const formattedMessage = `Hello SUIT US, my name is ${name}. ${message}`

    // Create WhatsApp URL with pre-filled message
    // Replace with your actual WhatsApp business number
    const whatsappNumber = "1234567890"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")
    setIsSubmitting(false)

    // Reset form
    setMessage("")
    setName("")
  }

  return (
    <main className="min-h-screen pt-24 pb-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto sa-flag-accent pl-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-400 mb-12">We'd love to hear from you</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </h2>
                <p className="text-gray-400 mb-6">
                  Send us a message directly via WhatsApp for the fastest response. Our team is available to assist you
                  during business hours.
                </p>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full p-3 bg-black/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full p-3 bg-black/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20 min-h-[120px]"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                </div>

                <Button
                  onClick={handleWhatsAppContact}
                  disabled={isSubmitting || !message.trim() || !name.trim()}
                  className="w-full mt-4 luxury-button"
                >
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/240px-WhatsApp.svg.png"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  {isSubmitting ? "Opening WhatsApp..." : "Contact via WhatsApp"}
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="text-gray-400">
                  Have questions about our products or services? Reach out to us and our team will be happy to assist
                  you.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MessageSquare className="h-5 w-5 text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-medium">WhatsApp</h3>
                    <a href="https://wa.me/1234567890" className="text-gray-400 hover:text-white transition-colors">
                      +27 12 345 6789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a href="tel:+27123456789" className="text-gray-400 hover:text-white transition-colors">
                      +27 12 345 6789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-medium">Visit Us</h3>
                    <address className="text-gray-400 not-italic">
                      123 Fashion Street
                      <br />
                      Sandton
                      <br />
                      Johannesburg, 2196
                      <br />
                      South Africa
                    </address>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-800">
                <h3 className="font-medium mb-2">Business Hours</h3>
                <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-400">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-400">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
