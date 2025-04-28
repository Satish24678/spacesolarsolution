"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

type Testimonial = {
  id: number
  name: string
  role: string
  company: string
  image: string
  content: string
  rating: number
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "John Smith",
      role: "Homeowner",
      company: "Residential Client",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The team at SpaceSolarSolutions was professional from start to finish. They explained everything clearly and installed our solar panels efficiently. We're now saving significantly on our energy bills!",
      rating: 5,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Operations Manager",
      company: "ABC Manufacturing",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Implementing solar energy in our manufacturing facility was a big decision. SpaceSolarSolutions guided us through the entire process and delivered exceptional results. Our energy costs have decreased by 40%.",
      rating: 5,
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Property Developer",
      company: "Green Living Estates",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "We've worked with SpaceSolarSolutions on multiple residential developments. Their expertise in solar technology and commitment to quality has made them our go-to partner for renewable energy solutions.",
      rating: 4,
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const currentTestimonial = testimonials[currentIndex]

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our solar solutions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="relative h-24 w-24 rounded-full overflow-hidden">
                <Image
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < currentTestimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-4 italic">"{currentTestimonial.content}"</blockquote>

                <div>
                  <p className="font-bold">{currentTestimonial.name}</p>
                  <p className="text-gray-600 text-sm">
                    {currentTestimonial.role}, {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex ? "w-6 bg-primary" : "w-2 bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
