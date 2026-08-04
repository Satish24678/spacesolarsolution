"use client"

import type React from "react"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, SunMedium, Wrench, LineChart, Home, Building, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
    >
      <div className="p-3 bg-primary/10 rounded-full inline-block mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href="/services" className="inline-flex items-center text-primary font-medium group-hover:underline">
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  )
}

interface ServicesOverviewProps {
  data: {
    title: string
    description: string
    items: Array<{
      title: string
      description: string
    }>
  }
}

export default function ServicesOverview({ data }: ServicesOverviewProps) {
  const icons = [
    <SunMedium key="sun" className="h-6 w-6 text-primary" />,
    <Wrench key="wrench" className="h-6 w-6 text-primary" />,
    <LineChart key="chart" className="h-6 w-6 text-primary" />,
    <Home key="home" className="h-6 w-6 text-primary" />,
    <Building key="building" className="h-6 w-6 text-primary" />,
    <Lightbulb key="lightbulb" className="h-6 w-6 text-primary" />,
  ]

  const services = data.items.map((item, index) => ({
    ...item,
    icon: icons[index % icons.length],
  }))

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{data.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{data.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
