import { useRef, useState, useCallback } from 'react'
import { MoveHorizontal } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import before from '../images/before.jpeg'
import after from '../images/after.jpeg'
import alignbefore from '../images/alignbefore.jpeg'
import alignafter from '../images/alignafter.jpeg'
import implantbefore from '../images/implantbefore.jpeg'
import implantafter from '../images/implantafter.jpeg'

/**
 * Illustrative "before/after" panels rendered with CSS gradients + a tooth
 * silhouette rather than stock/clinical photography — keeps the section
 * honest (these are stylised, not real patient images) while still
 * demonstrating the interaction pattern.
 */
function CompareSlider({ label,
  beforeImage,
  afterImage,
  note }) {
  const containerRef = useRef(null)
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect()
    const ratio = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, ratio)))
  }, [])

  const onPointerDown = (e) => {
    dragging.current = true
    updateFromClientX(e.clientX)
  }
  const onPointerMove = (e) => {
    if (!dragging.current) return
    updateFromClientX(e.clientX)
  }
  const stopDragging = () => {
    dragging.current = false
  }

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDragging}
        onPointerLeave={stopDragging}
        className="relative w-full aspect-[4/3] select-none cursor-ew-resize overflow-hidden border border-ink/15 touch-none"
      >
        {/* after (base) layer */}
        <div className={`absolute inset-0 flex items-center justify-center`}>
          <img src={afterImage} alt="" />
          <ToothMark className="text-porcelain/90" />
          <span className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-wide text-porcelain/70">
            After
          </span>
        </div>

        {/* before (clipped) layer */}
        <div
          className={`absolute inset-0  flex items-center justify-center`}
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}

        >
          <img src={beforeImage} alt="" />
          <ToothMark className="text-porcelain/60" muted />
          <span className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-wide text-porcelain/60">
            Before
          </span>
        </div>

        {/* handle */}
        <div
          className="absolute top-0 bottom-0 w-px bg-porcelain"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-porcelain border border-ink/20 flex items-center justify-center shadow-md">
            <MoveHorizontal size={15} strokeWidth={1.75} className="text-ink" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <h3 className="font-display text-lg text-ink">{label}</h3>
        <span className="font-mono text-[10px] uppercase tracking-wide text-charcoal/45">{note}</span>
      </div>
    </div>
  )
}

function ToothMark({ className = '', muted = false }) {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" className={className} aria-hidden="true">
      <path
        d="M36 10c-9 0-15 5-15 13 0 6 2 10 3 16 1 7 2 17 7 17 4 0 4-11 5-14 1 3 1 14 5 14 5 0 6-10 7-17 1-6 3-10 3-16 0-8-6-13-15-13Z"
        fill="currentColor"
        opacity={muted ? 0.5 : 0.9}
      />
    </svg>
  )
}

export default function BeforeAfter() {
  return (
    <section id="results" className="bg-porcelain py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading
                eyebrow="Case studies"
                title="Drag the line. See the difference our patients ask about most."
              />
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Reveal delay={0}>
            <CompareSlider
              label="Smile design, 3 visits"
              beforeImage={before}
              afterImage={after}
              note="Veneers"
            />
          </Reveal>
          <Reveal delay={120}>
            <CompareSlider
              label="Single implant restoration"
              beforeImage={implantbefore}
              afterImage={implantafter}
              note="Implant + crown"
            />
          </Reveal>
          <Reveal delay={240}>
            <CompareSlider
              label="12-month aligner journey"
              beforeImage={alignbefore}
              afterImage={alignafter}
              note="Clear aligners"
            />
          </Reveal>
        </div>

        <Reveal delay={320}>
          <p className="mt-10 text-xs text-charcoal/45 max-w-lg">
            Illustrative renderings used for demonstration. Actual results
            vary by patient and are reviewed individually during consultation.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
