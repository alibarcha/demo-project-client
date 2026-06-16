import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from '@/components/SectionLabel'

const newsItems = [
  {
    image: '/assets/news-1.jpg',
    badge: 'OILFIELD SERVICES',
    title: 'Rapid Deployment of Integrated Cement Evaluation and Casing Integrity Logging',
  },
  {
    image: '/assets/news-2.jpg',
    badge: 'INDUSTRY LEADERSHIP',
    title: 'Overcoming Legacy Challenges in Global Well Intervention Ecosystem',
  },
  {
    image: '/assets/news-3.jpg',
    badge: 'NEWS',
    title: 'NexGen CEO Re-elected Chairman of Industry Association',
  },
]

export default function InsightsNews() {
  const sectionRef = useScrollReveal<HTMLElement>({
    childSelector: '.reveal-item',
    stagger: 0.15,
    start: 'top 80%',
  })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="container-nexgen">
        <div className="reveal-item mb-10 lg:mb-14">
          <SectionLabel text="INSIGHTS & UPDATES" />
          <h2 className="font-display text-navy text-3xl sm:text-4xl lg:text-[48px] leading-[1.15]">
            Latest Insights & News
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, i) => (
            <a
              key={i}
              href="#"
              className="reveal-item group block rounded-xl overflow-hidden bg-white shadow-xs hover:shadow-card-hover transition-all duration-400"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-400"
                />
                <span className="absolute top-3 left-3 bg-navy text-white text-[11px] font-body font-medium uppercase tracking-wider px-3 py-1.5 rounded">
                  {item.badge}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-body font-medium text-navy text-base leading-snug line-clamp-2 group-hover:text-crimson transition-colors">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
