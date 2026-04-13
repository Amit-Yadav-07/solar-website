import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const TARIFFS = {
  domestic: {
    label: 'Domestic (LMV-1)',
    slabs: [
      { upTo: 100, rate: 3.35 },
      { upTo: 150, rate: 3.85 },
      { upTo: 300, rate: 5.00 },
      { upTo: Infinity, rate: 5.50 },
    ],
    fixedCharge: 130, meterRent: 25, electricityDuty: 0.05, fsa: 0.30,
  },
  commercial: {
    label: 'Commercial (LMV-2)',
    slabs: [{ upTo: Infinity, rate: 7.00 }],
    fixedCharge: 200, meterRent: 40, electricityDuty: 0.05, fsa: 0.30,
  },
  industrial: {
    label: 'Industrial (LMV-6)',
    slabs: [{ upTo: Infinity, rate: 6.50 }],
    fixedCharge: 500, meterRent: 60, electricityDuty: 0.05, fsa: 0.30,
  },
}

const KWH_PER_KW_YEAR = 1600
const COST_PER_KW = 50000

function calcBill(units, type) {
  const t = TARIFFS[type]
  let energy = 0, prev = 0
  for (const slab of t.slabs) {
    const in_slab = Math.min(units, slab.upTo) - prev
    if (in_slab <= 0) break
    energy += in_slab * slab.rate
    prev = slab.upTo
    if (units <= slab.upTo) break
  }
  const duty = energy * t.electricityDuty
  const fsa = units * t.fsa
  const total = energy + duty + fsa + t.fixedCharge + t.meterRent
  return { energy, duty, fsa, fixed: t.fixedCharge + t.meterRent, total }
}

function recommendKW(units) {
  return Math.ceil((units / (KWH_PER_KW_YEAR / 12)) * 10) / 10
}

function pmSubsidy(kw) {
  if (kw >= 3) return 78000
  if (kw >= 2) return 60000
  if (kw >= 1) return 30000
  return 0
}

// Pure function — safe to call at render time (no side effects)
function computeResult(units, type) {
  const bill = calcBill(units, type)
  const solarKW = recommendKW(units)
  const annualGen = solarKW * KWH_PER_KW_YEAR
  const annualSaving = calcBill(Math.min(units, annualGen / 12), type).total * 12
  const grossCost = solarKW * COST_PER_KW
  const subsidy = type === 'domestic' ? pmSubsidy(solarKW) : 0
  const netCost = grossCost - subsidy
  const payback = netCost / annualSaving
  const co2 = annualGen * 0.82
  return { bill, solarKW, annualGen, annualSaving, grossCost, subsidy, netCost, payback, co2 }
}

const fmt = (n) => '₹' + Math.round(n).toLocaleString('en-IN')

