"use client"

import type React from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { COPY } from "@/lib/meta"

const HeroSection: React.FC = () => {
  // Respect user “prefers-reduced-motion”
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-hero"
    >
      {/* Background video */}
      <video
        autoPlay={!reduceMotion}
        loop
        muted
        playsInline
        className="video-background"
        aria-label="Construction montage"
      >
        <source src="/construction-video.mp4" type="video/mp4" />
      </video>

      {/* Dark scrim for contrast */}
      <div className="overlay" />

      {/* Content */}
      <div className="container px-4 md:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {COPY.MAIN_SECTION.title}
          </motion.h1>

          <motion.p
            className="text-xl text-gray-100 mb-10"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {COPY.MAIN_SECTION.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="btn-primary"
            >
              <Link href="#contact" aria-label="Contact us for a quote">
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="btn-outline"
            >
              <Link href="#services" aria-label="See our construction services">
                Our Services
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
