"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Rocket,
  Settings,
  Link2,
  Database,
  BrainCircuit,
  Compass,
} from "lucide-react"

const practices = [
  {
    icon: Rocket,
    title: "Professional Project Services",
    description:
      "Whether you need a specialized consultant or a full project team, we provide support that matches your requirements. From planning through execution, our professionals help deliver initiatives across platforms such as Workday, SAP, Oracle, Salesforce, ServiceNow, and other enterprise systems.",
  },
  {
    icon: Settings,
    title: "Application Managed Services",
    description:
      "We provide ongoing support, optimization, and operational management for enterprise applications after go live. Our team helps organizations improve performance, maintain stability, and get more value from platforms such as Workday, SAP, Oracle, Salesforce, and others.",
  },
  {
    icon: Link2,
    title: "Integration Solutions",
    description:
      "We design, build, and support integrations that connect critical systems across your business. From API strategy to middleware and ongoing management, we help create reliable connectivity across your environment.",
  },
  {
    icon: Database,
    title: "Data and Reporting Services",
    description:
      "We help organizations turn fragmented data into clear reporting and useful insight. Our team supports modern data strategy, architecture, engineering, and visualization across platforms such as Databricks, Power BI, Alteryx, and more.",
  },
  {
    icon: BrainCircuit,
    title: "AI Advisory and Governance",
    description:
      "We help organizations approach AI with structure and accountability. From readiness assessments and governance frameworks to implementation support, we guide practical adoption that aligns with business and compliance needs.",
  },
  {
    icon: Compass,
    title: "Advisory and Transformation",
    description:
      "We support transformation efforts with strategic advisory, roadmapping, PMO support, governance, technology rationalization, and M&A execution support. Our work is grounded in business priorities and built for real-world delivery.",
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/15 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-primary text-xs sm:text-sm font-bold mb-4 sm:mb-6 border border-primary/20 shadow-md">
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            Our Practice Areas
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-[1.1]">
            Enterprise IT services with{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              practical execution
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium px-4">
            We support the initiatives that matter most to enterprise IT teams with
            focused expertise, clear delivery, and flexible engagement models.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {practices.map((practice, index) => {
            const Icon = practice.icon
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
                      <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {practice.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {practice.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
