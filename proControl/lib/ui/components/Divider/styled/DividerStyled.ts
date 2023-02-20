import { styled } from "@proControl/lib/ui/style/stitches.config"

export const DividerStyled = styled("div", {
  variants: {
    direction: {
      row: {
        background:
          "linear-gradient(90deg, #00000000 0%, $borderOnDark 25%, $borderOnDark 75%, #00000000 100%)",
        height: "1px",
        minHeight: "1px",
        maxHeight: "1px"
      },
      column: {
        background:
          "linear-gradient(180deg, #00000000 0%, $borderOnDark 25%, $borderOnDark 75%, #00000000 100%)",
        width: "1px",
        minWidth: "1px",
        maxWidth: "1px"
      }
    }
  }
})
