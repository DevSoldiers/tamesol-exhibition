import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        BroadcastChannel: '#f28f37',
        secondarybrand: '#f7a838',
        redishcolor: '#b51f1b',
      },
    },
  },
  plugins: [],
} satisfies Config;
