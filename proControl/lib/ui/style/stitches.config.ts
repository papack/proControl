import { createStitches } from "@stitches/react"
import { baseColors, colors } from "./colors"
import { fontFamilies, fontSizes, fontWeights, letterSpacings, lineHeights } from "./fonts"
import { radii, shadows, sizes, space, zIndices } from "./misc"
import { brakepoints } from "./media"

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {
        ...baseColors,
        ...colors
      },

      fonts: {
        ...fontFamilies
      },

      fontSizes: {
        ...fontSizes
      },

      fontWeights: {
        ...fontWeights
      },

      letterSpacings: {
        ...letterSpacings
      },

      lineHeights: {
        ...lineHeights
      },

      media: {
        ...brakepoints
      },

      radii: {
        ...radii
      },

      sizes: { ...sizes },

      space: {
        ...space
      },

      shadows: {
        ...shadows
      },

      zIndices: {
        ...zIndices
      }
    }
  })

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box"
  },
  html: {},
  body: {}
})
