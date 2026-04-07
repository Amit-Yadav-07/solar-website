import { useScrollReveal } from '../hooks/useScrollReveal'

const reasons = [
  {
    icon: '🏗️',
    title: 'Turnkey EPC Expertise',
    desc: 'We handle everything — from site selection, engineering design, procurement, construction, to commissioning and after-sales service.',
  },
  {
    icon: '🌞',
    title: 'Top Brand Stockist',
    desc: 'Super Stockist for Growatt, Solis, Sofar, Hitachi, Huawei inverters and Trina, Waaree, Vikram, Adani, Longi panels.',
  },
  {
    icon: '📋',
    title: 'Govt. Liaison & Subsidies',
    desc: 'We help navigate government approvals, subsidies and incentives including UPNEDA and other state-level programs.',
  },
  {
    icon: '⚡',
    title: 'Wide Project Range',
    desc: 'Capable of handling projects from 1kW to 3MW and beyond — residential, commercial, industrial and utility scale.',
  },
  {
    icon: '🤝',
    title: 'Transparency & Reliability',
    desc: 'Our core values — Transparency, Flexibility, Reliability, Sustainability — guide every project we undertake.',
  },
  {
    icon: '🌱',
    title: 'Green Future Commitment',
    desc: 'We help customers offset costly grid/diesel/kerosene energy, reduce bills, and contribute to a cleaner, greener planet.',
  },
]

export default function WhyUs({ darkMode }) {
  const ref = useScrollReveal()
  const textMain = darkMode ? 'white' : '#1a1a10'
  const textMuted = darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.55)'

  return (
    <section id="whyus" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"/>
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="section-label reveal mb-4">Why Asimos</p>
          <h2 className="section-title reveal mb-6" style={{color: textMain}}>
            Your Trusted Solar<br/>
            <span className="text-gold-gradient">EPC Partner Since 2012</span>
          </h2>
          <p className="reveal font-outfit max-w-xl mx-auto" style={{color: textMuted}}>
            Asimos Company treats every client as a Business Family Member, extending wholehearted support throughout the entire project lifecycle.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="reveal glass-card p-7 group hover:border-gold-500/30 transition-all duration-300"
              style={{
                background: darkMode ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.7)',
                borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
              }}>
              <div className="text-3xl mb-4">{r.icon}</div>
              <h3 className="font-cormorant font-bold text-xl mb-3" style={{color: textMain}}>{r.title}</h3>
              <p className="font-outfit text-sm leading-relaxed" style={{color: textMuted}}>{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Values strip */}
        <div className="mt-16 reveal">
          <div className="rounded-2xl p-8 text-center"
            style={{background: 'linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(217,119,6,0.04) 100%)', border: '1px solid rgba(245,158,11,0.2)'}}>
            <h3 className="font-cormorant font-bold text-2xl mb-4" style={{color: textMain}}>Our Core Values</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Transparency', 'Flexibility', 'Reliability', 'Sustainability'].map(v => (
                <span key={v} className="font-outfit font-semibold text-sm px-6 py-3 rounded-full border border-gold-500/30 text-gold-400 bg-gold-500/5">
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
