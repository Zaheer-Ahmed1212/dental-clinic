import { ScanLine, ClipboardList, Stethoscope, HeartPulse } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const STEPS = [
  {
    icon: ScanLine,
    title: 'Consultation & digital scan',
    body: 'A full intraoral scan and conversation about what is actually bothering you — no drilling, no guesswork.',
    time: '45 min',
  },
  {
    icon: ClipboardList,
    title: 'Your treatment plan',
    body: 'Within two business days you receive a written plan: what we recommend, alternatives, timeline and itemised cost.',
    time: '2 business days',
  },
  {
    icon: Stethoscope,
    title: 'Treatment',
    body: 'Procedures are scheduled in unhurried blocks with the same clinician throughout, from first filling to final polish.',
    time: 'Varies by plan',
  },
  {
    icon: HeartPulse,
    title: 'Aftercare & maintenance',
    body: 'A follow-up call within 48 hours, then a maintenance schedule built around your risk profile, not a generic recall.',
    time: 'Ongoing',
  },
]

export default function TreatmentProcess() {
  return (
    <section id="process" className="bg-[#F7FCFE] py-24 text-[#315568] md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-20 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeading
                eyebrow="How treatment actually works"
                title="Four stages. You know what's happening at every one."
                tone="dark"
              />
            </Reveal>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-6 right-6 top-6 hidden h-px bg-[#315568]/15 md:block"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-4">
            {STEPS.map((step, i) => {
              const Icon = step.icon

              return (
                <Reveal key={step.title} delay={i * 120}>
                  <div className="relative pl-0 md:pl-0">
                    <div className="flex items-center gap-4 md:block">
                      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#315568] bg-[#F7FCFE]">
                        <Icon
                          size={18}
                          strokeWidth={1.6}
                          className="text-[#315568]"
                        />
                      </div>

                      <span className="font-mono text-xs text-[#56B8D0] md:hidden">
                        Step {i + 1}
                      </span>
                    </div>

                    <div className="md:mt-6">
                      <span className="mb-2 hidden font-mono text-xs text-[#56B8D0] md:inline-block">
                        Step {i + 1}
                      </span>

                      <h3 className="mt-1 font-sans text-base font-semibold tracking-[-0.01em] text-[#315568] md:mt-2">
                        {step.title}
                      </h3>

                      <p className="mb-3 mt-2 max-w-xl font-sans text-sm leading-6 text-[#6B8793]">
                        {step.body}
                      </p>

                      <span className="inline-block border-t border-[#C8E4EC] pt-3 font-mono text-[10px] uppercase tracking-wide text-[#6B8793]">
                        {step.time}
                      </span>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}