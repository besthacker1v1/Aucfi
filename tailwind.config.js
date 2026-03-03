/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: 'class', // Perfect for that techy midnight feel
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0b0e14',      // Deep space black
        'glass-white': 'rgba(255, 255, 255, 0.05)',
        'solana-purple': '#9945FF',
        'solana-green': '#14F195',
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #14F195 0%, #9945FF 100%)',
        'glass-gradient': 'linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(153, 69, 255, 0.3)',
        'neon-green': '0 0 20px rgba(20, 241, 149, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
