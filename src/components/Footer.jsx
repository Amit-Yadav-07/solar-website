export default function Footer({ darkMode }) {
  const year = new Date().getFullYear()
  const bg = darkMode ? '#0e0e08' : '#f0efe9'
  const border = darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'
  const textMuted = darkMode ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)'
  const textDim = darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.25)'
  const textMain = darkMode ? 'white' : '#1a1a10'

  return (
    <footer style={{background: bg, borderTop: `1px solid ${border}`}} className="relative overflow-hidden">
      {/* Top CTA band */}
      <div className="relative overflow-hidden" style={{ background:'linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(180,83,9,0.08) 100%)'}}>
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none"/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-cormorant font-bold text-3xl mb-2" style={{color: textMain}}>
              Start saving on energy today.
            </h3>
            <p className="font-outfit text-sm" style={{color: textMuted}}>Free assessment. No obligation. Contact us now.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0 flex-wrap">
            <a href="tel:8318839609" className="btn-outline-gold text-sm px-6 py-3">Call Us</a>
            <a href="/asimos-company-profile.pdf" download className="btn-outline-gold text-sm px-6 py-3 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Download Profile
            </a>
            <a href="#quote" className="btn-gold text-sm px-8 py-3 shadow-gold shimmer-btn"
              style={{ backgroundImage:'linear-gradient(90deg,#10b981,#047857 33%,#10b981 66%,#047857 100%)',backgroundSize:'200% 100%'}}>
              Free Quote →
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                  <circle cx="12" cy="12" r="5" fill="#10b981" opacity="0.8"/>
                  {[0,45,90,135,180,225,270,315].map((d,i)=>(
                    <line key={i} x1="12" y1="12"
                      x2={12+10*Math.cos(d*Math.PI/180)} y2={12+10*Math.sin(d*Math.PI/180)}
                      stroke="#10b981" strokeWidth={i%2===0?"1.8":"1"} strokeLinecap="round" opacity="0.7"/>
                  ))}
                </svg>
              </div>
              <div>
                <span className="font-cormorant font-bold text-xl block leading-none" style={{color: textMain}}>Asimos Company</span>
                <span className="font-outfit text-[9px] tracking-[0.3em] text-gold-500/60 uppercase">Ultimate Power Solutions</span>
              </div>
            </div>
            <p className="font-outfit text-sm leading-relaxed mb-6 max-w-xs" style={{color: textMuted}}>
              One of India's oldest turnkey Solar PV Power Project companies. Incorporated in 2012, headquartered in UP Lucknow. Expertise in Residential, Commercial, Industrial and Utility scale solar projects.
            </p>
            <div className="space-y-2">
              <a href="tel:8318839609" className="flex items-center gap-2 font-outfit text-sm text-gold-400 hover:text-gold-300 transition-colors">
                📞 8318839609
              </a>
              <a href="tel:8174833133" className="flex items-center gap-2 font-outfit text-sm text-gold-400 hover:text-gold-300 transition-colors">
                📞 8174833133
              </a>
              <a href="mailto:asimoscompany@gmail.com" className="flex items-center gap-2 font-outfit text-sm text-gold-400 hover:text-gold-300 transition-colors">
                ✉️ asimoscompany@gmail.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-outfit text-xs font-semibold uppercase tracking-widest mb-5" style={{color: textDim}}>Solutions</h4>
            <ul className="space-y-3">
              {['Solar EPC (Residential)','Solar EPC (Commercial)','Solar EPC (Industrial)','Solar Power Systems','Solar Thermal','Decentralized Power','Micro Grid & Islanding','Wind Solar Hybrid','Rural Home Lighting'].map(l => (
                <li key={l}><a href="#solutions" className="font-outfit text-sm hover:text-gold-400 transition-colors" style={{color: textMuted}}>{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-outfit text-xs font-semibold uppercase tracking-widest mb-5" style={{color: textDim}}>Company</h4>
            <ul className="space-y-3">
              {[
                {l:'About Asimos', h:'#whyus'},
                {l:'Our Projects', h:'#projects'},
                {l:'Our Process',  h:'#process'},
                {l:'FAQ',          h:'#faq'},
                {l:'Contact Us',   h:'#contact'},
              ].map(link => (
                <li key={link.l}><a href={link.h} className="font-outfit text-sm hover:text-gold-400 transition-colors" style={{color: textMuted}}>{link.l}</a></li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl" style={{background: darkMode ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.04)', border: `1px solid ${border}`}}>
              <div className="font-outfit text-xs mb-1" style={{color: textDim}}>Download Profile</div>
              <a href="/asimos-company-profile.pdf" download className="font-outfit text-sm text-gold-400 hover:text-gold-300 transition-colors flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3"/>
                </svg>
                Company Profile 2025
              </a>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent mb-8"/>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div className="flex flex-wrap gap-2">
            {['Growatt Stockist','Solis Stockist','Sofar Stockist','Hitachi Stockist','Huawei Stockist','Trina Panels','Waaree Panels','Vikram Panels','Adani Panels','Longi Panels'].map(c => (
              <span key={c} className="font-outfit text-xs border px-3 py-1 rounded-full hover:border-gold-500/20 hover:text-gold-500/50 transition-colors cursor-default"
                style={{color: textDim, borderColor: border}}>
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-outfit text-xs" style={{color: textDim}}>
            © {year} Asimos Company · Ultimate Power Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="font-outfit text-xs" style={{color: textDim}}>Building a greener</span>
            <span className="text-gold-500 text-xs">☀️</span>
            <span className="font-outfit text-xs" style={{color: textDim}}>tomorrow</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
