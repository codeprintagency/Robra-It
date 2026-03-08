"use client"

import { motion } from "framer-motion"
import { Users2, Target, Wrench } from "lucide-react"

const differentiators = [
  {
    icon: Users2,
    title: "Right-Sized Teams",
    description:
      "We build teams around the actual needs of each engagement. That means the right level of support, the right expertise, and a structure that fits the work.",
  },
  {
    icon: Target,
    title: "Outcome Accountability",
    description:
      "We focus on clear milestones, measurable progress, and results that matter to your business. Every engagement is managed with transparency and accountability from start to finish.",
  },
  {
    icon: Wrench,
    title: "Embedded Expertise",
    description:
      "Our professionals work as a true extension of your team. We integrate into your environment, collaborate closely with stakeholders, and help move work forward in a practical way.",
  },
]

export default function RobraDifference() {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-40 left-1/4 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full text-primary text-xs sm:text-sm font-bold mb-4 sm:mb-6 border border-primary/20 shadow-md">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Why Robra IT
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-[1.1]">
            A more focused approach to{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              enterprise IT support
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium px-4">
            We align the right expertise to the right scope so your team gets the support it needs without unnecessary complexity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {differentiators.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative border-2 border-gray-200 bg-white h-full rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 group p-6 sm:p-8">
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
