export const themeColors = {
  Blue: "#3c77d5",
  Red: "#d53c3c",
  Green: "#3cd5d2",
  Purple: "#793cd5",
  Orange: "#d57c3c",
  Pink: "#d53c8b",
  Cyan: "#06b6d4",
  Yellow: "#3cd577",
  Black: "#242424",
  White: "#d5d5d5",
  Default: "#5697ff",
  Custom: "#5697ff",
} as const

export type ThemeColor = keyof typeof themeColors