import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import dr1 from '../images/dr1.jpg'
import dr2 from '../images/dr2.jpg'
import dr3 from '../images/dr3.jpg'
import dr4 from '../images/dr4.jpg'

const TEAM = [
  {
    initials: 'EM',
    name: 'Dr. Elena Marsh',
    role: 'Founder & Lead Dentist',
    credentials: 'DDS, Melbourne · 18 yrs',
    focus: 'Cosmetic & restorative dentistry',
    tint: 'bg-copper',
    img:dr1,
    featured: true,
  },
  {
    initials: 'PN',
    name: 'Dr. Priya Nandan',
    role: 'Orthodontics Lead',
    credentials: 'DMD, Sydney · 11 yrs',
    focus: 'Clear aligners & retainers',
    tint: 'bg-sage-dark',
    img:dr2
  },
  {
    initials: 'OC',
    name: 'Dr. Owen Castellan',
    role: 'Oral Surgery & Implants',
    credentials: 'BDS, Adelaide · 14 yrs',
    focus: 'Full-arch implant restoration',
    tint: 'bg-ink-light',
    img:dr3
  },
  {
    initials: 'NR',
    name: 'Dr. Naomi Reyes',
    role: 'Family & Paediatric Care',
    credentials: 'DDS, Melbourne · 9 yrs',
    focus: 'Gentle care for younger patients',
    tint: 'bg-copper-dark',
    img:dr4
  },
]

export default function Doctors() {
  const featured = TEAM.find((t) => t.featured)
  const rest = TEAM.filter((t) => !t.featured)

  return (
    <section id="team" className="bg-porcelain py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="The clinicians"
            title="Four specialists. One record, one plan, one studio."
            align="center"
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* featured founder */}
<Reveal className="lg:col-span-5">
  <div className="h-full rounded-lg bg-ink text-porcelain p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row gap-8">

    {/* Image */}
    <div className="w-full lg:w-[40%] bg-center h-[280px] sm:h-[320px] md:h-[360px] lg:h-auto lg:min-h-full rounded-lg overflow-hidden shrink-0">
      <img
        src={dr1}
        alt={featured.name}
        className="w-full  object-cover rounded-lg"
      />
    </div>

    {/* Content */}
    <div className="flex-1 flex flex-col justify-center">
      <h3 className="font-display text-2xl sm:text-3xl mb-1">
        {featured.name}
      </h3>

      <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-copper-light mb-4">
        {featured.role}
      </p>

      <p className="text-porcelain/65 text-sm leading-relaxed mb-2">
        {featured.credentials}
      </p>

      <p className="text-porcelain/65 text-sm leading-relaxed">
        {featured.focus}
      </p>
    </div>

  </div>
</Reveal>

          {/* remaining team, horizontal rhythm */}
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-8">
            {rest.map((member, i) => (
              <Reveal key={member.initials} delay={(i + 1) * 100} className="h-full">
                <div className="h-full border border-ink/15 rounded-lg p-3   flex flex-col justify-between hover:border-copper transition-colors duration-300">
                  <div
                    className={`  w-full h-[70%]  overflow-hidden rounded-lg  font-display text-lg text-porcelain`}
                  >
                    <img src={member.img} className='w-full object-cover h-full hover:scale-105 rounded-lg ' alt="" />
                    {member.initials}
                  </div>
                  <div className="mt-8">
                    <h3 className="font-display text-xl text-ink mb-1">{member.name}</h3>
                    <p className="font-mono text-[10px] uppercase tracking-wide text-copper mb-3">
                      {member.role}
                    </p>
                    <p className="text-charcoal/55 text-xs leading-relaxed mb-1">{member.credentials}</p>
                    <p className="text-charcoal/55 text-xs leading-relaxed">{member.focus}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
