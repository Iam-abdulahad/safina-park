module.exports = {
  content: ["./app/**/*.{js,jsx}","./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        lagoon: { DEFAULT: "#315A4C", dark: "#244438" },
        leaf: "#738875",
        ticket: "#B9975B",
        coral: "#A96E54",
        sky: "#F3F2EC",
        ink: "#25312B",
      },
      fontFamily: {
        head: ["var(--font-head)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "0.875rem",
        "3xl": "1rem",
      },
      boxShadow: {
        soft: "0 14px 36px rgba(37, 49, 43, 0.08)",
      },
    },
  },
  plugins: [],
};
