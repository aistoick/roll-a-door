import type { Metadata } from "next"
import { Users, Award, Clock, Shield, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Roll-A-Door Specialist",
  description: "Learn about Roll-A-Door Specialist's 15+ years of experience in garage door services across Melbourne.",
}

export default function AboutPage() {
  const stats = [
    { icon: <Users className="h-8 w-8 text-orange-600" />, number: "1000+", label: "Happy Customers" },
    { icon: <Award className="h-8 w-8 text-orange-600" />, number: "15+", label: "Years Experience" },
    { icon: <Clock className="h-8 w-8 text-orange-600" />, number: "24/7", label: "Emergency Service" },
    { icon: <Shield className="h-8 w-8 text-orange-600" />, number: "100%", label: "Satisfaction Guaranteed" },
  ]

  const values = [
    {
      title: "Quality Workmanship",
      description:
        "We take pride in delivering exceptional quality in every project, using only the best materials and techniques.",
    },
    {
      title: "Customer First",
      description:
        "Our customers are at the heart of everything we do. We listen, understand, and deliver solutions that exceed expectations.",
    },
    {
      title: "Reliability",
      description:
        "When you call us, we show up. Our team is dependable, punctual, and committed to getting the job done right.",
    },
    {
      title: "Innovation",
      description:
        "We stay current with the latest garage door technology and techniques to provide modern, efficient solutions.",
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              About <span className="text-orange-600">Roll-A-Door Specialist</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              With over 15 years of experience, we've built our reputation on quality workmanship, reliable service, and
              customer satisfaction across Melbourne and suburbs.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Roll-A-Door Specialist was founded with a simple mission: to provide Melbourne residents and
                  businesses with reliable, professional garage door services. What started as a small family business
                  has grown into one of Melbourne's most trusted garage door specialists.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Over the years, we've helped thousands of customers with everything from emergency repairs to complete
                  garage door installations. Our team of certified technicians brings expertise, professionalism, and a
                  commitment to excellence to every job.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Today, we continue to evolve with the latest technology and techniques while maintaining the personal
                  touch and attention to detail that our customers have come to expect.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/about_us.jpg"
                alt="Roll-A-Door Specialist team at work"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Track Record</h2>
            <p className="text-xl text-slate-600">Numbers that speak for themselves</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
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

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
