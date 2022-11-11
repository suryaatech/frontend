/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
        colors: {
            clifford: '#da373d',
            pink1: '#f472b6',
            biru: '#00e0ff',
            abu2: '#c4c4c4',
            primary: '#0ea5e9',
            dark: '#111827',
            hijau: '#128650',
            abu22: '#303A44',
            merah: '#CF2F4C',
            hijaumac: '#2ACE42',
            kuningmac: '#FFBE30',
            merahmac: '#FF6159',
            abumac: '#ECEAEB',
            ungu: '#CED7FF',
        },
    },
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
  ],
  daisyui: {
    themes: false
  },
}
