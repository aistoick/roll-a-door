import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      location: "Brighton, Melbourne",
      content:
        "Exceptional service from start to finish. The team was professional, punctual, and the quality of work exceeded our expectations. Our new garage door looks amazing!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      service: "Door Installation",
    },
    {
      id: 2,
      name: "David Thompson",
      location: "Box Hill, Melbourne",
      content:
        "Called them for an emergency repair on a Sunday morning. They arrived within 2 hours and had our garage door working perfectly. Outstanding emergency service!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      service: "Emergency Repair",
    },
    {
      id: 3,
      name: "Lisa Chen",
      location: "Caulfield, Melbourne",
      content:
        "The smart automation system they installed is incredible. Being able to control our garage door from anywhere gives us such peace of mind. Highly recommend!",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
      service: "Smart Automation",
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-orange-600 font-semibold text-lg">Testimonials</span>
            <div className="w-20 h-1 bg-orange-600 mt-2 mx-auto"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">What Our Customers Say</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers across Melbourne have to say about our
            service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600"></div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-orange-400 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-slate-700 leading-relaxed mb-6 italic">"{testimonial.content}"</blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-bold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-600">{testimonial.location}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-semibold">
                      {testimonial.service}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="flex mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold text-slate-900">4.9/5</span>
            </div>
            <p className="text-lg text-slate-700 mb-2">
              <strong>Over 1000+ satisfied customers</strong> across Melbourne
            </p>
            <p className="text-slate-600">
              Join our growing family of happy customers who trust us with their garage door needs
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
