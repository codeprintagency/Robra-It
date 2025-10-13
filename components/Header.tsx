"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-xl border-b border-gray-200"
          : "bg-white/95 backdrop-blur-md shadow-sm"
      }`}
    >
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center cursor-pointer"
          onClick={() => scrollToSection("hero")}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
        >
          <Image
            src="/robra-it.png"
            alt="Robra IT"
            width={260}
            height={104}
            priority
            className="h-[6.5rem] w-auto"
          />
        </motion.div>

        {/* Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <button
              onClick={() => scrollToSection("hero")}
              className="text-gray-700 hover:text-primary transition-all duration-200 font-semibold text-sm tracking-wide relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-primary transition-all duration-200 font-semibold text-sm tracking-wide relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-700 hover:text-primary transition-all duration-200 font-semibold text-sm tracking-wide relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 bg-gradient-to-r from-primary to-primary/90 text-white rounded-full font-semibold text-sm hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 border border-primary/20"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}
