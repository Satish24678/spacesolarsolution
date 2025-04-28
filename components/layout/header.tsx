"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import siteData from "@/data/site-data.json"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = siteData.navigation

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-primary text-white py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 md:mb-0">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{siteData.company.location}</span>
            </div>
            {/* Only show business hours on medium screens and up */}
            <div className="hidden md:flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{siteData.company.workingHours}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>{siteData.company.phone}</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Link href={siteData.company.socialMedia.facebook} aria-label="Facebook">
                <Facebook className="h-4 w-4 hover:text-accent transition-colors" />
              </Link>
              <Link href={siteData.company.socialMedia.twitter} aria-label="Twitter">
                <Twitter className="h-4 w-4 hover:text-accent transition-colors" />
              </Link>
              <Link href={siteData.company.socialMedia.linkedin} aria-label="LinkedIn">
                <Linkedin className="h-4 w-4 hover:text-accent transition-colors" />
              </Link>
              <Link href={siteData.company.socialMedia.instagram} aria-label="Instagram">
                <Instagram className="h-4 w-4 hover:text-accent transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <motion.nav
        className={cn(
          "py-4 w-full z-50 transition-all duration-300",
          isScrolled ? "sticky top-0 bg-white shadow-md" : "bg-white/90",
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-48 flex items-center">
              <Image
                src="/FinalLogo.jpg"
                alt={`${siteData.company.name} Logo`}
                width={64}
                height={20}
                className="object-contain"
              />
              <div className="flex justify-center flex-col items-center">
                <span className="text-xl font-bold text-[#33c167]">SpaceSolarSolutions</span>
                <span className="text-[#33c167]">Make India Green</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="ml-4 bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact">Get A Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white"
            >
              <div className="container mx-auto py-4 flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Button asChild className="mt-2 bg-primary hover:bg-primary/90 text-white">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get A Quote
                  </Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  )
}
