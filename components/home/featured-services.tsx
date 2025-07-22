import { Settings, Wrench, Zap, Clock } from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FeaturedServices() {
  const services = [
    {
      icon: <Settings className="h-10 w-10 text-orange-600" />,
      title: "Installation",
      description: "Professional installation of new garage doors with precision and care.",
    },
    {
      icon: <Wrench className="h-10 w-10 text-orange-600" />,
      title: "Repair & Maintenance",
      description: "Expert repair services to keep your garage door functioning perfectly.",
    },
    {
      icon: <Zap className="h-10 w-10 text-orange-600" />,
      title: "Remote & Automation",
      description: "Modern remote control systems and smart garage door automation.",
    },
    {
      icon: <Clock className="h-10 w-10 text-orange-600" />,
      title: "Emergency Service",
      description: "24/7 emergency repair services when you need them most.",
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional garage door solutions for residential and commercial properties
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0"
            >
              <CardHeader className="pb-4 text-center">
                <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-50 group-hover:bg-orange-100 transition-colors duration-300 mx-auto">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
                <CardDescription className="text-slate-600">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold"
            asChild
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
