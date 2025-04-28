import type { Metadata } from "next"
import PageHeader from "@/components/ui/page-header"
import CompanyOverview from "@/components/about/company-overview"
import TeamSection from "@/components/about/team-section"

export const metadata: Metadata = {
  title: "About Us | SpaceSolarSolutions - Renewable Energy Experts",
  description:
    "Learn about our mission, values, and the team behind SpaceSolarSolutions - leaders in solar and renewable energy solutions.",
}

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" description="Learn about our mission and the team behind our solar solutions" />
      <CompanyOverview />
      <TeamSection />
    </>
  )
}
