import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import siteData from "@/data/site-data.json"

export default function Footer() {
  const { company, footer } = siteData

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="relative h-12 w-48 flex flex-row gap-2">
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
            <p className="text-gray-400 mb-4">{footer.description}</p>
            <div className="flex space-x-3">
              <Link
                href={company.socialMedia.facebook}
                className="p-2 bg-primary/20 rounded-full hover:bg-primary/40 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href={company.socialMedia.twitter}
                className="p-2 bg-primary/20 rounded-full hover:bg-primary/40 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href={company.socialMedia.linkedin}
                className="p-2 bg-primary/20 rounded-full hover:bg-primary/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href={company.socialMedia.instagram}
                className="p-2 bg-primary/20 rounded-full hover:bg-primary/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footer.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {footer.services.map((service, index) => (
                <li key={index}>
                  <Link href={service.href} className="text-gray-400 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 text-primary" />
                <span className="text-gray-400">{company.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span className="text-gray-400">{company.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span className="text-gray-400">{company.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">{footer.copyright}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {footer.legalLinks.map((link, index) => (
              <Link key={index} href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
