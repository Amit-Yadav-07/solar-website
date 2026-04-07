import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const faqs = [
  {
    cat: 'Cost & Financing',
    q: 'How much does a solar system cost?',
    a: 'After the 30% federal Investment Tax Credit (ITC), most residential systems range from $8,900 to $28,000 depending on size. We also offer $0 down financing — many homeowners start saving on day one with no upfront cost. We\'ll provide an exact quote for your home within 24 hours.',
  },
  {
    cat: 'Cost & Financing',
    q: 'What financing options are available?',
    a: 'We offer three paths: (1) Cash purchase — highest lifetime ROI; (2) Solar loan — $0 down, low-interest, you own the system and keep all incentives; (3) Solar lease/PPA — fixed low rate, no ownership. We\'ll recommend the best option based on your tax situation and financial goals.',
  },
  {
    cat: 'Cost & Financing',
    q: 'What is the federal solar tax credit?',
    a: 'The federal ITC gives you a 30% tax credit on the total cost of your solar system through 2032. For a $25,000 system, that\'s $7,500 back at tax time. It applies to panels, battery storage, inverters, and installation. We handle all the paperwork for you.',
  },
  {
    cat: 'System & Performance',
    q: 'How many solar panels do I need?',
    a: 'It depends on your electricity usage, roof size, and local sun hours. Most homes need between 15–35 panels. Our energy engineers size your system precisely using 12 months of your utility data and satellite roof analysis — ensuring you\'re neither under nor over-provisioned.',
  },
  {
    cat: 'System & Performance',
    q: 'What happens on cloudy days or at night?',
    a: 'Panels still generate 10–25% of their rated output on overcast days. At night, you draw from either your battery storage (if equipped) or the grid. With net metering, excess daytime production earns credits that offset your nighttime grid usage — often to zero.',
  },
  {
    cat: 'System & Performance',
    q: 'How long do solar panels last?',
    a: 'Our premium panels are warrantied for 25 years at ≥87% rated output. In practice, they continue producing well beyond that — just at slightly reduced efficiency. Real-world data shows panels installed in the 1990s still producing 80%+ today.',
  },
  {
    cat: 'Installation',
    q: 'How long does installation take?',
    a: 'The physical installation typically takes 1–3 days. The full process from signed contract to "go live" is 6–12 weeks — most of that is permit processing and utility interconnection, which varies by jurisdiction. We handle every step and keep you updated in real time.',
  },
  {
    cat: 'Installation',
    q: 'Will solar damage my roof?',
    a: 'When installed correctly, solar actually protects the roof section beneath the panels from UV and weather. Our mounts are flashed and sealed to exceed roofing industry standards. Our warranty explicitly covers any roof damage caused by installation for the full 25 years.',
  },
  {
    cat: 'Installation',
    q: 'What if I have a tile, metal, or flat roof?',
    a: 'We install on all roof types including clay tile, concrete tile, standing seam metal, corrugated metal, TPO, and flat roofs. Each requires specific mounting hardware — we assess your roof type during the initial survey and select the appropriate racking system.',
  },
  {
    cat: 'After Installation',
    q: 'Do I need to maintain my solar system?',
    a: 'Minimal maintenance is required. Panels are self-cleaning in most climates (rain does the job). We recommend a professional inspection every 3–5 years, which we offer at preferred rates. Our monitoring system alerts us to any performance drop before you\'d even notice.',
  },
  {
    cat: 'After Installation',
    q: 'What is net metering and how does it work?',
    a: 'Net metering allows you to sell excess solar energy back to the grid. When your panels produce more than you use, your utility meter runs backwards — crediting your account. At the end of the month, you only pay for net consumption. Most of our customers achieve bills under $20/month.',
  },
]

const categories = ['All', ...new Set(faqs.map(f => f.cat))]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const [cat, setCat] = useState('All')
  const ref = useScrollReveal()
  const filtered = cat === 'All' ? faqs : faqs.filter(f => f.cat === cat)

  return (
    <section id="faq" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"/>
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"/>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label reveal mb-4">FAQ</p>
          <h2 className="section-title reveal mb-6">
            Everything You<br/>
            <span className="text-gold-gradient">Need to Know</span>
          </h2>
          <p className="reveal font-outfit text-white/50 max-w-md mx-auto">
            Still have questions? Call us at <a href="tel:8318839609" className="text-gold-400 hover:text-gold-300 transition-colors">8318839609</a> — real humans answer, no bots.
          </p>
        </div>

        {/* Category pills */}
        <div className="reveal flex flex-wrap gap-2 justify-center mb-12">
          {categories.map(c => (
            <button key={c} onClick={() => { setCat(c); setOpen(null) }}
              className={`font-outfit text-sm px-5 py-2 rounded-full border transition-all duration-200 ${
                cat === c
                  ? 'bg-gold-500/20 border-gold-500/40 text-gold-400'
                  : 'border-white/10 text-white/40 hover:border-white/20 hover:text-white/60'
              }`}>{c}</button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3 reveal">
          {filtered.map((faq, i) => (
            <div key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i
                  ? 'border-gold-500/30 bg-gold-500/[0.04]'
                  : 'border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12]'
              }`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left gap-4">
                <div className="flex items-center gap-3">
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-outfit font-bold flex-shrink-0 transition-colors ${
                    open === i ? 'bg-gold-500 text-carbon-950' : 'bg-white/[0.06] text-white/40'
                  }`}>Q</span>
                  <span className="font-outfit font-medium text-white/90 text-sm leading-snug">{faq.q}</span>
                </div>
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  open === i ? 'bg-gold-500/20 text-gold-400 rotate-45' : 'bg-white/[0.06] text-white/30'
                }`}>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4"/>
                  </svg>
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-80' : 'max-h-0'}`}>
                <div className="px-6 pb-6 flex gap-3">
                  <span className="w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-outfit font-bold bg-carbon-700 text-gold-400 flex-shrink-0 mt-0.5">A</span>
                  <p className="font-outfit text-sm text-white/55 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-16 bg-gradient-to-br from-gold-500/10 to-gold-700/5 border border-gold-500/20 rounded-3xl p-10 text-center">
          <h3 className="font-cormorant font-bold text-2xl text-white mb-3">Ready to make the switch?</h3>
          <p className="font-outfit text-white/50 mb-7 text-sm">Get a detailed proposal for your home — no commitment, no pressure, completely free.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#quote" className="btn-gold text-sm px-10 py-4 shadow-gold">
              Get My Free Quote
            </a>
            <a href="tel:8318839609"
              className="btn-outline-gold text-sm px-8 py-4 inline-flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              Call 8318839609
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
