import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Star, ShoppingCart, CheckCircle, Truck, Shield, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

// This would typically come from a database or API
const getProduct = (id: string) => {
  const allProducts = [
    {
      id: 1,
      name: "Merlin MS105",
      category: "garage-doors",
      price: 1899,
      originalPrice: 2199,
      images: [
        "/images/p_1.png",
        "/images/p_1.png",
        "/images/p_1.png",
      ],
      rating: 4.9,
      reviews: 127,
      features: [
        "Insulated panels for energy efficiency",
        "Quiet operation with premium hardware",
        "10-year comprehensive warranty",
        "Professional installation included",
        "Weather-resistant seals",
        "Multiple color options available",
      ],
      description:
        "Our premium insulated sectional door combines superior functionality with elegant design. Perfect for residential properties seeking both performance and curb appeal.",
      specifications: {
        Material: "Insulated Steel",
        Thickness: "40mm",
        "R-Value": "16.2",
        "Wind Load": "Up to 50 mph",
        Warranty: "10 years",
        Installation: "Professional included",
      },
      inStock: true,
      badge: "Best Seller",
    },

     {
      id: 2,
      name: "Premium Sectional Door - Insulated",
      category: "garage-doors",
      price: 1899,
      originalPrice: 2199,
      images: [
        "/images/p_1.png",
        "/images/p_1.png",
        "/images/p_1.png",
      ],
      rating: 4.9,
      reviews: 127,
      features: [
        "Insulated panels for energy efficiency",
        "Quiet operation with premium hardware",
        "10-year comprehensive warranty",
        "Professional installation included",
        "Weather-resistant seals",
        "Multiple color options available",
      ],
      description:
        "Our premium insulated sectional door combines superior functionality with elegant design. Perfect for residential properties seeking both performance and curb appeal.",
      specifications: {
        Material: "Insulated Steel",
        Thickness: "40mm",
        "R-Value": "16.2",
        "Wind Load": "Up to 50 mph",
        Warranty: "10 years",
        Installation: "Professional included",
      },
      inStock: true,
      badge: "Best Seller",
    },

     {
      id: 3,
      name: "Premium Sectional Door - Insulated",
      category: "garage-doors",
      price: 1899,
      originalPrice: 2199,
      images: [
        "/images/p_1.png",
        "/images/p_1.png",
        "/images/p_1.png",
      ],
      rating: 4.9,
      reviews: 127,
      features: [
        "Insulated panels for energy efficiency",
        "Quiet operation with premium hardware",
        "10-year comprehensive warranty",
        "Professional installation included",
        "Weather-resistant seals",
        "Multiple color options available",
      ],
      description:
        "Our premium insulated sectional door combines superior functionality with elegant design. Perfect for residential properties seeking both performance and curb appeal.",
      specifications: {
        Material: "Insulated Steel",
        Thickness: "40mm",
        "R-Value": "16.2",
        "Wind Load": "Up to 50 mph",
        Warranty: "10 years",
        Installation: "Professional included",
      },
      inStock: true,
      badge: "Best Seller",
    },

     {
      id: 4,
      name: "Premium Sectional Door - Insulated",
      category: "garage-doors",
      price: 1899,
      originalPrice: 2199,
      images: [
        "/images/p_1.png",
        "/images/p_1.png",
        "/images/p_1.png",
      ],
      rating: 4.9,
      reviews: 127,
      features: [
        "Insulated panels for energy efficiency",
        "Quiet operation with premium hardware",
        "10-year comprehensive warranty",
        "Professional installation included",
        "Weather-resistant seals",
        "Multiple color options available",
      ],
      description:
        "Our premium insulated sectional door combines superior functionality with elegant design. Perfect for residential properties seeking both performance and curb appeal.",
      specifications: {
        Material: "Insulated Steel",
        Thickness: "40mm",
        "R-Value": "16.2",
        "Wind Load": "Up to 50 mph",
        Warranty: "10 years",
        Installation: "Professional included",
      },
      inStock: true,
      badge: "Best Seller",
    },

     {
      id: 7,
      name: "Premium Sectional Door - Insulated",
      category: "garage-doors",
      price: 1899,
      originalPrice: 2199,
      images: [
        "/images/p_1.png",
        "/images/p_1.png",
        "/images/p_1.png",
      ],
      rating: 4.9,
      reviews: 127,
      features: [
        "Insulated panels for energy efficiency",
        "Quiet operation with premium hardware",
        "10-year comprehensive warranty",
        "Professional installation included",
        "Weather-resistant seals",
        "Multiple color options available",
      ],
      description:
        "Our premium insulated sectional door combines superior functionality with elegant design. Perfect for residential properties seeking both performance and curb appeal.",
      specifications: {
        Material: "Insulated Steel",
        Thickness: "40mm",
        "R-Value": "16.2",
        "Wind Load": "Up to 50 mph",
        Warranty: "10 years",
        Installation: "Professional included",
      },
      inStock: true,
      badge: "Best Seller",
    },

     {
      id: 8,
      name: "Premium Sectional Door - Insulated",
      category: "garage-doors",
      price: 1899,
      originalPrice: 2199,
      images: [
        "/images/p_1.png",
        "/images/p_1.png",
        "/images/p_1.png",
      ],
      rating: 4.9,
      reviews: 127,
      features: [
        "Insulated panels for energy efficiency",
        "Quiet operation with premium hardware",
        "10-year comprehensive warranty",
        "Professional installation included",
        "Weather-resistant seals",
        "Multiple color options available",
      ],
      description:
        "Our premium insulated sectional door combines superior functionality with elegant design. Perfect for residential properties seeking both performance and curb appeal.",
      specifications: {
        Material: "Insulated Steel",
        Thickness: "40mm",
        "R-Value": "16.2",
        "Wind Load": "Up to 50 mph",
        Warranty: "10 years",
        Installation: "Professional included",
      },
      inStock: true,
      badge: "Best Seller",
    },

     {
      id: 9,
      name: "Premium Sectional Door - Insulated",
      category: "garage-doors",
      price: 1899,
      originalPrice: 2199,
      images: [
        "/images/p_1.png",
        "/images/p_1.png",
        "/images/p_1.png",
      ],
      rating: 4.9,
      reviews: 127,
      features: [
        "Insulated panels for energy efficiency",
        "Quiet operation with premium hardware",
        "10-year comprehensive warranty",
        "Professional installation included",
        "Weather-resistant seals",
        "Multiple color options available",
      ],
      description:
        "Our premium insulated sectional door combines superior functionality with elegant design. Perfect for residential properties seeking both performance and curb appeal.",
      specifications: {
        Material: "Insulated Steel",
        Thickness: "40mm",
        "R-Value": "16.2",
        "Wind Load": "Up to 50 mph",
        Warranty: "10 years",
        Installation: "Professional included",
      },
      inStock: true,
      badge: "Best Seller",
    },

     {
      id: 10,
      name: "Premium Sectional Door - Insulated",
      category: "garage-doors",
      price: 1899,
      originalPrice: 2199,
      images: [
        "/images/p_1.png",
        "/images/p_1.png",
        "/images/p_1.png",
      ],
      rating: 4.9,
      reviews: 127,
      features: [
        "Insulated panels for energy efficiency",
        "Quiet operation with premium hardware",
        "10-year comprehensive warranty",
        "Professional installation included",
        "Weather-resistant seals",
        "Multiple color options available",
      ],
      description:
        "Our premium insulated sectional door combines superior functionality with elegant design. Perfect for residential properties seeking both performance and curb appeal.",
      specifications: {
        Material: "Insulated Steel",
        Thickness: "40mm",
        "R-Value": "16.2",
        "Wind Load": "Up to 50 mph",
        Warranty: "10 years",
        Installation: "Professional included",
      },
      inStock: true,
      badge: "Best Seller",
    },

     {
      id: 11,
      name: "Premium Sectional Door - Insulated",
      category: "garage-doors",
      price: 1899,
      originalPrice: 2199,
      images: [
        "/images/p_1.png",
        "/images/p_1.png",
        "/images/p_1.png",
      ],
      rating: 4.9,
      reviews: 127,
      features: [
        "Insulated panels for energy efficiency",
        "Quiet operation with premium hardware",
        "10-year comprehensive warranty",
        "Professional installation included",
        "Weather-resistant seals",
        "Multiple color options available",
      ],
      description:
        "Our premium insulated sectional door combines superior functionality with elegant design. Perfect for residential properties seeking both performance and curb appeal.",
      specifications: {
        Material: "Insulated Steel",
        Thickness: "40mm",
        "R-Value": "16.2",
        "Wind Load": "Up to 50 mph",
        Warranty: "10 years",
        Installation: "Professional included",
      },
      inStock: true,
      badge: "Best Seller",
    },

     {
      id: 12,
      name: "Premium Sectional Door - Insulated",
      category: "garage-doors",
      price: 1899,
      originalPrice: 2199,
      images: [
        "/images/p_1.png",
        "/images/p_1.png",
        "/images/p_1.png",
      ],
      rating: 4.9,
      reviews: 127,
      features: [
        "Insulated panels for energy efficiency",
        "Quiet operation with premium hardware",
        "10-year comprehensive warranty",
        "Professional installation included",
        "Weather-resistant seals",
        "Multiple color options available",
      ],
      description:
        "Our premium insulated sectional door combines superior functionality with elegant design. Perfect for residential properties seeking both performance and curb appeal.",
      specifications: {
        Material: "Insulated Steel",
        Thickness: "40mm",
        "R-Value": "16.2",
        "Wind Load": "Up to 50 mph",
        Warranty: "10 years",
        Installation: "Professional included",
      },
      inStock: true,
      badge: "Best Seller",
    },
    // Add more products as needed...
  ]

  return allProducts.find((p) => p.id === Number.parseInt(id))
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = getProduct(params.id)

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: `${product.name} - Roll-A-Door Specialist`,
    description: product.description,
  }
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-slate-600">
            <li>
              <Link href="/" className="hover:text-orange-600">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/products" className="hover:text-orange-600">
                Products
              </Link>
            </li>
            <li>/</li>
            <li className="text-slate-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
              {product.badge && (
                <Badge className="absolute top-4 left-4 bg-orange-600 text-white">{product.badge}</Badge>
              )}
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 2}`}
                  className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-75 transition-opacity"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium text-slate-900">{product.rating}</span>
                  <span className="text-slate-600">({product.reviews} reviews)</span>
                </div>
                <Badge variant="outline" className="text-green-700 border-green-300">
                  In Stock
                </Badge>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-4xl font-bold text-slate-900">${product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <>
                  <span className="text-2xl text-slate-500 line-through">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                  <Badge className="bg-red-100 text-red-700">
                    Save ${(product.originalPrice - product.price).toLocaleString()}
                  </Badge>
                </>
              )}
            </div>

            <p className="text-lg text-slate-600 leading-relaxed">{product.description}</p>

            {/* Features */}
            <div>
              <h3 className="font-bold text-slate-900 mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-slate-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Purchase Options */}
            <div className="space-y-4 p-6 bg-slate-50 rounded-xl">
              <div className="flex items-center gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4" />
                  <span>Free professional installation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>10-year warranty</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="flex-1 bg-orange-600 hover:bg-orange-700 text-white">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline" className="px-8 bg-transparent">
                  <Phone className="mr-2 h-4 w-4" />
                  Call for Quote
                </Button>
              </div>

              <p className="text-sm text-slate-600 text-center">
                Need help choosing?{" "}
                <Link href="/contact" className="text-orange-600 hover:underline">
                  Contact our experts
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Specifications</h2>
          <Card>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-slate-200 last:border-b-0">
                    <span className="font-medium text-slate-900">{key}:</span>
                    <span className="text-slate-600">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">You Might Also Like</h2>
          <div className="text-center">
            <Button variant="outline" asChild>
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
