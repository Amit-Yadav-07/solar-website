import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const propertyTypes = ['Single Family Home', 'Townhouse', 'Condo / Apartment', 'Commercial Building', 'Multi-Family']
const roofTypes     = ['Asphalt Shingle', 'Tile (Clay/Concrete)', 'Metal', 'Flat / TPO', 'Other']
const billRanges    = ['Under $100', '$100–$200', '$200–$300', '$300–$500', '$500+']
const interests     = ['Solar Panels Only', 'Solar + Battery Storage', 'Battery Storage Only', 'Solar + EV Charger', 'Full Energy Independence Package']
const timeframes    = ['ASAP (within 1 month)', '1–3 months', '3–6 months', 'Just researching']

const steps = ['Property', 'Energy', 'Contact', 'Confirm']

export default function QuoteForm() {
  const ref = useScrollReveal()
  const [step, setStep] = useState(1)
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({
    property: '', roof: '', ownership: 'own',
    bill: '', interest: '', timeframe: '',
    name: '', email: '', phone: '', zip: '', notes: '',
  })

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }))

  const canNext = () => {
    if (step === 1) return form.property && form.roof
    if (step === 2) return form.bill && form.interest && form.timeframe
    if (step === 3) return form.name && form.email && form.phone && form.zip
    return true
  }

  const submit = (e) => { e.preventDefault(); setDone(true) }

  if (done) return (
    <section id="quote" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"/>
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="glass-card p-14 reveal">
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center">
            <svg className="w-10 h-10 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h3 className="font-cormorant font-bold text-4xl text-white mb-4">You're All Set,<br/>{form.name.split(' ')[0]}!</h3>
          <p className="font-outfit text-white/50 mb-3">Your free quote request has been received. Our energy engineers will review your details and contact you within <strong className="text-gold-400">24 hours</strong>.</p>
          <p className="font-outfit text-white/40 text-sm mb-10">Expect a call from <span className="text-gold-400">(800) 123-4567</span> and an email to <span className="text-gold-400">{form.email}</span>.</p>
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 text-left space-y-3 mb-8">
            {[
              ['Property', form.property],
              ['Roof Type', form.roof],
              ['Monthly Bill', form.bill],
              ['Interest', form.interest],
              ['Timeframe', form.timeframe],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between">
                <span className="font-outfit text-xs text-white/30 uppercase tracking-wide">{k}</span>
                <span className="font-outfit text-sm text-white/70">{v}</span>
              </div>
            ))}
          </div>
          <button onClick={() => { setDone(false); setStep(1); setForm({ property:'',roof:'',ownership:'own',bill:'',interest:'',timeframe:'',name:'',email:'',phone:'',zip:'',notes:'' }) }}
            className="btn-outline-gold text-sm px-8 py-3">
            Submit Another Request
          </button>
        </div>
      </div>
    </section>
  )

  return (
    <section id="quote" ref={ref} className="py-32 bg-carbon-950 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"/>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"/>
      <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(245,158,11,0.04) 0%, transparent 70%)'}}/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left side info */}
          <div className="reveal-left lg:sticky lg:top-32 space-y-8">
            <div>
              <p className="section-label mb-4">Free Quote</p>
              <h2 className="section-title mb-6">
                Get Your Precise<br/>
                <span className="text-gold-gradient">System Proposal</span>
              </h2>
              <p className="font-outfit text-white/50 text-lg leading-relaxed">
                No phone calls until you're ready. No pushy sales tactics. Just a detailed, honest proposal for your specific home within 24 hours.
              </p>
            </div>

            {/* Promises */}
            <div className="space-y-4">
              {[
                { icon: '⚡', t: '24-Hour Turnaround', s: 'Detailed proposal in your inbox tomorrow' },
                { icon: '🔒', t: 'No Commitment Required', s: 'Browse your options at your own pace' },
                { icon: '📊', t: 'Exact ROI Calculation', s: 'Based on your real usage & roof data' },
                { icon: '💰', t: 'All Incentives Applied', s: 'Federal ITC, state rebates, utility credits' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 glass-card p-4">
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <div className="font-outfit font-semibold text-white text-sm mb-0.5">{item.t}</div>
                    <div className="font-outfit text-xs text-white/40">{item.s}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
              <div className="flex -space-x-2">
                {['#f59e0b','#818cf8','#34d399','#f472b6','#22d3ee'].map((c,i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-carbon-950 flex items-center justify-center text-white font-cormorant font-bold text-xs"
                    style={{background:c+'40', borderColor:'#0e0e08'}}>
                    {['D','P','M','J','T'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">{[1,2,3,4,5].map(s=><span key={s} className="text-gold-400 text-xs">★</span>)}</div>
                <div className="font-outfit text-xs text-white/40">Joined by 4,200+ homeowners this year</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal-right">
            <form onSubmit={submit} className="glass-card p-8 md:p-10">
              {/* Progress */}
              <div className="flex items-center gap-2 mb-8">
                {steps.map((s, i) => (
                  <div key={i} className="flex items-center gap-2 flex-1 last:flex-none">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-outfit font-bold transition-all duration-300 ${
                      step > i+1 ? 'bg-gold-500 text-carbon-950' :
                      step === i+1 ? 'bg-gold-500/20 border border-gold-500/60 text-gold-400' :
                      'bg-white/[0.06] text-white/30'
                    }`}>
                      {step > i+1 ? '✓' : i+1}
                    </div>
                    {i < steps.length-1 && (
                      <div className={`h-px flex-1 transition-all duration-500 ${step > i+1 ? 'bg-gold-500/60' : 'bg-white/[0.08]'}`}/>
                    )}
                  </div>
                ))}
              </div>
              <div className="font-outfit text-xs text-white/30 mb-6 uppercase tracking-widest">Step {step} of {steps.length} — {steps[step-1]}</div>

              {/* Step 1 - Property */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="font-cormorant font-bold text-2xl text-white">Your Property</h3>
                  <div>
                    <label className="block font-outfit text-sm text-white/50 mb-3">Property Type *</label>
                    <div className="grid grid-cols-1 gap-2">
                      {propertyTypes.map(t => (
                        <button key={t} type="button" onClick={() => set('property', t)}
                          className={`py-3 px-4 rounded-xl border text-left font-outfit text-sm transition-all duration-200 ${
                            form.property === t
                              ? 'border-gold-500/50 bg-gold-500/10 text-gold-400'
                              : 'border-white/[0.08] text-white/50 hover:border-white/20 hover:text-white/70'
                          }`}>{t}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block font-outfit text-sm text-white/50 mb-3">Roof Type *</label>
                    <div className="grid grid-cols-2 gap-2">
                      {roofTypes.map(t => (
                        <button key={t} type="button" onClick={() => set('roof', t)}
                          className={`py-3 px-3 rounded-xl border text-sm font-outfit transition-all duration-200 ${
                            form.roof === t
                              ? 'border-gold-500/50 bg-gold-500/10 text-gold-400'
                              : 'border-white/[0.08] text-white/50 hover:border-white/20 hover:text-white/70'
                          }`}>{t}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block font-outfit text-sm text-white/50 mb-3">Do you own this property?</label>
                    <div className="flex gap-3">
                      {[{v:'own',l:'Yes, I own it'},{v:'rent',l:'No, I rent'}].map(o => (
                        <button key={o.v} type="button" onClick={() => set('ownership', o.v)}
                          className={`flex-1 py-3 rounded-xl border font-outfit text-sm transition-all duration-200 ${
                            form.ownership === o.v
                              ? 'border-gold-500/50 bg-gold-500/10 text-gold-400'
                              : 'border-white/[0.08] text-white/50 hover:border-white/20'
                          }`}>{o.l}</button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2 - Energy */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="font-cormorant font-bold text-2xl text-white">Your Energy Usage</h3>
                  <div>
                    <label className="block font-outfit text-sm text-white/50 mb-3">Monthly Electricity Bill *</label>
                    <div className="grid grid-cols-2 gap-2">
                      {billRanges.map(b => (
                        <button key={b} type="button" onClick={() => set('bill', b)}
                          className={`py-3 px-4 rounded-xl border text-sm font-outfit transition-all duration-200 ${
                            form.bill === b
                              ? 'border-gold-500/50 bg-gold-500/10 text-gold-400'
                              : 'border-white/[0.08] text-white/50 hover:border-white/20 hover:text-white/70'
                          }`}>{b}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block font-outfit text-sm text-white/50 mb-3">I'm interested in *</label>
                    <div className="space-y-2">
                      {interests.map(it => (
                        <button key={it} type="button" onClick={() => set('interest', it)}
                          className={`w-full py-3 px-4 rounded-xl border text-left text-sm font-outfit transition-all duration-200 ${
                            form.interest === it
                              ? 'border-gold-500/50 bg-gold-500/10 text-gold-400'
                              : 'border-white/[0.08] text-white/50 hover:border-white/20 hover:text-white/70'
                          }`}>{it}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block font-outfit text-sm text-white/50 mb-3">Installation Timeframe *</label>
                    <div className="grid grid-cols-2 gap-2">
                      {timeframes.map(t => (
                        <button key={t} type="button" onClick={() => set('timeframe', t)}
                          className={`py-3 px-3 rounded-xl border text-xs font-outfit transition-all duration-200 text-center ${
                            form.timeframe === t
                              ? 'border-gold-500/50 bg-gold-500/10 text-gold-400'
                              : 'border-white/[0.08] text-white/50 hover:border-white/20 hover:text-white/70'
                          }`}>{t}</button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3 - Contact */}
              {step === 3 && (
                <div className="space-y-5">
                  <h3 className="font-cormorant font-bold text-2xl text-white">Your Details</h3>
                  {[
                    { k:'name',  l:'Full Name *',    t:'text',  ph:'Jane Smith' },
                    { k:'email', l:'Email Address *',t:'email', ph:'jane@example.com' },
                    { k:'phone', l:'Phone Number *', t:'tel',   ph:'(800) 000-0000' },
                    { k:'zip',   l:'ZIP Code *',     t:'text',  ph:'90210' },
                  ].map(f => (
                    <div key={f.k}>
                      <label className="block font-outfit text-sm text-white/50 mb-2">{f.l}</label>
                      <input type={f.t} required value={form[f.k]} onChange={e => set(f.k, e.target.value)}
                        placeholder={f.ph}
                        className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-gold-500/50 rounded-xl px-4 py-3 font-outfit text-sm text-white placeholder-white/20 outline-none transition-colors duration-200"/>
                    </div>
                  ))}
                  <div>
                    <label className="block font-outfit text-sm text-white/50 mb-2">Additional Notes</label>
                    <textarea rows={3} value={form.notes} onChange={e => set('notes', e.target.value)}
                      placeholder="Anything special about your property, goals, or questions..."
                      className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-gold-500/50 rounded-xl px-4 py-3 font-outfit text-sm text-white placeholder-white/20 outline-none transition-colors duration-200 resize-none"/>
                  </div>
                </div>
              )}

              {/* Step 4 - Review */}
              {step === 4 && (
                <div className="space-y-6">
                  <h3 className="font-cormorant font-bold text-2xl text-white">Review & Submit</h3>
                  <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 space-y-3">
                    {[
                      ['Property Type', form.property],
                      ['Roof Type', form.roof],
                      ['Ownership', form.ownership === 'own' ? 'Owner' : 'Renter'],
                      ['Monthly Bill', form.bill],
                      ['Interest', form.interest],
                      ['Timeframe', form.timeframe],
                      ['Name', form.name],
                      ['Email', form.email],
                      ['Phone', form.phone],
                      ['ZIP', form.zip],
                    ].filter(([,v]) => v).map(([k,v]) => (
                      <div key={k} className="flex justify-between items-start gap-4">
                        <span className="font-outfit text-xs text-white/30 uppercase tracking-wide flex-shrink-0">{k}</span>
                        <span className="font-outfit text-sm text-white/70 text-right">{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="font-outfit text-xs text-white/30">
                    By submitting, you agree to receive a callback and email from Asimos Company. We never share your data. Unsubscribe anytime.
                  </p>
                </div>
              )}

              {/* Navigation */}
              <div className="flex gap-3 mt-8">
                {step > 1 && (
                  <button type="button" onClick={() => setStep(s => s-1)}
                    className="btn-ghost border border-white/10 px-6 py-3 rounded-xl text-sm hover:border-white/20 transition-colors">
                    ← Back
                  </button>
                )}
                {step < 4 ? (
                  <button type="button" onClick={() => canNext() && setStep(s => s+1)}
                    className={`flex-1 py-4 rounded-xl font-outfit text-sm font-semibold transition-all duration-300 ${
                      canNext()
                        ? 'btn-gold shadow-gold'
                        : 'bg-white/[0.06] text-white/30 cursor-not-allowed'
                    }`}>
                    Continue →
                  </button>
                ) : (
                  <button type="submit" className="flex-1 btn-gold py-4 shadow-gold text-sm">
                    Submit for Free Quote ✓
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
