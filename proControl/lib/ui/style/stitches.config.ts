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
  body: {},

  //
  //Typography
  //
  "@font-face": [
    //Thin
    {
      fontFamily: "type-36",
      src: "url('fonts/type-36-thin-hdc.ttf')",
      fontWeight: "100"
    },

    //ExtraLight
    {
      fontFamily: "type-36",
      src: "url('fonts/type-36-extra-light-hdc.ttf')",
      fontWeight: "200"
    },

    //Light
    {
      fontFamily: "type-36",
      src: "url('fonts/type-36-light-hdc.ttf')",
      fontWeight: "300"
    },

    //Regular, Normal
    {
      fontFamily: "type-36",
      src: "url('fonts/type-36-regular-hdc.ttf')",
      fontWeight: "400"
    },

    //Medium
    {
      fontFamily: "type-36",
      src: "url('fonts/type-36-medium-hdc.ttf')",
      fontWeight: "500"
    },

    //SemiBold
    {
      fontFamily: "type-36",
      src: "url('fonts/type-36-semi-bold-hdc.ttf')",
      fontWeight: "600"
    },

    //Bold
    {
      fontFamily: "type-36",
      src: "url('fonts/type-36-bold-hdc.ttf')",
      fontWeight: "700"
    },

    //ExtraBold
    {
      fontFamily: "type-36",
      src: "url('fonts/type-36-extra-bold-hdc.ttf')",
      fontWeight: "800"
    },

    //Black
    {
      fontFamily: "type-36",
      src: "url('fonts/type-36-black-hdc.ttf')",
      fontWeight: "900"
    }
  ]
})
