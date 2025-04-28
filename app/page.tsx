import Hero from "@/components/home/hero"
import StatsSection from "@/components/home/stats-section"
import ServicesOverview from "@/components/home/services-overview"
import ProjectsGallery from "@/components/home/projects-gallery"
import Testimonials from "@/components/home/testimonials"
import ContactForm from "@/components/home/contact-form"
import siteData from "@/data/site-data.json"

export default function Home() {
  return (
    <>
      <Hero data={siteData.home.hero} />
      <StatsSection data={siteData.home.stats} />
      <ServicesOverview data={siteData.home.services} />
      <ProjectsGallery data={siteData.home.projects} />
      <Testimonials data={siteData.home.testimonials} />
      <ContactForm />
    </>
  )
}
