import { useState, useEffect } from 'react'

const links = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'How It Works', href: '#process' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#whyus' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // FIX: adapt header bg and text to darkMode
  const headerBg = scrolled
    ? darkMode
      ? 'bg-carbon-950/95 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_8px_40px_rgba(0,0,0,0.6)]'
      : 'bg-white/95 backdrop-blur-xl border-b border-black/[0.08] shadow-[0_8px_40px_rgba(0,0,0,0.1)]'
    : 'bg-transparent'

  const navLinkClass = darkMode
    ? 'text-white/70 hover:text-white hover:bg-white/[0.04]'
    : scrolled
      ? 'text-black/70 hover:text-black hover:bg-black/[0.04]'
      : 'text-white/80 hover:text-white hover:bg-white/[0.06]'

  const logoTextClass = darkMode
    ? 'text-white'
    : scrolled ? 'text-gray-900' : 'text-white'

  const logoSubClass = darkMode
    ? 'text-gold-500/70'
    : scrolled ? 'text-gold-600/80' : 'text-gold-400/80'

  const iconBtnClass = darkMode
    ? 'border-white/10 hover:border-gold-500/30 text-white/60 hover:text-gold-400'
    : scrolled
      ? 'border-black/10 hover:border-gold-500/40 text-black/50 hover:text-gold-600'
      : 'border-white/10 hover:border-gold-500/30 text-white/60 hover:text-gold-400'

  const ghostBtnClass = darkMode
    ? 'text-white/60 hover:text-white'
    : scrolled ? 'text-black/60 hover:text-black' : 'text-white/60 hover:text-white'

  const hamburgerLineClass = darkMode
    ? 'bg-white'
    : scrolled ? 'bg-gray-900' : 'bg-white'

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${headerBg} ${scrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gold-500/10 border border-gold-500/20">
            <svg viewBox="0 0 36 36" fill="none" className="w-7 h-7">
              <circle cx="18" cy="18" r="10" fill="#f59e0b" opacity="0.15"/>
              <circle cx="18" cy="18" r="6" fill="#f59e0b" opacity="0.8"/>
              {[0,45,90,135,180,225,270,315].map((deg,i) => (
                <line key={i} x1="18" y1="18"
                  x2={18 + 14*Math.cos(deg*Math.PI/180)}
                  y2={18 + 14*Math.sin(deg*Math.PI/180)}
                  stroke="#f59e0b" strokeWidth={i%2===0?"2":"1.2"} strokeLinecap="round"
                  opacity={i%2===0?"0.9":"0.5"}
                />
              ))}
            </svg>
          </div>
          <div className="leading-none">
            <span className={`font-cormorant font-bold text-xl tracking-wide block group-hover:text-gold-400 transition-colors ${logoTextClass}`}>
              Asimos Company
            </span>
            <span className={`font-outfit text-[9px] tracking-[0.3em] uppercase ${logoSubClass}`}>
              Ultimate Power Solutions
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <a key={l.label} href={l.href}
              className={`font-outfit text-sm px-4 py-2 rounded-lg transition-all duration-200 ${navLinkClass}`}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button onClick={() => setDarkMode(!darkMode)}
            className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all ${iconBtnClass}`}
            title={darkMode ? 'Light Mode' : 'Dark Mode'}>
            {darkMode ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 000 14A7 7 0 0012 5z"/>
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
              </svg>
            )}
          </button>

          <a href="/asimos-company-profile.pdf" download
            className={`btn-ghost text-sm border px-4 py-2 rounded-xl flex items-center gap-2 transition-all ${
              darkMode
                ? 'border-white/10 hover:border-gold-500/30'
                : scrolled ? 'border-black/10 hover:border-gold-500/40' : 'border-white/10 hover:border-gold-500/30'
            } ${ghostBtnClass}`}>
            <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            Company Profile
          </a>

          <a href="tel:8318839609" className={`btn-ghost text-sm ${ghostBtnClass}`}>
            <svg className="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            8318839609
          </a>

          <a href="#quote" className="btn-gold text-xs px-6 py-3 shimmer-btn"
            style={{backgroundImage:'linear-gradient(90deg, #f59e0b 0%, #fcd47a 25%, #d97706 50%, #fcd47a 75%, #f59e0b 100%)', backgroundSize:'200% 100%'}}>
            Get Free Quote
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button onClick={() => setDarkMode(!darkMode)}
            className={`w-9 h-9 flex items-center justify-center rounded-xl border text-sm ${iconBtnClass}`}>
            {darkMode ? '☀️' : '🌙'}
          </button>
          <button onClick={() => setOpen(!open)}
            className={`w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-xl border transition-colors ${iconBtnClass}`}
            aria-label="Menu">
            <span className={`block w-5 h-px transition-all duration-300 ${hamburgerLineClass} ${open ? 'rotate-45 translate-y-[6px]':''}`}/>
            <span className={`block w-5 h-px transition-all duration-300 ${hamburgerLineClass} ${open ? 'opacity-0':''}`}/>
            <span className={`block w-5 h-px transition-all duration-300 ${hamburgerLineClass} ${open ? '-rotate-45 -translate-y-[6px]':''}`}/>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-screen' : 'max-h-0'}`}>
        <div className={`border-t px-4 py-6 space-y-1 ${
          darkMode
            ? 'bg-carbon-950/98 backdrop-blur-xl border-white/[0.06]'
            : 'bg-white/98 backdrop-blur-xl border-black/[0.06]'
        }`}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className={`block font-outfit text-sm py-3 px-4 rounded-xl transition-all border-b last:border-0 ${
                darkMode
                  ? 'text-white/70 hover:text-gold-400 hover:bg-gold-500/5 border-white/[0.04]'
                  : 'text-black/70 hover:text-gold-600 hover:bg-gold-500/5 border-black/[0.04]'
              }`}>
              {l.label}
            </a>
          ))}
          <div className="pt-4 space-y-3">
            <a href="/asimos-company-profile.pdf" download
              className={`flex items-center justify-center gap-2 font-outfit text-sm py-3 border rounded-xl transition-all ${
                darkMode
                  ? 'text-white/60 border-white/10 hover:border-gold-500/30 hover:text-gold-400'
                  : 'text-black/60 border-black/10 hover:border-gold-500/30 hover:text-gold-600'
              }`}>
              📄 Download Company Profile
            </a>
            <a href="tel:8318839609"
              className={`flex items-center justify-center gap-2 font-outfit text-sm py-3 border rounded-xl ${
                darkMode ? 'text-white/60 border-white/10' : 'text-black/60 border-black/10'
              }`}>
              📞 8318839609
            </a>
            <a href="#quote" onClick={() => setOpen(false)} className="btn-gold w-full text-sm py-4">
              Get Free Quote →
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
