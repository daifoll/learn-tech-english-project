/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontSize: {
      'extrasm': ['8px', '16px'],

      'sm': ['14px', '24px'],
      '2sm': ['28px', '48px'],

      'base': ['16px', '24px'],

      'lg': ['24px', '32x'],
      '2lg': ['48px', '64px'],

      'xl': ['64px', '88px'],

      '2xxl': ['128px', '168px'],
      'xxl': ['96px', '128px'],

      'nav-l': ['35px', '48px'],
    },
    extend: {
      colors: {
        primaryFontBasic: '#f8fafc',
        primaryBlue: '#1976d2',
        primaryWhite: 'rgb(248 250 252)'
      },
      screens: {
        'extrasm': '360px'
      }
      
    },
  },
  plugins: [],
}
