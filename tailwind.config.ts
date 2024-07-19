import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#3F485E",
        primaryIconColor: "#949DA6",
        secondaryColor: "77838F",
        orangeColor: "#EB6B2A",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        alef: ["Alef", "sans-serif"],
        Montserrat: ["Montserrat"],
        nobile: ["Nobile"],
        dm: ["DM_Sans"],
      },
      screens: {
        xs: "480px", // Example of defining an extra small screen breakpoint
      },
    },
  },
  plugins: [],
};
export default config;
