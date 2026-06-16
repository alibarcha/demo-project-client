import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '@/components/SectionLabel'

gsap.registerPlugin(ScrollTrigger)

export default function MissionVision() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.mission-col', { x: -40, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })
      gsap.fromTo('.vision-col', { x: 40, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, delay: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })
      gsap.fromTo('.accent-line', { width: 0 }, {
        width: 32, duration: 0.4, delay: 0.3, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-navy">
      <div className="container-nexgen">
        <div className="mb-10 lg:mb-14">
          <SectionLabel text="OUR PURPOSE" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Mission */}
          <div className="mission-col">
            <div className="accent-line h-0.5 bg-crimson mb-6" style={{ width: 0 }} />
            <h3 className="font-display text-white text-3xl lg:text-4xl leading-[1.15] mb-5">
              Mission
            </h3>
            <p className="text-white/75 font-body text-base leading-relaxed">
              To deliver exceptional upstream oil and gas engineering services that meet the highest 
              international standards while contributing to global sustainable energy development through 
              innovation, technical excellence, and unwavering commitment to safety.
            </p>
          </div>

          {/* Vision */}
          <div className="vision-col">
            <div className="accent-line h-0.5 bg-white/30 mb-6" style={{ width: 0 }} />
            <h3 className="font-display text-white text-3xl lg:text-4xl leading-[1.15] mb-5">
              Vision
            </h3>
            <p className="text-white/75 font-body text-base leading-relaxed">
              To be the world's most trusted and innovative upstream oil and gas engineering partner, 
              recognized globally for operational excellence, technical expertise, and unwavering commitment 
              to safety, sustainability, and the development of local capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
