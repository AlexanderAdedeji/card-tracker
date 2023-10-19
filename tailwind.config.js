/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      xm: '900px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      'domine': ['Domine', 'serif'],
      'poppins': ['Poppins', 'sans-serif']
    },
    container: {
      center: true,
      screens: {
        xl: '1340px',
      }
    },
    extend: {
      padding: {
        'container-lg': '3.12rem',
        'container-base': '1.38rem',
      },
      margin: {
        'container-lg': '2.44rem',
        'container-base': '1.3rem'
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        black: {
          1: '#001B0B',
          2: '#001509'
        },
        green: {
          1: '#011C0B'
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        1: '15px 5px 5px 0px rgba(0, 0, 0, 0.075)',
        2: '0px 2px 4px 0px rgba(35, 57, 91, 0.20)',
        3: '0px 4px 8px 0px rgba(57, 83, 123, 0.08)'
      },
      backgroundImage: {
        nav: `linear-gradient(180deg, #B2DFC4 0%, #FFFDB3 100%)`,
        btnFull: `linear-gradient(85deg, #011C0B 3.72%, #00933C 91.94%)`,

      },
      transitionProperty: {
        font: 'font-size, transform',
      },
      animation: {
        shine: "shine 1s",
        scale: "scale 3s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
        scale: {
          '0%': { transform: 'scale(.75)', },
          '50%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(.75)' },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require("tailwindcss-animate"), nextui()],
};