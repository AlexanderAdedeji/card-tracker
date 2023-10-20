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
        xl: '1440px',
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
          2: '#001509',
          3: '#001508',
          4: '#000F06',
          5: '#1E1E1E',
          6: '#001C0B'
        },
        green: {
          1: '#011C0B',
          2: '#000603',
          3: '#B2DFC4',
          4: '#E5F4EB',
          5: '#CCE9D8',
          6: '#3FD77D',
          7: '#00933C',
          8: '#80C99D',
          9: '#33A963',
          10: '#FCFEFD',
          11: '#4CB377',
          12: '#080D0B',
          13: '#C5DAE7',
          14: '#E4F3EA',
          15: '#33A955'
        },
        grey: {
          1: '#111111',
          2: '#F2FAF5',
          3: '#91A2AD'
        },
        blue: {
          1: '#9FC2D7',
          2: '#264F69'
        },
        yellow: {
          1: '#FFFB81',
        },
        brown: {
          1: '#AC4243'
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
        3: '0px 4px 8px 0px rgba(57, 83, 123, 0.08)',
        4: '0px 2px 4px 1px rgba(0, 0, 0, 0.05)'
      },
      backgroundImage: {
        nav: `linear-gradient(180deg, #B2DFC4 0%, #FFFDB3 100%)`,
        btnFull: `linear-gradient(85deg, #011C0B 3.72%, #00933C 91.94%)`,
        "text-1": `linear-gradient(85deg, #DBD86B 3.72%, #38DF7C 91.94%)`,
        btnGreen: `linear-gradient(263deg, #33A943 -24.08%, #33A963 100%)`,
        btnGreenDeep: `linear-gradient(263deg, #000F06 -24.08%, #001D0C 100%)`,


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