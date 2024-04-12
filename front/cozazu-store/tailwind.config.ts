import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F4F4F4',
        secondary: '#CF7500',
        tertiary: '#CF7500',
        complementary: '#000000',
        text: '#E0E0E0',
        background_dark: '#212121',
        background_light: '#fdfefe',
        error: '#D32F2F',
        border: '#616161',
      },
      transformOrigin: {
        '0': '0%',
      },
      zIndex: {
        '-1': '-1',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['responsive', 'hover', 'focus', 'group-hover'],
      transform: ['responsive', 'hover', 'focus', 'group-hover'],
      translate: ['responsive', 'hover', 'focus', 'group-hover'],
      backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
      display: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
  plugins: [
    require('tailwindcss-transforms')({
      '3d': true,
    }),
  ],
}
export default config;