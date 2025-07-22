import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock } from "lucide-react"

export default function Footer() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ]

  const services = [
    "Garage Door Installation",
    "Repair & Maintenance",
    "Remote Control Systems",
    "Emergency Service",
    "Safety Inspections",
    "Spring Replacement",
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-3 rounded-xl mr-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <div className="text-2xl font-bold">R</div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">ROLL-A-DOOR</h3>
                <p className="text-orange-400 font-semibold">SPECIALIST</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Professional garage door services with over 15 years of experience. Quality workmanship and reliable
              service you can trust.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-orange-600 transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-orange-600 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-lg hover:bg-orange-600 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-orange-400 transition-colors duration-200 flex items-center"
                  >
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-slate-300 text-sm flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-400" />
                <span className="text-slate-300 font-medium">0432 645 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-400" />
                <span className="text-slate-300">rolladoor@live.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-400" />
                <span className="text-slate-300">Melbourne & Suburbs</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-orange-400" />
                <span className="text-slate-300">24/7 Emergency Service</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl">
              <p className="text-white font-bold mb-1">Emergency Service</p>
              <p className="text-orange-100 text-sm">Available 24/7 for urgent repairs</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© 2024 Roll-A-Door Specialist. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
