/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'caprasimo': ['Caprasimo'],
        'flamenco': ['Flamenco']
      },
      colors: {
        drkblu: "#002036",
        lblu: "#91D0FC",
        yllw: "#FFD600",
        grn: "#39B54A",
        llbrwn: "#CFB866",
        lbrwn: "#A08C44",
        brwn: "#77672D",
        dbrwn: "#574B1E",
        ddbrwn: "#241F0B",
      }
    },
  },
  plugins: [],
}