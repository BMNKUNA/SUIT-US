export type Product = {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  category: "men" | "women"
  sizes: string[]
  colors: string[]
  featured?: boolean
}
