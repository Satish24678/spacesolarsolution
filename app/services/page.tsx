import type { Metadata } from "next"
import PageHeader from "@/components/ui/page-header"
import ServicesList from "@/components/services/services-list"
import SolarModel from "@/components/services/solar-model"

export const metadata: Metadata = {
  title: "Services | SpaceSolarSolutions - Renewable Energy Solutions",
  description:
    "Explore our comprehensive range of solar and renewable energy services including installation, maintenance, and consulting.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Our Services" description="Comprehensive solar and renewable energy solutions" />
      <ServicesList />
      <SolarModel />
    </>
  )
}
