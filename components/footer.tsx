import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"

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
    <footer className="theme-footer py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-6 md:mb-0">
            <Link href="#" className="opacity-60 hover:opacity-100 transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="opacity-60 hover:opacity-100 transition-colors" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="opacity-60 hover:opacity-100 transition-colors" aria-label="X">
              <XIcon className="h-5 w-5" />
            </Link>
            <Link href="#" className="opacity-60 hover:opacity-100 transition-colors" aria-label="TikTok">
              <TikTokIcon className="h-5 w-5" />
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <Link href="/mens" className="opacity-60 hover:opacity-100 transition-colors text-sm">
              MEN
            </Link>
            <Link href="/womens" className="opacity-60 hover:opacity-100 transition-colors text-sm">
              WOMEN
            </Link>
            <Link href="/about" className="opacity-60 hover:opacity-100 transition-colors text-sm">
              ABOUT
            </Link>
            <Link href="/careers" className="opacity-60 hover:opacity-100 transition-colors text-sm">
              CAREERS
            </Link>
            <Link href="/contact" className="opacity-60 hover:opacity-100 transition-colors text-sm">
              CONTACT
            </Link>
          </div>

          <div className="text-center md:text-right text-sm opacity-60">
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
