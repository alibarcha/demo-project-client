import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import SectionLabel from '@/components/SectionLabel'

export default function AboutHero() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!headingRef.current) return
    const words = headingRef.current.querySelectorAll('.hero-word')
    gsap.fromTo(
      words,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, delay: 0.3, ease: 'power3.out' }
    )
    // Animate "Excellence" color
    const excellence = headingRef.current.querySelector('.excellence-word')
    if (excellence) {
      gsap.fromTo(
        excellence,
        { color: '#FFFFFF' },
        { color: '#D13D3D', duration: 0.6, delay: 0.8, ease: 'power2.out' }
      )
    }
  }, [])

  return (
    <section className="relative min-h-[520px] lg:min-h-[50vh] bg-navy flex items-center overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.08]">
        <img
          src="/assets/hero-slide-1.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-nexgen relative z-10 pt-[140px] pb-16">
        <SectionLabel text="ABOUT NEXGEN SYSTEMS" light />
        <h1
          ref={headingRef}
          className="font-display text-white text-4xl sm:text-5xl lg:text-[64px] leading-[1.1] max-w-[600px]"
        >
          <span className="hero-word inline-block">23+</span>{' '}
          <span className="hero-word inline-block">Years</span>{' '}
          <span className="hero-word inline-block">of</span>{' '}
          <span className="hero-word inline-block">Engineering</span>
          <br />
          <span className="hero-word excellence-word inline-block font-display italic text-crimson">
            Excellence
          </span>
        </h1>
      </div>
    </section>
  )
}
