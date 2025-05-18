"use client"

// Component Imports
import Footer from "@/components/common/footer"
// Section Imports
import HeroSection from "@/components/hero-section"
import FloatingNav from "@/components/common/floating-nav"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/content-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <FloatingNav />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}