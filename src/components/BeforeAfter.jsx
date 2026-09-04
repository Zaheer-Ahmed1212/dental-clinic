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

function CompareSlider({
  label,
  beforeImage,
  afterImage,
  note
}) {
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
        className="relative aspect-[4/3] w-full cursor-ew-resize select-none touch-none overflow-hidden border border-[#315568]/15"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={afterImage}
            alt=""
            className="h-full w-full object-cover"
          />

          <ToothMark className="text-[#F7FCFE]/90" />

          <span className="absolute bottom-4 right-4 font-mono text-[10px] uppercase tracking-wide text-[#F7FCFE]/70">
            After
          </span>
        </div>

        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={beforeImage}
            alt=""
            className="h-full w-full object-cover"
          />

          <ToothMark
            className="text-[#F7FCFE]/60"
            muted
          />

          <span className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-wide text-[#F7FCFE]/60">
            Before
          </span>
        </div>

        <div
          className="absolute bottom-0 top-0 w-px bg-[#F7FCFE]"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#315568]/20 bg-[#F7FCFE] shadow-md">
            <MoveHorizontal
              size={15}
              strokeWidth={1.75}
              className="text-[#315568]"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <h3 className="font-sans text-base font-semibold tracking-[-0.01em] text-[#315568]">
          {label}
        </h3>

        <span className="font-mono text-[10px] uppercase tracking-wide text-[#6B8793]/70">
          {note}
        </span>
      </div>
    </div>
  )
}

function ToothMark({ className = '', muted = false }) {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      className={className}
      aria-hidden="true"
    >
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
    <section
      id="results"
      className="bg-[#F7FCFE] py-24 text-[#315568] md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading
                eyebrow="Case studies"
                title="Drag the line. See the difference our patients ask about most."
                tone="dark"
              />
            </Reveal>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
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
          <p className="mt-10 max-w-lg font-sans text-xs leading-5 text-[#6B8793]/70">
            Illustrative renderings used for demonstration. Actual results
            vary by patient and are reviewed individually during consultation.
          </p>
        </Reveal>
      </div>
    </section>
  )
}