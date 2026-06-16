import { useState, useRef } from 'react'
import { gsap } from 'gsap'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from '@/components/SectionLabel'

const services = [
  {
    title: 'Oil Field Services',
    description: 'Electric Wireline, Slickline, and Well Testing Services providing comprehensive downhole solutions for every environment.',
    image: '/assets/service-oilfield.jpg',
  },
  {
    title: 'Well Construction Services',
    description: 'Full-service well construction from planning to completion, utilizing advanced technologies and experienced engineering teams.',
    image: '/assets/hero-slide-2.jpg',
  },
  {
    title: 'FPSO & Vessel Services',
    description: 'Integrated floating production solutions including operations, maintenance, and technical support for offshore assets.',
    image: '/assets/hero-slide-1.jpg',
  },
  {
    title: 'Petroleum Resources',
    description: 'Strategic petroleum resource development and management, leveraging deep industry expertise and cutting-edge technology.',
    image: '/assets/service-oilfield.jpg',
  },
  {
    title: 'Integrated Solutions',
    description: 'End-to-end project management and workforce solutions that streamline operations and maximize efficiency.',
    image: '/assets/hero-slide-3.jpg',
  },
  {
    title: 'Drilling & Engineering Services',
    description: 'Advanced drilling engineering with state-of-the-art equipment and a commitment to safety and operational excellence.',
    image: '/assets/hero-slide-2.jpg',
  },
]

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(0)
  const featuredRef = useRef<HTMLDivElement>(null)
  const headerRef = useScrollReveal<HTMLDivElement>({
    childSelector: '.reveal-item',
    stagger: 0.1,
  })

  const handleTabChange = (index: number) => {
    if (index === activeTab) return
    if (featuredRef.current) {
      gsap.to(featuredRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.2,
        onComplete: () => {
          setActiveTab(index)
          gsap.fromTo(
            featuredRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.3, delay: 0.1, ease: 'power2.out' }
          )
        },
      })
    } else {
      setActiveTab(index)
    }
  }

  return (
    <section className="py-24 lg:py-32 bg-ice">
      <div className="container-nexgen">
        {/* Header */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-16">
          <div>
            <div className="reveal-item">
              <SectionLabel text="WHAT WE DO" />
            </div>
            <h2 className="reveal-item font-display text-navy text-3xl sm:text-4xl lg:text-[48px] leading-[1.15]">
              Core Engineering Services
            </h2>
          </div>
          <div className="reveal-item flex items-end">
            <p className="text-navy/70 font-body text-base leading-relaxed">
              Our comprehensive engineering services combine technical expertise, advanced technology, and proven 
              methodologies to deliver world-class solutions across the oil and gas value chain.
            </p>
          </div>
        </div>

        {/* Tabs + Featured */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
          {/* Tab List */}
          <div className="flex lg:flex-col gap-0 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {services.map((service, i) => (
              <button
                key={i}
                onClick={() => handleTabChange(i)}
                className={`text-left px-4 py-4 border-b border-navy/10 whitespace-nowrap lg:whitespace-normal transition-all duration-150 flex-shrink-0 lg:flex-shrink min-w-[200px] lg:min-w-0 ${
                  i === activeTab
                    ? 'border-l-0 lg:border-l-[3px] lg:border-l-crimson border-b-crimson lg:border-b-navy/10 text-navy font-medium'
                    : 'text-navy/60 hover:text-navy/80'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Featured Content */}
          <div ref={featuredRef} className="bg-white rounded-xl p-6 lg:p-8 shadow-card">
            <span className="text-[11px] font-body font-medium text-navy/50 uppercase tracking-wider block mb-4">
              FEATURED
            </span>
            <img
              src={services[activeTab].image}
              alt={services[activeTab].title}
              className="w-full rounded-lg object-cover aspect-[16/10] mb-6"
            />
            <h3 className="font-body font-medium text-navy text-xl lg:text-2xl mb-3">
              {services[activeTab].title}
            </h3>
            <p className="text-navy/70 font-body text-[15px] leading-relaxed mb-4">
              {services[activeTab].description}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-navy font-body font-medium text-sm hover:text-crimson transition-colors group"
            >
              Learn more
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
