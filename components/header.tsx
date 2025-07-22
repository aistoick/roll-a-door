"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import CartButton from "@/components/cart/cart-button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white p-3 rounded-xl mr-4 group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300">
                <div className="w-5 h-5 flex items-center justify-center">
                  <div className="text-2xl font-bold">R</div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight">ROLL A DOOR</h3>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-semibold text-sm tracking-wide transition-colors duration-200 relative group ${
                    isActive(item.href) ? "text-orange-600" : "text-slate-700 hover:text-orange-600"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-orange-600 transition-all duration-300 ${
                      isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <CartButton />
              <Button
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                asChild
              >
                {/* <Link href="/contact">Get Free Quote</Link> */}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6 text-slate-700" /> : <Menu className="h-6 w-6 text-slate-700" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-slate-200">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`font-semibold text-sm tracking-wide transition-colors duration-200 py-2 ${
                      isActive(item.href) ? "text-orange-600" : "text-slate-700 hover:text-orange-600"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <CartButton />
                <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full mt-4 py-3 font-semibold" asChild>
                  <Link href="/contact">Get Free Quote</Link>
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
