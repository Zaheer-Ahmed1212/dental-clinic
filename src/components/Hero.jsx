
import { ArrowUpRight, Phone } from 'lucide-react'
import Reveal from './ui/Reveal'
import hero from '../images/Hero2.jpg'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-[#F7FCFE]">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Dental care"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#315568]/95 via-[#315568]/70 via-50% to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] items-center">
        <div className="mx-auto w-full max-w-[1400px] px-5 pt-28 pb-24 sm:px-6 md:px-10 md:pt-32 lg:pt-28">
          <div className="max-w-[720px]">
            <Reveal>
              <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#9DDFEC] drop-shadow-[0_2px_7px_rgba(0,0,0,0.9)] sm:text-[10px] md:text-[11px] md:tracking-[0.22em]">
                Thoughtful dentistry, beautifully done
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-4 max-w-[650px] font-serif text-[44px] leading-[0.98] tracking-[-0.035em] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] sm:text-[54px] md:mt-5 md:text-[68px] lg:max-w-[720px] lg:text-[86px] xl:text-[94px]">
                A healthier smile starts with feeling looked after.
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 max-w-[500px] font-sans text-[14px] leading-[1.65] text-white/85 drop-shadow-[0_3px_9px_rgba(0,0,0,0.9)] sm:text-[15px] md:mt-7 md:text-[17px] lg:text-[18px]">
                Modern dentistry with a calmer approach. From routine hygiene
                to complete smile transformations, every treatment is planned
                around you.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center">
                <a
                  href="#appointment"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#315568] px-6 py-3.5 font-sans text-[13px] font-medium text-white shadow-xl transition-all duration-300 hover:bg-[#3FA4BE] sm:w-auto sm:text-[14px]"
                >
                  Book a visit
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.6}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <a
                  href="tel:+61390001148"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3.5 font-sans text-[13px] font-medium text-white transition-all duration-300 hover:border-[#9DDFEC] hover:text-[#9DDFEC] sm:w-auto sm:text-[14px]"
                >
                  <Phone size={16} strokeWidth={1.7} />
                  <span>0333333333</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-0 right-0 z-10 sm:bottom-7">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 sm:px-6 md:px-10">
          <span className="font-sans text-[8px] uppercase tracking-[0.18em] text-white/60 sm:text-[9px] md:text-[10px] md:tracking-[0.2em]">
            Your smile, our priority
          </span>

          <a
            href="#services"
            className="hidden font-sans text-[9px] uppercase tracking-[0.18em] text-white/60 transition-colors duration-300 hover:text-[#9DDFEC] sm:block md:text-[10px] md:tracking-[0.2em]"
          >
            Explore our care ↓
          </a>
        </div>
      </div>
    </section>
  )
}

