import { styled } from "../../style/stitches.config"

export const Div = styled("div", {
  margin: 0,
  padding: 0,
  userSelect: "none",
  boxSizing: "border-box",
  fontFamily: "$body",
  scrollbarWidth: "none",
  "::-webkit-scrollbar": {
    display: "none"
  }
})
