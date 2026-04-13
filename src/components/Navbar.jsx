import { useState, useEffect } from 'react'

const links = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'How It Works', href: '#process' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#whyus' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const EM = '#10b981'
const EMD = '#059669'

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navBg = scrolled
    ? (darkMode ? 'rgba(14,26,14,0.97)' : 'rgba(244,247,244,0.97)')
    : 'transparent'
  const navBorder = scrolled ? (darkMode ? 'rgba(16,185,129,0.1)' : 'rgba(16,185,129,0.15)') : 'transparent'
  const textColor = darkMode ? 'white' : '#1a2e1a'
  const textMuted = darkMode ? 'rgba(255,255,255,0.6)' : 'rgba(26,46,26,0.6)'

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: navBg,
      borderBottom: `1px solid ${navBorder}`,
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      padding: scrolled ? '12px 0' : '20px 0',
      transition: 'all 0.5s ease',
      boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.08)' : 'none',
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-xl"
            style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)' }}>
            <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7">
              <circle cx="18" cy="18" r="10" fill={EM} opacity="0.15" />
              <circle cx="18" cy="18" r="6" fill={EM} opacity="0.85" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                <line key={i} x1="18" y1="18"
                  x2={18 + 14 * Math.cos(deg * Math.PI / 180)} y2={18 + 14 * Math.sin(deg * Math.PI / 180)}
                  stroke={EM} strokeWidth={i % 2 === 0 ? "2" : "1.2"} strokeLinecap="round"
                  opacity={i % 2 === 0 ? "0.9" : "0.5"} />
              ))}
            </svg>
          </div>
          <div className="leading-none">
            <span className="font-cormorant font-bold text-xl tracking-wide block transition-colors"
              style={{ color: textColor }}>Asimos Company</span>
            <span className="font-outfit text-[9px] tracking-[0.3em] uppercase"
              style={{ color: EM, opacity: 0.7 }}>Ultimate Power Solutions</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className="font-outfit text-sm px-4 py-2 rounded-lg transition-all duration-200"
              style={{ color: textMuted }}
              onMouseEnter={e => { e.target.style.color = EM; e.target.style.background = 'rgba(16,185,129,0.06)' }}
              onMouseLeave={e => { e.target.style.color = textMuted; e.target.style.background = 'transparent' }}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all"
            style={{
              border: `1px solid rgba(16,185,129,0.2)`, color: darkMode ? '#34d399' : '#059669',
              background: darkMode ? 'rgba(16,185,129,0.08)' : 'rgba(16,185,129,0.06)'
            }}>
            {darkMode
              ? <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 000 14A7 7 0 0012 5z" /></svg>
              : <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            }
          </button>

          {/* PDF Download */}
          <a href="/asimos-company-profile.pdf" download
            className="font-outfit text-sm px-4 py-2 rounded-xl flex items-center gap-2 transition-all"
            style={{ border: `1px solid rgba(16,185,129,0.2)`, color: '#059669', background: 'rgba(16,185,129,0.05)' }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Company Profile
          </a>

          {/* <a href="tel:8318839609" className="font-outfit text-sm flex items-center gap-2 transition-colors" style={{ color: textMuted }}>
            <svg className="w-4 h-4" style={{ color: EM }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            8318839609
          </a> */}

          <a href="#quote"
            className="font-outfit font-semibold text-sm px-6 py-3 rounded-full transition-all hover:scale-[1.02]"
            style={{ background: 'linear-gradient(135deg,#10b981,#34d399,#059669)', color: 'white', boxShadow: '0 4px 16px rgba(16,185,129,0.35)' }}>
            Get Free Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button onClick={() => setDarkMode(!darkMode)}
            className="w-9 h-9 flex items-center justify-center rounded-xl text-sm"
            style={{ border: '1px solid rgba(16,185,129,0.2)', color: EM }}>
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button onClick={() => setOpen(!open)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-xl transition-colors"
            style={{ border: '1px solid rgba(16,185,129,0.2)' }} aria-label="Menu">
            <span className={`block w-5 h-px transition-all duration-300 ${open ? 'rotate-45 translate-y-[6px]' : ''}`} style={{ background: textColor }} />
            <span className={`block w-5 h-px transition-all duration-300 ${open ? 'opacity-0' : ''}`} style={{ background: textColor }} />
            <span className={`block w-5 h-px transition-all duration-300 ${open ? '-rotate-45 -translate-y-[6px]' : ''}`} style={{ background: textColor }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="border-t px-4 py-6 space-y-1"
          style={{ background: darkMode ? 'rgba(14,26,14,0.98)' : 'rgba(244,247,244,0.98)', borderColor: 'rgba(16,185,129,0.1)' }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="block font-outfit text-sm py-3 px-4 rounded-xl transition-all border-b last:border-0"
              style={{ color: textMuted, borderColor: 'rgba(16,185,129,0.06)' }}>
              {l.label}
            </a>
          ))}
          <div className="pt-4 space-y-3">
            <a href="/asimos-company-profile.pdf" download
              className="flex items-center justify-center gap-2 font-outfit text-sm py-3 rounded-xl transition-all"
              style={{ border: '1px solid rgba(16,185,129,0.2)', color: '#059669' }}>
              📄 Download Company Profile
            </a>
            <a href="tel:8318839609"
              className="flex items-center justify-center gap-2 font-outfit text-sm py-3 rounded-xl"
              style={{ border: '1px solid rgba(16,185,129,0.15)', color: textMuted }}>
              📞 8318839609
            </a>
            <a href="#quote" onClick={() => setOpen(false)}
              className="flex items-center justify-center font-outfit font-semibold text-sm py-4 rounded-full"
              style={{ background: 'linear-gradient(135deg,#10b981,#34d399,#059669)', color: 'white' }}>
              Get Free Quote →
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
