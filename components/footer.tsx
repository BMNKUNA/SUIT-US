import Link from "next/link"
import { Instagram, Facebook, Mail } from "lucide-react"
import Image from "next/image"

// Custom X.com icon
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" />
      <path d="m14.5 8.5-5 7" />
      <path d="m9.5 8.5 5 7" />
    </svg>
  )
}

// Custom TikTok icon
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="theme-footer py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SUIT US</h3>
            <p className="opacity-60">Luxe Ready to Wear to tailored perfection for the modern individual.</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 opacity-60" />
                <a href="mailto:info@suitus.store" className="opacity-60 hover:opacity-100 transition-colors">
                  info@suitus.store
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 opacity-60" />
                <a href="mailto:careers@suitus.store" className="opacity-60 hover:opacity-100 transition-colors">
                  careers@suitus.store
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/mens" className="opacity-60 hover:opacity-100 transition-colors">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link href="/womens" className="opacity-60 hover:opacity-100 transition-colors">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link href="/about" className="opacity-60 hover:opacity-100 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="opacity-60 hover:opacity-100 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-60 hover:opacity-100 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
              <Link href="#" className="opacity-60 hover:opacity-100 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="opacity-60 hover:opacity-100 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="opacity-60 hover:opacity-100 transition-colors">
                <XIcon className="h-6 w-6" />
              </Link>
              <Link href="#" className="opacity-60 hover:opacity-100 transition-colors">
                <TikTokIcon className="h-6 w-6" />
              </Link>
            </div>

            <h3 className="text-xl font-bold mb-4">Payment Methods</h3>
            <div className="flex flex-wrap gap-3">
              <div className="h-10 w-20 bg-white rounded flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1606041011872-596597976b25?q=80&w=200&auto=format&fit=crop"
                  alt="Capitec Pay"
                  width={60}
                  height={30}
                  className="object-contain"
                />
              </div>
              <div className="h-10 w-20 bg-white rounded flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=200&auto=format&fit=crop"
                  alt="FNB"
                  width={60}
                  height={30}
                  className="object-contain"
                />
              </div>
              <div className="h-10 w-20 bg-white rounded flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1607944024060-0450380ddd33?q=80&w=200&auto=format&fit=crop"
                  alt="ABSA"
                  width={60}
                  height={30}
                  className="object-contain"
                />
              </div>
              <div className="h-10 w-20 bg-white rounded flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=200&auto=format&fit=crop"
                  alt="Standard Bank"
                  width={60}
                  height={30}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-opacity-20 mt-8 pt-8 text-center opacity-60">
          <p>&copy; {new Date().getFullYear()} SUIT US. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
