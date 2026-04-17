import { useState, useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

// Import your project images here — comment out any you don't have yet
import nadavaImg from '../images/WhatsApp Image 2024-09-22 at 22.40.56.jpeg'
import sahuImg from '../images/WhatsApp Image 2024-09-22 at 22.40.07.jpeg'
import janeswarImg from '../images/WhatsApp Image 2024-09-22 at 22.40.29.jpeg'
// import itawaImg       from '../images/projects/itawa.jpg'
// import ansalImg       from '../images/projects/ansal.jpg'
// import richiImg       from '../images/projects/richi.jpg'

const projects = [
  {
    title: 'Nadava College',
    location: 'Uttar Pradesh, India',
    type: 'Educational',
    size: '1 MW',
    desc: 'Large-scale rooftop solar installation for an educational institution. Full turnkey EPC solution with grid connectivity and government subsidy liaison.',
    accent: '#2496D4',
    image: nadavaImg
  },
  {
    title: 'Sahu Cinema (Cinemax)',
    location: 'Uttar Pradesh, India',
    type: 'Commercial',
    size: '500 kW',
    desc: 'Commercial solar power solution for a cinema complex. On-grid system with advanced monitoring and after-sales service support.',
    accent: '#E8921A',
    image: sahuImg
  },
  {
    title: 'Janeswar Park',
    location: 'Uttar Pradesh, India',
    type: 'Utility',
    size: '500 kW',
    desc: 'Ground-mounted solar installation for a public park. Robust mounting structures with decentralized power generation and battery backup.',
    accent: '#2496D4',
    image: janeswarImg
  },
  {
    title: 'Itawa Cold Storage',
    location: 'Uttar Pradesh, India',
    type: 'Industrial',
    size: '500 kW',
    desc: 'Industrial solar solution for cold storage facility. High-efficiency panels to offset heavy power consumption under CAPEX model.',
    accent: '#E8921A',
    image: null, // replace with: itawaImg
  },
  {
    title: 'Ansal API (Sushant City)',
    location: 'Uttar Pradesh, India',
    type: 'Commercial',
    size: '100 kW',
    desc: 'Solar PV installation for a modern township project. Rooftop on-grid system with full engineering design and construction supervision.',
    accent: '#2496D4',
    image: null, // replace with: ansalImg
  },
  {
    title: 'Richi Rich Restaurant',
    location: 'Uttar Pradesh, India',
    type: 'Commercial',
    size: '100 kW',
    desc: 'Rooftop solar for a fine dining and outdoor catering business. Solar thermal and power combination reducing energy costs significantly.',
    accent: '#E8921A',
    image: null, // replace with: richiImg
  },
]

const types = ['All', 'Commercial', 'Industrial', 'Educational', 'Utility']

// Placeholder SVG when no image is provided
function ImagePlaceholder({ accent, type }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-3"
      style={{ background: `linear-gradient(135deg, rgba(10,116,172,0.08) 0%, rgba(36,150,212,0.04) 100%)` }}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="14" width="40" height="26" rx="4"
          fill="none" stroke={accent} strokeWidth="1.5" opacity="0.5" />
        <line x1="4" y1="27" x2="44" y2="27" stroke={accent} strokeWidth="1.5" opacity="0.3" />
        <line x1="24" y1="14" x2="24" y2="40" stroke={accent} strokeWidth="1.5" opacity="0.3" />
        <line x1="14" y1="14" x2="14" y2="40" stroke={accent} strokeWidth="1" opacity="0.2" />
        <line x1="34" y1="14" x2="34" y2="40" stroke={accent} strokeWidth="1" opacity="0.2" />
        <path d="M19 8 L24 6 L29 8" stroke={accent} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <circle cx="38" cy="10" r="5" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.4" />
        <line x1="38" y1="7" x2="38" y2="8" stroke={accent} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <line x1="38" y1="12" x2="38" y2="13" stroke={accent} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <line x1="35" y1="10" x2="36" y2="10" stroke={accent} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <line x1="40" y1="10" x2="41" y2="10" stroke={accent} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
      </svg>
      <span className="font-inter text-xs font-medium tracking-wider uppercase"
        style={{ color: accent, opacity: 0.6 }}>
        {type} Project
      </span>
    </div>
  )
}

