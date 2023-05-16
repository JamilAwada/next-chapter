/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D3557',
        secondary: '#F1FAEE',
        primarybtn: '#E63946',
        secondarybtn: '#A8DADC',
        accent: '#457B9D',
      },
    },
    plugins: [],
  }
}