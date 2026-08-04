"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { CheckCircle } from "lucide-react"

export default function CompanyOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    "Certified solar energy professionals",
    "High-quality, durable solar panels",
    "Customized solutions for every client",
    "Comprehensive after-sales support",
    "Transparent pricing and no hidden fees",
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At Space Solar Solution, we are committed to accelerating the world's transition to sustainable energy. Founded in
              2013, we have been at the forefront of the renewable energy revolution, providing innovative solar
              solutions to homes and businesses across the country.
            </p>
            {/* <p className="text-gray-700 mb-6">
              Our mission is to make clean, renewable energy accessible to everyone. We believe that by harnessing the
              power of the sun, we can create a more sustainable future for generations to come.
            </p> */}

            <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/residential_solar_installation.jpg"
              alt="Solar panel installation"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
