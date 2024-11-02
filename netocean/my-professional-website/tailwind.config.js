// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        darkblue: '#1B2A41', // A dark blue for the main section
        lightblue: '#E3F2FD', // A very light blue for the background
      },
    },
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: [],
};
