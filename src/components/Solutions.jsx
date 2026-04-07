import { useScrollReveal } from '../hooks/useScrollReveal'

const solutions = [
  {
    tier: 'Solar EPC',
    tagline: 'Residential, Commercial & Industrial',
    wattage: '1 kW – 3 MW+',
    panels: 'Trina · Waaree · Vikram · Adani · Longi',
    badge: null,
    features: [
      'Urban domestic & rural consumers (off-grid & on-grid)',
      'Hotels, Hospitals, Educational Institutions & PSU',
      'Multi-vertical industrial clients (textile, paper, automobile, brewing, sugar)',
      'Panel, battery backup & mounting structure selection',
      'Government approvals & subsidy liaison',
      'After-sales service guaranteed',
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="10" width="28" height="18" rx="3" fill="none" stroke="#f59e0b" strokeWidth="1.5" opacity="0.6"/>
        <line x1="2" y1="19" x2="30" y2="19" stroke="#f59e0b" strokeWidth="1.5" opacity="0.4"/>
        <line x1="16" y1="10" x2="16" y2="28" stroke="#f59e0b" strokeWidth="1.5" opacity="0.4"/>
        <path d="M12 4 L16 2 L20 4" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    tier: 'Solar Power Systems',
    tagline: 'Complete off-grid & on-grid solutions',
    wattage: 'Home to Utility Scale',
    panels: 'Inverters: Growatt · Solis · Sofar · Hitachi · Huawei',
    badge: '⭐ Most Popular',
    popular: true,
    features: [
      'Home & street lighting systems',
      'Solar lanterns & water pumps',
      'Rooftop on-grid & off-grid systems',
      'Decentralized power generation with battery backup',
      'Micro Grid & Islanding Technology',
      'Wind Solar Hybrid Energy Generation & Optimization',
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <rect x="1" y="8" width="30" height="20" rx="3" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>
        <line x1="1" y1="18" x2="31" y2="18" stroke="#f59e0b" strokeWidth="1.5" opacity="0.5"/>
        <line x1="11" y1="8" x2="11" y2="28" stroke="#f59e0b" strokeWidth="1.5" opacity="0.5"/>
        <line x1="21" y1="8" x2="21" y2="28" stroke="#f59e0b" strokeWidth="1.5" opacity="0.5"/>
        <circle cx="16" cy="4" r="3" fill="#f59e0b" opacity="0.7"/>
        <line x1="16" y1="7" x2="16" y2="8" stroke="#f59e0b" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    tier: 'Solar Thermal & Rural',
    tagline: 'Thermal, islanding & village power',
    wattage: 'Custom Solutions',
    panels: 'All Leading Brands',
    badge: null,
    features: [
      'All solar water heating solutions',
      'Rural Home Lighting Solar Power Pack',
      'Site selection & radiation analysis',
      'Power evacuation (PE) system planning',
      'Engineering & design (CAD, SLD, civil)',
      'Full financial modeling & risk analysis',
    ],
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="8" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="4" fill="#f59e0b" opacity="0.5"/>
        {[0,45,90,135,180,225,270,315].map((d,i)=>(
          <line key={i} x1={16+10*Math.cos(d*Math.PI/180)} y1={16+10*Math.sin(d*Math.PI/180)}
            x2={16+13*Math.cos(d*Math.PI/180)} y2={16+13*Math.sin(d*Math.PI/180)}
            stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
        ))}
      </svg>
    ),
  },
]

export default function Solutions({ darkMode }) {
  const ref = useScrollReveal()
  const textMain = darkMode ? 'white' : '#1a1a10'
  const textMuted = darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.55)'
  const cardBg = darkMode ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.7)'
  const cardBorder = darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'

  return (
    <section id="solutions" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"/>
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="section-label reveal mb-4">The Solutions We Offer</p>
          <h2 className="section-title reveal mb-6" style={{color: textMain}}>
            Comprehensive Solar<br/>
            <span className="text-gold-gradient">Power Solutions</span>
          </h2>
          <p className="reveal font-outfit max-w-xl mx-auto" style={{color: textMuted}}>
            From a single home to a 3MW+ utility project — Asimos Company delivers quality, affordable, and easy-to-maintain solar solutions under CAPEX and RESCO models.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <div key={i} className={`reveal rounded-2xl p-8 relative flex flex-col transition-all duration-300 hover:scale-[1.01]`}
              style={{
                background: s.popular
                  ? 'linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(217,119,6,0.05) 100%)'
                  : cardBg,
                border: s.popular ? '1px solid rgba(245,158,11,0.3)' : `1px solid ${cardBorder}`,
              }}>
              {s.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="font-outfit text-xs font-bold bg-gold-gradient text-carbon-950 px-4 py-1.5 rounded-full shadow-gold whitespace-nowrap">
                    {s.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                {s.icon}
              </div>

              <h3 className="font-cormorant font-bold text-2xl mb-1" style={{color: textMain}}>{s.tier}</h3>
              <p className="font-outfit text-sm mb-2 text-gold-400">{s.tagline}</p>
              <div className="mb-1">
                <span className="font-outfit text-xs font-semibold text-gold-500">{s.wattage}</span>
              </div>
              <p className="font-outfit text-xs mb-6" style={{color: textMuted}}>{s.panels}</p>

              <ul className="space-y-3 flex-1 mb-8">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                    </svg>
                    <span className="font-outfit text-sm" style={{color: textMuted}}>{f}</span>
                  </li>
                ))}
              </ul>

              <a href="#quote" className={s.popular ? 'btn-gold w-full text-center shimmer-btn' : 'btn-outline-gold w-full text-center'}>
                Get Free Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
