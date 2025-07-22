import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RecentProjects() {
  const projects = [
    {
      src: "/images/img_1.jpg",
      alt: "Modern residential garage door installation",
      title: "Residential Installation",
      category: "Installation",
    },
    {
      src: "/images/img_2.jpg",
      alt: "Commercial garage door repair service",
      title: "Commercial Repair",
      category: "Repair",
    },
    {
      src: "/images/img_3.jpg",
      alt: "Remote control garage door system",
      title: "Remote Systems",
      category: "Remote",
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Recent Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Take a look at some of our recent work and see the quality of our craftsmanship
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.src || "/placeholder.svg"}
                    alt={project.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="inline-block bg-orange-600 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                        {project.category}
                      </span>
                      <h3 className="font-bold text-lg">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold"
            asChild
          >
            <Link href="/gallery">View Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
