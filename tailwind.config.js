module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./Components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "1400xl": "1400px",
        "lg-md": "34.5em",
      },
      spacing: {
        6.6: "1.2222em",
        17: " 4.1875em ",
        22: "5.8625em",
        23: "5.625em",
        27: "6.875em",
        33: "8.125em",
        37: "9.375em",
        85: "21.875em",
        100: "32.56em",
      },
      height: {
        31: "7.8125em",
      },
      padding: {
        2.1: "0.59375em",
        6.5: "1.625em",
        11.5: "2.86509375em",
      },
      colors: {
        framework: {
          green: "#25DAC5",
          gray: "#15143966",
          blueTitle: "#1E0E62",
          blueButton: "#482BE7",
        },
        fastEasyDesign: {
          blue: "#2F1893",
          blueButton: "#482BE7",
        },
        headingThree: {
          DarkBlue: "#1E0E62",
          RedSocials: "#EA3223",
        },
        vpnSite: {
          navGray: "#4F5665",
          buttonRed: "#F53855",
          dropdown: "#F53855",
          pink: "#FFECEC",
          redBorder: "#F53838",
          footerGray: "#F8F8F8",
          footerCpy: "#AFB5C0",
        },
      },
      fontSize: {
        "1xl": "1.375em",
        "xl-md": "1.375em",
        "45xl": "2.625em",
        "55xl": "3.125em",
      },
      fontFamily: {
        rubik: "Rubik, sans-serif",
      },
      boxShadow: {
        "2xl": "0 25px 50px -12px rgba(245, 56, 56, 0.35)",
      },
      margin: {
        13: "3.125em",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
