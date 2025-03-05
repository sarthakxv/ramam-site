"use client"

import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const FloatingNav: React.FC = () => {
  return (
    <motion.nav
      className="floating-nav"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <ul className="flex space-x-6">
        <li>
          <Link href="#home" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
        </li>
        <li>
          <Link href="#services" className="text-sm font-medium hover:text-primary">
            Services
          </Link>
        </li>
        <li>
          <Link href="#projects" className="text-sm font-medium hover:text-primary">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </li>
      </ul>
    </motion.nav>
  )
}

export default FloatingNav

