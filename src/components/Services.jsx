
import {
  Sparkles,
  ShieldCheck,
  HeartPulse,
  Smile,
  Stethoscope,
  WandSparkles,
  ArrowUpRight
} from 'lucide-react'
import Reveal from './ui/Reveal'

const SERVICES = [
  {
    number: '01',
    icon: Sparkles,
    title: 'Preventive Care',
    text: 'Gentle routine care designed to keep your teeth healthy, strong, and feeling their best.',
  },
  {
    number: '02',
    icon: Smile,
    title: 'Cosmetic Dentistry',
    text: 'Thoughtful smile enhancements that bring balance, confidence, and a natural-looking finish.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Restorative Dentistry',
    text: 'Modern treatments to restore damaged teeth while protecting your long-term oral health.',
  },
  {
    number: '04',
    icon: HeartPulse,
    title: 'Gum Care',
    text: 'Personalised periodontal care focused on healthier gums and a stronger foundation for your smile.',
  },
  {
    number: '05',
    icon: Stethoscope,
    title: 'General Dentistry',
    text: 'Comprehensive dental care for everyday needs, from examinations and hygiene to fillings.',
  },
  {
    number: '06',
    icon: WandSparkles,
    title: 'Smile Transformations',
    text: 'Complete smile planning combining modern techniques with a treatment approach built around you.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#EAF7FB] px-5 py-20 sm:px-6 sm:py-24 md:px-10 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-[760px]">
          <Reveal>
            <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-[#56B8D0] md:text-[11px]">
              What we offer
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-4 max-w-[700px] font-serif text-[42px] leading-[1] tracking-[-0.035em] text-[#315568] sm:text-[52px] md:text-[64px] lg:text-[76px]">
              Care that goes beyond the chair.
            </h2>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-[570px] font-sans text-[15px] leading-[1.7] text-[#6B8793] sm:text-[16px] md:text-[17px]">
              From everyday dental care to complete smile transformations,
              every treatment is considered with your comfort, health, and
              confidence in mind.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon

            return (
              <Reveal key={service.number} delay={220 + index * 70}>
                <article className="group relative h-full min-h-[330px] overflow-hidden rounded-2xl border border-[#C8E4EC] bg-[#DDF2F8] p-7 shadow-[0_8px_35px_rgba(49,85,104,0.06)] transition-all duration-500 hover:-translate-y-2 hover:bg-[#CBEAF3] hover:shadow-[0_20px_50px_rgba(49,85,104,0.12)] sm:p-8 lg:p-9">
                  <div className="flex items-start justify-between">
                    <span className="font-sans text-[11px] tracking-[0.18em] text-[#56B8D0]">
                      {service.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C8E4EC] text-[#315568] transition-all duration-500 group-hover:border-[#56B8D0] group-hover:bg-[#56B8D0] group-hover:text-white">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="mt-12">
                    <h3 className="font-serif text-[29px] leading-[1.05] tracking-[-0.025em] text-[#315568] transition-colors duration-300 group-hover:text-[#3FA4BE] sm:text-[31px]">
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-[370px] font-sans text-[13px] leading-[1.75] text-[#6B8793] sm:text-[14px]">
                      {service.text}
                    </p>
                  </div>

                  <div className="absolute bottom-7 left-7 flex items-center gap-2 font-sans text-[9px] uppercase tracking-[0.18em] text-[#6B8793]/70 transition-colors duration-300 group-hover:text-[#3FA4BE] sm:bottom-8 sm:left-8 lg:bottom-9 lg:left-9">
                    Explore treatment
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                  <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[#56B8D0]/10 transition-transform duration-500 group-hover:scale-[1.8]" />
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

