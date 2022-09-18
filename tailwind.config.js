/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.js", "./src/Components/About.js","./src/Components/Nav.js","./src/Components/PastWork.js","./src/Components/Skills.js","./src/Components/Testimonials.js","./src/Components/Contact.js"],
  theme: {
    extend: { colors: { custom: "#003140" } },
  },
  plugins: [],
};
