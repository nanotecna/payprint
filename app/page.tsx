import { TopBar } from "@/components/payprint/top-bar"
import { Navbar } from "@/components/payprint/navbar"
import { HeroSection } from "@/components/payprint/hero-section"
import { AboutSection } from "@/components/payprint/about-section"
import { ServicesSection } from "@/components/payprint/services-section"
import { FeaturesSection } from "@/components/payprint/features-section"
import { SegmentsSection } from "@/components/payprint/segments-section"
import { ContactSection } from "@/components/payprint/contact-section"
import { Footer } from "@/components/payprint/footer"

export default function Home() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <SegmentsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
