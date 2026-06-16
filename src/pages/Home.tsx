import HeroSlider from '@/sections/home/HeroSlider'
import WhoWeAre from '@/sections/home/WhoWeAre'
import ServicesTabs from '@/sections/home/ServicesTabs'
import Partners from '@/sections/home/Partners'
import GlobalNetwork from '@/sections/home/GlobalNetwork'
import InsightsNews from '@/sections/home/InsightsNews'
import IndustryRecognition from '@/sections/home/IndustryRecognition'
import ThoughtLeadership from '@/sections/home/ThoughtLeadership'
import CareersCTA from '@/sections/home/CareersCTA'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <WhoWeAre />
      <ServicesTabs />
      <Partners />
      <GlobalNetwork />
      <InsightsNews />
      <IndustryRecognition />
      <ThoughtLeadership />
      <CareersCTA />
    </>
  )
}
