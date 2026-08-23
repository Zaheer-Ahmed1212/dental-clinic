import { Instagram, Facebook, ArrowRight } from 'lucide-react'
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
    <footer className="bg-ink text-porcelain">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 pb-10">
        <SmileArc variant="divider" stroke="#8B9C8C" className="w-full h-8 opacity-70 mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
       <img src={logo} className='w-20 h-20' alt="" />
            </div>
            <p className="text-sm text-porcelain/55 leading-relaxed max-w-xs">
              A boutique dental practice in Fitzroy, built around longer
              appointments, transparent plans and one clinician from start to
              finish.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 border border-porcelain/25 rounded-full flex items-center justify-center hover:border-copper-light hover:text-copper-light transition-colors"
              >
                <Instagram size={15} strokeWidth={1.6} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 border border-porcelain/25 rounded-full flex items-center justify-center hover:border-copper-light hover:text-copper-light transition-colors"
              >
                <Facebook size={15} strokeWidth={1.6} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-widest2 text-porcelain/45 mb-5">
              Studio
            </h4>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-porcelain/75 hover:text-copper-light transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] uppercase tracking-widest2 text-porcelain/45 mb-5">
              Treatments
            </h4>
            <ul className="flex flex-col gap-3">
              {SERVICE_LINKS.map((service) => (
                <li key={service}>
                  <a href="#services" className="text-sm text-porcelain/75 hover:text-copper-light transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-mono text-[10px] uppercase tracking-widest2 text-porcelain/45 mb-5">
              Studio notes
            </h4>
            <p className="text-sm text-porcelain/60 leading-relaxed mb-4">
              Occasional notes on appointment openings and dental care — no spam.
            </p>
            <form className="flex items-center border-b border-porcelain/25 pb-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="you@email.com"
                className="bg-transparent flex-1 text-sm placeholder:text-porcelain/35 outline-none"
              />
              <button type="submit" aria-label="Subscribe" className="text-copper-light">
                <ArrowRight size={16} strokeWidth={1.75} />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t border-porcelain/10">
          <p className="font-mono text-[11px] text-porcelain/40">
            © {new Date().getFullYear()} Solace Dental Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-mono text-[11px] text-porcelain/40 hover:text-porcelain/70 transition-colors">
              Privacy
            </a>
            <a href="#" className="font-mono text-[11px] text-porcelain/40 hover:text-porcelain/70 transition-colors">
              Terms
            </a>
            <span className="font-mono text-[11px] text-porcelain/40">148 Draper St, Fitzroy VIC</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
