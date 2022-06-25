/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    purge: ["./src/**/*.{js,jsx}","../index.html"],
  theme: {
      extend: {
          colors: {
              brand: {
                  light:"#3fbaeb",
                  DEFAULT:"#0fa9e6",
                  dark:"#0c87b8",
              },
          },
          fontFamily: {
              headline: "Poppins, sans-serif",
          },
         
      },
    },
    variants: {
        extend: {
            backgroundColor: ["active"],
        },
    },
  plugins: [],
}
