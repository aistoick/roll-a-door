import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Mock API function to simulate dynamic testimonials
async function getTestimonials() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CTO at TechFlow",
      content: "This platform transformed how we handle our operations. The efficiency gains have been remarkable.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Founder at StartupLab",
      content: "The best investment we've made for our business. The ROI was evident within the first month.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "VP Operations at ScaleUp",
      content: "Incredible support team and a product that actually delivers on its promises. Highly recommended.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  // Simulate dynamic content - randomly shuffle testimonials
  return testimonials.sort(() => Math.random() - 0.5)
}

export default async function Testimonials() {
  const testimonials = await getTestimonials()

  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Loved by thousands of companies
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            See what our customers have to say about their experience
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-slate-700 leading-relaxed mb-6">"{testimonial.content}"</blockquote>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
