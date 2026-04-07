/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        carbon: {
          50:  '#f5f5f0',
          100: '#e8e8e0',
          200: '#d0d0c4',
          300: '#a8a898',
          400: '#787868',
          500: '#545448',
          600: '#3a3a30',
          700: '#282820',
          800: '#181810',
          900: '#0e0e08',
          950: '#080804',
        },
        gold: {
          300: '#fcd47a',
          400: '#f9bc38',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        solar: {
          orange: '#ff6b2b',
          yellow: '#ffd700',
          glow:   '#ffb347',
        },
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        outfit:    ['"Outfit"', 'sans-serif'],
      },
      animation: {
        'spin-slow':    'spin 20s linear infinite',
        'pulse-gold':   'pulseGold 2.5s ease-in-out infinite',
        'float':        'float 6s ease-in-out infinite',
        'shimmer':      'shimmer 3s linear infinite',
        'ray':          'ray 4s ease-in-out infinite',
        'count-up':     'fadeUp 0.6s ease forwards',
        'marquee':      'marquee 28s linear infinite',
        'glow-pulse':   'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float:     { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-16px)' } },
        pulseGold: { '0%,100%': { boxShadow: '0 0 20px rgba(245,158,11,0.3)' }, '50%': { boxShadow: '0 0 60px rgba(245,158,11,0.7)' } },
        shimmer:   { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        ray:       { '0%,100%': { opacity: '0.3', transform: 'scaleY(1)' }, '50%': { opacity: '0.8', transform: 'scaleY(1.15)' } },
        fadeUp:    { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        marquee:   { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        glowPulse: { '0%,100%': { textShadow: '0 0 20px rgba(245,158,11,0.4)' }, '50%': { textShadow: '0 0 60px rgba(245,158,11,0.9)' } },
      },
      boxShadow: {
        'gold':    '0 0 40px rgba(245,158,11,0.25), 0 20px 60px rgba(0,0,0,0.5)',
        'luxury':  '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(245,158,11,0.1)',
        'card':    '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'glow-sm': '0 0 20px rgba(245,158,11,0.4)',
        'inner-gold': 'inset 0 0 30px rgba(245,158,11,0.05)',
      },
      backgroundImage: {
        'gold-gradient':   'linear-gradient(135deg, #f59e0b 0%, #fcd47a 50%, #d97706 100%)',
        'dark-gradient':   'linear-gradient(180deg, #0e0e08 0%, #181810 100%)',
        'hero-gradient':   'radial-gradient(ellipse 120% 80% at 60% 40%, rgba(245,158,11,0.08) 0%, transparent 60%), radial-gradient(ellipse 80% 100% at 10% 60%, rgba(255,107,43,0.05) 0%, transparent 50%), #0e0e08',
        'card-gradient':   'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        'shimmer-gold':    'linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.15) 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
}
