const items = [
  { icon: '⚡', text: 'Incorporated 2012' },
  { icon: '🏭', text: 'Turnkey Solar EPC Solutions' },
  { icon: '🌞', text: 'Residential · Commercial · Industrial' },
  { icon: '📍', text: 'Maharashtra · Gujarat · Karnataka' },
  { icon: '🔋', text: 'CAPEX & RESCO Models' },
  { icon: '⚙️', text: '1kW to 3MW+ Projects' },
  { icon: '🌱', text: 'Green Energy Specialists' },
  { icon: '🏆', text: 'Super Stockist: Growatt, Solis, Sofar, Hitachi, Huawei' },
  { icon: '☀️', text: 'Panels: Trina, Waaree, Vikram, Adani, Longi' },
  { icon: '🤝', text: 'UPNEDA Government Partner' },
]

const doubled = [...items, ...items]

export default function TrustBar({ darkMode }) {
  return (
    <div className="border-y overflow-hidden relative backdrop-blur-sm py-4"
      style={{
        borderColor: darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)',
        background: darkMode ? 'rgba(14,14,8,0.8)' : 'rgba(255,255,255,0.8)'
      }}>
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{background: darkMode ? 'linear-gradient(90deg, #0e0e08, transparent)' : 'linear-gradient(90deg, #f8f7f2, transparent)'}}/>
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{background: darkMode ? 'linear-gradient(-90deg, #0e0e08, transparent)' : 'linear-gradient(-90deg, #f8f7f2, transparent)'}}/>

      <div className="flex whitespace-nowrap" style={{animation:'marquee 36s linear infinite', width:'max-content'}}>
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-2 px-8 last:border-0"
            style={{borderRight: darkMode ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)'}}>
            <span className="text-sm">{item.icon}</span>
            <span className="font-outfit text-xs tracking-wide" style={{color: darkMode ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.6)'}}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
