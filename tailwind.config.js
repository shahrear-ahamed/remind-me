/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        info: "var(--color-info)",

        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        surface: "var(--color-surface)",
        "surface-elevated": "var(--color-surface-elevated)",
        text: "var(--color-text)",
        "text-variant": "var(--color-text-variant)",
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".safe-area": {
          paddingTop: "env(safe-area-inset-top)",
          paddingLeft: "16px",
          paddingRight: "16px",
        },
      });
    },
  ],
  corePlugins: {
    backgroundOpacity: true,
  },
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        info: "var(--color-info)",

        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        surface: "var(--color-surface)",
        "surface-elevated": "var(--color-surface-elevated)",
        text: "var(--color-text)",
        "text-variant": "var(--color-text-variant)",
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".safe-area": {
          paddingTop: "env(safe-area-inset-top)",
          paddingLeft: "16px",
          paddingRight: "16px",
        },
      });
    },
  ],
  corePlugins: {
    backgroundOpacity: true,
  },
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        info: "var(--color-info)",

        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        surface: "var(--color-surface)",
        "surface-elevated": "var(--color-surface-elevated)",
        text: "var(--color-text)",
        "text-variant": "var(--color-text-variant)",
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        ".safe-area": {
          paddingTop: "env(safe-area-inset-top)",
          paddingLeft: "16px",
          paddingRight: "16px",
        },
      });
    },
  ],
  corePlugins: {
    backgroundOpacity: true,
  },
};
