"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ClipboardList, Search, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Define Your Needs",
    description:
      "Tell us about your project requirements, team gaps, and technical skills needed. We'll work with you to understand your unique challenges.",
  },
  {
    icon: Search,
    number: "02",
    title: "We Find Top Talent",
    description:
      "Our expert recruiters tap into our extensive network to identify and vet candidates that match your criteria perfectly.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Onboard with Confidence",
    description:
      "We handle the paperwork and logistics while you focus on integrating your new team members and hitting the ground running.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-40 left-1/4 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent/15 to-accent/5 rounded-full text-accent text-sm font-bold mb-6 border border-accent/30 shadow-md">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            Our Process
          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.1]">
            How It <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
            Three simple steps to building your dream IT team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="relative border-2 border-gray-200 bg-white h-full rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 group">
                  {/* Number background */}
                  <div className="absolute top-0 right-0 text-[140px] font-black text-gray-50 leading-none select-none group-hover:text-primary/5 transition-colors duration-300">
                    {step.number}
                  </div>

                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <span className="text-sm font-bold text-primary px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20">
                        Step {step.number}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-gray-600 leading-relaxed text-base">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Connector arrow (hidden on mobile, last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-gray-300">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
