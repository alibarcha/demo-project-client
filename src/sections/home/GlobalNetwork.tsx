import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from '@/components/SectionLabel'

const locations = [
  { name: 'Nigeria', flag: '🇳🇬' },
  { name: 'Ghana', flag: '🇬🇭' },
  { name: 'Congo', flag: '🇨🇩' },
  { name: 'Ivory Coast', flag: '🇨🇮' },
  { name: 'Angola', flag: '🇦🇴' },
]

export default function GlobalNetwork() {
  const sectionRef = useScrollReveal<HTMLElement>({
    childSelector: '.reveal-item',
    stagger: 0.1,
    start: 'top 80%',
  })

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-navy">
      <div className="container-nexgen">
        <div className="reveal-item text-center mb-12 lg:mb-16">
          <SectionLabel text="GLOBAL NETWORK" />
          <h2 className="font-display text-white text-3xl sm:text-4xl lg:text-[48px] leading-[1.15]">
            Integrated Network Delivering Excellence Worldwide.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          {/* World Map */}
          <div className="reveal-item relative">
            <svg viewBox="0 0 800 400" className="w-full h-auto opacity-15" fill="white">
              {/* Simplified world map */}
              <path d="M50,100 Q100,60 180,80 Q250,50 320,70 Q380,40 450,60 Q520,30 600,50 Q680,40 750,70 L750,300 Q680,350 600,340 Q520,360 450,330 Q380,350 320,320 Q250,340 180,310 Q100,330 50,280 Z" opacity="0.6"/>
              {/* Africa */}
              <path d="M360,140 Q400,130 420,160 Q440,200 430,250 Q420,290 390,310 Q370,300 360,270 Q350,230 355,180 Q358,155 360,140Z" opacity="0.8"/>
              {/* North America */}
              <path d="M80,60 Q150,40 200,70 Q240,100 230,150 Q210,180 170,170 Q130,160 100,140 Q70,110 80,60Z" opacity="0.8"/>
              {/* South America */}
              <path d="M160,200 Q200,190 220,220 Q240,270 230,320 Q210,350 180,340 Q160,310 155,260 Q152,225 160,200Z" opacity="0.8"/>
              {/* Europe */}
              <path d="M340,60 Q390,45 420,65 Q440,90 430,120 Q410,135 380,125 Q355,115 345,90 Q338,72 340,60Z" opacity="0.8"/>
              {/* Asia */}
              <path d="M480,50 Q560,30 640,50 Q700,80 690,140 Q670,180 620,170 Q560,160 510,140 Q470,110 480,50Z" opacity="0.8"/>
            </svg>
            {/* Location dots */}
            {[
              { x: '52%', y: '55%', label: 'Nigeria' },
              { x: '46%', y: '50%', label: 'Ghana' },
              { x: '55%', y: '58%', label: 'Congo' },
              { x: '45%', y: '52%', label: 'Ivory Coast' },
              { x: '54%', y: '68%', label: 'Angola' },
            ].map((loc) => (
              <div
                key={loc.label}
                className="absolute animate-map-dot-pulse"
                style={{ left: loc.x, top: loc.y, transform: 'translate(-50%, -50%)' }}
              >
                <div className="w-3 h-3 bg-crimson rounded-full" />
              </div>
            ))}
          </div>

          {/* Locations List */}
          <div className="reveal-item">
            <h3 className="text-white font-body font-medium text-lg mb-6">Operating Locations</h3>
            <div className="flex flex-col gap-4">
              {locations.map((loc) => (
                <div
                  key={loc.name}
                  className="flex items-center gap-3 text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer"
                >
                  <span className="text-2xl">{loc.flag}</span>
                  <span className="font-body text-base">{loc.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
