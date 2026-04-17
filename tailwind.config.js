/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand blue ramp — based on logo color #0A74AC
        navy: {
          50: '#E8F4FB',
          100: '#C2DEEE',
          200: '#96C8E3',
          300: '#6AAECE',
          400: '#2496D4',
          500: '#0A74AC',
          600: '#075882',
          700: '#053F5E',
          800: '#03293E',
          900: '#04334B',
          950: '#021824',
        },
        // Brand blue aliases
        blue: {
          300: '#6AAECE',
          400: '#2496D4',
          500: '#0A74AC',
          600: '#075882',
          700: '#053F5E',
        },
        // Gold/amber — accent from logo swoosh
        gold: {
          300: '#F9D08A',
          400: '#F5B04A',
          500: '#E8921A',
          600: '#C4730E',
          700: '#9A5508',
        },
        // Warm power tones
        power: {
          orange: '#E8921A',
          amber: '#F5B04A',
          glow: '#FDD97A',
        },
      },
      fontFamily: {
        raleway: ['"Raleway"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-blue': 'pulseBlue 2.5s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2.5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'ray': 'ray 4s ease-in-out infinite',
        'count-up': 'fadeUp 0.6s ease forwards',
        'marquee': 'marquee 28s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-16px)' } },
        pulseBlue: { '0%,100%': { boxShadow: '0 0 20px rgba(10,116,172,0.3)' }, '50%': { boxShadow: '0 0 60px rgba(10,116,172,0.7)' } },
        pulseGold: { '0%,100%': { boxShadow: '0 0 20px rgba(232,146,26,0.3)' }, '50%': { boxShadow: '0 0 60px rgba(232,146,26,0.7)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        ray: { '0%,100%': { opacity: '0.3', transform: 'scaleY(1)' }, '50%': { opacity: '0.8', transform: 'scaleY(1.15)' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        glowPulse: { '0%,100%': { textShadow: '0 0 20px rgba(10,116,172,0.4)' }, '50%': { textShadow: '0 0 60px rgba(10,116,172,0.9)' } },
      },
      boxShadow: {
        'blue': '0 0 40px rgba(10,116,172,0.25),  0 20px 60px rgba(0,0,0,0.15)',
        'gold': '0 0 40px rgba(232,146,26,0.25), 0 20px 60px rgba(0,0,0,0.15)',
        'luxury': '0 30px 80px rgba(0,0,0,0.15), 0 0 0 1px rgba(10,116,172,0.1)',
        'card': '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
        'glow-sm': '0 0 20px rgba(10,116,172,0.4)',
        'glow-gold': '0 0 20px rgba(232,146,26,0.4)',
        'inner-blue': 'inset 0 0 30px rgba(10,116,172,0.05)',
      },
      backgroundImage: {
        'blue-gradient': 'linear-gradient(135deg, #0A74AC 0%, #2496D4 50%, #075882 100%)',
        'gold-gradient': 'linear-gradient(135deg, #E8921A 0%, #F5B04A 50%, #C4730E 100%)',
        'dark-gradient': 'linear-gradient(180deg, #021824 0%, #053F5E 100%)',
        'hero-gradient': 'radial-gradient(ellipse 120% 80% at 60% 40%, rgba(10,116,172,0.08) 0%, transparent 60%), #E8F4FB',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.45) 100%)',
        'shimmer-blue': 'linear-gradient(90deg, transparent 0%, rgba(10,116,172,0.12) 50%, transparent 100%)',
        'shimmer-gold': 'linear-gradient(90deg, transparent 0%, rgba(232,146,26,0.15) 50%, transparent 100%)',
      },
    },
  },
  plugins: [],
}
