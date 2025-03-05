"use client"

import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const works = [
  { id: 1, image: "/placeholder.svg?height=400&width=600", title: "Residential Project" },
  { id: 2, image: "/placeholder.svg?height=400&width=600", title: "Commercial Complex" },
  { id: 3, image: "/placeholder.svg?height=400&width=600", title: "Infrastructure Development" },
  { id: 4, image: "/placeholder.svg?height=400&width=600", title: "Renovation Work" },
]

const WorksCarousel: React.FC = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 1,
        spacing: 15,
      },
      breakpoints: {
        "(min-width: 768px)": {
          slides: { perView: 2, spacing: 15 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 3, spacing: 15 },
        },
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 2000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ],
  )

  return (
    <motion.div
      ref={sliderRef}
      className="keen-slider"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {works.map((work) => (
        <div key={work.id} className="keen-slider__slide">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image src={work.image || "/placeholder.svg"} alt={work.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-start p-4">
              <h3 className="text-white text-xl font-semibold">{work.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  )
}

export default WorksCarousel

