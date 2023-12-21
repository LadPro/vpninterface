/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        primario: '#FF9800',
        lateral: '#7A316F',
        verde: '#3DF039',
        subt: '#CD6688',
        azul: '#8696FE',
        rosa: '#E0BAFD',
        gris: 'rgb(209 213 219)'
      },
    },
  },
  plugins: [require("daisyui")],
}

