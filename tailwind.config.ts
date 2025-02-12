import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        BroadcastChannel: '#f28f37',
        secondarybrand: '#f7a838',
        redishcolor: '#b51f1b',
        brownishBrand: '#9D4F09',
        transparentBrownish: '#9d4e09c2',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      backgroundImage: {
        'brand-gradient-var1': 'linear-gradient(to right, #b51f1b,#f7a838, #f28f37)',
        'brand-gradient-var2': 'linear-gradient(to right, #722f37,#f7a838, #f28f37)',
        'brand-gradient-var3': 'linear-gradient(to right, #722f37,#f7a838, #f28f37)',
        'brand-gradient-var4': 'linear-gradient(to right, #b51f1b,#f7a838, #f28e3700,#f28e3700)',
        'glass-morph-bg':
          'linear-gradient(90deg, rgba(181, 31, 27, 0.25) 0%, rgba(242, 143, 55, 0.25) 100%)',
        'top-header-bg': "url('/hero_exhibition_placeholder.jpeg')",
        'svg-curvy-bg': "url('/curvy_card.svg')",
        'exhibition-img': "url('/exhibition_pics/15.jpeg')"
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        manrope: ['var(--font-manrope)'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
