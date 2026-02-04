/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  important: true,
  theme: {
    screens: {
      sm: "480px",
      md: "900px",
      lg: "1280px",
      xl: "1440px",
      print: { 'raw': 'print' },
    },
    fontSize: {
      "xs": ["10px", "18px"],
      "sm": ["12px", "20px"],
      "md": ["14px", "24px"],
      "lg": ["16px", "28px"],
      "xl": ["20px", "30px"],
      "2xl": ["24px", "30px"],
      "3xl": ["30px", "38px"],
    },
    extend: {
      aspectRatio: {
        a4: "0.707",
      },
      colors: {
        "error": "#9C0013",
        "error-subtle": "#E5D0CE",
        "success": "#00884F",
        "success-subtle": "#CCE3D5",
        "warning": "#D46600",
        "warning-subtle": "#F2D5B3",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "40px",
        page: "800px",
      },
      textColor: {
        primary: "#000000",
        secondary: "#344054",
        tertiary: "#667085",
        placeholder: "#D0D5DD",
        disabled: "#667085",
      },
    },
  },
  plugins: [],
}
