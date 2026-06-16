import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import SectionLabel from '@/components/SectionLabel'

const images = [
  { src: '/assets/hero-slide-2.jpg', title: 'Lagos Facility', span: 'row-span-2' },
  { src: '/assets/hero-slide-3.jpg', title: 'Port Harcourt Workspace', span: '' },
  { src: '/assets/service-oilfield.jpg', title: 'Equipment Rack', span: '' },
  { src: '/assets/news-1.jpg', title: 'Office Reception', span: '' },
  { src: '/assets/news-2.jpg', title: 'Team Meeting', span: 'row-span-2' },
  { src: '/assets/who-we-are-primary.jpg', title: 'Workshop Floor', span: '' },
]

export default function WorkplaceGallery() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null)

  const sectionRef = useScrollReveal<HTMLElement>({
    childSelector: '.reveal-item',
    stagger: 0.08,
    start: 'top 80%',
  })

  const openLightbox = (image: { src: string; title: string }) => {
    setLightbox(image)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightbox(null)
    document.body.style.overflow = ''
  }

  return (
    <>
      <section ref={sectionRef} className="pt-16 lg:pt-20 pb-0 bg-white">
        <div className="container-nexgen">
          <div className="reveal-item text-center mb-10 lg:mb-14">
            <SectionLabel text="LIFE AT NEXGEN" centered />
            <h2 className="font-display text-navy text-3xl sm:text-4xl lg:text-[48px] leading-[1.15]">
              Our Workplace
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
            {images.map((image, i) => (
              <button
                key={i}
                onClick={() => openLightbox(image)}
                className={`reveal-item relative overflow-hidden rounded-lg cursor-pointer group ${
                  image.span === 'row-span-2' ? 'row-span-2' : ''
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className={`w-full object-cover group-hover:scale-[1.03] group-hover:brightness-105 transition-all duration-300 ${
                    image.span === 'row-span-2' ? 'h-full min-h-[300px]' : 'h-40 lg:h-52'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[80] bg-navy/90 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
            aria-label="Close lightbox"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div
            className="max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white/70 text-sm font-body text-center mt-4">{lightbox.title}</p>
          </div>
        </div>
      )}
    </>
  )
}
