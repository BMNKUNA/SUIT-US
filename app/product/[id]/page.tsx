import { notFound } from "next/navigation"
import { getProductById } from "@/lib/products"
import ProductDetail from "@/components/product-detail"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-24 pb-16 theme-invert">
      <div className="container mx-auto px-4">
        <ProductDetail product={product} />
      </div>
    </main>
  )
}
