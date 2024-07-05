/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
      },
      colors: {
        bittersweet: {
          shimmer: 'hsl(0, 43%, 51%)',
        },
        gray: {
          light: 'hsl(0, 0%, 84%)',
          'light-70': 'hsla(0, 0%, 84%, 0.7)'
        },
        vegas: {
          gold: 'hsl(45, 54%, 58%)',
        },
        smoky: {
          black: 'hsl(0, 0%, 7%)',
        },
        onyx: {
          DEFAULT: 'hsl(240, 1%, 17%)',
        },
        crayola: {
          DEFAULT: 'hsl(45, 100%, 72%)',
        },
        jet: {
          DEFAULT: 'hsl(0, 0%, 22%)',
        },
        eerie: {
          black: 'hsl(240, 2%, 12%)',
          'black-2': 'hsl(240, 2%, 13%)',
        },
        smoky: {
          black: 'hsl(0, 0%, 7%)',
        },
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
}

