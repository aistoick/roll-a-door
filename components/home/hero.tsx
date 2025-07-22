"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Shield, Clock, Award, Phone, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Professional Garage Door Installation",
      subtitle: "Premium Quality • Expert Service • 10-Year Warranty",
      description:
        "Transform your property with our premium garage door solutions. Professional installation with comprehensive warranty coverage.",
      image: "/images/slide.jpg",
      features: ["Free consultation", "Same-day service", "10-year warranty", "Licensed professionals"],
      cta: "Get Free Quote",
      ctaLink: "/contact",
    },
    {
      title: "24/7 Emergency Repair Service",
      subtitle: "Fast Response • Expert Technicians • Reliable Solutions",
      description:
        "Garage door stuck or broken? Our emergency team is available 24/7 to get you back on track quickly and safely.",
      image: "/images/slide_2.jpg",
      features: ["24/7 availability", "2-hour response", "All brands serviced", "Upfront pricing"],
      cta: "Call Emergency",
      ctaLink: "tel:0432645789",
    },
    {
      title: "Smart Automation Systems",
      subtitle: "Modern Technology • Remote Control • Smart Integration",
      description:
        "Upgrade to smart garage door automation with smartphone control, voice activation, and home integration.",
      image: "/images/slide-3.jpg",
      features: ["Smartphone control", "Voice activation", "Home integration", "Security monitoring"],
      cta: "Learn More",
      ctaLink: "/products",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentSlideData.image || "/placeholder.svg"}
          alt={currentSlideData.title}
          className="w-full h-full object-cover transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[700px]">
            {/* Left Side */}
            <div className="text-white flex flex-col justify-between h-full space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-orange-600/20 backdrop-blur-sm border border-orange-400/30 rounded-full px-4 py-2 text-orange-300">
                  <Award className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Melbourne's #1 Garage Door Specialists</span>
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  {currentSlideData.title.split(" ").map((word, index) => (
                    <span key={index} className={index === 1 ? "text-orange-400 block" : "block"}>
                      {word}{" "}
                    </span>
                  ))}
                </h1>

                <p className="text-xl text-orange-300 font-semibold">{currentSlideData.subtitle}</p>
                <p className="text-lg text-slate-300 leading-relaxed max-w-xl">{currentSlideData.description}</p>

                <div className="grid grid-cols-2 gap-3">
                  {currentSlideData.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-slate-300">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-6 pt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-xl transition-all duration-200"
                    asChild
                  >
                    <Link href={currentSlideData.ctaLink}>
                      {currentSlideData.cta === "Call Emergency" ? <Phone className="mr-2 h-5 w-5" /> : null}
                      {currentSlideData.cta}
                      {currentSlideData.cta !== "Call Emergency" ? <ArrowRight className="ml-2 h-5 w-5" /> : null}
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold bg-transparent backdrop-blur-sm"
                    asChild
                  >
                    <Link href="/gallery">
                      View Gallery
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                <div className="text-center sm:text-left">
                  <p className="text-orange-300 font-semibold mb-1">24/7 Emergency Service</p>
                  <p className="text-2xl font-bold text-white">0432 645 789</p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-6">
              <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-600 p-3 rounded-xl mr-4">
                      <Star className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">4.9/5 Rating</h3>
                      <p className="text-slate-600">1000+ Happy Customers</p>
                    </div>
                  </div>
                  {["Professional Service", "Quality Workmanship", "Customer Support"].map((label, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-slate-700">{label}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="grid grid-cols-3 gap-4">
                <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-0">
                  <CardContent className="p-6 text-center">
                    <Shield className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-slate-900">Licensed</p>
                    <p className="text-xs text-slate-600">& Insured</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-0">
                  <CardContent className="p-6 text-center">
                    <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-slate-900">24/7</p>
                    <p className="text-xs text-slate-600">Emergency</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/90 backdrop-blur-sm shadow-lg border-0">
                  <CardContent className="p-6 text-center">
                    <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-slate-900">10-Year</p>
                    <p className="text-xs text-slate-600">Warranty</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          <button onClick={prevSlide} className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200">
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? "bg-orange-400" : "bg-white/40"
                }`}
              />
            ))}
          </div>

          <button onClick={nextSlide} className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-20">
        <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white">
          <span className="text-sm font-medium">
            {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  )
}
