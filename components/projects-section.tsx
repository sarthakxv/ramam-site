import { fadeInUp } from "@/lib/animation"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import WorksCarousel from "./works-carousal"
import { Button } from "./ui/button"

export default function ProjectsSection() {
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
          <Button variant="outline" size="lg" className="btn-primary-outline">
            Request a Consultation
          </Button>
        </div>
      </div>
    </motion.section>
  )
}