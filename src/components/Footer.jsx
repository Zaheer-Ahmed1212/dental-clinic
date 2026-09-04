import { Instagram, Facebook } from 'lucide-react'
import SmileArc from './ui/SmileArc'
import logo from '../images/dentallogo.png'

const QUICK_LINKS = [
  { label: 'About the studio', href: '#about' },
  { label: 'Meet the team', href: '#team' },
  { label: 'Treatment process', href: '#process' },
  { label: 'Patient reviews', href: '#reviews' },
]

const SERVICE_LINKS = [
  'Preventive & hygiene',
  'Cosmetic dentistry',
  'Restorative dentistry',
  'Orthodontics',
  'Dental implants',
  'Emergency care',
]

export default function Footer() {
  return (
    <footer className="bg-[#315568] text-white">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 md:px-10">
        <SmileArc
          variant="divider"
          stroke="#8DD8E8"
          className="mb-16 h-8 w-full opacity-60"
        />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-6 lg:col-span-6">
            <div className="mb-5 flex items-center gap-3">
              <img
                src={logo}
                className="h-20 w-20"
                alt="Solace Dental Studio"
              />
            </div>

            <p className="max-w-xs font-sans text-sm leading-relaxed text-white/65">
              A boutique dental practice in Fitzroy, built around longer
              appointments, transparent plans and one clinician from start to
              finish.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.instagram.com/za.heer7526?igsh=bHA0aXUyemZwN2Ux"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-[#8DD8E8] hover:text-[#8DD8E8]"
              >
                <Instagram size={15} strokeWidth={1.6} />
              </a>

              <a
                href="https://www.facebook.com/share/1BiBC4CXsP/"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-[#8DD8E8] hover:text-[#8DD8E8]"
              >
                <Facebook size={15} strokeWidth={1.6} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
              Studio
            </h4>

            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-white/75 transition-colors hover:text-[#8DD8E8]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="mb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
              Treatments
            </h4>

            <ul className="flex flex-col gap-3">
              {SERVICE_LINKS.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="font-sans text-sm text-white/75 transition-colors hover:text-[#8DD8E8]"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 md:flex-row">
          <p className="font-mono text-[11px] text-white/40">
            © {new Date().getFullYear()} Solace Dental Studio. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-mono text-[11px] text-white/40 transition-colors hover:text-white/70"
            >
              Privacy
            </a>

            <a
              href="#"
              className="font-mono text-[11px] text-white/40 transition-colors hover:text-white/70"
            >
              Terms
            </a>

            <span className="font-mono text-[11px] text-white/40">
              148 Draper St, Fitzroy VIC
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}