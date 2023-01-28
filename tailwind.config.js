/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-desktop": "url('/src/images/image-hero-desktop.png')",
        "hero-mobile": "url('/src/images/image-hero-mobile.png')",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "hsl(0, 0%, 8%)",
          secondary: "hsl(0, 0%, 41%)",
          neutral: "hsl(0, 0%, 98%)",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
