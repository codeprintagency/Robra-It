"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Cog, Globe } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Contract Staffing",
    description:
      "Flexible IT professionals for project-based needs. Scale your team up or down with expert contractors ready to deliver results.",
  },
  {
    icon: Target,
    title: "Direct Hire",
    description:
      "Find your next full-time team member. We connect you with top-tier permanent talent that aligns with your company culture and goals.",
  },
  {
    icon: Cog,
    title: "Managed Services",
    description:
      "End-to-end IT solutions managed by our expert teams. Focus on your core business while we handle your technology infrastructure.",
  },
  {
    icon: Globe,
    title: "Remote & On-Site Talent",
    description:
      "Access skilled professionals anywhere. Whether you need remote expertise or on-site presence, we have you covered.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/15 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-primary text-sm font-bold mb-6 border border-primary/20 shadow-md">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              Our Services
            </div>

            <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.1]">
              Modern IT Staffing.{" "}
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Simplified.</span>
            </h2>

            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
              We specialize in connecting businesses with exceptional IT talent
              across multiple engagement models. Our approach combines cutting-edge
              recruitment technology with deep industry expertise.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/80 border border-gray-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-md">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1.5 text-lg">Vetted Professionals</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Every candidate undergoes rigorous technical and cultural assessment</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/80 border border-gray-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-md">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1.5 text-lg">Fast Turnaround</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Access qualified candidates within days, not weeks</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/80 border border-gray-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 shadow-md">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1.5 text-lg">Flexible Engagement</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">From short-term contracts to permanent placements</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Service cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-2 border-gray-200 bg-white hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300 group">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
