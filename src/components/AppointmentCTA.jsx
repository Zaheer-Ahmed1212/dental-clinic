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
    <section id="appointment" className="bg-[#F7FCFE]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-[#315568] px-6 py-20 text-white md:px-16 md:py-28">
          <Reveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8DD8E8]">
              Book your visit
            </span>

            <h2 className="mt-4 max-w-md font-sans text-[clamp(2rem,3.6vw,3.2rem)] font-medium leading-[1.08]">
              Appointments open most weekdays within 48 hours.
            </h2>

            <p className="mt-6 max-w-sm font-sans leading-relaxed text-white/65">
              Prefer to speak with someone directly? Our front desk is staffed
              7am–6pm, Monday to Saturday.
            </p>
          </Reveal>

          <Reveal delay={140} className="mt-12 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <Phone
                size={18}
                strokeWidth={1.6}
                className="shrink-0 text-[#8DD8E8]"
              />
              <span className="font-mono text-sm">(03) 9000 1148</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin
                size={18}
                strokeWidth={1.6}
                className="shrink-0 text-[#8DD8E8]"
              />
              <span className="font-sans text-sm text-white/80">
                148 Draper Street, Fitzroy VIC 3065
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Clock
                size={18}
                strokeWidth={1.6}
                className="shrink-0 text-[#8DD8E8]"
              />
              <span className="font-sans text-sm text-white/80">
                Mon–Fri 7am–6pm · Sat 8am–1pm
              </span>
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center bg-[#E6F4F8] px-6 py-20 md:px-16 md:py-28">
          {submitted ? (
            <Reveal>
              <div className="max-w-md">
                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#315568]">
                  <Check
                    size={22}
                    strokeWidth={1.75}
                    className="text-[#8DD8E8]"
                  />
                </span>

                <h3 className="mb-3 font-sans text-2xl font-semibold text-[#315568]">
                  Request received.
                </h3>

                <p className="font-sans leading-relaxed text-[#6B8793]">
                  We'll call you within one business day to confirm a time
                  that suits. If it's urgent, ring the studio directly on
                  (03) 9000 1148.
                </p>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <form
                onSubmit={handleSubmit}
                className="flex max-w-md flex-col gap-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wide text-[#6B8793]/70">
                      Full name
                    </span>

                    <input
                      required
                      type="text"
                      placeholder="Jordan Ellis"
                      className="border-b border-[#315568]/25 bg-transparent py-2 font-sans text-sm text-[#315568] outline-none transition-colors placeholder:text-[#6B8793]/40 focus:border-[#56B8D0]"
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-wide text-[#6B8793]/70">
                      Phone
                    </span>

                    <input
                      required
                      type="tel"
                      placeholder="04xx xxx xxx"
                      className="border-b border-[#315568]/25 bg-transparent py-2 font-sans text-sm text-[#315568] outline-none transition-colors placeholder:text-[#6B8793]/40 focus:border-[#56B8D0]"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wide text-[#6B8793]/70">
                    What do you need?
                  </span>

                  <select
                    required
                    defaultValue=""
                    className="border-b border-[#315568]/25 bg-transparent py-2 font-sans text-sm text-[#315568] outline-none transition-colors focus:border-[#56B8D0]"
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
                  <span className="font-mono text-[10px] uppercase tracking-wide text-[#6B8793]/70">
                    Preferred day/time (optional)
                  </span>

                  <input
                    type="text"
                    placeholder="e.g. Weekday mornings"
                    className="border-b border-[#315568]/25 bg-transparent py-2 font-sans text-sm text-[#315568] outline-none transition-colors placeholder:text-[#6B8793]/40 focus:border-[#56B8D0]"
                  />
                </label>

                <button
                  type="submit"
                  className="group mt-2 inline-flex w-fit items-center justify-center gap-2 bg-[#315568] px-6 py-3.5 font-sans text-sm tracking-wide text-white transition-colors duration-300 hover:bg-[#56B8D0]"
                >
                  <span>Request appointment</span>

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