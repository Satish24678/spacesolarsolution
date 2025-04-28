"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

type Project = {
  id: number
  title: string
  description: string
  category: string
  image: string
  location: string
  date: string
}

export default function ProjectsFilter() {
  const [activeFilter, setActiveFilter] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Home Solar Installation",
      description:
        "A 10kW solar system installation for a modern residential property, providing 100% of the home's energy needs.",
      category: "residential",
      image: "/placeholder.svg?height=400&width=600",
      location: "Lucknow, India",
      date: "January 2023",
    },
    {
      id: 2,
      title: "Commercial Office Building",
      description: "Installation of 50kW solar array on a commercial office building, reducing energy costs by 40%.",
      category: "commercial",
      image: "/placeholder.svg?height=400&width=600",
      location: "Delhi, India",
      date: "March 2023",
    },
    {
      id: 3,
      title: "Solar Panel Maintenance Project",
      description:
        "Comprehensive maintenance and optimization of an existing solar panel system to improve efficiency.",
      category: "solar-panels",
      image: "/placeholder.svg?height=400&width=600",
      location: "Mumbai, India",
      date: "April 2023",
    },
    {
      id: 4,
      title: "Residential Community Solar",
      description:
        "A shared solar installation for a community of 15 homes, providing clean energy to multiple families.",
      category: "residential",
      image: "/placeholder.svg?height=400&width=600",
      location: "Bangalore, India",
      date: "June 2023",
    },
    {
      id: 5,
      title: "Manufacturing Facility",
      description:
        "Large-scale 200kW solar installation for a manufacturing facility, significantly reducing operational costs.",
      category: "commercial",
      image: "/placeholder.svg?height=400&width=600",
      location: "Chennai, India",
      date: "August 2023",
    },
    {
      id: 6,
      title: "Solar Panel Upgrade",
      description: "Upgrading outdated solar panels to high-efficiency models, increasing energy production by 30%.",
      category: "solar-panels",
      image: "/placeholder.svg?height=400&width=600",
      location: "Hyderabad, India",
      date: "October 2023",
    },
    {
      id: 7,
      title: "Luxury Villa Installation",
      description: "Custom solar solution for a luxury villa with integrated battery storage and smart home controls.",
      category: "residential",
      image: "/placeholder.svg?height=400&width=600",
      location: "Goa, India",
      date: "November 2023",
    },
    {
      id: 8,
      title: "Shopping Mall Solar Project",
      description:
        "Comprehensive solar installation for a large shopping mall, covering 60% of their energy requirements.",
      category: "commercial",
      image: "/placeholder.svg?height=400&width=600",
      location: "Pune, India",
      date: "December 2023",
    },
    {
      id: 9,
      title: "Solar Panel Cleaning Service",
      description: "Professional cleaning and maintenance of solar panels for a large residential community.",
      category: "solar-panels",
      image: "/placeholder.svg?height=400&width=600",
      location: "Kolkata, India",
      date: "February 2024",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const filters = [
    { value: "all", label: "All Projects" },
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "solar-panels", label: "Solar Panels" },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.value)}
                className={activeFilter === filter.value ? "bg-primary" : ""}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{project.location}</span>
                    <span>{project.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
