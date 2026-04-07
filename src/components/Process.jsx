import { useScrollReveal } from '../hooks/useScrollReveal'

const steps = [
  {
    num: '01',
    title: 'Site Selection & Assessment',
    desc: 'Our energy engineers analyse your roof, sun exposure, and electricity usage via satellite imagery and your last 12 utility bills. No visit required.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
      </svg>
    ),
    detail: 'Takes only 24 hours',
  },
  {
    num: '02',
    title: 'Engineering & Design',
    desc: 'We design a precision solar array maximised for your specific roof orientation, shading patterns, and energy goals using industry-leading software.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
    detail: '3D modelling & yield simulation',
  },
  {
    num: '03',
    title: 'Procurement & Approvals',
    desc: 'We handle every permit, utility interconnection agreement, HOA paperwork, and inspection — from first submission to final sign-off. You do nothing.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
      </svg>
    ),
    detail: 'Typically 2–4 weeks',
  },
  {
    num: '04',
    title: 'Expert Installation & Go Live',
    desc: 'Our NABCEP-certified crew installs your system in 1–3 days. We conduct full electrical testing, utility activation, and walk you through your monitoring app.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    detail: 'Your system is live & earning',
  },
]

export default function Process() {
  const ref = useScrollReveal()

  return (
    <section id="process" ref={ref} className="py-32 relative overflow-hidden bg-carbon-900/50">
      <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(245,158,11,0.05) 0%, transparent 70%)'}}/>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"/>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-label reveal mb-4">The Process</p>
          <h2 className="section-title reveal mb-6">
            From Consultation<br/>
            <span className="text-gold-gradient">to Clean Energy</span>
          </h2>
          <p className="reveal font-outfit text-white/50 max-w-md mx-auto">
            We make going solar effortless. Our end-to-end service means you never have to chase a permit or talk to the utility company.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px z-0"
            style={{background:'linear-gradient(90deg, transparent, rgba(245,158,11,0.4) 20%, rgba(245,158,11,0.4) 80%, transparent)'}}/>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="reveal relative z-10 text-center group" style={{transitionDelay:`${i*120}ms`}}>
                {/* Icon circle */}
                <div className="relative mx-auto w-[72px] h-[72px] mb-8">
                  <div className="absolute inset-0 rounded-full bg-gold-500/10 border border-gold-500/20 group-hover:bg-gold-500/20 group-hover:border-gold-500/40 group-hover:shadow-glow-sm transition-all duration-300"/>
                  <div className="absolute inset-0 flex items-center justify-center text-gold-400 group-hover:text-gold-300 transition-colors">
                    {step.icon}
                  </div>
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center">
                    <span className="font-outfit font-bold text-carbon-950 text-[10px]">{i+1}</span>
                  </div>
                </div>

                <div className="font-outfit text-xs tracking-widest text-gold-500/60 mb-3">{step.num}</div>
                <h3 className="font-cormorant font-bold text-xl text-white mb-3">{step.title}</h3>
                <p className="font-outfit text-sm text-white/45 leading-relaxed mb-4">{step.desc}</p>
                <span className="inline-block font-outfit text-xs text-gold-500/70 bg-gold-500/8 border border-gold-500/15 px-3 py-1 rounded-full">
                  ✓ {step.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="reveal mt-20 text-center">
          <a href="#quote" className="btn-gold text-sm px-12 py-4 shadow-gold">
            Start My Assessment — It's Free
          </a>
        </div>
      </div>
    </section>
  )
}
