import Hero from "@/components/home/hero"
import Services from "@/components/home/services"
import WhyChooseUs from "@/components/home/why-choose-us"
import RecentProjects from "@/components/home/recent-projects"
import Testimonials from "@/components/home/testimonials"
import CallToAction from "@/components/home/call-to-action"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <RecentProjects />
      <Testimonials />
      <CallToAction />
    </>
  )
}
