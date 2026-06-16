import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from '@/components/SectionLabel'

export default function ThoughtLeadership() {
  const sectionRef = useScrollReveal<HTMLElement>({
    childSelector: '.reveal-item',
    stagger: 0.15,
    start: 'top 80%',
  })

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-white">
      <div className="container-nexgen">
        <div className="reveal-item text-center mb-10 lg:mb-14">
          <SectionLabel text="THOUGHT LEADERSHIP" centered />
          <h2 className="font-display text-navy text-3xl sm:text-4xl lg:text-[48px] leading-[1.15]">
            Insights, Innovations, and Impact on the Energy Landscape
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 lg:gap-8">
          {/* Featured Article */}
          <a href="#" className="reveal-item group relative rounded-xl overflow-hidden aspect-[16/10] lg:aspect-auto lg:min-h-[400px] block">
            <img
              src="/assets/thought-featured.jpg"
              alt="Engineers at control panel"
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <span className="inline-block bg-navy text-white text-[11px] font-body font-medium uppercase tracking-wider px-3 py-1.5 rounded mb-4">
                INDUSTRY LEADERSHIP
              </span>
              <h3 className="font-body font-medium text-white text-xl lg:text-2xl leading-snug mb-3">
                Overcoming Legacy Challenges in Global Well Intervention Ecosystem
              </h3>
              <p className="text-white/80 font-body text-sm leading-relaxed mb-4 max-w-lg">
                The path to increased oil production depends on fixing structural gaps in well intervention. 
                This article explores key challenges and a roadmap for unlocking deferred production.
              </p>
              <span className="inline-flex items-center gap-2 bg-white text-navy font-body font-medium text-sm px-5 py-2.5 rounded-full group-hover:bg-crimson group-hover:text-white transition-colors">
                Read More
              </span>
            </div>
          </a>

          {/* Secondary Article */}
          <a href="#" className="reveal-item group block rounded-xl overflow-hidden bg-white shadow-xs hover:shadow-card-hover transition-all duration-300">
            <div className="overflow-hidden aspect-[16/10]">
              <img
                src="/assets/news-2.jpg"
                alt="Engineers working"
                className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-400"
              />
            </div>
            <div className="p-5 lg:p-6">
              <span className="text-[11px] font-body font-medium text-navy/50 uppercase tracking-wider block mb-2">
                THOUGHT LEADERSHIP
              </span>
              <h3 className="font-body font-medium text-navy text-lg leading-snug mb-4 group-hover:text-crimson transition-colors">
                Strategic Investments in Women: Driving Sustainable Growth in Oil and Gas
              </h3>
              <span className="inline-flex items-center gap-2 text-navy font-body font-medium text-sm group-hover:text-crimson transition-colors">
                Read More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
