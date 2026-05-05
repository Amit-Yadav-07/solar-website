import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Solutions from './components/Solutions'
import Process from './components/Process'
import Calculator from './components/Calculator'
import WhyUs from './components/WhyUs'
import Projects from './components/Projects'
import Reviews from './components/Reviews'
import QuoteForm from './components/QuoteForm'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      <a href="tel:8318839609"
        className="group flex items-center gap-0 hover:gap-3 overflow-hidden backdrop-blur rounded-full h-12 pl-3 pr-3 hover:pr-5 transition-all duration-300"
        style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(10, 116, 172, 0.25)', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
        title="Call us now">
        <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#0A74AC' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="font-outfit text-xs font-medium whitespace-nowrap max-w-0 group-hover:max-w-[120px] overflow-hidden transition-all duration-300" style={{ color: '#0A74AC' }}>8318839609</span>
      </a>

      <a href="/asimos-company-profile.pdf" download
        className="group flex items-center gap-0 hover:gap-3 overflow-hidden backdrop-blur rounded-full h-12 pl-3 pr-3 hover:pr-5 transition-all duration-300"
        style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(10, 116, 172, 0.25)', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
        title="Download Company Profile">
        <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#0A74AC' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span className="font-outfit text-xs font-medium whitespace-nowrap max-w-0 group-hover:max-w-[120px] overflow-hidden transition-all duration-300" style={{ color: '#0A74AC' }}>Download Profile</span>
      </a>

      <a href="https://wa.me/918318839609"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 font-outfit font-bold text-sm px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
        style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)', color: 'white', boxShadow: '0 4px 20px rgba(37,211,102,0.4)' }}>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.531 5.845L.057 23.882l6.2-1.626A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.002-1.368l-.358-.214-3.724.977.994-3.63-.234-.373A9.783 9.783 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z" />
        </svg>
        WhatsApp
      </a>

    </div>
  )
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false)  // DEFAULT: light mode

  useEffect(() => {
    const root = document.documentElement
    if (darkMode) {
      root.classList.add('dark')
      root.classList.remove('light-mode')
      document.body.style.background = '#0e1a0e'
      document.body.style.color = '#f4f7f4'
    } else {
      root.classList.remove('dark')
      root.classList.add('light-mode')
      document.body.style.background = '#f4f7f4'
      document.body.style.color = '#0C1F45'
    }
  }, [darkMode])

  useEffect(() => {
    const bar = document.createElement('div')
    bar.style.cssText = `
      position:fixed; top:0; left:0; height:3px; width:0%;
      background:linear-gradient(90deg,#0A74AC,#075882,#04334B);
      z-index:9999; transition:width 0.1s linear;
      box-shadow:0 0 8px rgba(10, 116, 172, 0.06);
    `
    document.body.appendChild(bar)
    const update = () => {
      const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      bar.style.width = `${pct}%`
    }
    window.addEventListener('scroll', update)
    return () => { window.removeEventListener('scroll', update); bar.remove() }
  }, [])

  return (
    <div className="min-h-screen transition-colors duration-300"
      style={{ background: darkMode ? '#0e1a0e' : '#f4f7f4', color: darkMode ? '#f4f7f4' : '#0C1F45' }}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <TrustBar darkMode={darkMode} />
        <Solutions darkMode={darkMode} />
        <Process darkMode={darkMode} />
        <Calculator darkMode={darkMode} />
        <WhyUs darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Reviews darkMode={darkMode} />
        <QuoteForm darkMode={darkMode} />
        <FAQ darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
      <FloatingButtons />
    </div>
  )
}
