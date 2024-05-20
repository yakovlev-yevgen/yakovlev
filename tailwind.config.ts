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
      mdOnly: { min: '768px', max: '1279.98px' },
      // notXl: { max: '1279.98px' },
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          sm: '16px',
          md: '32px',
          xl: '20px',
        },
      },

      colors: {
        ui_light: '#F1F1F1',
        ui_dark: '#020202',
        ui_accent: '#557976',
        ui_accent_transparent_30: 'rgba(85, 121, 118, 0.3)',
        ui_accent_transparent_40: 'rgba(85, 121, 118, 0.4)',
        ui_accent_transparent_50: 'rgba(85, 121, 118, 0.5)',
        ui_light_transparent_80: 'rgba(241, 241, 241, 0.8)',
        ui_light_transparent_50: 'rgba(241, 241, 241, 0.5)',
        ui_dark_transparent_50: 'rgba(2, 2, 2, 0.5)',
        ui_dark_transparent_80: 'rgba(2, 2, 2, 0.8)',
        ui_red: '#F80909',
        ui_overlay: 'rgba(2, 2, 2, 0.8)',
      },

      content: {
        // sparkle: 'url("/icons/sparkle.svg")', (приклад)
      },

      fontFamily: {
        ui_roboto: ['var(--font-roboto)'],
        ui_kurier: ['var(--font-kurier)'],
      },

      fontSize: {
        // light_14 - 300 14px 1.2 (1.2 у нас за замовч.)
        // reg_16 - 400 16px 1.2
        // reg_16_100 - 400 16px 1.0 (1.0 рідше зустрічається)

        // ----------------------------- LIGHT -----------------------------
        // mob-body-1 (назви шрифтів з макету)
        ui_light_14: [
          '14px',
          {
            lineHeight: '1.2',
            fontWeight: '300',
          },
        ],

        // mob-body-2, body-1 (назви шрифтів з макету)
        ui_light_16: [
          '16px',
          {
            lineHeight: '1.2',
            fontWeight: '300',
          },
        ],

        // body-2
        ui_light_20: [
          '20px',
          {
            lineHeight: '1.2',
            fontWeight: '300',
          },
        ],

        // ----------------------------- REGULAR -----------------------------
        // mob-roboto-regular-16, mob-reviews
        ui_reg_16: [
          '16px',
          {
            lineHeight: '1.2',
            fontWeight: '400',
          },
        ],

        // mob-roboto-regular-20, roboto-regular-20, reviews
        ui_reg_20: [
          '20px',
          {
            lineHeight: '1.2',
            fontWeight: '400',
          },
        ],

        // roboto-regular-24
        ui_reg_24: [
          '24px',
          {
            lineHeight: '1.2',
            fontWeight: '400',
          },
        ],

        // mob-cards-name
        ui_reg_24_100: [
          '24px',
          {
            lineHeight: '1.0',
            fontWeight: '400',
          },
        ],

        // mob-H2
        ui_reg_32_100: [
          '32px',
          {
            lineHeight: '1.0',
            fontWeight: '400',
          },
        ],

        // cards-name
        ui_reg_36_100: [
          '36px',
          {
            lineHeight: '1.0',
            fontWeight: '400',
          },
        ],

        // tab-H2
        ui_reg_40_100: [
          '40px',
          {
            lineHeight: '1.0',
            fontWeight: '400',
          },
        ],

        // mob-H1
        ui_reg_60: [
          '60px',
          {
            lineHeight: '1.2',
            fontWeight: '400',
          },
        ],

        // H2
        ui_reg_60_100: [
          '60px',
          {
            lineHeight: '1.0',
            fontWeight: '400',
          },
        ],

        // tab-H1
        ui_reg_80: [
          '80px',
          {
            lineHeight: '1.2',
            fontWeight: '400',
          },
        ],

        // H1
        ui_reg_120: [
          '120px',
          {
            lineHeight: '1.2',
            fontWeight: '400',
          },
        ],

        // ----------------------------- BOLD -----------------------------
        // mob-ticker
        ui_bold_14: [
          '14px',
          {
            lineHeight: '1.2',
            fontWeight: '700',
          },
        ],

        // ticker
        ui_bold_20: [
          '20px',
          {
            lineHeight: '1.2',
            fontWeight: '700',
          },
        ],
      },
    },
  },
  // plugins: [require('prettier-plugin-tailwindcss')],
};
export default config;
