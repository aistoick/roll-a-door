"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Phone, Shield, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    details: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-garage.jpg"
          alt="Professional garage door installation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-orange-600/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-4 py-2 text-orange-300">
                <Award className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Professional Service Since 2008</span>
              </div>

              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block">FAST &</span>
                <span className="block text-orange-400">PROFESSIONAL</span>
                <span className="block">SERVICE</span>
              </h1>

              <p className="text-xl lg:text-2xl text-slate-200 font-medium">FREE MEASURE AND QUOTE</p>

              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                Expert garage door installation, repair, and maintenance services. Quality workmanship with reliable
                results you can trust.
              </p>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-200"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 0432 645 789
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold bg-transparent backdrop-blur-sm"
                >
                  View Gallery
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-orange-300 font-semibold text-lg mb-2">FOR FREE QUOTE CALL:</p>
                <p className="text-3xl font-bold text-white">0432 645 789</p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
              <div className="text-center">
                <Shield className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-slate-300">Licensed & Insured</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-slate-300">24/7 Emergency</p>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-slate-300">Quality Guaranteed</p>
              </div>
            </div>
          </div>

          {/* Right Side - Quote Form */}
          <div className="lg:justify-self-end w-full max-w-md">
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
              <CardHeader className="bg-orange-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold text-center">REQUEST A QUOTE</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Name*"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="phone"
                      placeholder="Phone No*"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email*"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="details"
                      placeholder="Quote Details"
                      value={formData.details}
                      onChange={handleChange}
                      className="border-slate-300 focus:border-orange-500 focus:ring-orange-500 min-h-[100px]"
                      rows={4}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-semibold"
                  >
                    Get Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
