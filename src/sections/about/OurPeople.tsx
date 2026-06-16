import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from '@/components/SectionLabel'

const galleryImages = [
  '/assets/career-1.jpg',
  '/assets/career-2.jpg',
  '/assets/news-2.jpg',
  '/assets/who-we-are-primary.jpg',
]

export default function OurPeople() {
  const sectionRef = useScrollReveal<HTMLElement>({
    childSelector: '.reveal-item',
    stagger: 0.1,
    start: 'top 80%',
  })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="container-nexgen">
        <div className="reveal-item text-center mb-10 lg:mb-14">
          <SectionLabel text="OUR PEOPLE" centered />
          <h2 className="font-display text-navy text-3xl sm:text-4xl lg:text-[48px] leading-[1.15]">
            WE ARE #TEAMNEXGEN
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-10">
          {/* Team Photo */}
          <div className="reveal-item relative">
            <img
              src="/assets/team-main.jpg"
              alt="Team NexGen"
              className="w-full rounded-xl object-cover aspect-[4/3]"
            />
            {/* Quote Card */}
            <div className="absolute -bottom-6 left-4 right-4 lg:left-6 lg:right-6 bg-white rounded-xl shadow-card p-5 lg:p-6">
              <p className="font-display italic text-navy text-lg lg:text-xl">
                <span className="text-crimson">&ldquo;</span>
                Our team is our competitive advantage
                <span className="text-crimson">&rdquo;</span>
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="reveal-item flex flex-col justify-center pt-8 lg:pt-0">
            <div className="flex flex-col gap-5">
              <p className="text-navy/70 font-body text-base leading-relaxed">
                Our people are the heart of everything we do. We are a resilient, highly skilled, and 
                purpose-driven workforce committed to delivering excellence across every operation.
              </p>
              <p className="text-navy/70 font-body text-base leading-relaxed">
                As a proudly indigenous service provider, we believe that local expertise when empowered, 
                can compete at a global standard. Our team reflects this belief, with over 99% of our 
                workforce being local talent.
              </p>
              <p className="text-navy/70 font-body text-base leading-relaxed">
                Safety is embedded in our culture, not just as a policy but as a shared responsibility. 
                We operate with resilience, discipline, and focus on protecting our people, our clients, 
                and the communities we work in.
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Row */}
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2 snap-x snap-mandatory">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="reveal-item flex-shrink-0 w-52 lg:w-60 snap-start"
            >
              <img
                src={img}
                alt={`Team gallery ${i + 1}`}
                className="w-full h-40 lg:h-44 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
