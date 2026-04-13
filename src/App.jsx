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
        style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(16,185,129,0.25)', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
        title="Call us now">
        <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#10b981' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="font-outfit text-xs font-medium whitespace-nowrap max-w-0 group-hover:max-w-[120px] overflow-hidden transition-all duration-300" style={{ color: '#059669' }}>8318839609</span>
      </a>

      <a href="/asimos-company-profile.pdf" download
        className="group flex items-center gap-0 hover:gap-3 overflow-hidden backdrop-blur rounded-full h-12 pl-3 pr-3 hover:pr-5 transition-all duration-300"
        style={{ background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(16,185,129,0.25)', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
        title="Download Company Profile">
        <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#10b981' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span className="font-outfit text-xs font-medium whitespace-nowrap max-w-0 group-hover:max-w-[120px] overflow-hidden transition-all duration-300" style={{ color: '#059669' }}>Download Profile</span>
      </a>

      <a href="#quote"
        className="flex items-center gap-2 font-outfit font-bold text-sm px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
        style={{ background: 'linear-gradient(135deg,#10b981,#34d399,#059669)', color: 'white', boxShadow: '0 4px 20px rgba(16,185,129,0.4)' }}>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Free Quote
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
      document.body.style.color = '#1a2e1a'
    }
  }, [darkMode])

  useEffect(() => {
    const bar = document.createElement('div')
    bar.style.cssText = `
      position:fixed; top:0; left:0; height:3px; width:0%;
      background:linear-gradient(90deg,#10b981,#34d399,#059669);
      z-index:9999; transition:width 0.1s linear;
      box-shadow:0 0 8px rgba(16,185,129,0.6);
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
      style={{ background: darkMode ? '#0e1a0e' : '#f4f7f4', color: darkMode ? '#f4f7f4' : '#1a2e1a' }}>
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
