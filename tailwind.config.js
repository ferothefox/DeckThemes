/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        screenMinusHeader: "calc(100vh - 4rem)",
      },
      colors: {
        "primary-light": "#006783",
        "on-primary-light": "#ffffff",
        "primary-container-light": "#bde9ff",
        "on-primary-container-light": "#001f2a",
        "secondary-light": "#4d616c",
        "on-secondary-light": "#ffffff",
        "secondary-container-light": "#d0e6f2",
        "on-secondary-container-light": "#081e27",
        "tertiary-light": "#5d5b7d",
        "on-tertiary-light": "#ffffff",
        "tertiary-container-light": "#e3dfff",
        "on-tertiary-container-light": "#191836",
        "error-light": "#ba1a1a",
        "error-container-light": "#ffdad6",
        "on-error-light": "#ffffff",
        "on-error-container-light": "#410002",
        "background-light": "#fbfcfe",
        "on-background-light": "#191c1e",
        "surface-light": "#fbfcfe",
        "on-surface-light": "#191c1e",
        "surface-variant-light": "#dce4e9",
        "on-surface-variant-light": "#40484c",
        "outline-light": "#70787d",
        "inverse-on-surface-light": "#eff1f3",
        "inverse-surface-light": "#2e3132",
        "inverse-primary-light": "#65d3ff",
        "shadow-light": "#000000",
        "surface-tint-light": "#006783",
        "outline-variant-light": "#c0c8cd",
        "scrim-light": "#000000",
        "primary-dark": "#65d3ff",
        "on-primary-dark": "#003546",
        "primary-container-dark": "#004d64",
        "on-primary-container-dark": "#bde9ff",
        "secondary-dark": "#b4cad6",
        "on-secondary-dark": "#1f333c",
        "secondary-container-dark": "#354a53",
        "on-secondary-container-dark": "#d0e6f2",
        "tertiary-dark": "#c6c2ea",
        "on-tertiary-dark": "#2e2d4d",
        "tertiary-container-dark": "#454364",
        "on-tertiary-container-dark": "#e3dfff",
        "error-dark": "#ffb4ab",
        "error-container-dark": "#93000a",
        "on-error-dark": "#690005",
        "on-error-container-dark": "#ffdad6",
        "background-dark": "#191c1e",
        "on-background-dark": "#e1e2e4",
        "surface-dark": "#191c1e",
        "on-surface-dark": "#e1e2e4",
        "surface-variant-dark": "#40484c",
        "on-surface-variant-dark": "#c0c8cd",
        "outline-dark": "#8a9297",
        "inverse-on-surface-dark": "#191c1e",
        "inverse-surface-dark": "#e1e2e4",
        "inverse-primary-dark": "#006783",
        "shadow-dark": "#000000",
        "surface-tint-dark": "#65d3ff",
        "outline-variant-dark": "#40484c",
        "scrim-dark": "#000000",
        cssPurple: "#de2cf7",
        audioBlue: "rgb(26,159,255)",
        discordColor: "#5865F2",
        // These are used to "transform" the card values to look like the bg values
        lightenerDark: "rgba(255,255,255,0.1)",
        lightenerLight: "rgba(255,255,255,0.3)",
        bgDark: "#2e2e2e",
        bgLight: "#e2e2e2",
        cardDark: "#0000004e",
        cardLight: "#0000002e",
        elevation: {
          1: {
            light: "#0000001e",
            dark: "#0000002e",
          },
          2: {
            light: "#0000002e",
            dark: "#0000004e",
          },
          3: {
            light: "#0000006e",
            dark: "#0000006e",
          },
        },
        borderDark: "#0e0e0e",
        borderLight: "#a2a2a2",
        darkBorderDark: "#020202",
        darkBorderLight: "rgb(140,140,140)",
        textLight: "#000",
        textFadedLight: "#333",
        textDark: "#fff",
        textFadedDark: "#aaa",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
