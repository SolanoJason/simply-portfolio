/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        whatsapp: {
          DEFAULT: '#00d757',
        },
        hackerrank: {
          DEFAULT: '#28b95a',
        },
        linkedin: {
          DEFAULT: '#116bc5',
        },
      },
      animation: {
        typewriter: 'typewriter 1.3s steps(17) forwards',
        caret: 'typewriter 1.3s steps(17) forwards, blink 1s steps(17) infinite 1.3s',
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%',
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [

  ],
  darkMode: 'class',
}

