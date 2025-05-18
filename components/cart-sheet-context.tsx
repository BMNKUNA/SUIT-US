"use client"
import { createContext, useContext, useState, ReactNode } from "react"

interface CartSheetContextType {
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
}

const CartSheetContext = createContext<CartSheetContextType | undefined>(undefined)

export function useCartSheet() {
  const ctx = useContext(CartSheetContext)
  if (!ctx) throw new Error("useCartSheet must be used within CartSheetProvider")
  return ctx
}

export function CartSheetProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  return (
    <CartSheetContext.Provider value={{ isOpen, openCart, closeCart }}>
      {children}
    </CartSheetContext.Provider>
  )
} 