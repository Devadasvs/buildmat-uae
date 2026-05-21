import Hero from '@/components/home/Hero'
import FeaturedCategories from '@/components/home/FeaturedCategories'
import AboutSection from '@/components/home/AboutSection'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import Statistics from '@/components/home/Statistics'
import BrandsSection from '@/components/home/BrandsSection'
import ProjectsSection from '@/components/home/ProjectsSection'
import CTASection from '@/components/home/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <AboutSection />
      <WhyChooseUs />
      <FeaturedProducts />
      <Statistics />
      <BrandsSection />
      <ProjectsSection />
      <CTASection />
    </>
  )
}