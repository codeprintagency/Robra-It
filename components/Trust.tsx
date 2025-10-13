"use client"

import { motion } from "framer-motion"
import { Shield, Award, Users2, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Users2,
    value: "500+",
    label: "IT Professionals Placed",
  },
  {
    icon: Award,
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    icon: TrendingUp,
    value: "10+",
    label: "Years Experience",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Vetted Candidates",
  },
]

export default function Trust() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Trusted by Forward-Thinking IT Teams Nationwide
          </h2>
          <p className="text-gray-100 text-xl max-w-2xl mx-auto font-medium">
            Delivering excellence in IT staffing with proven results
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group h-full"
              >
                <div className="h-full min-h-[280px] flex flex-col items-center justify-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white/15 group-hover:border-white/30 group-hover:shadow-2xl group-hover:-translate-y-1 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl flex-shrink-0">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl font-black text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-100 font-semibold tracking-wide leading-tight">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
