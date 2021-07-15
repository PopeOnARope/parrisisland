module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        tan: '#f4ce82',
        yellow: '#deb548',
        black: '#333333',
        green: '#67ad69',
        blue: '#3ac6f4',
        orange: '#e45c25',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
