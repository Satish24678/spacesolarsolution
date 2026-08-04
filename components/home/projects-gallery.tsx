"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { home } from "../../data/site-data.json"

type Project = {
  id: number
  title: string
  category: string
  image: string
}

export default function ProjectsGallery() {
  const [activeFilter, setActiveFilter] = useState("all")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // const projects: Project[] = [
  //   {
  //     id: 1,
  //     title: "Residential Solar Installation",
  //     category: "residential",
  //     image: "/placeholder.svg?height=400&width=600",
  //   },
  //   {
  //     id: 2,
  //     title: "Commercial Solar Farm",
  //     category: "commercial",
  //     image: "/placeholder.svg?height=400&width=600",
  //   },
  //   {
  //     id: 3,
  //     title: "Solar Panel Maintenance",
  //     category: "solar-panels",
  //     image: "/placeholder.svg?height=400&width=600",
  //   },
  //   {
  //     id: 4,
  //     title: "Rooftop Solar Array",
  //     category: "residential",
  //     image: "/placeholder.svg?height=400&width=600",
  //   },
  //   {
  //     id: 5,
  //     title: "Industrial Energy Solution",
  //     category: "commercial",
  //     image: "/placeholder.svg?height=400&width=600",
  //   },
  //   {
  //     id: 6,
  //     title: "Solar Panel Upgrade",
  //     category: "solar-panels",
  //     image: "/placeholder.svg?height=400&width=600",
  //   },
  // ]

  const projects = home.projects.items;

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const filters = [
    { value: "all", label: "All" },
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "solar-panels", label: "Solar Panels" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of completed solar and renewable energy projects, showcasing our expertise and
            commitment to sustainable solutions.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
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

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="group relative overflow-hidden rounded-lg shadow-md"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-lg">{project.title}</h3>
                <p className="text-gray-200 text-sm capitalize">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
