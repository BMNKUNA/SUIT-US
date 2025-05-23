"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useCart } from "@/components/cart-provider"
import { formatPrice } from "@/lib/utils"
import type { Product } from "@/lib/types"
import { useToast } from "@/hooks/use-toast"
import { useCartSheet } from "@/components/cart-sheet-context"
import { useTheme } from "next-themes"

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const { addToCart } = useCart()
  const { toast } = useToast()
  const { openCart } = useCartSheet()
  const { setTheme } = useTheme()

  // Set theme to light when component mounts
  useEffect(() => {
    setTheme('light');
  }, [setTheme]); // Include setTheme in the dependency array

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      category: product.category,
      size: selectedSize,
      color: selectedColor,
      quantity: quantity,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))
  }

  // Determine if this is a shoe product
  const isShoe = product.id.includes("shoes")

  return (
    <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
      <div className="space-y-4">
        <div className="relative aspect-[3/4] bg-black rounded-lg overflow-hidden product-image-container">
          <Image
            src={product.images[currentImageIndex] || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`relative h-20 w-16 flex-shrink-0 rounded overflow-hidden border-2 product-image-container ${
                currentImageIndex === index ? "border-white" : "border-transparent"
              }`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${product.name} thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl font-medium mt-2">{formatPrice(product.price)}</p>
        </div>

        <p className="text-muted-foreground">{product.description}</p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Size</h3>
            <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <div key={size} className="flex items-center">
                  <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                  <Label
                    htmlFor={`size-${size}`}
                    className="px-4 py-2 border rounded-md cursor-pointer peer-data-[state=checked]:bg-white peer-data-[state=checked]:text-black"
                  >
                    {size}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            {/* Size guide information */}
            {product.category === "men" && !isShoe && (
              <div className="mt-4 text-sm text-gray-400">
                <p className="font-medium mb-1">Size Guide:</p>
                <ul className="space-y-1">
                  {selectedSize === "44" && <li>Jacket: 44 | Pants: 28-30 | Chest: 88-90cm</li>}
                  {selectedSize === "46" && <li>Jacket: 46 | Pants: 30-32 | Chest: 92-94cm</li>}
                  {selectedSize === "48" && <li>Jacket: 48 | Pants: 32-34 | Chest: 96-98cm</li>}
                  {selectedSize === "50" && <li>Jacket: 50 | Pants: 34-36 | Chest: 100-102cm</li>}
                  {selectedSize === "52" && <li>Jacket: 52 | Pants: 36-38 | Chest: 104-106cm</li>}
                  {selectedSize === "54" && <li>Jacket: 54 | Pants: 38-40 | Chest: 108-110cm</li>}
                  {selectedSize === "56" && <li>Jacket: 56 | Pants: 40-42 | Chest: 112-114cm</li>}
                  {selectedSize === "58" && <li>Jacket: 58 | Pants: 42-44 | Chest: 116-118cm</li>}
                  {selectedSize === "60" && <li>Jacket: 60 | Pants: 44-46 | Chest: 120-122cm</li>}
                </ul>
              </div>
            )}

            {product.category === "women" && !isShoe && (
              <div className="mt-4 text-sm text-gray-400">
                <p className="font-medium mb-1">Size Guide:</p>
                <ul className="space-y-1">
                  {selectedSize === "32" && <li>Bust: 80-82cm | Waist: 60-62cm | Hip: 86-88cm</li>}
                  {selectedSize === "34" && <li>Bust: 84-86cm | Waist: 64-66cm | Hip: 90-92cm</li>}
                  {selectedSize === "36" && <li>Bust: 88-90cm | Waist: 68-70cm | Hip: 94-96cm</li>}
                  {selectedSize === "38" && <li>Bust: 92-94cm | Waist: 72-74cm | Hip: 98-100cm</li>}
                  {selectedSize === "40" && <li>Bust: 96-98cm | Waist: 76-78cm | Hip: 102-104cm</li>}
                  {selectedSize === "42" && <li>Bust: 100-102cm | Waist: 80-82cm | Hip: 106-108cm</li>}
                  {selectedSize === "44" && <li>Bust: 104-106cm | Waist: 84-86cm | Hip: 110-112cm</li>}
                  {selectedSize === "46" && <li>Bust: 108-110cm | Waist: 88-90cm | Hip: 114-116cm</li>}
                  {selectedSize === "48" && <li>Bust: 112-114cm | Waist: 92-94cm | Hip: 118-120cm</li>}
                  {selectedSize === "50" && <li>Bust: 116-118cm | Waist: 96-98cm | Hip: 122-124cm</li>}
                  {selectedSize === "52" && <li>Bust: 120-122cm | Waist: 100-102cm | Hip: 126-128cm</li>}
                  {selectedSize === "54" && <li>Bust: 124-126cm | Waist: 104-106cm | Hip: 130-132cm</li>}
                  {selectedSize === "56" && <li>Bust: 128-130cm | Waist: 108-110cm | Hip: 134-136cm</li>}
                  {selectedSize === "58" && <li>Bust: 132-134cm | Waist: 112-114cm | Hip: 138-140cm</li>}
                  {selectedSize === "60" && <li>Bust: 136-138cm | Waist: 116-118cm | Hip: 142-144cm</li>}
                </ul>
              </div>
            )}
          </div>

          {product.colors.length > 1 && (
            <div>
              <h3 className="text-lg font-medium mb-2">Color</h3>
              <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <div key={color} className="flex items-center">
                    <RadioGroupItem value={color} id={`color-${color}`} className="peer sr-only" />
                    <Label
                      htmlFor={`color-${color}`}
                      className="px-4 py-2 border rounded-md cursor-pointer peer-data-[state=checked]:bg-white peer-data-[state=checked]:text-black"
                    >
                      {color}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          )}

          <div>
            <h3 className="text-lg font-medium mb-2">Quantity</h3>
            <div className="flex items-center border rounded-md w-32">
              <Button
                variant="ghost"
                size="sm"
                className="h-10 px-3"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <span className="flex-1 text-center">{quantity}</span>
              <Button variant="ghost" size="sm" className="h-10 px-3" onClick={() => setQuantity((prev) => prev + 1)}>
                +
              </Button>
            </div>
          </div>
        </div>

        <Button size="lg" className="w-full luxury-button" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
        <Button size="lg" className="w-full mt-2 bg-black text-white luxury-button no-hover-bg" onClick={openCart}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  )
}
