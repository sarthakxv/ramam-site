import { Building, Link } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Building className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose md:text-left">
            © {new Date().getFullYear()} Ramam Enterprises. All Rights Reserved.
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