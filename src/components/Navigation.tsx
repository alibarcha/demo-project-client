import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router'
import { gsap } from 'gsap'

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '#',
    children: [
      { label: 'Oil Field Services', href: '#' },
      { label: 'Well Construction', href: '#' },
      { label: 'FPSO Services', href: '#' },
      { label: 'Petroleum Resources', href: '#' },
      { label: 'Integrated Solutions', href: '#' },
      { label: 'Drilling & Engineering', href: '#' },
    ],
  },
  {
    label: 'Company',
    href: '#',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Leadership', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
  },
  { label: 'Policy', href: '#' },
  {
    label: 'News & Insights',
    href: '#',
    children: [
      { label: 'Latest News', href: '#' },
      { label: 'Thought Leadership', href: '#' },
      { label: 'Industry Updates', href: '#' },
    ],
  },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const lastScrollY = useRef(0)
  const location = useLocation()
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const mobileLinksRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 50)
      if (currentY > 100) {
        setHidden(currentY > lastScrollY.current)
      } else {
        setHidden(false)
      }
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (mobileOpen && mobileMenuRef.current && mobileLinksRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { x: '100%' },
        { x: '0%', duration: 0.4, ease: 'power3.out' }
      )
      gsap.fromTo(
        mobileLinksRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, delay: 0.2, ease: 'power3.out' }
      )
    }
  }, [mobileOpen])

  const closeMobile = () => {
    if (mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        x: '100%',
        duration: 0.3,
        ease: 'power3.in',
        onComplete: () => setMobileOpen(false),
      })
    } else {
      setMobileOpen(false)
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          hidden ? '-translate-y-[104px]' : 'translate-y-0'
        }`}
      >
        {/* Top Bar */}
        <div className="bg-navy h-10 flex items-center justify-end px-6">
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/75 hover:text-white text-[13px] font-body transition-colors flex items-center gap-1.5">
              Contact Us
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </a>
            <a href="#" className="text-white/75 hover:text-white text-[13px] font-body transition-colors flex items-center gap-1.5">
              Careers
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </a>
            <button className="text-white/75 hover:text-white text-[13px] font-body transition-colors flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              English
            </button>
          </div>
        </div>

        {/* Main Nav */}
        <div
          className={`bg-white h-16 flex items-center justify-between px-6 transition-shadow duration-300 ${
            scrolled ? 'shadow-[0_1px_4px_rgba(16,28,85,0.08)]' : ''
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center border-2 border-navy">
              <span className="text-white font-display text-lg font-bold">N</span>
            </div>
            <span className="font-display text-navy text-lg hidden sm:block">NexGen Systems</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.href === '#' ? (
                  <button className="text-sm font-body text-navy hover:text-crimson transition-colors flex items-center gap-1">
                    {link.label}
                    {link.children && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                    )}
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className="text-sm font-body text-navy hover:text-crimson transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    {link.children && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                    )}
                  </Link>
                )}

                {/* Dropdown */}
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-2 min-w-[200px]">
                    <div className="bg-white rounded-lg shadow-[0_8px_24px_rgba(16,28,85,0.10)] py-2 animate-in fade-in slide-in-from-top-1 duration-150">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm font-body text-navy hover:bg-ice transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#101C55" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <>
          <div className="fixed inset-0 bg-navy/50 z-[60]" onClick={closeMobile} />
          <div
            ref={mobileMenuRef}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-navy z-[70] p-8 overflow-y-auto"
            style={{ transform: 'translateX(100%)' }}
          >
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <span className="text-navy font-display text-lg font-bold">N</span>
                </div>
                <span className="font-display text-white text-lg">NexGen Systems</span>
              </div>
              <button onClick={closeMobile} aria-label="Close menu" className="text-white p-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            <div ref={mobileLinksRef} className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.href === '#' ? (
                    <span className="text-white/70 text-xl font-body">{link.label}</span>
                  ) : (
                    <Link to={link.href} className="text-white text-xl font-body hover:text-crimson transition-colors">
                      {link.label}
                    </Link>
                  )}
                  {link.children && (
                    <div className="mt-3 ml-4 flex flex-col gap-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="text-white/60 text-base font-body hover:text-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-4">
              {['LinkedIn', 'X', 'Facebook', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/50 transition-colors"
                >
                  <span className="text-xs">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}
