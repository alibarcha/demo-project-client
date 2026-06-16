import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const serviceLinks = [
  'Industrial Automation',
  'Digital Infrastructure',
  'Sustainable Energy',
  'Petroleum Resources',
  'Integrated Solutions',
  'Drilling & Engineering',
]

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Leadership', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact Us', href: '#' },
]

const offices = [
  { name: 'New York Office', address: '350 Fifth Avenue, Suite 4800, New York, NY 10118' },
  { name: 'Houston Office', address: '1000 Main Street, Suite 2500, Houston, TX 77002' },
  { name: 'London Office', address: '1 Canada Square, Canary Wharf, London E14 5AB' },
  { name: 'Singapore Office', address: '1 Raffles Place, Tower 2, Level 28, Singapore 048616' },
  { name: 'Dubai Office', address: 'Burj Daman Tower, Level 12, DIFC, Dubai, UAE' },
]

export default function Footer() {
  const [openOffice, setOpenOffice] = useState<string | null>(null)
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!footerRef.current) return
    const cols = footerRef.current.querySelectorAll('.footer-col')
    gsap.fromTo(
      cols,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
        },
      }
    )
  }, [])

  return (
    <footer ref={footerRef} className="bg-navy pt-20 pb-10">
      <div className="container-nexgen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="footer-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-white">
                <span className="text-navy font-display text-lg font-bold">N</span>
              </div>
            </div>
            <p className="text-white/75 text-sm font-body leading-relaxed mb-6">
              The Fastest-Growing Technology Solutions Provider in Global Markets
            </p>
            <div className="flex flex-col gap-1 mb-6">
              <a href="mailto:contact@nexgensys.com" className="text-white/75 text-sm font-body hover:text-white transition-colors">
                contact@nexgensys.com
              </a>
              <span className="text-white/75 text-sm font-body">+1 (555) 123-4567</span>
              <span className="text-white/75 text-sm font-body">+1 (555) 987-6543</span>
            </div>
            <div className="flex items-center gap-3">
              {['in', 'X', 'f', 'ig'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-navy transition-all duration-200"
                >
                  <span className="text-xs font-body">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h4 className="text-white font-body font-medium text-base mb-5">Services</h4>
            <div className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <a key={link} href="#" className="text-white/75 text-sm font-body hover:text-white transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Company Column */}
          <div className="footer-col">
            <h4 className="text-white font-body font-medium text-base mb-5">Company</h4>
            <div className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-white/75 text-sm font-body hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Offices Column */}
          <div className="footer-col">
            <h4 className="text-white font-body font-medium text-base mb-5">Offices</h4>
            <div className="flex flex-col">
              {offices.map((office) => (
                <div key={office.name} className="border-b border-white/10">
                  <button
                    onClick={() => setOpenOffice(openOffice === office.name ? null : office.name)}
                    className="flex items-center justify-between w-full py-3 text-white text-sm font-body hover:text-white transition-colors"
                  >
                    {office.name}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`transition-transform duration-200 ${openOffice === office.name ? 'rotate-180' : ''}`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {openOffice === office.name && (
                    <p className="text-white/50 text-xs font-body pb-3 leading-relaxed">{office.address}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs font-body">
            &copy; 2026 NexGen Systems. All rights reserved.
          </p>
          <a href="#" className="text-white/50 text-xs font-body hover:text-white transition-colors">
            Terms of Use
          </a>
        </div>
      </div>
    </footer>
  )
}
