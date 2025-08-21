import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--primary-light)',
        textcolor: 'var(--text-color)',
        headcolor: 'var(--head-color)',
        bordercolor: 'var(--border-color)' ,
        whitecolor: 'var(--white-color)'    
      },
      border:{
        smallradius: 'var(--small-radius)',
        mediumradius: 'var(--medium-radius)'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      }
    }
  },
  plugins: [
    tailwindcss(),
  ],
})