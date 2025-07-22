import type { Metadata } from "next"
import { Calendar, MapPin, User, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Gallery - Roll-A-Door Specialist",
  description: "View our completed garage door installation and repair projects across Melbourne.",
}

export default function GalleryPage() {
  const projects = [
    {
      id: 1,
      title: "Modern Sectional Door Installation - Brighton",
      category: "Residential Installation",
      location: "Brighton, Melbourne",
      date: "March 2024",
      client: "The Johnson Family",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Complete installation of premium insulated sectional door with smart WiFi opener for a contemporary home in Brighton.",
      features: ["Insulated sectional door", "Smart WiFi opener", "Custom color matching", "Professional installation"],
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Commercial Roller Door Upgrade - Box Hill",
      category: "Commercial Installation",
      location: "Box Hill, Melbourne",
      date: "February 2024",
      client: "Metro Automotive",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Heavy-duty commercial roller door installation for automotive workshop with enhanced security features.",
      features: ["Heavy-duty roller door", "Enhanced security", "Remote access control", "Maintenance contract"],
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 3,
      title: "Heritage Door Restoration - Toorak",
      category: "Restoration",
      location: "Toorak, Melbourne",
      date: "January 2024",
      client: "Heritage Property Trust",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Careful restoration of heritage timber garage doors while maintaining original character and adding modern functionality.",
      features: ["Heritage restoration", "Timber refinishing", "Modern hardware", "Period-appropriate design"],
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 4,
      title: "Smart Home Integration - Caulfield",
      category: "Smart Automation",
      location: "Caulfield, Melbourne",
      date: "March 2024",
      client: "The Chen Residence",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Complete smart home integration with voice control, smartphone app, and automated scheduling for modern family home.",
      features: ["Voice control setup", "Smartphone integration", "Automated scheduling", "Security monitoring"],
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 5,
      title: "Emergency Repair Service - Preston",
      category: "Emergency Repair",
      location: "Preston, Melbourne",
      date: "February 2024",
      client: "Emergency Service Call",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "24-hour emergency repair service for broken garage door spring, restoring full functionality within hours.",
      features: ["24-hour service", "Spring replacement", "Safety inspection", "Same-day completion"],
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 6,
      title: "Designer Glass Door - South Yarra",
      category: "Premium Installation",
      location: "South Yarra, Melbourne",
      date: "January 2024",
      client: "Luxury Residence",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Premium aluminum and glass garage door installation for luxury residence with custom design and natural light features.",
      features: ["Custom glass panels", "Aluminum framework", "Natural light design", "Premium hardware"],
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 7,
      title: "Multi-Unit Complex - Doncaster",
      category: "Commercial Installation",
      location: "Doncaster, Melbourne",
      date: "December 2023",
      client: "Doncaster Apartments",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Large-scale installation project for 24-unit apartment complex with coordinated design and bulk installation efficiency.",
      features: ["24 door installation", "Coordinated design", "Bulk efficiency", "Maintenance program"],
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 8,
      title: "Vintage Car Collector Garage - Malvern",
      category: "Specialty Installation",
      location: "Malvern, Melbourne",
      date: "November 2023",
      client: "Private Collector",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Specialized garage door solution for vintage car collector with climate control integration and security features.",
      features: ["Climate control integration", "Enhanced security", "Soft-close operation", "Custom sizing"],
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 9,
      title: "Warehouse Upgrade - Footscray",
      category: "Industrial Installation",
      location: "Footscray, Melbourne",
      date: "October 2023",
      client: "Industrial Solutions Ltd",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Industrial-grade roller door installation for warehouse facility with high-cycle rating and automated controls.",
      features: ["Industrial-grade construction", "High-cycle rating", "Automated controls", "Safety systems"],
      beforeImage: "/placeholder.svg?height=300&width=400",
      afterImage: "/placeholder.svg?height=300&width=400",
    },
  ]

  const categories = [
    "All Projects",
    "Residential Installation",
    "Commercial Installation",
    "Smart Automation",
    "Emergency Repair",
    "Restoration",
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            Project <span className="text-orange-600">Gallery</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our completed projects across Melbourne. From residential installations to commercial upgrades, see
            the quality and craftsmanship that sets us apart.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">1000+</div>
              <div className="text-slate-600 font-medium">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-slate-600 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-slate-600 font-medium">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-slate-600 font-medium">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All Projects" ? "default" : "outline"}
                className={category === "All Projects" ? "bg-orange-600 hover:bg-orange-700" : "bg-transparent"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-600 text-white">{project.category}</Badge>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button size="sm" className="w-full bg-white text-slate-900 hover:bg-slate-100" asChild>
                        <Link href={`/gallery/${project.id}`}>
                          View Project Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>

                  <div className="space-y-2 mb-4 text-sm text-slate-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-orange-600" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-orange-600" />
                      {project.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-orange-600" />
                      {project.client}
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-4">{project.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-900 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="text-sm text-slate-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="bg-transparent">
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Join our gallery of satisfied customers. Contact us today to discuss your garage door project and get a free
            consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 text-xl font-bold">
              Call: 0432 645 789
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-10 py-4 text-xl font-bold bg-transparent"
              asChild
            >
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
