/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",              // agar scan index.html
    "./src/**/*.{vue,js,ts,jsx,tsx}" // scan semua file Vue, JS, TS di src
  ],
  theme: {
    extend: {},  // tempat kamu bisa tambah custom theme nanti
  },
  plugins: [],   // tempat kamu bisa tambah plugin Tailwind kalau perlu
}
