import type { Config } from "tailwindcss";
import  withMT  from '@material-tailwind/react/utils/withMT';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        bg:"#0F0F0F",
        card:{
          400:"#5E5E5E",
          500:"#272727",
          800:"#1E1E1E",

        },
        text:{
          100:"#ffffff"
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default withMT(config);
