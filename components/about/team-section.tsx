"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Linkedin, Twitter } from "lucide-react"

interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  social: {
    linkedin?: string
    twitter?: string
  }
}

export default function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const team: TeamMember[] = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      bio: "With over 15 years of experience in renewable energy, Alex leads our company's vision and strategy.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Sarah Chen",
      role: "Technical Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Sarah oversees all technical aspects of our solar installations, ensuring the highest quality standards.",
      social: {
        linkedin: "#",
      },
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Operations",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Michael manages our day-to-day operations, focusing on efficiency and customer satisfaction.",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Emily Patel",
      role: "Customer Relations Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Emily ensures that every client receives personalized attention and exceptional service.",
      social: {
        linkedin: "#",
      },
    },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of experts is passionate about renewable energy and committed to providing the best solar solutions
            for our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <div className="relative h-64 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-2">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5 text-gray-700" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <Twitter className="h-5 w-5 text-gray-700" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