export default function Projects({ darkMode }) {
  const ref = useScrollReveal()
  const [active, setActive] = useState('All')
  const [expanded, setExpanded] = useState(null)
  const gridRef = useRef(null)

  const filtered = active === 'All' ? projects : projects.filter(p => p.type === active)

  useEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('.proj-card')
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.05 }
    )
    cards.forEach(card => { card.classList.remove('visible'); observer.observe(card) })
    return () => observer.disconnect()
  }, [active])

  const textMain = darkMode ? '#D6EDF8' : '#03293E'
  const textMuted = darkMode ? 'rgba(214,237,248,0.55)' : 'rgba(3,41,62,0.6)'
  const cardBg = darkMode ? 'rgba(2,24,36,0.85)' : 'rgba(255,255,255,0.75)'
  const cardBorder = darkMode ? 'rgba(36,150,212,0.15)' : 'rgba(10,116,172,0.1)'

  return (
    <section id="projects" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label reveal mb-4">Our Work</p>
          <h2 className="section-title reveal mb-6" style={{ color: textMain }}>
            Real Projects,<br />
            <span className="text-gold-gradient">Real Results</span>
          </h2>
          <p className="reveal font-inter text-sm max-w-lg mx-auto leading-relaxed" style={{ color: textMuted }}>
            From educational institutions to industrial cold storage — Asimos Company
            has powered diverse sectors across India.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {types.map(t => (
            <button key={t} onClick={() => setActive(t)}
              className="font-inter text-xs px-5 py-2 rounded-full border transition-all duration-200"
              style={{
                borderColor: active === t ? '#0A74AC' : cardBorder,
                background: active === t ? 'rgba(10,116,172,0.1)' : 'transparent',
                color: active === t ? '#0A74AC' : textMuted,
              }}>
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div key={p.title}
              className="proj-card reveal rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.01] cursor-pointer"
              style={{
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                boxShadow: '0 4px 24px rgba(10,116,172,0.06)',
              }}
              onClick={() => setExpanded(expanded === p.title ? null : p.title)}>

              {/* Image area */}
              <div className="relative w-full overflow-hidden"
                style={{ height: '250px', background: darkMode ? 'rgba(2,24,36,0.6)' : '#E8F4FB' }}>
                {p.image
                  ? <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
                  />
                  : null
                }
                {/* Fallback — always rendered, hidden if real image loads */}
                <div className="absolute inset-0"
                  style={{ display: p.image ? 'none' : 'flex' }}>
                  <ImagePlaceholder accent={p.accent} type={p.type} />
                </div>

                {/* Size badge overlay */}
                <div className="absolute top-3 right-3">
                  <span className="font-inter font-bold text-sm px-3 py-1 rounded-full"
                    style={{
                      background: `${p.accent}22`,
                      border: `1px solid ${p.accent}55`,
                      color: p.accent,
                      backdropFilter: 'blur(8px)',
                    }}>
                    {p.size}
                  </span>
                </div>

                {/* Type badge overlay */}
                <div className="absolute top-3 left-3">
                  <span className="font-inter text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: 'rgba(2,24,36,0.65)',
                      color: 'rgba(214,237,248,0.9)',
                      backdropFilter: 'blur(8px)',
                    }}>
                    {p.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-raleway font-bold text-lg leading-tight" style={{ color: textMain }}>
                    {p.title}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 mb-3">
                  <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke={p.accent} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-inter text-xs" style={{ color: textMuted }}>{p.location}</span>
                </div>

                {/* Description — expand on click */}
                <p className="font-inter text-sm leading-relaxed transition-all duration-300"
                  style={{
                    color: textMuted,
                    display: '-webkit-box',
                    WebkitLineClamp: expanded === p.title ? 'unset' : 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: expanded === p.title ? 'visible' : 'hidden',
                  }}>
                  {p.desc}
                </p>

                {/* Read more toggle */}
                <button className="mt-2 font-inter text-xs font-semibold text-left transition-colors"
                  style={{ color: p.accent }}>
                  {expanded === p.title ? 'Show less ↑' : 'Read more ↓'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}