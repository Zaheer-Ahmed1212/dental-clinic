/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#123534',
          light: '#1C4A48',
          dark: '#0B2423',
        },
        porcelain: {
          DEFAULT: '#F1EEE6',
          dim: '#E8E2D3',
          deep: '#DED6C2',
        },
        copper: {
          DEFAULT: '#BB5E2E',
          light: '#D98A57',
          dark: '#8F4620',
        },
        sage: {
          DEFAULT: '#8B9C8C',
          light: '#AEBCA8',
          dark: '#5F7263',
        },
        charcoal: '#20211D',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        widest2: '.28em',
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        draw: {
          from: { strokeDashoffset: 'var(--dash)' },
          to: { strokeDashoffset: '0' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        floatY: 'floatY 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
