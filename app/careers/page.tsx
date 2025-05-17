import { Button } from "@/components/ui/button"

export default function CareersPage() {
  const careers = [
    {
      id: "tailor-senior",
      title: "Senior Tailor",
      department: "Production",
      location: "New York, NY",
      type: "Full-time",
      description:
        "We're looking for an experienced tailor with at least 8 years of experience in luxury menswear and womenswear. Must have expertise in pattern making, cutting, and finishing techniques for high-end garments.",
    },
    {
      id: "designer-fashion",
      title: "Fashion Designer",
      department: "Design",
      location: "New York, NY",
      type: "Full-time",
      description:
        "Creative fashion designer with a strong portfolio in luxury ready-to-wear. Responsible for developing seasonal collections, selecting fabrics, and overseeing the design process from concept to production.",
    },
    {
      id: "store-manager",
      title: "Store Manager",
      department: "Retail",
      location: "Los Angeles, CA",
      type: "Full-time",
      description:
        "Experienced retail manager to oversee our flagship store operations. Responsibilities include team management, sales performance, inventory control, and ensuring exceptional customer experience.",
    },
    {
      id: "marketing-specialist",
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description:
        "Digital marketing professional with experience in luxury fashion. Responsible for social media strategy, content creation, influencer partnerships, and digital campaigns to enhance brand presence.",
    },
    {
      id: "fabric-sourcing",
      title: "Fabric Sourcing Specialist",
      department: "Production",
      location: "Milan, Italy",
      type: "Full-time",
      description:
        "Specialist in sourcing premium fabrics for luxury garments. Must have extensive knowledge of textile mills, quality assessment, and sustainable sourcing practices.",
    },
  ]

  return (
    <main className="min-h-screen pt-24 pb-16 theme-invert">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto sa-flag-accent pl-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers at SUIT US</h1>
          <p className="text-xl opacity-60 mb-12">
            Join our team of passionate professionals dedicated to crafting luxury fashion
          </p>

          <div className="space-y-6 mb-12">
            <h2 className="text-2xl font-bold">Why Work With Us</h2>
            <p className="text-lg">
              At SUIT US, we believe in fostering a creative, collaborative environment where innovation thrives. Our
              team members are passionate about craftsmanship, quality, and pushing the boundaries of luxury fashion.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="theme-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Growth & Development</h3>
                <p>Continuous learning opportunities and career advancement paths for all team members</p>
              </div>
              <div className="theme-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Creative Environment</h3>
                <p>A workspace that encourages innovation, experimentation, and artistic expression</p>
              </div>
              <div className="theme-card p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Global Presence</h3>
                <p>Opportunities to work with international teams and gain exposure to global fashion markets</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Open Positions</h2>

          <div className="space-y-6">
            {careers.map((job) => (
              <div
                key={job.id}
                className="border border-opacity-20 rounded-lg p-6 hover:border-opacity-60 transition-colors theme-card"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                    <span className="px-3 py-1 theme-accent rounded-full text-sm">{job.department}</span>
                    <span className="px-3 py-1 theme-accent rounded-full text-sm">{job.location}</span>
                    <span className="px-3 py-1 theme-accent rounded-full text-sm">{job.type}</span>
                  </div>
                </div>
                <p className="opacity-60 mb-4">{job.description}</p>
                <Button variant="outline">Apply Now</Button>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 theme-card rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Don't see a position that fits?</h2>
            <p className="text-lg mb-6">
              We're always looking for talented individuals to join our team. Send us your resume and let us know how
              you can contribute to SUIT US.
            </p>
            <Button>Submit Your Application</Button>
          </div>
        </div>
      </div>
    </main>
  )
}
