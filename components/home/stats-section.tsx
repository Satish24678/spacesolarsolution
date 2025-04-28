"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Users, Building2, Sun, Award } from "lucide-react"

interface StatItemProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
  delay: number
}

function StatItem({ icon, value, label, suffix = "", delay }: StatItemProps) {
  const [count, setCount] = useState(0)
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: delay * 0.1 },
      })

      let startTime: number
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime
        const progressPercent = Math.min(progress / 2000, 1)
        const currentCount = Math.floor(progressPercent * value)

        setCount(currentCount)

        if (progressPercent < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame)
        }
      }
    }
  }, [isInView, value, controls, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg"
    >
      <div className="p-3 bg-primary/10 rounded-full mb-4">{icon}</div>
      <h3 className="text-4xl font-bold text-primary mb-2">
        {count}
        {suffix}
      </h3>
      <p className="text-gray-600 text-center">{label}</p>
    </motion.div>
  )
}

interface StatsSectionProps {
  data: Array<{
    value: number
    label: string
    suffix?: string
  }>
}

export default function StatsSection({ data }: StatsSectionProps) {
  const icons = [
    <Users key="users" className="h-8 w-8 text-primary" />,
    <Building2 key="building" className="h-8 w-8 text-primary" />,
    <Sun key="sun" className="h-8 w-8 text-primary" />,
    <Award key="award" className="h-8 w-8 text-primary" />,
  ]

  const stats = data.map((stat, index) => ({
    ...stat,
    icon: icons[index % icons.length],
    delay: index,
  }))

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={stat.delay}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
