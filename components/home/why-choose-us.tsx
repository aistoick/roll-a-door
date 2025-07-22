import { CheckCircle, Users, Award, Clock } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    "Expert garage door installation",
    "Professional repair services",
    "24/7 emergency service",
    "Free measure and quote",
    "Licensed and insured",
    "Quality guaranteed",
  ]

  const stats = [
    { icon: <Users className="h-8 w-8 text-orange-600" />, number: "1000+", label: "Happy Customers" },
    { icon: <Award className="h-8 w-8 text-orange-600" />, number: "15+", label: "Years Experience" },
    { icon: <Clock className="h-8 w-8 text-orange-600" />, number: "24/7", label: "Emergency Service" },
    { icon: <CheckCircle className="h-8 w-8 text-orange-600" />, number: "100%", label: "Satisfaction Guaranteed" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-orange-600 font-semibold text-lg">Why Choose Us</span>
                <div className="w-20 h-1 bg-orange-600 mt-2"></div>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">ROLL A DOOR SPECIALIST</h2>

              <p className="text-lg text-slate-600 leading-relaxed">
                With over 15 years of experience in the garage door industry, we've built our reputation on quality
                workmanship, reliable service, and customer satisfaction. Our team of certified technicians is committed
                to providing the best garage door solutions for your home or business.
              </p>
            </div>

            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-8 shadow-2xl">
              <img
                src="/images/why_choose.jpg"
                alt="Professional garage door technician at work"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-slate-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-orange-50 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{stat.number}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
