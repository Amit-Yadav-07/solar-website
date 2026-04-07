import { useState, useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'Nadava College',
    location: 'India',
    type: 'Educational',
    size: '1 MW',
    desc: 'Large-scale rooftop solar installation for an educational institution. Full turnkey EPC solution with grid connectivity and government subsidy liaison.',
    color: '#101820',
    accent: '#38bdf8',
  },
  {
    title: 'Sahu Cinema (Cinemax)',
    location: 'India',
    type: 'Commercial',
    size: '500 kW',
    desc: 'Commercial solar power solution for a cinema complex. On-grid system with advanced monitoring and after-sales service support.',
    color: '#1a1208',
    accent: '#f59e0b',
  },
  {
    title: 'Janeswar Park',
    location: 'India',
    type: 'Utility',
    size: '500 kW',
    desc: 'Ground-mounted solar installation for a public park. Robust mounting structures with decentralized power generation and battery backup.',
    color: '#0e1810',
    accent: '#4ade80',
  },
  {
    title: 'Itawa Cold Storage',
    location: 'India',
    type: 'Industrial',
    size: '500 kW',
    desc: 'Industrial solar solution for cold storage facility. High-efficiency panels to offset heavy power consumption under CAPEX model.',
    color: '#180e10',
    accent: '#f87171',
  },
  {
    title: 'Ansal API (Sushant City)',
    location: 'India',
    type: 'Commercial',
    size: '100 kW',
    desc: 'Solar PV installation for a modern township project. Rooftop on-grid system with full engineering design and construction supervision.',
    color: '#1a1018',
    accent: '#c084fc',
  },
  {
    title: 'Richi Rich Restaurant',
    location: 'India',
    type: 'Commercial',
    size: '100 kW',
    desc: 'Rooftop solar for a fine dining and outdoor catering business. Solar thermal and power combination reducing energy costs significantly.',
    color: '#1a1208',
    accent: '#fb923c',
  },
]

const types = ['All', 'Commercial', 'Industrial', 'Educational', 'Utility']

export default function Projects({ darkMode }) {
  const ref = useScrollReveal()
  const [active, setActive] = useState('All')
  const gridRef = useRef(null)

  const filtered = active === 'All' ? projects : projects.filter(p => p.type === active)

  // FIX: re-observe reveal elements whenever the filter changes
  // so newly rendered cards animate in correctly
  useEffect(() => {
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('.proj-card')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.05 }
    )
    cards.forEach(card => {
      card.classList.remove('visible')
      observer.observe(card)
    })
    return () => observer.disconnect()
  }, [active])

  return (
    <section id="projects" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"/>
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label reveal mb-4">Our Work</p>
          <h2 className="section-title reveal mb-6" style={{color: darkMode ? 'white' : '#1a1a10'}}>
            Real Projects,<br/>
            <span className="text-gold-gradient">Real Results</span>
          </h2>
          <p className="reveal font-outfit max-w-lg mx-auto" style={{color: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.6)'}}>
            From educational institutions to industrial cold storage — Asimos Company has powered diverse sectors across India.
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {types.map(t => (
            <button key={t} onClick={() => setActive(t)}
              className={`font-outfit text-xs px-5 py-2 rounded-full border transition-all duration-200 ${
                active === t
                  ? 'border-gold-500 bg-gold-500/10 text-gold-400'
                  : darkMode
                    ? 'border-white/10 text-white/40 hover:border-white/20 hover:text-white/60'
                    : 'border-black/10 text-black/40 hover:border-black/20 hover:text-black/60'
              }`}>
              {t}
            </button>
          ))}
        </div>

        {/* Grid — use title as key so React creates fresh DOM nodes on filter change */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div key={p.title}
              className="proj-card reveal glass-card p-6 group cursor-default"
              style={{background: darkMode ? `${p.color}` : 'rgba(255,255,255,0.7)'}}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="font-outfit text-xs px-3 py-1 rounded-full border mb-3 inline-block"
                    style={{color: p.accent, borderColor: `${p.accent}40`, background: `${p.accent}10`}}>
                    {p.type}
                  </span>
                  <h3 className="font-cormorant font-bold text-xl" style={{color: darkMode ? 'white' : '#1a1a10'}}>{p.title}</h3>
                  <p className="font-outfit text-xs mt-0.5" style={{color: darkMode ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)'}}>{p.location}</p>
                </div>
                <div className="text-right">
                  <div className="font-cormorant font-bold text-2xl" style={{color: p.accent}}>{p.size}</div>
                  <div className="font-outfit text-xs" style={{color: darkMode ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)'}}>capacity</div>
                </div>
              </div>
              <p className="font-outfit text-sm leading-relaxed" style={{color: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.6)'}}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
