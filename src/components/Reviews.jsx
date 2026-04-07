import { useScrollReveal } from '../hooks/useScrollReveal'

const reviews = [
  {
    name: 'Sahu Cinemax',
    role: 'Commercial Client',
    text: 'Asimos Company delivered a flawless 500KW solar installation for our cinema. Energy costs dropped significantly and the after-sales support has been excellent.',
    rating: 5,
  },
  {
    name: 'Ansal API – Sushant City',
    role: 'Township Project',
    text: 'The 100KW rooftop solar system was installed on time and within budget. The team handled all government approvals seamlessly.',
    rating: 5,
  },
  {
    name: 'UPNEDA',
    role: 'Government Partner',
    text: 'Asimos has proven to be a reliable solar EPC partner for government-sponsored projects. Their technical expertise and transparency are commendable.',
    rating: 5,
  },
  {
    name: 'Nadava College',
    role: 'Educational Institution',
    text: 'The 1MW solar plant has drastically reduced our electricity bills. Asimos handled everything from site selection to commissioning with professionalism.',
    rating: 5,
  },
  {
    name: 'Itawa Cold Storage',
    role: 'Industrial Client',
    text: 'Our 500KW solar system from Asimos has been running perfectly. The high-efficiency panels and inverters are exactly what our energy-intensive operations needed.',
    rating: 5,
  },
  {
    name: 'Richi Rich Restaurant',
    role: 'Commercial Client',
    text: 'The 100KW solar installation has made our restaurant much more energy efficient. Asimos was professional, timely and handled all paperwork for subsidies.',
    rating: 5,
  },
]

export default function Reviews({ darkMode }) {
  const ref = useScrollReveal()
  const textMain = darkMode ? 'white' : '#1a1a10'
  const textMuted = darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.55)'

  return (
    <section id="reviews" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"/>
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label reveal mb-4">Esteemed Clients</p>
          <h2 className="section-title reveal mb-6" style={{color: textMain}}>
            Trusted by Industry<br/>
            <span className="text-gold-gradient">Leaders Across India</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="reveal glass-card p-7 flex flex-col"
              style={{
                background: darkMode ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.7)',
                borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
              }}>
              <div className="flex gap-0.5 mb-4">
                {Array.from({length: r.rating}).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="font-outfit text-sm leading-relaxed flex-1 mb-5 italic" style={{color: textMuted}}>"{r.text}"</p>
              <div>
                <div className="font-outfit font-semibold text-sm" style={{color: textMain}}>{r.name}</div>
                <div className="font-outfit text-xs text-gold-500/70">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
