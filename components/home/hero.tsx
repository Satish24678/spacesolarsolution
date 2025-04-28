"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"

interface HeroProps {
  data: {
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
    image: string
  }
}

export default function Hero({ data }: HeroProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  }

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.image || "/placeholder.svg"}
          alt="Solar panels with blue sky"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="max-w-3xl text-white"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            {data.title}
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl mb-8 text-gray-200">
            {data.description}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact">{data.primaryCta}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link href="/services">{data.secondaryCta}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
