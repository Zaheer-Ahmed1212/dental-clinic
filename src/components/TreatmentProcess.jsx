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
    <section id="process" className="bg-porcelain py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionHeading
                eyebrow="How treatment actually works"
                title="Four stages. You know what's happening at every one."
              />
            </Reveal>
          </div>
        </div>

        <div className="relative">
          {/* connecting line - the process is a true sequence, so a line + numbers is earned here */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-6 left-6 right-6 h-px bg-ink/15"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-14 gap-x-8">
            {STEPS.map((step, i) => {
              const Icon = step.icon
              return (
                <Reveal key={step.title} delay={i * 120}>
                  <div className="relative pl-0 md:pl-0">
                    <div className="flex  border-xl items-center gap-4 md:block">
                      <div className="relative z-10 w-12 h-12 rounded-full bg-porcelain border-2 border-ink flex items-center justify-center shrink-0">
                        <Icon size={18} strokeWidth={1.6} className="text-ink" />
                      </div>
                      <span className="font-mono text-xs text-copper md:hidden">
                        Step {i + 1}
                      </span>
                    </div>

                    <div className="md:mt-6">
                      <span className="hidden md:inline-block font-mono text-xs text-copper mb-2">
                        Step {i + 1}
                      </span>
                      <h3 className="font-display text-xl text-ink mt-1 md:mt-2 mb-2">{step.title}</h3>
                      <p className="text-sm text-charcoal/60 leading-relaxed mb-3">{step.body}</p>
                      <span className="font-mono text-[10px] uppercase tracking-wide text-sage-dark border-t border-ink/10 pt-3 inline-block">
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
