import { Wrench, Settings, Zap, Shield, Clock, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      icon: <Settings className="h-10 w-10 text-orange-600" />,
      title: "Garage Door Installation",
      description: "Professional installation of new garage doors with precision and care.",
      features: ["Residential & Commercial", "All door types", "Professional fitting", "Warranty included"],
    },
    {
      icon: <Wrench className="h-10 w-10 text-orange-600" />,
      title: "Repair & Maintenance",
      description: "Expert repair services to keep your garage door functioning perfectly.",
      features: ["Spring replacement", "Cable repair", "Track alignment", "Preventive maintenance"],
    },
    {
      icon: <Zap className="h-10 w-10 text-orange-600" />,
      title: "Remote & Automation",
      description: "Modern remote control systems and smart garage door automation.",
      features: ["Remote programming", "Smart home integration", "Keypad installation", "Motor replacement"],
    },
    {
      icon: <Shield className="h-10 w-10 text-orange-600" />,
      title: "Safety Inspection",
      description: "Comprehensive safety checks to ensure your garage door operates safely.",
      features: ["Safety sensor testing", "Balance adjustment", "Spring tension check", "Full system audit"],
    },
    {
      icon: <Clock className="h-10 w-10 text-orange-600" />,
      title: "Emergency Service",
      description: "24/7 emergency repair services when you need them most.",
      features: ["Same-day service", "Emergency repairs", "Weekend availability", "Urgent call-outs"],
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-orange-600" />,
      title: "Quality Products",
      description: "Premium garage doors and parts from trusted manufacturers.",
      features: ["Top brand products", "Warranty included", "Durable materials", "Latest technology"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-orange-600 font-semibold text-lg">Our Services</span>
            <div className="w-20 h-1 bg-orange-600 mt-2 mx-auto"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Professional Garage Door Solutions</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From installation to emergency repairs, we provide comprehensive garage door services with the highest
            standards of quality and professionalism.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden"
            >
              <CardHeader className="pb-4 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-50 group-hover:bg-orange-100 transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 mb-2">{service.title}</CardTitle>
                <CardDescription className="text-slate-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
