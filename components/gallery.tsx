"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Modern residential garage door installation",
      title: "Residential Installation",
      category: "Installation",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Commercial garage door repair service",
      title: "Commercial Repair",
      category: "Repair",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Remote control garage door system",
      title: "Remote Systems",
      category: "Remote",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Professional spring replacement service",
      title: "Spring Replacement",
      category: "Repair",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Automatic garage door opener installation",
      title: "Opener Installation",
      category: "Installation",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Comprehensive safety inspection service",
      title: "Safety Inspection",
      category: "Maintenance",
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-orange-600 font-semibold text-lg">Our Work</span>
            <div className="w-20 h-1 bg-orange-600 mt-2 mx-auto"></div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Gallery</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Take a look at some of our recent projects and see the quality of our workmanship firsthand.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border-0 overflow-hidden"
              onClick={() => setSelectedImage(image.src)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="inline-block bg-orange-600 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                        {image.category}
                      </span>
                      <h3 className="font-bold text-lg">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
          >
            View More Projects
          </Button>
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-full">
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Enlarged gallery image"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors text-xl font-bold"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
