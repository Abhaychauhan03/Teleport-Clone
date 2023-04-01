/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "body-gray": "#F4F5F7",
        "card-gray": "#FBFBFB",
        "gray-text": "#42526E",
        "note-yellow": "#FFFACB",
        "line-yellow": "#FCF3A4",
        "whatsapp-background": "#254142;",
        "whatsapp-border": "#335051;",
        "line-color": "#D9D9D9",
      },
      gridTemplateColumns: {
        footer: "0.2fr repeat(2, 1fr) 100px",
      },
    },
  },
};
