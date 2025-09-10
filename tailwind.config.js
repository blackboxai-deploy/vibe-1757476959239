/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Colores super llamativos para Mi Vida Keto ALMA CREATIVA
        keto: {
          primary: '#059669',    // Verde esmeralda vibrante
          secondary: '#e11d48',  // Rosa fucsia intenso
          accent: '#f59e0b',     // Dorado brillante
          cream: '#fef3c7',      // Crema dorada
          purple: '#8b5cf6',     // Morado vibrante
          orange: '#f97316',     // Naranja energético
          blue: '#3b82f6',       // Azul brillante
          teal: '#14b8a6',       // Verde agua
          pink: '#ec4899',       // Rosa intenso
          lime: '#65a30d',       // Verde lima
          indigo: '#6366f1',     // Índigo vibrante
        },
        // Gradientes llamativos
        gradient: {
          primary: 'linear-gradient(135deg, #059669, #14b8a6)',
          secondary: 'linear-gradient(135deg, #e11d48, #ec4899)',
          rainbow: 'linear-gradient(135deg, #8b5cf6, #3b82f6, #14b8a6, #f59e0b, #f97316, #e11d48)',
        }
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'creative': ['Dancing Script', 'cursive'],
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
        'gradient': 'gradient 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%': { 'box-shadow': '0 0 20px rgba(5, 150, 105, 0.5)' },
          '100%': { 'box-shadow': '0 0 30px rgba(5, 150, 105, 0.8), 0 0 40px rgba(5, 150, 105, 0.3)' }
        }
      }
    },
  },
  plugins: [],
}