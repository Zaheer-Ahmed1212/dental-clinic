import { useState } from 'react'
import { Phone, MapPin, Clock, ArrowRight, Check } from 'lucide-react'
import Reveal from './ui/Reveal'

const SERVICE_OPTIONS = [
  'General check-up & clean',
  'Cosmetic consultation',
  'Dental implant enquiry',
  'Orthodontics / aligners',
  'Emergency appointment',
]

export default function AppointmentCTA() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="appointment" className="bg-porcelain">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* left info panel */}
        <div className="bg-ink text-porcelain px-6 md:px-16 py-20 md:py-28 flex flex-col justify-center">
          <Reveal>
            <span className="font-mono text-[11px] tracking-widest2 uppercase text-copper-light">
              Book your visit
            </span>
            <h2 className="font-display font-medium text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.08] mt-4 max-w-md">
              Appointments open most weekdays within 48 hours.
            </h2>
            <p className="text-porcelain/60 mt-6 max-w-sm leading-relaxed">
              Prefer to speak with someone directly? Our front desk is staffed
              7am–6pm, Monday to Saturday.
            </p>
          </Reveal>

          <Reveal delay={140} className="mt-12 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <Phone size={18} strokeWidth={1.6} className="text-copper-light shrink-0" />
              <span className="font-mono text-sm">(03) 9000 1148</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin size={18} strokeWidth={1.6} className="text-copper-light shrink-0" />
              <span className="text-sm text-porcelain/80">148 Draper Street, Fitzroy VIC 3065</span>
            </div>
            <div className="flex items-center gap-4">
              <Clock size={18} strokeWidth={1.6} className="text-copper-light shrink-0" />
              <span className="text-sm text-porcelain/80">Mon–Fri 7am–6pm · Sat 8am–1pm</span>
            </div>
          </Reveal>
        </div>

        {/* right form panel */}
        <div className="bg-porcelain-dim px-6 md:px-16 py-20 md:py-28 flex flex-col justify-center">
          {submitted ? (
            <Reveal>
              <div className="max-w-md">
                <span className="w-14 h-14 rounded-full bg-ink flex items-center justify-center mb-6">
                  <Check size={22} strokeWidth={1.75} className="text-copper-light" />
                </span>
                <h3 className="font-display text-2xl text-ink mb-3">Request received.</h3>
                <p className="text-charcoal/65 leading-relaxed">
                  We'll call you within one business day to confirm a time
                  that suits. If it's urgent, ring the studio directly on
                  (03) 9000 1148.
                </p>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <form onSubmit={handleSubmit} className="max-w-md flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <label className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wide text-charcoal/50">
                      Full name
                    </span>
                    <input
                      required
                      type="text"
                      placeholder="Jordan Ellis"
                      className="bg-transparent border-b border-ink/25 py-2 text-sm text-ink placeholder:text-charcoal/30 focus:border-copper outline-none transition-colors"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wide text-charcoal/50">
                      Phone
                    </span>
                    <input
                      required
                      type="tel"
                      placeholder="04xx xxx xxx"
                      className="bg-transparent border-b border-ink/25 py-2 text-sm text-ink placeholder:text-charcoal/30 focus:border-copper outline-none transition-colors"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wide text-charcoal/50">
                    What do you need?
                  </span>
                  <select
                    required
                    defaultValue=""
                    className="bg-transparent border-b border-ink/25 py-2 text-sm text-ink focus:border-copper outline-none transition-colors"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wide text-charcoal/50">
                    Preferred day/time (optional)
                  </span>
                  <input
                    type="text"
                    placeholder="e.g. Weekday mornings"
                    className="bg-transparent border-b border-ink/25 py-2 text-sm text-ink placeholder:text-charcoal/30 focus:border-copper outline-none transition-colors"
                  />
                </label>

                <button
                  type="submit"
                  className="group mt-2 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ink text-porcelain hover:bg-copper transition-colors duration-300 w-fit"
                >
                  <span className="text-sm tracking-wide">Request appointment</span>
                  <ArrowRight
                    size={16}
                    strokeWidth={1.75}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </form>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
