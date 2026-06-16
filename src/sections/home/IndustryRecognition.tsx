import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from '@/components/SectionLabel'

const accreditations = [
  { name: 'IADC Nigeria Chapter', abbr: 'IADC' },
  { name: 'NDPC', abbr: 'NDPC' },
  { name: 'PETAN', abbr: 'PETAN' },
  { name: 'American Petroleum Institute', abbr: 'API' },
]

export default function IndustryRecognition() {
  const sectionRef = useScrollReveal<HTMLElement>({
    childSelector: '.reveal-item',
    stagger: 0.1,
    start: 'top 80%',
  })

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-white">
      <div className="container-nexgen text-center">
        <div className="reveal-item mb-8">
          <SectionLabel text="INDUSTRY RECOGNITION" centered />
        </div>
        <h2 className="reveal-item font-display text-navy text-3xl sm:text-4xl lg:text-[48px] leading-[1.15] mb-4">
          Accreditations & Professional Membership
        </h2>
        <p className="reveal-item text-navy/60 font-body text-base max-w-[600px] mx-auto mb-10 lg:mb-12">
          Our commitment to excellence is validated through active membership and accreditation 
          with leading industry organizations and regulatory bodies.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-16">
          {accreditations.map((acc) => (
            <div
              key={acc.name}
              className="reveal-item group flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="flex items-center gap-3 px-4 py-3">
                <div className="w-14 h-14 rounded-lg bg-ice flex items-center justify-center group-hover:bg-navy/10 transition-colors">
                  <span className="text-navy font-display text-lg font-bold">{acc.abbr}</span>
                </div>
                <span className="text-navy font-body text-sm font-medium hidden sm:block">{acc.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
