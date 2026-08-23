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
    <section id="reviews" className=" py-24 md:py-32">
      <div className=" max-w-[1400px] mx-auto px-6 md:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left */}
          <div className="lg:col-span-4">
            <Reveal>
              <SectionHeading
                eyebrow="Patient reviews"
                title="What it actually feels like to be a patient here."
              />
            </Reveal>

            <Reveal delay={140}>
              <div className="flex items-center gap-4 mt-8">

                <button
                  onClick={prev}
                  aria-label="Previous review"
                  className="w-11 h-11 border border-ink/25 flex items-center justify-center hover:border-ink hover:bg-ink hover:text-porcelain transition-colors duration-300"
                >
                  <ArrowLeft size={16} strokeWidth={1.75} />
                </button>

                <button
                  onClick={next}
                  aria-label="Next review"
                  className="w-11 h-11 border border-ink/25 flex items-center justify-center hover:border-ink hover:bg-ink hover:text-porcelain transition-colors duration-300"
                >
                  <ArrowRight size={16} strokeWidth={1.75} />
                </button>

                <span className="font-mono text-xs text-charcoal/45 ml-2">
                  {String(index + 1).padStart(2, '0')} /{' '}
                  {String(REVIEWS.length).padStart(2, '0')}
                </span>

              </div>
            </Reveal>
          </div>

          {/* Review Card */}
         {/* Review Card */}
<div className="lg:col-span-7 lg:col-start-6  flex flex-col justify-center">
  <Reveal key={review.name} delay={0}>
    <div
      className="
      rounded-lg
        bg-transparent
        w-full
        max-w-xl
        p-6
        md:p-8
        shadow-[0_12px_35px_rgba(20,25,22,0.10)]
        transition-shadow
        duration-300
        hover:shadow-[0_16px_45px_rgba(20,25,22,0.14)]
      "
    >
      {/* Stars */}
      <div className="flex text-copper mb-5">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star
            key={i}
            size={14}
            fill="currentColor"
            strokeWidth={0}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="font-display text-lg md:text-xl leading-relaxed text-ink max-w-lg">
        "{review.quote}"
      </p>

      {/* Patient */}
      <div className="mt-6 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-ink flex items-center justify-center font-mono text-[10px] text-porcelain">
          {review.name
            .split(' ')
            .map((p) => p[0])
            .join('')}
        </div>

        <div>
          <p className="text-xs text-ink font-medium">
            {review.name}
          </p>

          <p className="font-mono text-[9px] uppercase tracking-wide text-charcoal/50">
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