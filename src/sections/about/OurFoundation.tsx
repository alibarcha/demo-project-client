import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useCountUp } from '@/hooks/useCountUp'
import SectionLabel from '@/components/SectionLabel'

const stats = [
  { value: 3950, suffix: '+', label: 'Completed Jobs' },
  { value: 98.5, suffix: '%', label: 'Client Satisfaction', decimal: true },
  { value: 150, suffix: '+', label: 'Clients and Partners' },
  { value: 23, suffix: '+', label: 'Years Experience' },
]

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string; decimal?: boolean }) {
  const { ref, display } = useCountUp(value, 1.5, suffix)
  return (
    <div>
      <span ref={ref} className="font-display text-navy text-4xl lg:text-[48px] leading-none">
        {display}
      </span>
      <span className="block text-[12px] font-body font-medium text-navy/60 uppercase tracking-[0.15em] mt-2">
        {label}
      </span>
    </div>
  )
}

export default function OurFoundation() {
  const sectionRef = useScrollReveal<HTMLElement>({
    childSelector: '.reveal-item',
    stagger: 0.1,
  })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="container-nexgen">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-12 lg:gap-16">
          {/* Left Content */}
          <div>
            <div className="reveal-item">
              <SectionLabel text="OUR FOUNDATION" />
            </div>
            <h2 className="reveal-item font-display text-navy text-3xl sm:text-4xl lg:text-[48px] leading-[1.15] mb-8">
              Built on Expertise
            </h2>
            <div className="flex flex-col gap-5">
              <p className="reveal-item text-navy/70 font-body text-base leading-relaxed">
                Since 2002, NexGen Systems has been at the forefront of upstream oil and gas engineering 
                services across global markets.
              </p>
              <p className="reveal-item text-navy/70 font-body text-base leading-relaxed">
                What began as a specialized Electric Wireline services company has evolved into a 
                comprehensive engineering solutions provider, delivering over 3,950+ jobs worldwide.
              </p>
              <p className="reveal-item text-navy/70 font-body text-base leading-relaxed">
                Our journey is defined by unwavering commitment to technical excellence, operational safety, 
                and sustainable energy development. Today, we combine world-class capabilities with deep regional expertise.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8 lg:gap-10 content-center">
            {stats.map((stat) => (
              <div key={stat.label} className="reveal-item">
                <StatItem
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
