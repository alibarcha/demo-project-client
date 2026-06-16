import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from '@/components/SectionLabel'

export default function CareersCTA() {
  const sectionRef = useScrollReveal<HTMLElement>({
    childSelector: '.reveal-item',
    stagger: 0.1,
    start: 'top 80%',
  })
  const cardsRef = useScrollReveal<HTMLDivElement>({
    childSelector: '.reveal-card',
    stagger: 0.15,
    start: 'top 80%',
  })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="container-nexgen">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <div className="reveal-item">
              <SectionLabel text="CAREERS" />
            </div>
            <h2 className="reveal-item font-display text-navy text-3xl sm:text-4xl lg:text-[48px] leading-[1.15] mb-4">
              Be a part of our story
            </h2>
            <p className="reveal-item text-navy/70 font-body text-base leading-relaxed mb-8">
              Join a diverse team of talented people and discover how you can be a part of the team
            </p>
            <div className="reveal-item">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-navy text-white font-body font-medium text-sm px-7 py-3.5 rounded-full hover:bg-crimson transition-colors duration-200"
              >
                Explore
              </a>
            </div>
          </div>

          {/* Career Cards */}
          <div ref={cardsRef} className="grid grid-cols-2 gap-4">
            <div className="reveal-card relative rounded-xl overflow-hidden aspect-[3/4] group cursor-pointer">
              <img
                src="/assets/career-1.jpg"
                alt="Career Opportunities"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                <h3 className="font-body font-medium text-white text-base lg:text-lg mb-3">
                  Career Opportunities
                </h3>
                <span className="inline-flex items-center bg-white text-navy font-body font-medium text-xs lg:text-sm px-4 py-2 rounded-full hover:bg-crimson hover:text-white transition-colors">
                  Learn More
                </span>
              </div>
            </div>

            <div className="reveal-card relative rounded-xl overflow-hidden aspect-[3/4] group cursor-pointer">
              <img
                src="/assets/career-2.jpg"
                alt="Application Status"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-400"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                <h3 className="font-body font-medium text-white text-base lg:text-lg mb-3">
                  Application Status
                </h3>
                <span className="inline-flex items-center bg-white text-navy font-body font-medium text-xs lg:text-sm px-4 py-2 rounded-full hover:bg-crimson hover:text-white transition-colors">
                  Check Status
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
