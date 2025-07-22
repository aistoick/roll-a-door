"use client"
import { useState } from "react"
import { ShoppingCart, Star, Grid, List, CheckCircle, Phone } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"

// Product data structure (prices removed)
const garageDoors = [
  {
    id: 1,
    name: "Premium Sectional Door - Insulated",
    category: "Garage Doors",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    reviews: 127,
    features: ["Insulated panels", "Quiet operation", "10-year warranty", "Professional installation"],
    description: "Premium insulated sectional door perfect for residential properties.",
    inStock: true,
    badge: "Best Seller",
    specifications: {
      Material: "Insulated Steel",
      Thickness: "40mm",
      "R-Value": "16.2",
      "Wind Load": "Up to 50 mph",
    },
  },
  {
    id: 2,
    name: "Classic Roller Door - Steel",
    category: "Garage Doors",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    reviews: 89,
    features: ["Durable steel construction", "Space-saving design", "Weather resistant", "Easy maintenance"],
    description: "Reliable steel roller door ideal for compact spaces.",
    inStock: true,
    badge: null,
    specifications: {
      Material: "Steel",
      Operation: "Manual/Electric",
      Colors: "Multiple options",
      Warranty: "5 years",
    },
  },
  {
    id: 3,
    name: "Designer Aluminum & Glass Door",
    category: "Garage Doors",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    reviews: 64,
    features: ["Modern design", "Natural light", "Corrosion resistant", "Custom sizing"],
    description: "Contemporary aluminum and glass door for modern homes.",
    inStock: true,
    badge: "Premium",
    specifications: {
      Material: "Aluminum & Glass",
      Style: "Contemporary",
      Insulation: "Optional",
      Customization: "Available",
    },
  },
  {
    id: 4,
    name: "Traditional Tilt Door - Timber",
    category: "Garage Doors",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    reviews: 45,
    features: ["Natural timber finish", "Classic design", "Cost-effective", "Customizable"],
    description: "Classic timber tilt door with traditional charm.",
    inStock: true,
    badge: "Popular",
    specifications: {
      Material: "Timber",
      Style: "Traditional",
      Finish: "Natural/Painted",
      Maintenance: "Regular required",
    },
  },
  {
    id: 5,
    name: "Commercial Heavy-Duty Roller",
    category: "Garage Doors",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    reviews: 32,
    features: ["Heavy-duty construction", "High-cycle springs", "Commercial grade", "Extended warranty"],
    description: "Industrial-strength roller door for commercial applications.",
    inStock: true,
    badge: "Commercial",
    specifications: {
      Application: "Commercial",
      Cycles: "High-cycle rated",
      Motor: "Heavy-duty",
      Warranty: "Extended",
    },
  },
  {
    id: 6,
    name: "Side Hinged Heritage Door",
    category: "Garage Doors",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    reviews: 28,
    features: ["Heritage styling", "Pedestrian access", "No power required", "Custom colors"],
    description: "Traditional side-hinged door perfect for period homes.",
    inStock: false,
    badge: "Out of Stock",
    specifications: {
      Style: "Heritage",
      Operation: "Manual",
      Access: "Pedestrian friendly",
      Colors: "Custom available",
    },
  },
]

const automationProducts = [
  {
    id: 7,
    name: "Smart WiFi Garage Door Opener",
    category: "Automation & Accessories",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    reviews: 156,
    features: ["WiFi connectivity", "Smartphone app", "Voice control", "Security alerts"],
    description: "Complete smart opener with app control and home integration.",
    inStock: true,
    badge: "Smart Choice",
    specifications: {
      Connectivity: "WiFi",
      Compatibility: "iOS/Android",
      "Voice Control": "Alexa/Google",
      Security: "Rolling code",
    },
  },
  {
    id: 8,
    name: "Premium Remote Control Set",
    category: "Automation & Accessories",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.7,
    reviews: 203,
    features: ["Rolling code security", "Long range", "LED indicator", "2 remotes included"],
    description: "High-quality remote control set with advanced security features.",
    inStock: true,
    badge: "Popular",
    specifications: {
      Security: "Rolling code",
      Range: "Up to 100m",
      Battery: "Long-life",
      Quantity: "2 remotes",
    },
  },
  {
    id: 9,
    name: "Wireless Keypad Entry System",
    category: "Automation & Accessories",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.6,
    reviews: 87,
    features: ["Weather resistant", "Backlit keypad", "Multiple user codes", "Battery powered"],
    description: "Convenient keypad entry system for secure access.",
    inStock: true,
    badge: null,
    specifications: {
      "Weather Rating": "IP65",
      Codes: "Up to 50 users",
      Backlight: "LED",
      Power: "Battery",
    },
  },
  {
    id: 10,
    name: "Smart Home Integration Hub",
    category: "Automation & Accessories",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.9,
    reviews: 74,
    features: ["Google/Alexa compatible", "Multiple protocols", "Easy setup", "Cloud connectivity"],
    description: "Complete smart home integration for your garage door system.",
    inStock: true,
    badge: "New",
    specifications: {
      Protocols: "WiFi/Zigbee/Z-Wave",
      Compatibility: "Universal",
      Setup: "App-guided",
      Updates: "Automatic",
    },
  },
  {
    id: 11,
    name: "Professional Motor Kit - 1HP",
    category: "Automation & Accessories",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.8,
    reviews: 45,
    features: ["1HP motor", "Soft start/stop", "Manual release", "5-year warranty"],
    description: "Heavy-duty motor kit for large residential doors.",
    inStock: true,
    badge: "Professional",
    specifications: {
      Power: "1HP",
      Operation: "Belt drive",
      Features: "Soft start/stop",
      Warranty: "5 years",
    },
  },
  {
    id: 12,
    name: "Safety Sensor Kit",
    category: "Automation & Accessories",
    image: "/placeholder.svg?height=300&width=400",
    rating: 4.5,
    reviews: 112,
    features: ["Infrared sensors", "Auto-reverse", "Weather resistant", "Easy installation"],
    description: "Essential safety sensors for automatic garage door systems.",
    inStock: true,
    badge: "Safety First",
    specifications: {
      Type: "Infrared",
      Range: "Up to 8m",
      "Weather Rating": "IP54",
      Installation: "DIY friendly",
    },
  },
]

