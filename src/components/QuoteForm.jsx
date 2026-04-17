import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const propertyTypes = ['Single Family Home', 'Townhouse', 'Condo / Apartment', 'Commercial Building', 'Multi-Family']
const roofTypes = ['Asphalt Shingle', 'Tile (Clay/Concrete)', 'Metal', 'Flat / TPO', 'Other']
const billRanges = ['₹500 se kam', '₹500–₹1,000', '₹1,000–₹2,000', '₹2,000–₹5,000', '₹5,000 se zyada']
const interests = ['Solar Panels Only', 'Solar + Battery Backup', 'Solar Water Heater', 'Solar + EV Charging', 'Complete Solar Solution']
const timeframes = ['ASAP (1 month)', '1–3 Months', '3–6 Months', 'Just Researching']
const steps = ['Property', 'Energy', 'Contact', 'Confirm']

export default function QuoteForm({ darkMode }) {
  const ref = useScrollReveal()
  const [step, setStep] = useState(1)
  const [done, setDone] = useState(false)
  const [form, setForm] = useState({
    property: '', roof: '', ownership: 'own',
    bill: '', interest: '', timeframe: '',
    name: '', email: '', phone: '', city: '', notes: '',
  })
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }))
  const canNext = () => {
    if (step === 1) return form.property && form.roof
    if (step === 2) return form.bill && form.interest && form.timeframe
    if (step === 3) return form.name && form.phone
    return true
  }

  const bg = darkMode ? '#0e1a0e' : '#f4f7f4'
  const textMain = darkMode ? '#f4f7f4' : '#111a11'
  const textMuted = darkMode ? 'rgba(244,247,244,0.60)' : '#3a4a3a'
  const textDim = darkMode ? 'rgba(244,247,244,0.38)' : '#6b7b6b'
  const cardBg = darkMode ? 'rgba(255,255,255,0.04)' : '#ffffff'
  const cardShadow = darkMode ? 'none' : '0 4px 24px rgba(0,0,0,0.07)'
  const border = darkMode ? 'rgba(255,255,255,0.09)' : 'rgba(10, 116, 172, 0.18)'
  const inputBg = darkMode ? 'rgba(255,255,255,0.05)' : '#f0f5f0'
  const inputBorder = darkMode ? 'rgba(255,255,255,0.12)' : 'rgba(10, 116, 172, 0.25)'
  const divider = darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(10, 116, 172, 0.12)'
  const EM = '#0A74AC'

  const optBtn = (active) => ({
    width: '100%', padding: '11px 16px', borderRadius: '12px', textAlign: 'left',
    border: `1px solid ${active ? 'rgba(10, 116, 172, 0.55)' : inputBorder}`,
    background: active ? 'rgba(10, 116, 172, 0.10)' : inputBg,
    color: active ? EM : textMuted,
    fontSize: '0.875rem', fontFamily: 'inherit', cursor: 'pointer',
    transition: 'all 0.18s',
  })

  if (done) return (
    <section id="quote" ref={ref} className="py-32 relative" style={{ background: bg }}>
      <div className="max-w-xl mx-auto px-4 text-center">
        <div className="rounded-2xl p-14" style={{ background: cardBg, border: `1px solid ${border}`, boxShadow: cardShadow }}>
          <div className="w-20 h-20 mx-auto mb-8 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(10, 116, 172, 0.12)', border: '1px solid rgba(10, 116, 172, 0.3)' }}>
            <svg className="w-10 h-10" style={{ color: EM }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-cormorant font-bold text-4xl mb-4" style={{ color: textMain }}>
            Shukriya, {form.name.split(' ')[0] || 'aapka'}!
          </h3>
          <p className="font-outfit text-sm mb-3" style={{ color: textMuted }}>
            Aapki request mil gayi. Hamari team 24 ghante mein{' '}
            <strong style={{ color: EM }}>{form.phone}</strong> par call karegi.
          </p>
          <button
            onClick={() => { setDone(false); setStep(1); setForm({ property: '', roof: '', ownership: 'own', bill: '', interest: '', timeframe: '', name: '', email: '', phone: '', city: '', notes: '' }) }}
            className="font-outfit font-medium text-sm px-8 py-3 rounded-full mt-6 transition-all"
            style={{ border: `1.5px solid rgba(10, 116, 172, 0.14)`, color: '#075882', background: 'rgba(10, 116, 172, 0.6)' }}>
            Naya Request Bhejein
          </button>
        </div>
      </div>
    </section>
  )

  return (
    <section id="quote" ref={ref} className="py-32 relative overflow-hidden" style={{ background: bg }}>
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(10, 116, 172, 0.3), transparent)' }} />
      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(10, 116, 172, 0.2), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div className="reveal-left lg:sticky lg:top-32 space-y-8">
            <div>
              <p className="section-label mb-4">Free Quote</p>
              <h2 className="font-cormorant font-bold text-4xl md:text-5xl leading-tight mb-6"
                style={{ color: textMain }}>
                Get Your Precise<br />
                <span style={{
                  background: 'linear-gradient(135deg,#0A74AC,#04334B,#075882)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
                }}>System Proposal</span>
              </h2>
              <p className="font-outfit text-lg leading-relaxed" style={{ color: textMuted }}>
                No phone calls until you're ready. No pushy sales tactics. Just a detailed,
                honest proposal for your specific home within 24 hours.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { icon: '⚡', t: '24-Hour Turnaround', s: 'Detailed proposal in your inbox tomorrow' },
                { icon: '🔒', t: 'No Commitment Required', s: 'Browse your options at your own pace' },
                { icon: '📊', t: 'UPPCL-Based ROI Calc', s: 'Based on your real usage & Lucknow sun data' },
                { icon: '💰', t: 'All Subsidies Applied', s: 'PM Surya Ghar, UPNEDA & state incentives' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl transition-all"
                  style={{ background: cardBg, border: `1px solid ${border}`, boxShadow: cardShadow }}>
                  <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <div className="font-outfit font-semibold text-sm mb-0.5" style={{ color: textMain }}>{item.t}</div>
                    <div className="font-outfit text-xs" style={{ color: textDim }}>{item.s}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-5" style={{ borderTop: `1px solid ${divider}` }}>
              <div className="flex -space-x-2">
                {['#10b981', '#818cf8', '#34d399', '#f472b6', '#22d3ee'].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 flex items-center justify-center font-cormorant font-bold text-xs"
                    style={{ background: c + '30', borderColor: bg, color: textMain }}>
                    {['R', 'P', 'A', 'S', 'V'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-xs" style={{ color: EM }}>★</span>)}
                </div>
                <div className="font-outfit text-xs" style={{ color: textDim }}>Trusted by 500+ customers in UP</div>
              </div>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="reveal-right">
            <div className="rounded-2xl p-8 md:p-10"
              style={{ background: cardBg, border: `1px solid ${border}`, boxShadow: darkMode ? 'none' : '0 8px 40px rgba(10, 116, 172, 0.06)' }}>

              {/* Progress */}
              <div className="flex items-center gap-2 mb-8">
                {steps.map((s, i) => (
                  <div key={i} className="flex items-center gap-2 flex-1 last:flex-none">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-outfit font-bold transition-all duration-300"
                      style={{
                        background: step > i + 1 ? EM : step === i + 1 ? 'rgba(10, 116, 172, 0.15)' : 'rgba(10, 116, 172, 0.06)',
                        border: step === i + 1 ? '1.5px solid rgba(10, 116, 172, 0.5)' : '1.5px solid transparent',
                        color: step > i + 1 ? 'white' : step === i + 1 ? EM : textDim,
                      }}>
                      {step > i + 1 ? '✓' : i + 1}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="h-px flex-1 transition-all duration-500"
                        style={{ background: step > i + 1 ? 'rgba(10, 116, 172, 0.5)' : divider }} />
                    )}
                  </div>
                ))}
              </div>
              <div className="font-outfit text-xs mb-6 uppercase tracking-widest" style={{ color: textDim }}>
                Step {step} of {steps.length} — {steps[step - 1]}
              </div>

              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="font-cormorant font-bold text-2xl" style={{ color: textMain }}>Your Property</h3>
                  <div>
                    <label className="block font-outfit text-sm font-medium mb-3" style={{ color: textMuted }}>Property Type *</label>
                    <div className="grid grid-cols-1 gap-2">
                      {propertyTypes.map(t => (
                        <button key={t} type="button" onClick={() => set('property', t)}
                          style={optBtn(form.property === t)}>{t}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block font-outfit text-sm font-medium mb-3" style={{ color: textMuted }}>Roof Type *</label>
                    <div className="grid grid-cols-2 gap-2">
                      {roofTypes.map(t => (
                        <button key={t} type="button" onClick={() => set('roof', t)}
                          style={{ ...optBtn(form.roof === t), textAlign: 'center' }}>{t}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block font-outfit text-sm font-medium mb-3" style={{ color: textMuted }}>Do you own this property?</label>
                    <div className="flex gap-3">
                      {[{ v: 'own', l: 'Yes, I own it' }, { v: 'rent', l: 'No, I rent' }].map(o => (
                        <button key={o.v} type="button" onClick={() => set('ownership', o.v)}
                          style={{ ...optBtn(form.ownership === o.v), textAlign: 'center' }}>{o.l}</button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="font-cormorant font-bold text-2xl" style={{ color: textMain }}>Energy Usage</h3>
                  <div>
                    <label className="block font-outfit text-sm font-medium mb-3" style={{ color: textMuted }}>Monthly UPPCL Bill *</label>
                    <div className="grid grid-cols-2 gap-2">
                      {billRanges.map(b => (
                        <button key={b} type="button" onClick={() => set('bill', b)}
                          style={{ ...optBtn(form.bill === b), textAlign: 'center' }}>{b}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block font-outfit text-sm font-medium mb-3" style={{ color: textMuted }}>I'm interested in *</label>
                    <div className="space-y-2">
                      {interests.map(it => (
                        <button key={it} type="button" onClick={() => set('interest', it)}
                          style={optBtn(form.interest === it)}>{it}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block font-outfit text-sm font-medium mb-3" style={{ color: textMuted }}>Installation Timeframe *</label>
                    <div className="grid grid-cols-2 gap-2">
                      {timeframes.map(t => (
                        <button key={t} type="button" onClick={() => set('timeframe', t)}
                          style={{ ...optBtn(form.timeframe === t), fontSize: '0.75rem', textAlign: 'center' }}>{t}</button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-5">
                  <h3 className="font-cormorant font-bold text-2xl" style={{ color: textMain }}>Your Details</h3>
                  {[
                    { k: 'name', l: 'Full Name *', t: 'text', ph: 'Ramesh Kumar' },
                    { k: 'phone', l: 'Mobile Number *', t: 'tel', ph: '83188 39609' },
                    { k: 'city', l: 'City / District *', t: 'text', ph: 'Lucknow, UP' },
                    { k: 'email', l: 'Email (optional)', t: 'email', ph: 'ramesh@gmail.com' },
                  ].map(f => (
                    <div key={f.k}>
                      <label className="block font-outfit text-sm font-medium mb-2" style={{ color: textMuted }}>{f.l}</label>
                      <input
                        type={f.t}
                        value={form[f.k]}
                        onChange={e => set(f.k, e.target.value)}
                        placeholder={f.ph}
                        style={{
                          width: '100%', background: inputBg, border: `1px solid ${inputBorder}`,
                          borderRadius: '12px', padding: '12px 16px', color: textMain,
                          fontFamily: 'inherit', fontSize: '0.875rem', outline: 'none',
                        }}
                        onFocus={e => e.target.style.borderColor = EM}
                        onBlur={e => e.target.style.borderColor = inputBorder}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block font-outfit text-sm font-medium mb-2" style={{ color: textMuted }}>Additional Notes</label>
                    <textarea
                      rows={3}
                      value={form.notes}
                      onChange={e => set('notes', e.target.value)}
                      placeholder="Roof size, bijli cut issue, or any special requirement..."
                      style={{
                        width: '100%', background: inputBg, border: `1px solid ${inputBorder}`,
                        borderRadius: '12px', padding: '12px 16px', color: textMain,
                        fontFamily: 'inherit', fontSize: '0.875rem', outline: 'none', resize: 'none',
                      }}
                      onFocus={e => e.target.style.borderColor = EM}
                      onBlur={e => e.target.style.borderColor = inputBorder}
                    />
                  </div>
                </div>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <div className="space-y-6">
                  <h3 className="font-cormorant font-bold text-2xl" style={{ color: textMain }}>Review & Submit</h3>
                  <div className="rounded-2xl p-5 space-y-3"
                    style={{ background: darkMode ? 'rgba(255,255,255,0.03)' : 'rgba(10, 116, 172, 0.04)', border: `1px solid ${border}` }}>
                    {[
                      ['Property', form.property],
                      ['Roof', form.roof],
                      ['Ownership', form.ownership === 'own' ? 'Owner' : 'Renter'],
                      ['Monthly Bill', form.bill],
                      ['Interest', form.interest],
                      ['Timeframe', form.timeframe],
                      ['Name', form.name],
                      ['Phone', form.phone],
                      ['City', form.city],
                    ].filter(([, v]) => v).map(([k, v]) => (
                      <div key={k} className="flex justify-between items-start gap-4">
                        <span className="font-outfit text-xs uppercase tracking-wide flex-shrink-0"
                          style={{ color: textDim }}>{k}</span>
                        <span className="font-outfit text-sm text-right font-medium"
                          style={{ color: textMain }}>{v}</span>
                      </div>
                    ))}
                  </div>
                  <p className="font-outfit text-xs" style={{ color: textDim }}>
                    By submitting, you agree to receive a callback from Asimos Company. We never share your data.
                  </p>
                </div>
              )}

              {/* NAV BUTTONS */}
              <div className="flex gap-3 mt-8">
                {step > 1 && (
                  <button type="button" onClick={() => setStep(s => s - 1)}
                    className="font-outfit text-sm px-6 py-3 rounded-xl transition-all"
                    style={{ border: `1px solid ${border}`, color: textMuted, background: 'transparent' }}>
                    ← Back
                  </button>
                )}
                {step < 4 ? (
                  <button type="button" onClick={() => canNext() && setStep(s => s + 1)}
                    className="flex-1 py-4 rounded-xl font-outfit text-sm font-semibold transition-all duration-300"
                    style={canNext()
                      ? { background: 'linear-gradient(135deg,#0A74AC,#075882,#04334B)', color: 'white', boxShadow: '0 4px 16px rgba(16,185,129,0.35)' }
                      : { background: darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', color: textDim, cursor: 'not-allowed' }
                    }>
                    Continue →
                  </button>
                ) : (
                  <button type="button" onClick={() => setDone(true)}
                    className="flex-1 py-4 rounded-xl font-outfit text-sm font-semibold transition-all"
                    style={{ background: 'linear-gradient(135deg,#0A74AC,#04334B,#075882)', color: 'white', boxShadow: '0 4px 16px rgba(16,185,129,0.35)' }}>
                    Submit for Free Quote ✓
                  </button>
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}