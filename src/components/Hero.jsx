import { ArrowUpRight, Phone, Star } from 'lucide-react'
import SmileArc from './ui/SmileArc'
import Reveal from './ui/Reveal'
import heroimg from '../images/dentalhero.jpg'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-porcelain pt-36 pb-20 md:pt-44 md:pb-28"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-60 pointer-events-none"
        style={{ backgroundImage: `url(${heroimg})` }}
      />

      {/* faint oversized wordmark in the backdrop */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-6 -left-4 font-display text-[26vw] leading-none text-ink/[0.03] hidden md:block"
      >
        Solace
      </span>

      {/* Main content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-y-16 gap-x-8">

        {/* left column — copy */}
        <div className="lg:col-span-7 flex flex-col gap-8">

          <Reveal>
            <span className="font-mono text-[11px] tracking-widest2 uppercase text-copper">
              Boutique dental care — Fitzroy, Melbourne
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="font-display font-medium text-ink text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.04] max-w-2xl">
              Dentistry designed around
              <span className="italic text-copper"> unhurried</span> certainty.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-lg  font-semibold text-charcoal/80 italic max-w-md leading-relaxed">
              No rushed ten-minute slots, no waiting-room anxiety. Just a small
              studio, longer appointments, and a plan you actually understand
              before we start.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-wrap items-center gap-4 pt-2">

              <a
                href="#appointment"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-ink text-porcelain hover:bg-copper transition-colors duration-300"
              >
                <span className="text-sm tracking-wide">
                  Book a consultation
                </span>

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.75}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="tel:+61390001148"
                className="inline-flex rounded-lg  items-center gap-2 px-6 py-3.5 border border-ink/25 text-ink hover:border-ink transition-colors duration-300"
              >
                <Phone size={16} strokeWidth={1.75} />

                <span className="font-mono text-sm">
                  03333333333
                </span>
              </a>

            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4 pt-8 border-t border-ink/10 mt-4">

              <div className="flex items-center gap-2">

                <div className="flex text-copper">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <span className="font-mono text-xs text-charcoal/60">
                  4.9 · 640 reviews
                </span>

              </div>

              <span className="font-mono text-xs text-charcoal/60">
                18 years in Fitzroy
              </span>

              <span className="font-mono text-xs text-charcoal/60">
                Same-week appointments
              </span>

            </div>
          </Reveal>

        </div>

        {/* right column — signature arc diagram composition */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[360px]">

          <Reveal
            delay={200}
            className="relative w-full max-w-md"
          >
            <SmileArc
              variant="hero"
              className="w-full h-auto"
            />

            {/* floating annotation labels around the arc */}

            <div className="absolute -top-2 left-2 md:left-6 bg-porcelain border border-ink/15 px-3 py-2 max-w-[150px] animate-floatY">
              <p className="font-mono text-[10px] uppercase tracking-wide text-copper">
                01
              </p>

              <p className="text-xs text-charcoal/80 leading-snug">
                Digital scanning, no messy impressions
              </p>
            </div>

            <div
              className="absolute top-1/3 -right-2 md:right-0 bg-ink text-porcelain px-3 py-2 max-w-[150px] animate-floatY"
              style={{ animationDelay: '1.2s' }}
            >
              <p className="font-mono text-[10px] uppercase tracking-wide text-copper-light">
                02
              </p>

              <p className="text-xs leading-snug">
                Porcelain veneers, matched by hand
              </p>
            </div>

            <div
              className="absolute bottom-0 left-1/4 bg-porcelain border border-ink/15 px-3 py-2 max-w-[160px] animate-floatY"
              style={{ animationDelay: '2.4s' }}
            >
              <p className="font-mono text-[10px] uppercase tracking-wide text-copper">
                03
              </p>

              <p className="text-xs text-charcoal/80 leading-snug">
                Same-day whitening before big days
              </p>
            </div>

          </Reveal>

          {/* next-availability card */}
          <Reveal
            delay={420}
            className="absolute -bottom-6 md:-bottom-10 right-0 md:right-4 bg-ink text-porcelain px-5 py-4 w-56 shadow-[0_20px_60px_-15px_rgba(18,53,52,0.5)]"
          >
            <p className="font-mono text-[10px] tracking-widest2 uppercase text-sage-light">
              Next available
            </p>

            <p className="font-display text-xl mt-1">
              Tomorrow, 10:30am
            </p>

            <a
              href="#appointment"
              className="text-xs text-copper-light underline underline-offset-4 mt-2 inline-block"
            >
              Claim this slot
            </a>

          </Reveal>

        </div>

      </div>
    </section>
  )
}