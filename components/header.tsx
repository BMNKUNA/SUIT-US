"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Cart from "@/components/cart"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"

export default function Header() {
  const { totalItems } = useCart()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme } = useTheme()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 theme-header">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter z-50">
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/mens" className="hover:text-current transition-colors font-medium nav-link nav-link-primary">
              MEN
            </Link>
            <Link href="/womens" className="hover:text-current transition-colors font-medium nav-link nav-link-primary">
              WOMEN
            </Link>
            <Link
              href="/about"
              className="opacity-30 hover:opacity-100 text-sm transition-colors nav-link nav-link-secondary"
            >
              ABOUT
            </Link>
            <Link
              href="/careers"
              className="opacity-30 hover:opacity-100 text-sm transition-colors nav-link nav-link-secondary"
            >
              CAREERS
            </Link>
            <Link
              href="/contact"
              className="opacity-30 hover:opacity-100 text-sm transition-colors nav-link nav-link-secondary"
            >
              CONTACT
            </Link>
          </nav>

          <div className="flex items-center gap-4 z-50">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="relative p-2 cart-button">
                  <ShoppingCart className={`h-6 w-6 ${totalItems > 0 ? "cart-not-empty" : ""}`} />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md theme-card">
                <Cart />
              </SheetContent>
            </Sheet>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden luxury-hamburger"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-40 md:hidden pt-20 ${theme === "dark" ? "bg-black/95" : "bg-white/95"}`}
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              <Link
                href="/mens"
                className="text-2xl font-medium mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                MEN
              </Link>
              <Link
                href="/womens"
                className="text-2xl font-medium mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                WOMEN
              </Link>
              <Link
                href="/about"
                className="opacity-50 hover:opacity-100 text-xl mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/careers"
                className="opacity-50 hover:opacity-100 text-xl mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                CAREERS
              </Link>
              <Link
                href="/contact"
                className="opacity-50 hover:opacity-100 text-xl mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
