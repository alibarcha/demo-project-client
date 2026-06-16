import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '@/components/SectionLabel'

gsap.registerPlugin(ScrollTrigger)

const milestones = [
  { year: '2002', title: 'Company Founded', description: 'Established in Nigeria as a specialized upstream engineering services provider' },
  { year: '2005', title: 'Regional Expansion', description: 'Extended operations across West Africa, establishing presence in 6 countries' },
  { year: '2012', title: 'FPSO Partnership', description: 'Strategic alliance with YINSON for floating production solutions' },
  { year: '2018', title: 'Integrated Services', description: 'Launched comprehensive project management and workforce solutions division' },
  { year: '2023', title: 'Sustainability Initiative', description: 'Implemented renewable energy integration and carbon reduction programs' },
]

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !lineRef.current) return

    const ctx = gsap.context(() => {
      // Animate the vertical line
      gsap.fromTo(lineRef.current, { scaleY: 0 }, {
        scaleY: 1, duration: 2, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })

      // Animate each milestone
      const items = sectionRef.current!.querySelectorAll('.timeline-item')
      items.forEach((item, i) => {
        const node = item.querySelector('.timeline-node')
        const content = item.querySelector('.timeline-content')

        gsap.fromTo(node, { scale: 0 }, {
          scale: 1, duration: 0.4, delay: i * 0.2 + 0.3, ease: 'back.out(2)',
          scrollTrigger: { trigger: item, start: 'top 80%' },
        })
        gsap.fromTo(content, { x: 20, opacity: 0 }, {
          x: 0, opacity: 1, duration: 0.6, delay: i * 0.2 + 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 80%' },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-[960px] mx-auto px-6">
        <div className="mb-12 lg:mb-16">
          <SectionLabel text="OUR JOURNEY" />
          <h2 className="font-display text-navy text-3xl sm:text-4xl lg:text-[48px] leading-[1.15]">
            23 Years of Growth
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div
            ref={lineRef}
            className="absolute left-[15px] lg:left-[19px] top-0 bottom-0 w-0.5 bg-navy/15 origin-top"
            style={{ transform: 'scaleY(0)' }}
          />

          {/* Milestones */}
          <div className="flex flex-col gap-12">
            {milestones.map((milestone) => (
              <div key={milestone.year} className="timeline-item flex gap-6 lg:gap-10">
                {/* Node */}
                <div className="relative flex-shrink-0">
                  <div className="timeline-node w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-white border-2 border-crimson relative z-10 mt-2" />
                </div>

                {/* Content */}
                <div className="timeline-content">
                  <span className="font-display text-crimson text-2xl lg:text-[28px] block mb-1">
                    {milestone.year}
                  </span>
                  <h3 className="font-body font-medium text-navy text-lg lg:text-xl mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-navy/65 font-body text-[15px] leading-relaxed max-w-[480px]">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
