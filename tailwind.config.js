/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        modal: {
          background: "#0c111d",
          input: "#161f30",
          primary: "#06b6d4",
          secondary: "#8592a6",
          muted: "#94a3b8",
        },
        surface: {
          DEFAULT: "#070a13",
          card: "#0d1424",
          elevated: "#131d33",
          outline: "#1e293b",
          background: "#162035",
          divider: "#334155",
          button: "#475569",
          text: "#94a3b8",
        },
        content: {
          DEFAULT: "#fafafa",
          muted: "#8c8c8c",
          icon: "#3a3a3a",
        },
        status: {
          "success-bg": "rgba(16, 185, 129, 0.1)",
          "success-border": "rgba(16, 185, 129, 0.4)",
          "success-text": "#6ee7b7",
          "success-badge-bg": "rgba(16, 185, 129, 0.15)",
          "fail-bg": "rgba(244, 63, 94, 0.1)",
          "fail-border": "rgba(244, 63, 94, 0.4)",
          "fail-text": "#fda4af",
          "fail-solid": "#dc2626",
          "fail-solid-hover": "#b91c1c",
        },
        toggle: {
          active: "#34d399",
          "active-bg": "rgba(52, 211, 153, 0.2)",
          "active-border": "rgba(52, 211, 153, 0.5)",
          inactive: "#242424",
          "inactive-knob": "#8c8c8c",
          "inactive-border": "#3a3a3a",
        },
        "muted-overlay": "rgba(5, 5, 5, 0.4)",
        "pill-bg": "rgba(31, 31, 31, 0.3)",
      },
    },
  },
  plugins: [typography],
};
