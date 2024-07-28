/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          neutral: {
            925: '#121212',
          },
        },
      },
    },
    corePlugins: {
      preflight: false,
    },
    plugins: [],
  }
