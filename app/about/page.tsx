import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 theme-invert">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto sa-flag-accent pl-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About SUIT US</h1>

          <div className="relative aspect-video mb-8 rounded-lg overflow-hidden product-image-container">
            <Image
              src="https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="SUIT US Atelier"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6 text-lg">
            <p>
              Founded in 2012, SUIT US has established itself as a premier destination for luxury ready-to-wear and
              bespoke tailored clothing. Our journey began with a simple mission: to provide exceptional quality
              garments that combine timeless elegance with contemporary style.
            </p>

            <h2 className="text-2xl font-bold mt-8">Our Philosophy</h2>
            <p>
              At SUIT US, we believe that clothing is more than just fabric—it's an expression of identity. Each piece
              in our collection is crafted with meticulous attention to detail, using only the finest materials sourced
              from around the world. From Italian wools to Egyptian cottons, we select our fabrics based on quality,
              sustainability, and performance.
            </p>

            <h2 className="text-2xl font-bold mt-8">Craftsmanship</h2>
            <p>
              Our team of master tailors brings decades of experience to every garment. Each suit, dress, and accessory
              passes through multiple stages of quality control to ensure perfection. We combine traditional tailoring
              techniques with modern innovations to create pieces that not only look exceptional but feel comfortable
              and last for years.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden product-image-container">
                <Image
                  src="https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Tailoring Process"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden product-image-container">
                <Image
                  src="https://images.pexels.com/photos/4620843/pexels-photo-4620843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Fabric Selection"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8">Our Commitment</h2>
            <p>
              We are committed to responsible business practices. This includes ethical manufacturing, fair labor
              conditions, and reducing our environmental footprint. We're constantly exploring innovative ways to make
              our production more sustainable without compromising on quality.
            </p>

            <h2 className="text-2xl font-bold mt-8">Visit Us</h2>
            <p>
              We invite you to experience SUIT US in person at one of our flagship stores. Our expert stylists are ready
              to provide personalized service and help you find the perfect pieces for your wardrobe.
            </p>

            <div className="border-t border-opacity-20 mt-12 pt-8">
              <p className="italic">"Luxe Ready to Wear to tailored perfection for the modern individual."</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
