"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      <div className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Company name and tagline */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Robra IT</h3>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Connecting businesses with world-class IT talent for flexible staffing solutions
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mb-8" />

          {/* Bottom bar */}
          <div className="text-center space-y-4 pt-8 border-t border-gray-700">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400">
              <p>© 2025 Robra IT. All Rights Reserved.</p>
              <span className="hidden sm:inline text-gray-600">•</span>
              <a
                href="/privacy-policy"
                className="text-white hover:text-gray-300 transition-colors underline font-medium"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
