/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#B8907E',
          light: '#D4A99E',
          dark: '#9A7068',
        },
        secondary: '#54595F',
        background: '#FAFAFA',
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F8FAFC',
        },
        text: {
          DEFAULT: '#333333',
          muted: '#666666',
        },
        border: '#E0E0E0',
        accent: '#6EC1E4',
        success: '#FAEF9B',
        gold: '#FAEF9B',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '20px',
        xl: '24px',
      },
    },
  },
  plugins: [],
}