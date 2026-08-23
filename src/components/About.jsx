import { Check } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const REASONS = [
  {
    title: 'Longer appointments',
    body: 'Standard visits run 45–60 minutes. We would rather see fewer patients and have enough time to do things properly.',
  },
  {
    title: 'The same dentist throughout',
    body: 'The dentist you meet at your consultation is the one who treats you. No unnecessary handoffs.',
  },
  {
    title: 'Clear pricing',
    body: 'You receive a written treatment plan and the cost before anything begins. There are no surprises at the end.',
  },
  {
    title: 'Carefully made restorations',
    body: 'We work closely with our dental laboratory to make sure your restoration looks and feels right for you.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#f7f6f2] py-24 text-[#202522] md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Heading */}
        <div className="grid gap-10 md:grid-cols-12 md:items-end">

          <Reveal className="md:col-span-7">
            <SectionHeading
              eyebrow="Why choose us"
              title="Dentistry without the rush."
              tone="dark"
            />
          </Reveal>

          <Reveal
            delay={100}
            className="md:col-span-4 md:col-start-9"
          >
            <p className="max-w-md text-sm leading-7 text-[#202522]/60">
              We built Solace around a simple idea: good dentistry takes
              time. From your first appointment to your final check-up,
              everything is designed to feel calm, clear and personal.
            </p>
          </Reveal>

        </div>

        {/* Content */}
        <div className="mt-20 grid gap-16 lg:grid-cols-12 lg:gap-20">

          {/* Founder */}
          <Reveal className="lg:col-span-4">
            <div className="max-w-sm">

              <div className="mb-6 h-px w-full bg-[#202522]/15" />

              <p className="text-lg leading-8 text-[#202522]/75">
                “I started Solace because I was tired of ten-minute
                appointments that left patients more anxious than when they
                walked in.”
              </p>

              <div className="mt-6">
                <p className="text-sm font-medium">
                  Dr. Elena Marsh
                </p>

                <p className="mt-1 text-xs text-[#202522]/50">
                  Founder & Dentist
                </p>
              </div>

            </div>
          </Reveal>

          {/* Reasons */}
          <div className="lg:col-span-7 lg:col-start-6">

            <div className="divide-y divide-[#202522]/12 border-y border-[#202522]/12">

              {REASONS.map((reason, index) => (
                <Reveal
                  key={reason.title}
                  delay={index * 80}
                >
                  <div className="group grid gap-5 py-7 sm:grid-cols-[28px_1fr] sm:gap-6">

                    {/* Check */}
                    <div className="pt-1">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2f5d50]">
                        <Check
                          size={11}
                          strokeWidth={2.5}
                          className="text-white"
                        />
                      </div>
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="text-base font-semibold tracking-[-0.01em]">
                        {reason.title}
                      </h3>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-[#202522]/55">
                        {reason.body}
                      </p>
                    </div>

                  </div>
                </Reveal>
              ))}

            </div>

          </div>
        </div>

        {/* Bottom */}
        <Reveal delay={150}>
          <div className="mt-16 flex flex-col gap-3 text-xs text-[#202522]/45 sm:flex-row sm:items-center sm:justify-between">

            <span>
              Taking new patients
            </span>

            <span>
              Central London · By appointment
            </span>

          </div>
        </Reveal>

      </div>
    </section>
  )
}