import { motion } from "framer-motion"

import { useEffect } from "react"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Building,
  Hammer, Sun, Waves, Droplet, Shield, Lightbulb, Camera, Wrench, PenTool,   DoorOpenIcon as Curtains,
  WallpaperIcon as Wall, } from "lucide-react"
import { fadeInUp } from "@/lib/animation"

export default function ServicesSection() {
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