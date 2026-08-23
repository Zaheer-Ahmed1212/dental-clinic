import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const SERVICES = [
  {
    index: '01',
    name: 'Preventive & Hygiene',
    description:
      'Routine exams, cleans and fluoride therapy built around your calendar — most patients are in and out within forty minutes.',
    tag: 'Every 6 months',
  },
  {
    index: '02',
    name: 'Cosmetic Dentistry',
    description:
      'Veneers, bonding and smile design planned digitally first, so you approve the shape and shade before we touch a single tooth.',
    tag: 'Smile design',
  },
  {
    index: '03',
    name: 'Restorative Dentistry',
    description:
      'Tooth-coloured fillings, crowns and bridges finished to match your bite and your neighbouring teeth, not a catalogue shade.',
    tag: 'Fillings & crowns',
  },
  {
    index: '04',
    name: 'Orthodontics',
    description:
      'Clear aligner therapy for adults and teens, with in-house monitoring so you are not left guessing between visits.',
    tag: 'Clear aligners',
  },
  {
    index: '05',
    name: 'Dental Implants',
    description:
      'Single-tooth to full-arch implant restoration, planned with 3D imaging and placed by our in-house surgical team.',
    tag: 'Surgical + restorative',
  },
  {
    index: '06',
    name: 'Emergency Care',
    description:
      'Chipped a tooth over the weekend? We hold same-day emergency slots every weekday morning for existing patients.',
    tag: 'Same-day relief',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-porcelain py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading
                eyebrow="What we treat"
                title="Six ways we look after your mouth — none of them rushed."
              />
            </Reveal>
          </div>

     
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <Reveal key={service.index} delay={i * 70}>
              <a
                href="#appointment"
                className="
                  group relative block min-h-[330px]
                  overflow-hidden rounded-2xl
                  border border-ink/10
                  bg-white
                  p-7 md:p-8
                  shadow-md
                  shadow-ink
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_20px_50px_rgba(20,25,22,0.12)]
                "
              >

                {/* Background hover layer */}
                <span
                  aria-hidden="true"
                  className="
                    absolute inset-0
                    bg-ink
                    translate-y-full
                    group-hover:translate-y-0
                    transition-transform duration-500
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                  "
                />

                {/* Content */}
                <div className="relative z-10 flex h-full flex-col">

                  {/* Top row */}
                  <div className="flex items-center justify-between">
                    <span
                      className="
                        font-sen text-xs
                        text-ink
                        group-hover:text-copper-light
                        transition-colors duration-500
                      "
                    >
                      {service.index}
                    </span>

                    <div
                      className="
                        flex h-10 w-10 items-center justify-center
                        rounded-full
                        border border-ink/10
                        group-hover:border-porcelain/20
                        transition-colors duration-500
                      "
                    >
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.5}
                        className="
                          text-ink
                          group-hover:text-copper-light
                          transition-all duration-500
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                        "
                      />
                    </div>
                  </div>

                  {/* Service name */}
                  <div className="mt-12">
                    <h3
                      className="
                        font-serif
                        text-2xl md:text-[28px]
                        leading-tight
                        text-ink
                        group-hover:text-porcelain
                        transition-colors duration-500
                      "
                    >
                      {service.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className="
                      mt-5
                      text-sm
                      font-serif
                      leading-relaxed
                      text-charcoal/60
                      group-hover:text-porcelain/70
                      transition-colors duration-500
                    "
                  >
                    {service.description}
                  </p>

                  {/* Bottom */}
                  <div className="mt-auto pt-8">
                    <span
                      className="
                        inline-flex
                        rounded-full
                        font-serif
                        border border-ink/10
                        px-3 py-1.5
                        font-mono
                        text-[9px]
                        uppercase
                        tracking-[0.15em]
                        text-charcoal/50
                        group-hover:border-porcelain/20
                        group-hover:text-porcelain/60
                        transition-colors duration-500
                      "
                    >
                      {service.tag}
                    </span>
                  </div>

                </div>
              </a>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}