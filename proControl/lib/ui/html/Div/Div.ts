import { styled } from "../../style/stitches.config"

export const Div = styled("div", {
  //default settings
  margin: 0,
  padding: 0,
  userSelect: "none",
  boxSizing: "border-box",
  fontFamily: "$body",

  //no Scroll bar
  scrollbarWidth: "none",
  "::-webkit-scrollbar": {
    display: "none"
  }
})
