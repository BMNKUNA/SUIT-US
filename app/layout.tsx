import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CartProvider from "@/components/cart-provider"

const inter = Inter({ subsets: ["latin"] })

// SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://suitus.store"),
  title: {
    default: "Luxury Suits & Fashion | SUIT US | South Africa",
    template: "%s | SUIT US | South Africa",
  },
  description:
    "South Africa's premier luxury suit and fashion retailer. Offering high-end ready-to-wear and tailored clothing for men and women across Johannesburg, Cape Town, Durban, and all South African provinces.",
  keywords: [
    "luxury suits",
    "South African fashion",
    "tailored suits",
    "Johannesburg suits",
    "Cape Town fashion",
    "Durban tailor",
    "Pretoria fashion",
    "high-end clothing",
    "men's suits South Africa",
    "women's suits South Africa",
    "Gauteng fashion",
    "Western Cape suits",
    "KwaZulu-Natal tailor",
    "Eastern Cape fashion",
    "Free State suits",
    "North West fashion",
    "Mpumalanga tailor",
    "Limpopo fashion",
    "Northern Cape suits",
  ],
  authors: [{ name: "SUIT US" }],
  creator: "SUIT US",
  publisher: "SUIT US",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://suitus.store",
    languages: {
      "en-ZA": "https://suitus.store",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://suitus.store",
    title: "Luxury Suits & Fashion | SUIT US | South Africa",
    description:
      "South Africa's premier luxury suit and fashion retailer. Offering high-end ready-to-wear and tailored clothing for men and women.",
    siteName: "SUIT US",
    images: [
      {
        url: "https://suitus.store/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SUIT US - Luxury Fashion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Suits & Fashion | SUIT US | South Africa",
    description:
      "South Africa's premier luxury suit and fashion retailer. Offering high-end ready-to-wear and tailored clothing for men and women.",
    images: ["https://suitus.store/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  category: "Fashion",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-ZA" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://suitus.store" />
        {/* Redirect from suitus.shop to suitus.store */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.location.hostname === 'suitus.shop') {
                window.location.href = 'https://suitus.store' + window.location.pathname + window.location.search;
              }
            `,
          }}
        />
        {/* Structured data for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SUIT US",
              url: "https://suitus.store",
              logo: "https://suitus.store/logo.png",
              sameAs: [
                "https://www.facebook.com/suitus",
                "https://www.instagram.com/suitus",
                "https://twitter.com/suitus",
                "https://tiktok.com/@suitus",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+27-123-456-789",
                contactType: "customer service",
                areaServed: "ZA",
                availableLanguage: ["English"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Fashion Street",
                addressLocality: "Sandton",
                addressRegion: "Gauteng",
                postalCode: "2196",
                addressCountry: "ZA",
              },
            }),
          }}
        />
        {/* Structured data for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ClothingStore",
              name: "SUIT US",
              image: "https://suitus.store/store-image.jpg",
              "@id": "https://suitus.store",
              url: "https://suitus.store",
              telephone: "+27-123-456-789",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Fashion Street",
                addressLocality: "Sandton",
                addressRegion: "Gauteng",
                postalCode: "2196",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -26.1052,
                longitude: 28.0567,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
              priceRange: "R$$",
              servesCuisine: "Luxury Fashion",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
