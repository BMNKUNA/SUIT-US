import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/lib/types"
import { formatPrice } from "@/lib/utils"

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`} className="group">
          <div className="relative aspect-[3/4] overflow-hidden bg-black rounded-lg mb-4 product-image-container">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <h3 className="font-medium text-lg">{product.name}</h3>
          <p className="text-muted-foreground">{formatPrice(product.price)}</p>
        </Link>
      ))}
    </div>
  )
}
