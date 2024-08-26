/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,html}",
  ],
  theme: {
    extend: {colors: {
        customBlue: '#44AFE4',
      },},
  },
  plugins: [],
}