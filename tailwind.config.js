module.exports = {
  content: ["./app/**/*.{js,jsx}","./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        lagoon: { DEFAULT: "#0D6872", dark: "#084B53" },
        leaf: "#356B4A",
        ticket: "#F7C948",
        coral: "#E76F51",
        sky: "#E9F4F2",
        ink: "#173B3A",
      },
      fontFamily: {
        head: ["var(--font-head)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 16px 45px rgba(23, 59, 58, 0.09)",
      },
    },
  },
  plugins: [],
};
