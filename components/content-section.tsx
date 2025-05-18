import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, MapPin } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { fadeInUp } from "@/lib/animation"
import GoogleMapsEmbed from "./common/google-maps-embeed"
import { META } from "@/lib/meta"

export default function ContactSection() {
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
                <p>{META.contacts.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p>{META.contacts.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p>{META.contacts.address}</p>
              </div>
            </div>
            <GoogleMapsEmbed />
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
