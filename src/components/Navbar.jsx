
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../images/dentallogo.png'

const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Process', href: '#process' },
  { label: 'Results', href: '#results' },
  { label: 'Reviews', href: '#reviews' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-transparent">
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <a href="#top" className="flex items-center">
          <img
            src={logo}
            className="w-20 h-20 object-contain"
            alt="Dental Clinic"
          />
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans font-medium text-[14px] tracking-normal text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.65)] hover:text-[#56B8D0] transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+61390001148"
            className="flex items-center gap-2 text-white font-sans font-medium text-[14px] drop-shadow-[0_2px_5px_rgba(0,0,0,0.65)] hover:text-[#56B8D0] transition-colors duration-300"
          >
            <Phone size={16} strokeWidth={2} />
            <span>0333333333</span>
          </a>

          <a
            href="#appointment"
            className="px-5 py-2.5 rounded-lg bg-[#315568] text-white font-sans font-medium text-[14px] tracking-normal shadow-lg hover:bg-[#3FA4BE] transition-colors duration-300"
          >
            Book a visit
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.65)]"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? (
            <X size={27} strokeWidth={1.75} />
          ) : (
            <Menu size={27} strokeWidth={1.75} />
          )}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-[#EAF7FB]/95 backdrop-blur-sm border-t border-[#C8E4EC] px-6 pb-8 pt-2">
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.href} className="border-b border-[#C8E4EC]">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-sans font-medium text-[18px] text-[#315568] hover:text-[#3FA4BE] transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 mt-6">
            <a
              href="tel:+3333333333"
              className="flex items-center gap-2 text-[#315568] font-sans text-[15px]"
            >
              <Phone size={16} strokeWidth={1.75} />
              <span>(03)3333333</span>
            </a>

            <a
              href="#appointment"
              onClick={() => setOpen(false)}
              className="px-5 py-3 bg-[#315568] text-white text-center font-sans font-medium text-[15px] hover:bg-[#3FA4BE] transition-colors duration-300"
            >
              Book a visit
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

