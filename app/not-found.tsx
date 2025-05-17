import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center theme-invert px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-medium mb-6">Page Not Found</h2>
      <p className="max-w-md mb-8 opacity-60">
        We couldn't find the page you were looking for. Perhaps you'd like to browse our collections?
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/mens">Men's Collection</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/womens">Women's Collection</Link>
        </Button>
      </div>
    </div>
  )
}
