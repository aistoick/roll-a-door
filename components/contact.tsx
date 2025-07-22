import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="h-8 w-8 text-orange-600" />,
      title: "Phone",
      details: "0432 645 789",
      subtitle: "Call us anytime for immediate assistance",
    },
    {
      icon: <Mail className="h-8 w-8 text-orange-600" />,
      title: "Email",
      details: "rolladoor@live.com",
      subtitle: "Send us your enquiry and we'll respond quickly",
    },
    {
      icon: <MapPin className="h-8 w-8 text-orange-600" />,
      title: "Service Area",
      details: "Melbourne & Suburbs",
      subtitle: "We service all areas across Melbourne",
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: "Hours",
      details: "24/7 Emergency Service",
      subtitle: "Available for urgent repairs anytime",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-orange-600 font-semibold text-lg">Get In Touch</span>
            <div className="w-20 h-1 bg-orange-600 mt-2 mx-auto"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Contact Us</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to get started? Contact us today for a free quote or emergency service. We're here to help with all
            your garage door needs.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="bg-slate-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0"
            >
              <CardContent className="p-8 text-center">
                <div className="bg-orange-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  {info.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-xl mb-2">{info.title}</h3>
                <p className="text-orange-600 font-semibold text-lg mb-2">{info.details}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{info.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center text-white shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <MessageCircle className="h-16 w-16 text-orange-400 mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">Need Emergency Garage Door Service?</h3>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Don't let a broken garage door disrupt your day. Our emergency service team is available 24/7 to get your
              garage door working again quickly and safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
              >
                <Phone className="mr-3 h-6 w-6" />
                Call Now: 0432 645 789
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-10 py-4 text-xl font-bold bg-transparent backdrop-blur-sm"
              >
                Request Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
