module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    { pattern: /^bg-/ },
    { pattern: /^fill-/ },
    { pattern: /^stroke-/ },
    { pattern: /^text-/ },
    { pattern: /^object-/ },
  ],
  theme: {
    backgroundColor: (theme) => theme("colors"),
    backgroundOpacity: (theme) => theme("opacity"),
    borderColor: (theme) => theme("colors"),
    borderRadius: {
      none: "0",
      xs: "1px",
      sm: "2px",
      md: "4px",
      lg: "5px",
      xl: "6px",
      xxl: "8px",
      xxxl: "10px",
      xxxxl: "20px",
      xxxxxl: "24px",
      circle: "50%",
    },
    borderWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      5: "5px",
      6: "6px",
      8: "8px",
    },
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      white60: "#FFFFFF99",
      black: "#231F1F",
      gray: "#363434",
      gray50: "#EBEBEB",
      turquoise: "#00ADB5",
      turquoise10: "#00ADB51A",
      orange: "#F98A24",
      "orange-hover": "#ED8729",
      red: "#DD4A48",
      dark: "#000000",
    },
    fill: (theme) => theme("colors"),
    fontSize: {
      10: "10px",
      12: "12px",
      14: "14px",
      16: "16px",
      20: "20px",
      24: "24px",
      34: "34px",
      48: "48px",
      60: "60px",
      96: "96px",
    },
    height: {
      none: "none",
      auto: "auto",
      full: "100%",
      screen: "100vh",
    },
    letterSpacing: {
      0: "0",
      15: "0.15px",
      25: ".25px",
      40: ".4px",
      44: ".44px",
      50: ".5px",
      100: "1px",
      135: "1.35px",
      150: "1.5px",
      175: "1.75px",
    },
    opacity: {
      inherit: "inherit",
      0: "0",
      5: ".05",
      15: ".15",
      25: ".25",
      35: ".35",
      50: ".5",
      75: ".75",
      80: ".80",
      90: ".90",
      100: "1",
    },
    screens: {
      xs: "481px",
      sm: "641px",
      md: "769px",
      lg: "1025px",
      xl: "1225px",
    },
    stroke: (theme) => theme("colors"),
    textColor: (theme) => theme("colors"),
    width: {
      none: "none",
      auto: "auto",
      full: "100%",
      screen: "100vw",
    },
  },
  plugins: [],
};
