import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useCountUp(end: number, duration: number = 1.5, suffix: string = '') {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(`0${suffix}`)

  useEffect(() => {
    if (!ref.current) return

    const obj = { value: 0 }
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        value: end,
        duration,
        ease: 'power2.out',
        snap: { value: end % 1 === 0 ? 1 : 0.1 },
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          if (end % 1 === 0) {
            setDisplay(`${Math.round(obj.value)}${suffix}`)
          } else {
            setDisplay(`${obj.value.toFixed(1)}${suffix}`)
          }
        },
      })
    })

    return () => ctx.revert()
  }, [end, duration, suffix])

  return { ref, display }
}