export default function Calculator({ darkMode }) {
  const ref = useScrollReveal()
  const [type, setType] = useState('domestic')
  const [units, setUnits] = useState(200)
  // FIX: compute initial result synchronously so right panel is visible on first paint
  const [result, setResult] = useState(() => computeResult(200, 'domestic'))

  useEffect(() => { setResult(computeResult(units, type)) }, [type, units])

  const textMain = darkMode ? 'white' : '#1a1a10'
  const textMuted = darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.55)'
  const cardBg = darkMode ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.75)'
  const cardBorder = darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'
  const inputBg = darkMode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.04)'
  const inputBorder = darkMode ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'

  return (
    <section id="calculator" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <p className="section-label reveal mb-4">Solar Savings Calculator</p>
          <h2 className="section-title reveal mb-4" style={{ color: textMain }}>
            Calculate Your Solar<br />
            <span className="text-gold-gradient">Savings in Lucknow / UP</span>
          </h2>
          <p className="reveal font-outfit text-sm max-w-lg mx-auto" style={{ color: textMuted }}>
            Based on official <strong style={{ color: '#047857' }}>UPPCL / MVVNL FY 2025-26</strong> tariff slabs for Uttar Pradesh .
            Includes PM Surya Ghar Muft Bijli Yojana subsidy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT: Inputs */}
          <div className="reveal rounded-2xl p-8" style={{ background: cardBg, border: `1px solid ${cardBorder}` }}>
            <h3 className="font-cormorant font-bold text-xl mb-6" style={{ color: textMain }}>Your Electricity Details</h3>

            <div className="mb-6">
              <label className="font-outfit text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: textMuted }}>
                Connection Type (UPPCL)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {Object.entries(TARIFFS).map(([key]) => (
                  <button key={key} onClick={() => setType(key)}
                    className="py-3 px-2 rounded-xl font-outfit text-xs font-semibold transition-all duration-200"
                    style={{
                      border: type === key ? '1px solid rgba(16,185,129,0.2)' : `1px solid ${inputBorder}`,
                      color: type === key ? '#047857' : textMuted,
                      background: type === key ? 'rgba(16,185,129,0.2)' : inputBg,
                    }}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </button>
                ))}
              </div>
              <p className="font-outfit text-xs mt-2" style={{ color: textMuted }}>
                {TARIFFS[type].label} · Fixed charge: {fmt(TARIFFS[type].fixedCharge)}/month
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <label className="font-outfit text-xs font-semibold tracking-widest uppercase" style={{ color: textMuted }}>
                  Monthly Consumption
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number" min={50} max={5000} value={units}
                    onChange={e => setUnits(Number(e.target.value))}
                    className="w-24 text-right font-outfit font-bold text-lg outline-none rounded-xl px-3 py-1.5"
                    style={{ background: inputBg, border: `1px solid ${inputBorder}`, color: textMain }}
                  />
                  <span className="font-outfit text-sm font-medium text-gold-400">Units</span>
                </div>
              </div>
              <input
                type="range" min={50} max={2000} step={10} value={units}
                onChange={e => setUnits(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between mt-1">
                <span className="font-outfit text-xs" style={{ color: textMuted }}>50 units</span>
                <span className="font-outfit text-xs" style={{ color: textMuted }}>2,000 units</span>
              </div>
            </div>

            {type === 'domestic' && (
              <div className="mt-6 rounded-xl overflow-hidden" style={{ border: `1px solid ${cardBorder}` }}>
                <div className="px-4 py-2 font-outfit text-xs font-semibold uppercase tracking-widest"
                  style={{ background: 'rgba(245,158,11,0.08)', color: '#047857' }}>
                  UPPCL Domestic Slab Rates (LMV-1) · FY 2024-25
                </div>
                {[
                  { range: '0 – 100 units', rate: '₹3.35/unit' },
                  { range: '101 – 150 units', rate: '₹3.85/unit' },
                  { range: '151 – 300 units', rate: '₹5.00/unit' },
                  { range: 'Above 300 units', rate: '₹5.50/unit' },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between px-4 py-2 font-outfit text-xs"
                    style={{
                      background: i % 2 === 0 ? 'transparent' : (darkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)'),
                      color: textMuted,
                      borderTop: `1px solid ${cardBorder}`,
                    }}>
                    <span>{row.range}</span>
                    <span className="font-semibold" style={{ color: textMain }}>{row.rate}</span>
                  </div>
                ))}
                <div className="px-4 py-2 font-outfit text-xs" style={{ color: textMuted, borderTop: `1px solid ${cardBorder}` }}>
                  + Fixed: ₹130/mo · Meter Rent: ₹25/mo · ED: 5% · FSA: ~₹0.30/unit
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: Results — always present now, no conditional render */}
          <div className="reveal space-y-4">

            <div className="rounded-2xl p-6" style={{ background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.15)' }}>
              <p className="font-outfit text-xs uppercase tracking-widest mb-3 text-red-400 font-semibold">Your Current Monthly Bill</p>
              <div className="text-4xl font-cormorant font-bold text-red-400 mb-3">{fmt(result.bill.total)}</div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Energy Charges', val: fmt(result.bill.energy) },
                  { label: 'Fixed + Meter', val: fmt(result.bill.fixed) },
                  { label: 'Elect. Duty (5%)', val: fmt(result.bill.duty) },
                  { label: 'FSA', val: fmt(result.bill.fsa) },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between font-outfit text-xs py-1.5 px-3 rounded-lg"
                    style={{ background: 'rgba(0,0,0,0.1)', color: textMuted }}>
                    <span>{item.label}</span>
                    <span style={{ color: textMain }}>{item.val}</span>
                  </div>
                ))}
              </div>
              <p className="font-outfit text-xs mt-3" style={{ color: textMuted }}>
                Annual spend: <strong style={{ color: '#f87171' }}>{fmt(result.bill.total * 12)}/year</strong>
              </p>
            </div>

            <div className="rounded-2xl p-6" style={{ background: 'rgba(245,158,11,0.06)', border: '1px solid rgba(245,158,11,0.2)' }}>
              <p className="font-outfit text-xs uppercase tracking-widest mb-3 text-gold-400 font-semibold">Recommended Solar System</p>
              <div className="flex items-end gap-3 mb-3">
                <div className="text-4xl font-cormorant font-bold text-gold-gradient">{result.solarKW} kW</div>
                <div className="font-outfit text-xs pb-1" style={{ color: textMuted }}>
                  ~{Math.round(result.annualGen).toLocaleString('en-IN')} units/year
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'System Cost', val: fmt(result.grossCost) },
                  {
                    label: type === 'domestic' ? 'PM Surya Ghar Subsidy' : 'UPNEDA Subsidy',
                    val: type === 'domestic' ? fmt(result.subsidy) : 'Check UPNEDA'
                  },
                  { label: 'Net Cost', val: fmt(result.netCost) },
                  { label: 'Annual Savings', val: fmt(result.annualSaving) },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between font-outfit text-xs py-1.5 px-3 rounded-lg"
                    style={{ background: 'rgba(0,0,0,0.1)', color: textMuted }}>
                    <span>{item.label}</span>
                    <span style={{ color: i === 1 ? '#4ade80' : i === 3 ? '#047857' : textMain }}>{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl p-5 text-center" style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.2)' }}>
                <p className="font-outfit text-xs uppercase tracking-widest mb-2 text-green-400 font-semibold">Payback Period</p>
                <div className="text-3xl font-cormorant font-bold text-green-400">{result.payback.toFixed(1)} yrs</div>
                <p className="font-outfit text-xs mt-1" style={{ color: textMuted }}>Then free electricity!</p>
              </div>
              <div className="rounded-2xl p-5 text-center" style={{ background: 'rgba(56,189,248,0.06)', border: '1px solid rgba(56,189,248,0.2)' }}>
                <p className="font-outfit text-xs uppercase tracking-widest mb-2 text-sky-400 font-semibold">CO₂ Saved/Year</p>
                <div className="text-3xl font-cormorant font-bold text-sky-400">{(result.co2 / 1000).toFixed(1)} T</div>
                <p className="font-outfit text-xs mt-1" style={{ color: textMuted }}>Tonnes of CO₂</p>
              </div>
            </div>

            <a href="#quote"
              className="block text-center btn-gold w-full py-4 shimmer-btn"
              style={{ backgroundImage: 'linear-gradient(135deg, #10b981 0%, #34d399 50%, #059669 100%)', backgroundSize: '200% 100%' }}>
              Get Free Quote for {result.solarKW} kW System →
            </a>

            {type === 'domestic' && (
              <p className="font-outfit text-xs text-center" style={{ color: textMuted }}>
                ☀️ <strong style={{ color: '#4ade80' }}>PM Surya Ghar Muft Bijli Yojana</strong> subsidy of{' '}
                <strong style={{ color: '#4ade80' }}>{fmt(result.subsidy)}</strong> applicable for domestic consumers in UP.
              </p>
            )}
          </div>
        </div>

        <p className="text-center font-outfit text-xs mt-10 reveal" style={{ color: darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.3)' }}>
          * Calculations based on UPPCL / MVVNL FY 2025-26 approved tariff. Lucknow avg. peak sun: 5.3 hrs/day.
          Solar cost ~₹50,000/kW installed. Actual savings may vary. Contact Asimos Company for a precise site assessment.
        </p>
      </div>
    </section>
  )
}
