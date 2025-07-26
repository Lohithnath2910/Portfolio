module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-900": "var(--gray-900)",
        primaryblack: "var(--primaryblack)",
        primaryneutral: "var(--primaryneutral)",
        primarywhite: "var(--primarywhite)",
        "zinc-300": "var(--zinc-300)",
        "zinc-500": "var(--zinc-500)",
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
      fontFamily: {
        "button-text-2-regular": "var(--button-text-2-regular-font-family)",
        "button-text-2-semibold": "var(--button-text-2-semibold-font-family)",
        "button-text-semibold": "var(--button-text-semibold-font-family)",
        "display-text-m-extra-bold":
          "var(--display-text-m-extra-bold-font-family)",
        "display-text-m-regular": "var(--display-text-m-regular-font-family)",
        "displaytext-extra-bold": "var(--displaytext-extra-bold-font-family)",
        "displaytext-regular": "var(--displaytext-regular-font-family)",
        "heading-h2-bold": "var(--heading-h2-bold-font-family)",
        "heading-h3-semibold": "var(--heading-h3-semibold-font-family)",
        "heading-h4-extra-bold": "var(--heading-h4-extra-bold-font-family)",
        "heading-h4-semibold": "var(--heading-h4-semibold-font-family)",
        "heading-h5-bold": "var(--heading-h5-bold-font-family)",
        "heading-h5-extra-bold": "var(--heading-h5-extra-bold-font-family)",
        "heading-h5-semibold": "var(--heading-h5-semibold-font-family)",
        "heading-h6-regular": "var(--heading-h6-regular-font-family)",
        "heading-h6-semibold": "var(--heading-h6-semibold-font-family)",
        "outlined-extra-bold": "var(--outlined-extra-bold-font-family)",
        "outlined-m-extra-bold": "var(--outlined-m-extra-bold-font-family)",
        "paragraph-p2-regular": "var(--paragraph-p2-regular-font-family)",
        "paragraph-p3-semibold": "var(--paragraph-p3-semibold-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
