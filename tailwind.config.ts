import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'mob': '350px',
        // => @media (min-width: 640px) { ... }

        'lap': '760px',
        // => @media (min-width: 1024px) { ... }

        '1000': '1000px',

        'des': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