const allProducts = [...garageDoors, ...automationProducts]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("popular")
  const { addItem, openCart } = useCart()

  const categories = [
    { id: "all", name: "All Products", count: allProducts.length },
    { id: "garage-doors", name: "Garage Doors", count: garageDoors.length },
    { id: "automation", name: "Automation & Accessories", count: automationProducts.length },
  ]

  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((product) =>
          selectedCategory === "garage-doors"
            ? product.category === "Garage Doors"
            : product.category === "Automation & Accessories",
        )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name)
      case "rating":
        return b.rating - a.rating
      default:
        return b.reviews - a.reviews // popular = most reviews
    }
  })

  const getBadgeColor = (badge: string | null) => {
    if (!badge) return ""
    switch (badge.toLowerCase()) {
      case "best seller":
        return "bg-green-500"
      case "popular":
        return "bg-blue-500"
      case "new":
        return "bg-purple-500"
      case "premium":
        return "bg-indigo-500"
      case "out of stock":
        return "bg-gray-500"
      default:
        return "bg-orange-500"
    }
  }

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      image: product.image,
      category: product.category,
      specifications: product.specifications,
    })
    openCart()
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Premium <span className="text-orange-600">Garage Door</span> Products
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive range of garage doors and smart automation systems. Add products to your cart to
            request a personalized quote with professional installation.
          </p>
        </div>
      </section>

      {/* Product Catalog */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-orange-600 text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Filters and Sort */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
              <span className="text-slate-600 font-medium">Showing {sortedProducts.length} products</span>
            </div>

            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="popular">Most Popular</option>
                <option value="name">Name A-Z</option>
                <option value="rating">Highest Rated</option>
              </select>

              <div className="flex border border-slate-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${viewMode === "grid" ? "bg-orange-600 text-white" : "bg-white text-slate-600"}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${viewMode === "list" ? "bg-orange-600 text-white" : "bg-white text-slate-600"}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className={`grid gap-8 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
            {sortedProducts.map((product) => (
              <Card
                key={product.id}
                className={`group bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden flex ${
                  viewMode === "list" ? "flex-row" : "flex-col hover:-translate-y-1"
                }`}
              >
                <div className={`relative ${viewMode === "list" ? "w-1/3" : ""}`}>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
                      viewMode === "list" ? "w-full h-full" : "w-full h-64"
                    }`}
                  />
                  {product.badge && (
                    <Badge className={`absolute top-3 left-3 text-white ${getBadgeColor(product.badge)}`}>
                      {product.badge}
                    </Badge>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-white text-slate-900 px-4 py-2 rounded-full font-semibold">Out of Stock</span>
                    </div>
                  )}
                </div>

                <div className={`flex flex-col ${viewMode === "list" ? "w-2/3" : "flex-1"}`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                        {product.name}
                      </CardTitle>
                      <div className="flex items-center gap-1 text-sm text-slate-600">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{product.rating}</span>
                        <span>({product.reviews})</span>
                      </div>
                    </div>
                    <CardDescription className="text-slate-600 leading-relaxed">{product.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-2 mb-6 flex-1">
                      {product.features.slice(0, viewMode === "list" ? 2 : 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-slate-700 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex gap-3 mt-auto">
                      <Button
                        className="flex-1 bg-orange-600 hover:bg-orange-700 text-white"
                        disabled={!product.inStock}
                        onClick={() => handleAddToCart(product)}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        {product.inStock ? "Add to Quote" : "Out of Stock"}
                      </Button>
                      <Button variant="outline" className="px-4 bg-transparent" asChild>
                        <Link href={`/products/${product.id}`}>Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 bg-gradient-to-r from-slate-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Need Expert Guidance?</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Our experienced team can help you choose the perfect garage door solution for your property. Get
              personalized recommendations and professional installation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                <Phone className="mr-2 h-5 w-5" />
                Call: 0432 645 789
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent" asChild>
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
