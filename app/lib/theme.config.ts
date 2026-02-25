export const themeColors = {
  Blue: "#3b82f6",
  Red: "#d53c3c",
  Green: "#3cd577",
  Purple: "#b172fd",
  Orange: "#d57c3c",
  Pink: "#d53c8b",
  Cyan: "#3cd5d2",
  Yellow: "#e7b80d",
  Black: "#242424",
  White: "#d5d5d5",
  Default: "#06b6d4",
  Custom: "#3b82f6",
} as const

export type ThemeColor = keyof typeof themeColors