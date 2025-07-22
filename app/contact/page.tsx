"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: <Phone className="h-8 w-8 text-orange-600" />,
      title: "Phone",
      details: "0432 645 789",
      subtitle: "Call us anytime for immediate assistance",
      action: "tel:0432645789",
    },
    {
      icon: <Mail className="h-8 w-8 text-orange-600" />,
      title: "Email",
      details: "rolladoor@live.com",
      subtitle: "Send us your enquiry and we'll respond quickly",
      action: "mailto:rolladoor@live.com",
    },
    {
      icon: <MapPin className="h-8 w-8 text-orange-600" />,
      title: "Service Area",
      details: "Melbourne & Suburbs",
      subtitle: "We service all areas across Melbourne",
      action: null,
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: "Hours",
      details: "24/7 Emergency Service",
      subtitle: "Available for urgent repairs anytime",
      action: null,
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", service: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
            Contact <span className="text-orange-600">Us</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to get started? Contact us today for a free quote or emergency service. We're here to help with all
            your garage door needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-slate-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 cursor-pointer"
                onClick={() => info.action && window.open(info.action)}
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

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-slate-900">Get a Free Quote</CardTitle>
                  <CardDescription className="text-lg">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="bg-green-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                        <Send className="h-10 w-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
                      <p className="text-slate-600">Your message has been sent successfully. We'll contact you soon.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Name *</label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Phone *</label>
                          <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your phone number"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Service Needed</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        >
                          <option value="">Select a service</option>
                          <option value="installation">New Installation</option>
                          <option value="repair">Repair Service</option>
                          <option value="maintenance">Maintenance</option>
                          <option value="remote">Remote/Automation</option>
                          <option value="emergency">Emergency Service</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your garage door needs..."
                          rows={4}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-semibold"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Service Areas */}
            <div className="space-y-8">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-900">Service Areas</CardTitle>
                  <CardDescription>We proudly serve Melbourne and surrounding suburbs</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">North Melbourne</h4>
                      <ul className="space-y-1">
                        <li>Preston</li>
                        <li>Reservoir</li>
                        <li>Coburg</li>
                        <li>Brunswick</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">South Melbourne</h4>
                      <ul className="space-y-1">
                        <li>Brighton</li>
                        <li>Caulfield</li>
                        <li>Moorabbin</li>
                        <li>Bentleigh</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">East Melbourne</h4>
                      <ul className="space-y-1">
                        <li>Box Hill</li>
                        <li>Ringwood</li>
                        <li>Blackburn</li>
                        <li>Doncaster</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">West Melbourne</h4>
                      <ul className="space-y-1">
                        <li>Footscray</li>
                        <li>Sunshine</li>
                        <li>Altona</li>
                        <li>Werribee</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-gradient-to-br from-orange-600 to-orange-700 text-white shadow-2xl border-0">
                <CardContent className="p-8 text-center">
                  <MessageCircle className="h-16 w-16 text-orange-100 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Emergency Service</h3>
                  <p className="mb-6 text-orange-100">
                    Garage door stuck? Need immediate assistance? We provide 24/7 emergency service.
                  </p>
                  <Button
                    size="lg"
                    className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold"
                    onClick={() => window.open("tel:0432645789")}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: 0432 645 789
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
