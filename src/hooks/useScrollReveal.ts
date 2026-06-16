import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollRevealOptions {
  direction?: 'up' | 'left' | 'right'
  distance?: number
  duration?: number
  stagger?: number
  delay?: number
  start?: string
  childSelector?: string
}

export function useScrollReveal<T extends HTMLElement>(options: ScrollRevealOptions = {}) {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return

    const {
      direction = 'up',
      distance = 40,
      duration = 0.8,
      stagger = 0.1,
      delay = 0,
      start = 'top 85%',
      childSelector,
    } = options

    const targets = childSelector
      ? ref.current.querySelectorAll(childSelector)
      : [ref.current]

    const fromVars: gsap.TweenVars = { opacity: 0 }
    if (direction === 'up') fromVars.y = distance
    else if (direction === 'left') fromVars.x = -distance
    else if (direction === 'right') fromVars.x = distance

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        fromVars,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          stagger,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: 'play none none none',
          },
        }
      )
    }, ref)

    return () => ctx.revert()
  }, [])

  return ref
}
