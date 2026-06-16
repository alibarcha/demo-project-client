import { useState, useEffect, useCallback, useRef } from 'react'
import { gsap } from 'gsap'

const slides = [
  {
    image: '/assets/hero-slide-1.jpg',
    category: 'FEATURED',
    headline: 'Advanced Drilling Performance with NexGen\'s High-Capacity Electric Rig',
    stats: '30,000-ft theoretical depth | 4,500 HP drawworks | 750-ton top drive',
  },
  {
    image: '/assets/hero-slide-2.jpg',
    category: 'STRATEGIC ALLIANCE',
    headline: 'Strategic Alliance for Mature Field Optimization',
    stats: 'Combining expertise to enhance production efficiency and optimize asset performance',
  },
  {
    image: '/assets/hero-slide-3.jpg',
    category: 'ADVANCED SOLUTIONS',
    headline: 'Advanced Dual-Skid Cementing Solution',
    stats: 'Support demanding wellsite operations with high-pressure cementing systems',
  },
]

const featuredCards = [
  { category: 'OILFIELD SERVICES', title: 'Rapid Deployment of Integrated Cement Evaluation and Casing Integrity Logging' },
  { category: 'INDUSTRY LEADERSHIP', title: 'Overcoming Legacy Challenges in Global Well Intervention Ecosystem' },
  { category: 'NEWS', title: 'NexGen CEO Re-elected Chairman of Industry Association' },
]

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === activeSlide) return
    setIsTransitioning(true)

    if (contentRef.current) {
      const children = contentRef.current.children
      gsap.to(children, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        stagger: 0.05,
        ease: 'power2.in',
        onComplete: () => {
          setActiveSlide(index)
          gsap.fromTo(
            children,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1,
              ease: 'power3.out',
              onComplete: () => setIsTransitioning(false),
            }
          )
        },
      })
    } else {
      setActiveSlide(index)
      setIsTransitioning(false)
    }
  }, [activeSlide, isTransitioning])

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      goToSlide((activeSlide + 1) % slides.length)
    }, 7000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [activeSlide, goToSlide])

  // Entrance animation
  useEffect(() => {
    if (contentRef.current) {
      const children = contentRef.current.children
      gsap.fromTo(
        children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, delay: 0.3, ease: 'power3.out' }
      )
    }
  }, [])

  return (
    <section className="relative min-h-[100dvh] flex flex-col">
      {/* Background Images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-800 ${
            i === activeSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 to-navy/85" />
        </div>
      ))}

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center pt-[104px] pb-24 px-6">
        <div className="max-w-[800px] text-center" ref={contentRef}>
          <span className="text-xs font-body font-medium uppercase tracking-[0.15em] text-white/70 mb-6 block">
            {slides[activeSlide].category}
          </span>
          <h1 className="font-display text-white text-4xl sm:text-5xl lg:text-[64px] leading-[1.1] mb-6">
            {slides[activeSlide].headline}
          </h1>
          <p className="text-white/70 text-sm sm:text-base font-body mb-8">
            {slides[activeSlide].stats}
          </p>
          <button className="bg-white text-navy font-body font-medium text-sm px-7 py-3.5 rounded-full hover:bg-crimson hover:text-white transition-all duration-200">
            Explore
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => goToSlide((activeSlide - 1 + slides.length) % slides.length)}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-navy transition-all duration-200"
        aria-label="Previous slide"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button
        onClick={() => goToSlide((activeSlide + 1) % slides.length)}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-navy transition-all duration-200"
        aria-label="Next slide"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
              i === activeSlide ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Featured Cards Strip */}
      <div className="relative z-10 bg-white -mb-10">
        <div className="container-nexgen py-6 lg:py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {featuredCards.map((card, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`text-left p-4 lg:p-5 border-b-2 transition-all duration-300 hover:-translate-y-0.5 ${
                  i === activeSlide ? 'border-crimson' : 'border-navy/10'
                }`}
              >
                <span className="text-[11px] font-body font-medium text-navy/60 uppercase tracking-wider block mb-2">
                  {card.category}
                </span>
                <h3 className="text-sm lg:text-[15px] font-body font-medium text-navy line-clamp-2 leading-snug">
                  {card.title}
                </h3>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
      `}</style>
    </section>
  )
}
