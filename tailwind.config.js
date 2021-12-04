module.exports = {
  purge: {
    content: ['./index.html','./index.js','./src_css/tailwind_src.css']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'parallex-img': "url('../images/parallex-bg-3.jpg')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
