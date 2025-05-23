"use client"

import type React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

const FloatingNav: React.FC = () => {
  return (
    <motion.nav
      className="fixed top-[20px] left-0 right-0 my-0 mx-auto max-w-fit -translate-x-1/2 bg-white/90 rounded-full py-2.5 px-6 z-50 shadow-md border"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="flex items-center">
        <div className="relative h-8 w-12 mr-4">
          <Image
            src="/images/main_logo.png"
            alt="Ramam Enterprises Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Services
            </Link>
          </li>
          <li>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  )
}

export default FloatingNav

