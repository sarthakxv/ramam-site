"use client"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { useEffect } from "react"

export default function AboutSection() {
  const controls = useAnimation()
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

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
      className="py-16 md:py-24 bg-muted"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-md">
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
              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-primary">15+</h3>
                <p className="text-sm text-center">Years of Experience</p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-primary">200+</h3>
                <p className="text-sm text-center">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}