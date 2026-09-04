import { useState } from 'react'
import { ArrowLeft, ArrowRight, Star } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const REVIEWS = [
  {
    quote:
      'I hadn’t seen a dentist in six years out of pure anxiety. Dr. Marsh talked me through every step before doing anything, and I actually looked forward to the second visit.',
    name: 'Josie T.',
    treatment: 'Preventive care & fillings',
    rating: 5,
  },
  {
    quote:
      'The aligner check-ins were the difference. I never felt like I was guessing whether things were on track between appointments.',
    name: 'Marcus L.',
    treatment: 'Clear aligners',
    rating: 5,
  },
  {
    quote:
      'Got a full written quote before my implant, no surprise costs after. That alone made me trust the whole process.',
    name: 'Amira H.',
    treatment: 'Dental implant',
    rating: 5,
  },
  {
    quote:
      'Chipped a tooth on a Sunday night before a work trip — they saw me at 8am Monday and fixed it before my flight.',
    name: 'Daniel R.',
    treatment: 'Emergency care',
    rating: 5,
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const review = REVIEWS[index]

  const next = () => setIndex((i) => (i + 1) % REVIEWS.length)
  const prev = () => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length)

  return (
    <section
      id="reviews"
      className="bg-[#F7FCFE] py-24 text-[#315568] md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionHeading
                eyebrow="Patient reviews"
                title="What it actually feels like to be a patient here."
                tone="dark"
              />
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={prev}
                  aria-label="Previous review"
                  className="flex h-11 w-11 items-center justify-center border border-[#315568]/25 text-[#315568] transition-colors duration-300 hover:border-[#315568] hover:bg-[#315568] hover:text-white"
                >
                  <ArrowLeft size={16} strokeWidth={1.75} />
                </button>

                <button
                  onClick={next}
                  aria-label="Next review"
                  className="flex h-11 w-11 items-center justify-center border border-[#315568]/25 text-[#315568] transition-colors duration-300 hover:border-[#315568] hover:bg-[#315568] hover:text-white"
                >
                  <ArrowRight size={16} strokeWidth={1.75} />
                </button>

                <span className="ml-2 font-mono text-xs text-[#6B8793]/70">
                  {String(index + 1).padStart(2, '0')} /{' '}
                  {String(REVIEWS.length).padStart(2, '0')}
                </span>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col justify-center lg:col-span-7 lg:col-start-6">
            <Reveal key={review.name} delay={0}>
              <div className="w-full max-w-xl rounded-lg border border-[#C8E4EC] bg-white p-6 shadow-[0_12px_35px_rgba(49,85,104,0.08)] transition-shadow duration-300 hover:shadow-[0_16px_45px_rgba(49,85,104,0.12)] md:p-8">
                <div className="mb-5 flex text-[#56B8D0]">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <p className="max-w-lg font-serif text-lg leading-relaxed text-[#315568] md:text-xl">
                  "{review.quote}"
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#315568] font-mono text-[10px] text-white">
                    {review.name
                      .split(' ')
                      .map((p) => p[0])
                      .join('')}
                  </div>

                  <div>
                    <p className="font-sans text-xs font-medium text-[#315568]">
                      {review.name}
                    </p>

                    <p className="mt-1 font-mono text-[9px] uppercase tracking-wide text-[#6B8793]/70">
                      {review.treatment}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}