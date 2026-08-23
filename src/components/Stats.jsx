import { useEffect, useRef, useState } from 'react'
import useReveal from '../hooks/useReveal'

const STATS = [
  { value: 18, suffix: '', label: 'Years in Fitzroy' },
  { value: 12400, suffix: '+', label: 'Patients treated' },
  { value: 4.9, suffix: '', label: 'Average rating', decimals: 1 },
  { value: 92, suffix: '%', label: 'Patients who refer a friend' },
]

function CountUp({ target, decimals = 0, suffix = '', active }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 1400
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(target * eased)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, target])

  return (
    <span>
      {value.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const [ref, visible] = useReveal({ threshold: 0.4 })

  return (
    <section ref={ref} className="bg-ink text-porcelain py-20 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="border-l border-porcelain/15 pl-5 md:pl-6"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p className="font-mono text-4xl md:text-5xl text-copper-light tabular-nums">
                <CountUp target={stat.value} decimals={stat.decimals || 0} suffix={stat.suffix} active={visible} />
              </p>
              <p className="mt-2 text-xs md:text-sm text-porcelain/60 leading-snug max-w-[14ch]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
