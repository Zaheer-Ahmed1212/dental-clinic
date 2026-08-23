import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import dentallogo from '../images/dentallogo.png'

const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Process', href: '#process' },
  { label: 'Results', href: '#results' },
  { label: 'Reviews', href: '#reviews' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-porcelain/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(32,33,29,0.08)]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <a href="#top" className="flex items-center gap-3 group">
          <img src={dentallogo} className='w-20 h-20' alt="" />
       
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sen font-bold text-[12px] tracking-wide uppercase text-charcoal/70 hover:text-copper transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+61390001148"
            className="flex items-center gap-2 text-sm text-ink hover:text-copper transition-colors duration-300"
          >
            <Phone size={15} strokeWidth={2} />
            <span className="font-mono text-[12px]">0333333333</span>
          </a>
          <a
            href="#appointment"
            className="px-5 py-2.5 rounded-lg bg-ink text-porcelain text-sm tracking-wide hover:bg-copper transition-colors duration-300"
          >
            Book a visit
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-ink"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-porcelain border-t border-ink/10 px-6 pb-8 pt-2">
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.href} className="border-b border-ink/10">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 font-display text-xl text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 mt-6">
            <a href="tel:+3333333333" className="flex items-center gap-2 text-ink">
              <Phone size={16} strokeWidth={1.75} />
              <span className="font-mono text-sm">(03)3333333</span>
            </a>
            <a
              href="#appointment"
              onClick={() => setOpen(false)}
              className="px-5 py-3 bg-ink text-porcelain text-center text-sm tracking-wide"
            >
              Book a visit
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
