/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        carbon: {
          50:  '#f4f7f4',
          100: '#e6ede6',
          200: '#ccdacc',
          300: '#a0bca0',
          400: '#6e966e',
          500: '#4a724a',
          600: '#345534',
          700: '#253d25',
          800: '#172817',
          900: '#0e1a0e',
          950: '#080d08',
        },
        gold: {
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        solar: {
          orange: '#10b981',
          yellow: '#6ee7b7',
          glow:   '#34d399',
        },
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        outfit:    ['"Outfit"', 'sans-serif'],
      },
      animation: {
        'spin-slow':  'spin 20s linear infinite',
        'pulse-gold': 'pulseGold 2.5s ease-in-out infinite',
        'float':      'float 6s ease-in-out infinite',
        'shimmer':    'shimmer 3s linear infinite',
        'ray':        'ray 4s ease-in-out infinite',
        'count-up':   'fadeUp 0.6s ease forwards',
        'marquee':    'marquee 28s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float:     { '0%,100%': { transform: 'translateY(0)' },                    '50%': { transform: 'translateY(-16px)' } },
        pulseGold: { '0%,100%': { boxShadow: '0 0 20px rgba(16,185,129,0.3)' },    '50%': { boxShadow: '0 0 60px rgba(16,185,129,0.7)' } },
        shimmer:   { '0%': { backgroundPosition: '-200% 0' },                      '100%': { backgroundPosition: '200% 0' } },
        ray:       { '0%,100%': { opacity: '0.3', transform: 'scaleY(1)' },        '50%': { opacity: '0.8', transform: 'scaleY(1.15)' } },
        fadeUp:    { '0%': { opacity: '0', transform: 'translateY(24px)' },        '100%': { opacity: '1', transform: 'translateY(0)' } },
        marquee:   { '0%': { transform: 'translateX(0)' },                         '100%': { transform: 'translateX(-50%)' } },
        glowPulse: { '0%,100%': { textShadow: '0 0 20px rgba(16,185,129,0.4)' },  '50%': { textShadow: '0 0 60px rgba(16,185,129,0.9)' } },
      },
      boxShadow: {
        'gold':       '0 0 40px rgba(16,185,129,0.25), 0 20px 60px rgba(0,0,0,0.15)',
        'luxury':     '0 30px 80px rgba(0,0,0,0.15), 0 0 0 1px rgba(16,185,129,0.1)',
        'card':       '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
        'glow-sm':    '0 0 20px rgba(16,185,129,0.4)',
        'inner-gold': 'inset 0 0 30px rgba(16,185,129,0.05)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #10b981 0%, #34d399 50%, #059669 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0e1a0e 0%, #172817 100%)',
        'hero-gradient': 'radial-gradient(ellipse 120% 80% at 60% 40%, rgba(16,185,129,0.08) 0%, transparent 60%), #f4f7f4',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)',
        'shimmer-gold':  'linear-gradient(90deg, transparent 0%, rgba(16,185,129,0.15) 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
}
