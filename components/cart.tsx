"use client"

import { useState } from "react"
import Image from "next/image"
import { Minus, Plus, Trash2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { formatPrice } from "@/lib/utils"

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const handleCheckout = () => {
    if (cartItems.length === 0) return

    setIsCheckingOut(true)

    const cartItemsText = cartItems
      .map(
        (item) =>
          `${item.name} (${item.size || "N/A"}) - ${item.quantity} x ${formatPrice(item.price)}`
      )
      .join("\n")

    const message = `Hi, I would like to place an order for the following items:\n\n${cartItemsText}\n\nSubtotal: ${formatPrice(
      subtotal
    )}`

    const whatsappNumber = "+27676973871"
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")
    setIsCheckingOut(false)
  }

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="opacity-60 mb-6">Add some items to get started</p>
        <Button asChild>
          <a href="/mens">Continue Shopping</a>
        </Button>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full">
      {/* Cart Header */}
      <div className="flex items-center justify-between pb-4 border-b border-muted">
        <h2 className="text-2xl font-bold">Shopping Cart</h2>
        <Button variant="ghost" size="sm" onClick={clearCart}>
          <Trash2 className="h-4 w-4 mr-2" />
          Clear
        </Button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto py-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4 py-4 border-b border-muted">
            <div className="relative h-24 w-20 bg-muted rounded overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-medium">{item.name}</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 w-6 p-0"
                  onClick={() => removeFromCart(item.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {item.size && <p className="text-sm text-muted-foreground">Size: {item.size}</p>}
              {item.color && <p className="text-sm text-muted-foreground">Color: {item.color}</p>}

              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2"
                    onClick={() =>
                      updateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                  >
                    <Minus className="h-3 w-3" />
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
                <p className="font-medium">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Footer */}
      <div className="border-t border-muted pt-4 mt-auto">
        <div className="flex justify-between py-2">
          <span>Subtotal</span>
          <span className="font-medium">{formatPrice(subtotal)}</span>
        </div>

        <Button
          className="w-full mt-2"
          onClick={handleCheckout}
          disabled={isCheckingOut}
        >
          {isCheckingOut ? "Processing..." : "Checkout via WhatsApp"}
        </Button>
      </div>
    </div>
  )
}
