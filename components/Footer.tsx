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
          <div className="border-t border-gray-700 mb-12" />

          {/* Privacy policy section */}
          <div className="mb-12">
            <h3 className="text-white font-semibold mb-4 text-center text-lg">
              Privacy & SMS Policy
            </h3>
            <div className="text-xs text-gray-400 leading-relaxed space-y-4 bg-gray-800/50 rounded-xl p-6 border border-gray-800">
              <p>
                Robra IT values your privacy. We collect and use your information only to provide requested services. Your phone number and consent data are used solely for SMS communication related to your inquiry or services with us. Text messaging opt-in data and consent will not be sold or shared with third parties or affiliates for marketing purposes.
              </p>
              <p>
                Message frequency may vary. Message & data rates may apply. Reply STOP to cancel or HELP for help. For questions, contact{" "}
                <a
                  href="mailto:support@robrait.com"
                  className="text-primary hover:text-primary/80 transition-colors underline font-medium"
                >
                  support@robrait.com
                </a>
                .
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="text-center space-y-4 pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              © 2025 Robra IT. All Rights Reserved.
            </p>
            <p className="text-xs text-gray-500">
              Built with Next.js, TailwindCSS, and Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
