import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from '@/components/SectionLabel'

const values = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#101C55" strokeWidth="1.5">
        <path d="M24 4L6 14v12c0 11.1 7.7 21.5 18 24 10.3-2.5 18-12.9 18-24V14L24 4z" />
      </svg>
    ),
    title: 'Safety First',
    description: 'Zero-harm culture with rigorous protocols ensuring the highest safety standards across all operations.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#101C55" strokeWidth="1.5">
        <circle cx="24" cy="24" r="18" /><circle cx="24" cy="24" r="12" /><circle cx="24" cy="24" r="6" />
        <line x1="24" y1="6" x2="24" y2="12" /><line x1="24" y1="36" x2="24" y2="42" />
        <line x1="6" y1="24" x2="12" y2="24" /><line x1="36" y1="24" x2="42" y2="24" />
      </svg>
    ),
    title: 'Technical Excellence',
    description: 'Uncompromising precision and expertise delivered through world-class engineering capabilities.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#101C55" strokeWidth="1.5">
        <path d="M24 42.5C24 42.5 6 32 6 19.5C6 14.25 10.25 10 15.5 10C18.8 10 21.7 11.6 24 14.1C26.3 11.6 29.2 10 32.5 10C37.75 10 42 14.25 42 19.5C42 32 24 42.5 24 42.5Z" />
      </svg>
    ),
    title: 'Client Partnership',
    description: 'Building lasting relationships through transparent communication and consistent delivery.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#101C55" strokeWidth="1.5">
        <circle cx="24" cy="24" r="18" /><ellipse cx="24" cy="24" rx="8" ry="18" />
        <path d="M6 24h36" /><path d="M9 15h30" /><path d="M9 33h30" />
      </svg>
    ),
    title: 'Regional Leadership',
    description: 'Deep African market expertise combined with international best practices and standards.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#101C55" strokeWidth="1.5">
        <polyline points="8,36 18,22 26,28 40,8" /><polyline points="32,8 40,8 40,16" />
      </svg>
    ),
    title: 'Continuous Innovation',
    description: 'Leveraging cutting-edge technology to optimize efficiency and drive operational excellence.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#101C55" strokeWidth="1.5">
        <circle cx="24" cy="18" r="10" /><path d="M18 28L12 42h24l-6-14" />
        <path d="M20 42l4-8 4 8" />
      </svg>
    ),
    title: 'Quality Assurance',
    description: 'ISO-certified processes ensuring exceptional standards in every aspect of service delivery.',
  },
]

export default function CoreValues() {
  const sectionRef = useScrollReveal<HTMLElement>({
    childSelector: '.reveal-item',
    stagger: 0.1,
    start: 'top 80%',
  })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-ice">
      <div className="container-nexgen">
        <div className="reveal-item mb-10 lg:mb-14">
          <SectionLabel text="CORE VALUES" />
          <h2 className="font-display text-navy text-3xl sm:text-4xl lg:text-[48px] leading-[1.15]">
            What Drives Us
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {values.map((value) => (
            <div key={value.title} className="reveal-item">
              <div className="mb-4">{value.icon}</div>
              <h3 className="font-body font-medium text-navy text-lg mb-2">{value.title}</h3>
              <p className="text-navy/70 font-body text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
