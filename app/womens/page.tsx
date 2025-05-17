import { womenProducts } from "@/lib/products"
import ProductGrid from "@/components/product-grid"

export default function WomensPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 theme-invert">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">Women's Collection</h1>
          <p className="opacity-60 mt-2">Luxe Ready to Wear to tailored perfection</p>
        </div>

        <ProductGrid products={womenProducts} />
      </div>
    </main>
  )
}
