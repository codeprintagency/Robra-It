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
      "Whether you need a single multi-functional consultant or a full project team, we scale to fit. From roadmapping through execution, our specialists deliver results across any technology stack, supporting both domestic and global rollouts.",
  },
  {
    icon: Settings,
    title: "Application Managed Services",
    description:
      "Ongoing management, optimization, and support of enterprise applications post-go-live across Workday, SAP, Oracle, Salesforce, and more.",
  },
  {
    icon: Link2,
    title: "Integration Solutions",
    description:
      "Full-lifecycle integration architecture, build, and management across your enterprise. API design, middleware orchestration, and platform-agnostic connectivity.",
  },
  {
    icon: Database,
    title: "Data & Reporting Services",
    description:
      "Modern data strategy, architecture, engineering, and reporting delivery. From raw data to governed insight using Databricks, Power BI, Alteryx, and more.",
  },
  {
    icon: BrainCircuit,
    title: "AI Advisory & Governance",
    description:
      "Structured AI adoption from strategy through deployment, with governance that works in practice. Readiness assessments, framework design, and hands-on execution support.",
  },
  {
    icon: Compass,
    title: "Advisory & Transformation",
    description:
      "OCM advisory, roadmapping, PMO & governance, technology rationalization, and M&A support for domestic and global initiatives. Tech-agnostic, outcome-driven, and built to move.",
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
            Enterprise IT.{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Executed Right.
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium px-4">
            Six practice areas built around what enterprise IT teams actually need.
            Tech-agnostic roadmapping and execution, lean teams, and measurable outcomes.
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
                      <Icon className="w-8 h-8 text-white" />
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
