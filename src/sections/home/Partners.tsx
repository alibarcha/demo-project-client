import { useScrollReveal } from '@/hooks/useScrollReveal'

const partners = [
  { name: 'Seven Energy', abbr: '7E' },
  { name: 'Waltersmith', abbr: 'WS' },
  { name: 'SEPCO', abbr: 'SE' },
  { name: 'Sahara', abbr: 'SH' },
  { name: 'Green Energy', abbr: 'GE' },
  { name: 'Oando', abbr: 'OA' },
]

export default function Partners() {
  const sectionRef = useScrollReveal<HTMLElement>({
    childSelector: '.reveal-item',
    stagger: 0.08,
    start: 'top 80%',
  })

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-white">
      <div className="container-nexgen text-center">
        <h2 className="reveal-item font-display text-navy text-3xl sm:text-4xl lg:text-[48px] leading-[1.15] mb-10 lg:mb-12">
          Trusted by Industry Leaders
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 mb-10">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="reveal-item group flex items-center justify-center w-28 h-16 lg:w-36 lg:h-20 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center group-hover:bg-navy/20 transition-colors">
                  <span className="text-navy font-display text-sm font-bold">{partner.abbr}</span>
                </div>
                <span className="text-navy font-body text-sm font-medium hidden lg:block">{partner.name}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal-item text-navy/60 font-body text-base max-w-[640px] mx-auto">
          Our partnerships are built on trust, technical excellence, and a shared commitment to 
          advancing global energy infrastructure through innovation and safety.
        </p>
      </div>
    </section>
  )
}
