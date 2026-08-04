import type { Metadata } from "next"
import PageHeader from "@/components/ui/page-header"
import ProjectsFilter from "@/components/projects/projects-filter"

export const metadata: Metadata = {
  title: "Projects | SpaceSolarSolutions - Our Solar Energy Portfolio",
  description:
    "Browse our portfolio of completed solar and renewable energy projects for residential and commercial clients.",
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Our Projects" description="Explore our portfolio of completed solar installations" />
      <ProjectsFilter />
    </>
  )
}
