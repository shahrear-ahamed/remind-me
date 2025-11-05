import { vars } from "nativewind";

export const themes = {
  light: vars({
    "--color-primary": "#1993D4", // blue-500
    "--color-secondary": "#64748b", // slate-500
    "--color-success": "#10b981", // emerald-500
    "--color-warning": "#f59e0b", // amber-500
    "--color-error": "#ef4444", // red-500
    "--color-info": "#0ea5e9", // sky-500

    "--color-background": "#fff", // white
    "--color-foreground": "#000000", // black
    "--color-surface": "#F6F7F8", // gray-50
    "--color-surface-elevated": "#a4a4a4", // gray-100
    "--color-text": "#111827", // gray-900
    "--color-text-variant": "#6b7280", // gray-500
  }),
  dark: vars({
    "--color-primary": "#1993D4", // blue-400
    "--color-secondary": "#94a3b8", // slate-400
    "--color-success": "#10b981", // emerald-500
    "--color-warning": "#f59e0b", // amber-500
    "--color-error": "#ef4444", // red-500
    "--color-info": "#38bdf8", // sky-400

    "--color-background": "#111827", // black
    "--color-foreground": "#ffffff", // white
    "--color-surface": "#1f2937", // gray-800
    "--color-surface-elevated": "#f9fafb", // gray-900
    "--color-text": "#f9fafb", // gray-50
    "--color-text-variant": "#9ca3af", // gray-400
  }),
};
