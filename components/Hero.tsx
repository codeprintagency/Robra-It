"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50/30 to-white"
    >
      {/* Enhanced gradient background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-gradient-to-br from-primary/15 via-primary/10 to-transparent rounded-full filter blur-3xl opacity-70"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-accent/20 via-accent/10 to-transparent rounded-full filter blur-3xl opacity-60"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 15, 0],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full filter blur-2xl opacity-40"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-16 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-4 sm:mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-full text-primary text-xs sm:text-sm font-bold border border-primary/20 shadow-lg backdrop-blur-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Premium IT Staffing Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-6 sm:mb-8 leading-[1.1] tracking-tight px-2"
          >
            Empowering Businesses with{" "}
            <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent drop-shadow-sm">
              World-Class IT Talent
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto font-medium px-2"
          >
            Robra IT connects companies with top-tier technology professionals —
            delivering flexible staffing solutions for your projects, teams, and
            long-term growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center px-4"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 group bg-gradient-to-r from-primary to-primary/90 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300 font-semibold"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => {
                const element = document.getElementById("about")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 border-2 border-gray-300 hover:border-primary hover:text-primary hover:bg-primary/5 hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        onClick={() => {
          const element = document.getElementById("about")
          element?.scrollIntoView({ behavior: "smooth" })
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-500 group-hover:text-primary transition-colors duration-300"
        >
          <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
          <div className="p-2 rounded-full border-2 border-gray-300 group-hover:border-primary group-hover:shadow-lg transition-all duration-300">
            <ChevronDown className="w-4 h-4" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
