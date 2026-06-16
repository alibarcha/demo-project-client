import { Link } from 'react-router'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from '@/components/SectionLabel'

export default function WhoWeAre() {
  const sectionRef = useScrollReveal<HTMLElement>({
    childSelector: '.reveal-item',
    stagger: 0.1,
  })
  const imageRef = useScrollReveal<HTMLDivElement>({
    direction: 'right',
    distance: 30,
    delay: 0.2,
  })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="container-nexgen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="reveal-item">
              <SectionLabel text="WHO WE ARE" />
            </div>
            <h2 className="reveal-item font-display text-navy text-3xl sm:text-4xl lg:text-[48px] leading-[1.15] mb-6">
              Engineering Excellence Across Global Markets
            </h2>
            <p className="reveal-item text-navy/70 font-body text-base leading-relaxed mb-8">
              Leading upstream oil and gas engineering across global markets with 23 years of proven operational excellence. 
              Our comprehensive engineering services combine technical expertise, advanced technology, and proven methodologies 
              to deliver world-class solutions.
            </p>
            <div className="reveal-item">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-navy text-white font-body font-medium text-sm px-7 py-3.5 rounded-full hover:bg-crimson transition-colors duration-200"
              >
                More About Us
              </Link>
            </div>
          </div>

          {/* Right Image Composition */}
          <div ref={imageRef} className="relative">
            <div className="relative ml-auto w-[85%] lg:w-full">
              <img
                src="/assets/who-we-are-primary.jpg"
                alt="Engineer working on industrial equipment"
                className="w-full rounded-xl object-cover aspect-[3/4]"
              />
              {/* Overlapping Image */}
              <div className="absolute -left-8 lg:-left-12 bottom-16 w-[55%] lg:w-[50%]">
                <img
                  src="/assets/hero-slide-1.jpg"
                  alt="Industrial facility at sunset"
                  className="w-full rounded-lg border-4 border-white shadow-lg object-cover aspect-[3/2]"
                />
              </div>
              {/* Experience Card */}
              <div className="absolute -right-2 lg:-right-6 bottom-8 bg-white rounded-xl shadow-card p-5 lg:p-6">
                <span className="text-[11px] font-body font-medium text-navy/50 uppercase tracking-wider block mb-1">
                  EXPERIENCE
                </span>
                <span className="font-display text-navy text-3xl lg:text-4xl block">23+</span>
                <span className="text-[13px] font-body text-navy/60">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
