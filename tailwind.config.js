/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'black-700': '#242424',
        'grey-200': '#EEEEEE',
        'green-android': '#D4ECD6',
        'blue-react': '#E5F1F8',
        'tools&tech': '#707070'
      },
      animation: {
        'blink': 'blink 1s linear infinite',
      },
      keyframes: {
        'blink': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
      }
    },
  },
  plugins: [],
}
