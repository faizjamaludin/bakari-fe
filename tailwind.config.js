/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "2xs": "10px",
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
      },
      colors: {
        primary: "#2D71F8",
        secondary: "#FC4A4A",
        background: {
          success: "#f2fcfa",
          purple: "#fef1fc",
          orange: "#fde9de",
          cream: "#fef8f0",
          pink: "#ffe9f3",
          red: "#fff5f5",
          blue: "#f5f9ff",
          primary: "#FFFFFF",
          secondary: "#f5f5f5",
        },
        text: {
          success: "#137e6a",
          purple: "#bd81ba",
          orange: "#f98849",
          cream: "#b59075X",
          pink: "#fd459b",
          red: "#fe6eb1",
          blue: "#2d71f8",
          caption: "#969696",
          primary: "#333333",
        },
      },
      borderRadius: {
        "2xs": "4px",
        xs: "6px",
        sm: "8px",
        md: "10px",
        lg: "12px",
        xl: "14px",
        "2xl": "16px",
      },
      padding: {
        none: "0px",
        "2xs": "4px",
        xs: "6px",
        sm: "8px",
        md: "10px",
        lg: "14px",
        xl: "18px",
        "2xl": "22px",
      },
      margin: {
        none: "0px",
        "2xs": "4px",
        xs: "6px",
        sm: "8px",
        md: "10px",
        lg: "14px",
        xl: "18px",
        "2xl": "22px",
      },
      gap: {
        none: "0px",
        "2xs": "4px",
        xs: "6px",
        sm: "8px",
        md: "10px",
        lg: "14px",
        xl: "18px",
        "2xl": "22px",
      },
      boxShadow: {
        md: "0 4px 6px -1px rgb(0 0 0 / 0.03), 0 2px 4px -2px rgb(0 0 0 / 0.03);",
        "top-md": "0 -4px 6px -1px rgb(0 0 0 / 0.03), 0 -2px 4px -2px rgb(0 0 0 / 0.03);",

      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }

        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }

        'desktop': '1920px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
