import { useEffect, useRef, useState } from 'react'

/**
 * useReveal
 * Lightweight scroll-reveal hook built on IntersectionObserver.
 * Returns a ref to attach to an element and a boolean for visibility.
 * No animation library dependency — keeps the bundle lean.
 */
export default function useReveal({ threshold = 0.18, once = true } = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, once])

  return [ref, visible]
}
