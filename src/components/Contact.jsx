import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Contact({ darkMode }) {
  const ref = useScrollReveal()

  const cardBg = darkMode ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.8)'
  const border = darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'
  const textMuted = darkMode ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)'
  const textMain = darkMode ? 'white' : '#1a1a10'

  return (
    <section id="contact" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"/>
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="section-label reveal mb-4">Contact</p>
          <h2 className="section-title reveal mb-6" style={{color: textMain}}>
            Get In Touch<br/>
            <span className="text-gold-gradient">With Our Team</span>
          </h2>
          <p className="reveal font-outfit max-w-md mx-auto" style={{color: textMuted}}>
            Ready to go solar? Our experts are here to help you choose the right solution for your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Phone */}
          <div className="reveal glass-card p-8 text-center" style={{background: cardBg, borderColor: border}}>
            <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <h3 className="font-outfit font-semibold mb-2" style={{color: textMain}}>Call Us</h3>
            <a href="tel:8318839609" className="font-cormorant font-bold text-3xl text-gold-gradient block hover:opacity-90 transition-opacity mb-2">
              8318839609
            </a>
            <a href="tel:8174833133" className="font-cormorant font-bold text-2xl text-gold-gradient block hover:opacity-90 transition-opacity">
              8174833133
            </a>
          </div>

          {/* Email */}
          <div className="reveal glass-card p-8 text-center" style={{background: cardBg, borderColor: border}}>
            <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 className="font-outfit font-semibold mb-2" style={{color: textMain}}>Email Us</h3>
            <a href="mailto:asimoscompany@gmail.com" className="font-outfit text-lg text-gold-400 hover:text-gold-300 transition-colors break-all">
              asimoscompany@gmail.com
            </a>
            <p className="font-outfit text-sm mt-3" style={{color: textMuted}}>We respond within 24 hours</p>
          </div>

          {/* HQ */}
          <div className="reveal glass-card p-8 text-center lg:col-span-2" style={{background: cardBg, borderColor: border}}>
            <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <h3 className="font-outfit font-semibold mb-2" style={{color: textMain}}>Corporate Headquarters</h3>
            <p className="font-outfit text-lg text-gold-400">UP Lucknow, India</p>
            <p className="font-outfit text-sm mt-2" style={{color: textMuted}}>Operations across Maharashtra · Gujarat · Karnataka</p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {['UPNEDA Partner', 'CAPEX Model', 'RESCO Model', 'Govt. Liaising', 'After Sales Support'].map(t => (
                <span key={t} className="font-outfit text-xs px-3 py-1 rounded-full border border-gold-500/20 text-gold-500/70 bg-gold-500/5">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
