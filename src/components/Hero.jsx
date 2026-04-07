import { useEffect, useRef } from 'react'

const stats = [
  { val: '2012',  label: 'Est. Year',      sub: 'Over a decade of excellence' },
  { val: '3MW+',  label: 'Max Capacity',   sub: 'projects handled' },
  { val: '1kW–3MW', label: 'Project Range', sub: 'residential to utility' },
  { val: '100%',  label: 'Turnkey EPC',    sub: 'end-to-end solutions' },
]

export default function Hero({ darkMode }) {
  const heroRef = useRef(null)

  useEffect(() => {
    const items = heroRef.current?.querySelectorAll('.hero-item')
    items?.forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 200 + i * 150)
    })
  }, [])

  const bg = darkMode
    ? 'radial-gradient(ellipse 120% 80% at 65% 40%, rgba(245,158,11,0.07) 0%, transparent 55%), radial-gradient(ellipse 80% 100% at 5% 70%, rgba(255,107,43,0.04) 0%, transparent 50%), #0e0e08'
    : 'radial-gradient(ellipse 120% 80% at 65% 40%, rgba(245,158,11,0.10) 0%, transparent 55%), radial-gradient(ellipse 80% 100% at 5% 70%, rgba(255,107,43,0.06) 0%, transparent 50%), #f8f7f2'

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden" style={{background: bg}}>

      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none"/>
      <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{background:'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)'}}/>

      <div className="absolute right-[5%] lg:right-[8%] top-1/2 -translate-y-1/2 w-64 h-64 lg:w-96 lg:h-96 pointer-events-none animate-float">
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
          <defs>
            <radialGradient id="sunCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fcd47a"/>
              <stop offset="40%" stopColor="#f59e0b"/>
              <stop offset="100%" stopColor="#d97706" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.15"/>
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="200" cy="200" r="190" fill="url(#sunGlow)"/>
          <circle cx="200" cy="200" r="150" stroke="#f59e0b" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.2" className="animate-spin-slow"/>
          <circle cx="200" cy="200" r="120" stroke="#f59e0b" strokeWidth="0.5" strokeDasharray="2 6" opacity="0.15" style={{animation:'spin 14s linear infinite reverse'}}/>
          {Array.from({length:16}).map((_,i) => {
            const angle = (i * 360/16) * Math.PI/180
            const inner = 72, outer = 90 + (i%2===0?24:12)
            const x1=200+inner*Math.cos(angle), y1=200+inner*Math.sin(angle)
            const x2=200+outer*Math.cos(angle), y2=200+outer*Math.sin(angle)
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#f59e0b" strokeWidth={i%2===0?"2.5":"1.5"} strokeLinecap="round"
                opacity={i%2===0?"0.7":"0.4"}
              />
            )
          })}
          <circle cx="200" cy="200" r="68" fill="url(#sunCore)" opacity="0.9"/>
          <circle cx="200" cy="200" r="50" fill="#fcd47a" opacity="0.6"/>
          <circle cx="200" cy="200" r="32" fill="white" opacity="0.8"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">

          <div className="hero-item opacity-0 translate-y-6 transition-all duration-700 mb-8">
            <span className="gold-badge">
              <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse"/>
              Est. 2012 · Headquartered in UP Lucknow · India
            </span>
          </div>

          <h1 className="hero-item opacity-0 translate-y-6 transition-all duration-700 display-title mb-6" style={{color: darkMode ? 'white' : '#1a1a10'}}>
            Ultimate Power<br/>
            <em className="not-italic text-gold-gradient animate-glow-pulse">Solar Solutions</em>
          </h1>

          <p className="hero-item opacity-0 translate-y-6 transition-all duration-700 font-outfit text-lg md:text-xl leading-relaxed max-w-xl mb-6" style={{color: darkMode ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)'}}>
            Asimos Company is one of India's oldest turnkey Solar PV Power Project companies. We design and deliver quality, affordable, easy-to-maintain solar power solutions for domestic, commercial and industrial customers.
          </p>

          <p className="hero-item opacity-0 translate-y-6 transition-all duration-700 font-outfit text-sm leading-relaxed max-w-xl mb-10" style={{color: darkMode ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.5)'}}>
            Operations across Maharashtra, Gujarat & Karnataka · CAPEX & RESCO Models
          </p>

          <div className="hero-item opacity-0 translate-y-6 transition-all duration-700 flex flex-wrap gap-4 mb-8">
            <a href="#quote" className="btn-gold text-sm px-10 py-4 shadow-gold shimmer-btn" style={{backgroundImage:'linear-gradient(90deg, #f59e0b 0%, #fcd47a 25%, #d97706 50%, #fcd47a 75%, #f59e0b 100%)', backgroundSize:'200% 100%'}}>
              Get Free Quote
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
            <a href="/asimos-company-profile.pdf" download className="btn-outline-gold text-sm px-8 py-4 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Download Profile
            </a>
          </div>

          <div className="hero-item opacity-0 translate-y-6 transition-all duration-700 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8" style={{borderTop: darkMode ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.08)'}}>
            {stats.map((s,i) => (
              <div key={i}>
                <div className="stat-num text-3xl md:text-4xl mb-1">{s.val}</div>
                <div className="font-outfit text-sm font-medium" style={{color: darkMode ? 'white' : '#1a1a10'}}>{s.label}</div>
                <div className="font-outfit text-xs" style={{color: darkMode ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)'}}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="font-outfit text-[10px] tracking-[0.2em] text-white uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gold-500 to-transparent"/>
      </div>
    </section>
  )
}
