import { Phone, ArrowRight, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-600/20 to-orange-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-900/50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Don't let a broken garage door disrupt your day. Contact us today for expert service and quality solutions
            for all your garage door needs.
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
              asChild
            >
              <Link href="/contact">
                Request Quote
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* CTA Cards */}
   

      {/* Main CTA */}
    </section>
  )
}
