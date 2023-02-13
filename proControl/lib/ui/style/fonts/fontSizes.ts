const baseSizes = {
  xs: "14px", // small on wide / dont use on normal hmi
  sm: "16px", // normal on wide / small on normal hmi
  md: "18px", // large on wide / normal on normal hmi
  lg: "20px",
  xl: "24px",
  "2xl": "26px",
  "3xl": "30px",
  "4xl": "36px",
  "5xl": "48px",
  "6xl": "64px"
}

export const fontSizes = {
  wide: "$sm",
  wideSmall: "$xs",
  normal: "$md",
  normalSmall: "$sm",
  ...baseSizes
}
