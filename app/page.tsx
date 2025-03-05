"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Building,
  Hammer,
  Sun,
  Waves,
  Droplet,
  Shield,
  Lightbulb,
  Camera,
  Wrench,
  DoorOpenIcon as Curtains,
  WallpaperIcon as Wall,
  PenTool,
} from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import HeroSection from "@/components/HeroSection"
import WorksCarousel from "@/components/WorksCarousel"
import FloatingNav from "@/components/FloatingNav"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

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

function AboutSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUp}
      id="about"
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=300&width=500"
              alt="Ramam Enterprises team or project"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">About Ramam Enterprises</h2>
            <p>
              Ramam Enterprises, founded in 2010, is a premier construction and services company dedicated to delivering
              top-quality solutions for residential and commercial projects. With a focus on innovation and customer
              satisfaction, we bring construction, design, and maintenance expertise to every project.
            </p>
            <p>
              Our team of skilled professionals is committed to excellence in every aspect of our work. We pride
              ourselves on our attention to detail, use of quality materials, and adherence to timelines and budgets. At
              Ramam Enterprises, we don't just build structures; we build relationships based on trust and reliability.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-bold">15+</h3>
                <p className="text-sm text-center">Years of Experience</p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-bold">200+</h3>
                <p className="text-sm text-center">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

function ServicesSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  const services = [
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      title: "Building Construction Material",
      description: "High-quality materials for all your construction needs.",
    },
    {
      icon: <Hammer className="h-10 w-10 text-primary" />,
      title: "Construction Work with Material",
      description: "End-to-end construction solutions, including materials and labor.",
    },
    {
      icon: <Sun className="h-10 w-10 text-primary" />,
      title: "Solar Panels (Maintenance)",
      description: "Installation and maintenance of solar panel systems for sustainable energy.",
    },
    {
      icon: <Waves className="h-10 w-10 text-primary" />,
      title: "Swimming Pool Manufacturers & Design",
      description: "Custom-designed and built swimming pools for residential and commercial spaces.",
    },
    {
      icon: <Droplet className="h-10 w-10 text-primary" />,
      title: "HTP & ETP (Water Treatment Plant)",
      description: "Expertise in designing and installing water treatment plants for industrial and residential use.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Waterproofing Works",
      description: "Durable waterproofing solutions to protect your buildings from water damage.",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Automation of Room Lights & Smart Homes",
      description: "Advanced automation systems for lighting and smart home integration.",
    },
    {
      icon: <Camera className="h-10 w-10 text-primary" />,
      title: "CCTV Camera Fittings",
      description: "Professional installation of CCTV systems for security and surveillance.",
    },
    {
      icon: <Wrench className="h-10 w-10 text-primary" />,
      title: "Service Providers",
      description: "On-demand skilled professionals for plumbing, electrical, and carpentry services.",
    },
    {
      icon: <Curtains className="h-10 w-10 text-primary" />,
      title: "Curtain Fittings",
      description: "Elegant and functional curtain installation for homes and offices.",
    },
    {
      icon: <Wall className="h-10 w-10 text-primary" />,
      title: "Partition Wall Designing Work",
      description: "Creative and practical partition wall designs for space optimization.",
    },
    {
      icon: <PenTool className="h-10 w-10 text-primary" />,
      title: "Drawings 2D & 3D with Planning",
      description: "Detailed 2D and 3D architectural drawings and project planning for precision construction.",
    },
  ]

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUp}
      id="services"
      className="py-16 md:py-24"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Our Services</h2>
          <p className="max-w-[700px] md:text-lg">
            We offer a comprehensive range of construction and related services to meet all your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              variants={fadeInUp}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function ProjectsSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUp}
      id="projects"
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Our Work</h2>
          <p className="max-w-[700px] md:text-lg">
            Explore some of our recent projects that showcase our expertise and quality workmanship.
          </p>
        </div>
        <div className="mt-12">
          <WorksCarousel />
        </div>
        <div className="flex justify-center mt-8">
          <Button variant="outline" size="lg" className="cta-button-outline">
            Request a Consultation
          </Button>
        </div>
      </div>
    </motion.section>
  )
}

function ContactSection() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUp}
      id="contact"
      className="py-16 md:py-24"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">Get in Touch</h2>
          <p className="max-w-[700px] md:text-lg">
            Have a project in mind? Contact us today for a free consultation and quote.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 mt-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p>contact@ramamenterprises.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p>123 Construction Avenue, Indore, Madhya Pradesh, India</p>
              </div>
            </div>
            <div className="h-[300px] w-full rounded-lg bg-gray-100 flex items-center justify-center">
              <p>Google Maps Embed Placeholder</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Name
                  </label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Phone
                </label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message
                </label>
                <Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" />
              </div>
            </div>
            <Button className="w-full cta-button" size="lg">
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Building className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose md:text-left">
            © 2025 Ramam Enterprises. All Rights Reserved.
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#home" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="#services" className="text-sm font-medium hover:text-primary">
            Services
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-primary">
            Projects
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}

