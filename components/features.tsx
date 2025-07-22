import { Zap, Shield, BarChart3, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Lightning Fast",
    description: "Built for speed with modern architecture that scales with your business needs.",
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: "Enterprise Security",
    description: "Bank-level security with end-to-end encryption and compliance certifications.",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Advanced Analytics",
    description: "Real-time insights and detailed reporting to make data-driven decisions.",
  },
  {
    icon: <Users className="h-8 w-8 text-blue-600" />,
    title: "Team Collaboration",
    description: "Seamless collaboration tools that keep your team connected and productive.",
  },
]

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to succeed
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Powerful features designed to streamline your workflow and boost productivity
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 bg-slate-50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-slate-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
