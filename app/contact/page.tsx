import type { Metadata } from "next"
import PageHeader from "@/components/ui/page-header"
import ContactDetails from "@/components/contact/contact-details"
import ContactFormFull from "@/components/contact/contact-form-full"
import MapSection from "@/components/contact/map-section"

export const metadata: Metadata = {
  title: "Contact Us | SpaceSolarSolutions - Get in Touch",
  description:
    "Contact SpaceSolarSolutions for solar energy solutions, free quotes, and consultations on renewable energy projects.",
}

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" description="Get in touch for a free consultation" />
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        <ContactDetails />
        <ContactFormFull />
      </div>
      <MapSection />
    </>
  )
}
