/** @type {import('tailwindcss').Config} */

const colors = {
  "primary-100": "var(--primary-100)",
  "primary-200": "var(--primary-200)",
  "primary-300": "var(--primary-300)",
  "primary-400": "var(--primary-400)",
  "primary-500": "var(--primary-500)",

  "critical-background": "var(--critical-background)",
  "critical-primary": "var(--critical-primary)",

  "success-background": "var(--success-background)",
  "success-primary": "var(--success-primary)",

  "warning-background": "var(--warning-background)",
  "warning-primary": "var(--warning-primary)",
};


module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: colors,
      textColor: colors,
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
