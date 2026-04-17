import { useState, useEffect } from 'react'
import logo from '../images/logo.png'

const links = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'How It Works', href: '#process' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#whyus' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const BLUE = '#0A74AC'
const BLUE_MID = '#2496D4'
const BLUE_DARK = '#04334B'
const GOLD = '#E8921A'

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navBg = scrolled ? (darkMode ? 'rgba(2,24,36,0.97)' : 'rgba(232,244,251,0.97)') : 'transparent'
  const navBorder = scrolled ? 'rgba(10,116,172,0.2)' : 'transparent'
  const textColor = darkMode ? '#D6EDF8' : BLUE_DARK
  const textMuted = darkMode ? 'rgba(214,237,248,0.55)' : 'rgba(10,116,172,0.65)'

  const linkHoverEnter = e => {
    e.target.style.color = BLUE
    e.target.style.background = 'rgba(10,116,172,0.08)'
  }
  const linkHoverLeave = e => {
    e.target.style.color = textMuted
    e.target.style.background = 'transparent'
  }

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 50,
      background: navBg,
      borderBottom: `1px solid ${navBorder}`,
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      padding: scrolled ? '10px 0' : '18px 0',
      transition: 'all 0.4s ease',
      boxShadow: scrolled ? '0 4px 30px rgba(4,51,75,0.1)' : 'none',
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center">
          <img src={logo} alt="Asimos Company" className="h-14 w-auto object-contain" style={{
            filter: darkMode ? 'brightness(0) invert(1)' : 'none'
          }} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className="font-inter text-sm px-4 py-2 rounded-lg transition-all duration-200"
              style={{ color: textMuted }}
              onMouseEnter={linkHoverEnter}
              onMouseLeave={linkHoverLeave}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center gap-3">

          {/* Dark Mode Toggle */}
          <button onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
            style={{
              border: '1px solid rgba(10,116,172,0.25)',
              color: darkMode ? BLUE_MID : BLUE,
              background: darkMode ? 'rgba(10,116,172,0.15)' : 'rgba(10,116,172,0.06)',
            }}>
            {darkMode
              ? <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 000 14A7 7 0 0012 5z" />
              </svg>
              : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            }
          </button>

          {/* Company Profile Download */}
          <a href="/asimos-company-profile.pdf" download
            className="font-inter text-sm px-4 py-2 rounded-xl flex items-center gap-2 transition-all"
            style={{
              border: '1px solid rgba(10,116,172,0.25)',
              color: BLUE,
              background: 'rgba(10,116,172,0.06)',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(10,116,172,0.12)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(10,116,172,0.06)'}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Company Profile
          </a>

          {/* CTA */}
          <a href="#quote"
            className="font-inter font-semibold text-sm px-6 py-3 rounded-full transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: `linear-gradient(135deg, ${BLUE} 0%, ${BLUE_MID} 50%, ${BLUE_DARK} 100%)`,
              color: 'white',
              boxShadow: '0 4px 16px rgba(10,116,172,0.25)',
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 6px 24px rgba(10,116,172,0.4)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(10,116,172,0.25)'}>
            Get Free Quote
          </a>
        </div>

        {/* Mobile Toggle Buttons */}
        <div className="lg:hidden flex items-center gap-2">
          <button onClick={() => setDarkMode(!darkMode)}
            className="w-9 h-9 flex items-center justify-center rounded-xl text-sm"
            style={{ border: '1px solid rgba(10,116,172,0.25)', color: BLUE }}>
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button onClick={() => setOpen(!open)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-xl transition-colors"
            style={{ border: '1px solid rgba(10,116,172,0.25)' }}
            aria-label="Menu">
            <span className={`block w-5 h-px transition-all duration-300 ${open ? 'rotate-45 translate-y-[6px]' : ''}`}
              style={{ background: textColor }} />
            <span className={`block w-5 h-px transition-all duration-300 ${open ? 'opacity-0' : ''}`}
              style={{ background: textColor }} />
            <span className={`block w-5 h-px transition-all duration-300 ${open ? '-rotate-45 -translate-y-[6px]' : ''}`}
              style={{ background: textColor }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="border-t px-4 py-6 space-y-1"
          style={{
            background: darkMode ? 'rgba(2,24,36,0.98)' : 'rgba(232,244,251,0.98)',
            borderColor: 'rgba(10,116,172,0.15)',
          }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="block font-inter text-sm py-3 px-4 rounded-xl transition-all border-b last:border-0"
              style={{ color: textMuted, borderColor: 'rgba(10,116,172,0.1)' }}>
              {l.label}
            </a>
          ))}
          <div className="pt-4 space-y-3">
            <a href="/asimos-company-profile.pdf" download
              className="flex items-center justify-center gap-2 font-inter text-sm py-3 rounded-xl transition-all"
              style={{ border: '1px solid rgba(10,116,172,0.25)', color: BLUE }}>
              📄 Download Company Profile
            </a>
            <a href="tel:8318839609"
              className="flex items-center justify-center gap-2 font-inter text-sm py-3 rounded-xl"
              style={{ border: '1px solid rgba(10,116,172,0.25)', color: textMuted }}>
              📞 8318839609
            </a>
            <a href="#quote" onClick={() => setOpen(false)}
              className="flex items-center justify-center font-inter font-semibold text-sm py-4 rounded-full transition-all"
              style={{
                background: `linear-gradient(135deg, ${GOLD} 0%, ${BLUE} 50%, ${BLUE_DARK} 100%)`,
                color: 'white',
                boxShadow: '0 4px 16px rgba(10,116,172,0.25)',
              }}>
              Get Free Quote →
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}