import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',

      // xsOnly: { max: '479.98px' },
      // smOnly: { max: '767.98px' },
      // mdOnly: { min: '768px', max: '1279.98px' },
      // notXl: { max: '1279.98px' },
    },
    extend: {},
  },
  // plugins: [require('prettier-plugin-tailwindcss')],
};
export default config;
