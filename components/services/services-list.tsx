"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { CheckCircle } from "lucide-react"

interface Service {
  id: number
  title: string
  description: string
  features: string[]
  image: string
}

export default function ServicesList() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const services: Service[] = [
    {
      id: 1,
      title: "Solar Panel Installation",
      description:
        "Our professional team handles the entire solar panel installation process, from initial assessment to final setup. We use high-quality panels and equipment to ensure optimal performance and longevity.",
      features: [
        "Comprehensive site assessment",
        "Custom system design",
        "Professional installation",
        "Permits and paperwork handling",
      ],
      image: "/rooftop_solar_array.jpg",
    },
    {
      id: 2,
      title: "Solar Mounting Structures Supply",
      description:
        "Regular maintenance is essential for keeping your solar system running efficiently. Our maintenance services include thorough inspections, cleaning, and repairs to maximize your system's lifespan and performance.",
      features: [
        "Regular panel cleaning",
        "System performance monitoring",
        "Inverter maintenance",
        "Wiring and connection checks"
      ],
      image: "/solar-structues.png",
    },
    {
      id: 3,
      title: "Solar Panel Cleaning & Maintenance",
      description:
        "Our energy experts provide personalized consultations to help you understand your energy needs and how solar can benefit your specific situation. We analyze your current energy usage and recommend the best solutions.",
      features: [
        "Energy usage analysis",
        "ROI and savings calculations",
        "Available incentives and rebates",
        "Financing options",
        "Custom solution recommendations",
      ],
      image: "/solar_panel_maintenance.jpg",
    },
    {
      id: 4,
      title: "Solar System Inspection & Repairs",
      description:
        "Transform your home with our residential solar solutions. We design and install custom solar systems that reduce your energy bills and carbon footprint while increasing your property value.",
      features: [
        "Rooftop solar panel installation",
        "Battery storage solutions",
        "Smart home integration",
        "Net metering setup",
        "Monitoring systems",
      ],
      image: "/solar-system-inspection.jpg",
    },
    {
      id: 5,
      title: "Annual Maintenance Contracts (AMC)",
      description:
        "Our commercial solar solutions help businesses reduce operating costs and demonstrate their commitment to sustainability. We handle large-scale installations for offices, warehouses, and industrial facilities.",
      features: [
        "Large-scale system design",
        "Project management",
        "Business incentive applications",
        "Power purchase agreements",
        "Commercial energy storage",
      ],
      image: "/amc.png",
    },
  ]

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive solar and renewable energy services tailored to meet the unique needs of residential
            and commercial clients.
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`relative h-[300px] rounded-lg overflow-hidden shadow-lg ${
                  index % 2 === 1 ? "md:col-start-1" : ""
                }`}
              >
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
