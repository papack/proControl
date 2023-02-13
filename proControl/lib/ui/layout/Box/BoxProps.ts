import type * as Stitches from "@stitches/react"
import { config } from "../../style/stitches.config"
import { Div } from "../../html/Div"
import React from "react"

export interface BoxProps extends Stitches.ComponentProps<typeof Div> {
  /** Children */
  children?: React.ReactNode

  /** font weight*/
  fw?: Stitches.CSS<typeof config>["fontWeight"]

  /** font size*/
  fs?: Stitches.CSS<typeof config>["fontSize"]

  /** text color */
  c?: Stitches.CSS<typeof config>["color"]

  /** margin */
  m?: Stitches.CSS<typeof config>["margin"]

  /** margin x */
  mx?: Stitches.CSS<typeof config>["margin"]

  /** margin y */
  my?: Stitches.CSS<typeof config>["margin"]

  /** margin right*/
  mr?: Stitches.CSS<typeof config>["margin"]

  /** margin left*/
  ml?: Stitches.CSS<typeof config>["margin"]

  /** margin top*/
  mt?: Stitches.CSS<typeof config>["margin"]

  /** margin bottom*/
  mb?: Stitches.CSS<typeof config>["margin"]

  /** padding */
  p?: Stitches.CSS<typeof config>["padding"]

  /** padding x */
  px?: Stitches.CSS<typeof config>["padding"]

  /** padding y */
  py?: Stitches.CSS<typeof config>["padding"]

  /** padding right*/
  pr?: Stitches.CSS<typeof config>["padding"]

  /** padding left*/
  pl?: Stitches.CSS<typeof config>["padding"]

  /** padding top*/
  pt?: Stitches.CSS<typeof config>["padding"]

  /** padding bottom*/
  pb?: Stitches.CSS<typeof config>["padding"]

  /** width */
  w?: Stitches.CSS<typeof config>["width"]

  /** height */
  h?: Stitches.CSS<typeof config>["height"]

  /** size */
  s?: Stitches.CSS<typeof config>["width"]

  /** min width */
  minW?: Stitches.CSS<typeof config>["minWidth"]

  /** max width*/
  maxW?: Stitches.CSS<typeof config>["maxWidth"]

  /** min height */
  minH?: Stitches.CSS<typeof config>["minHeight"]

  /** max height */
  maxH?: Stitches.CSS<typeof config>["maxHeight"]

  /** background */
  bg?: Stitches.CSS<typeof config>["background"]

  /** border */
  b?: Stitches.CSS<typeof config>["border"]

  /** border x*/
  bx?: Stitches.CSS<typeof config>["border"]

  /** border y */
  by?: Stitches.CSS<typeof config>["border"]

  /** border top */
  bt?: Stitches.CSS<typeof config>["border"]

  /** border right*/
  br?: Stitches.CSS<typeof config>["border"]

  /** border left*/
  bl?: Stitches.CSS<typeof config>["border"]

  /** border bottom */
  bb?: Stitches.CSS<typeof config>["border"]

  /** border radius */
  r?: Stitches.CSS<typeof config>["borderRadius"]

  /** border radius top*/
  rt?: Stitches.CSS<typeof config>["borderRadius"]

  /** border radius right */
  rr?: Stitches.CSS<typeof config>["borderRadius"]

  /** border radius left */
  rl?: Stitches.CSS<typeof config>["borderRadius"]

  /** border radius bottom */
  rb?: Stitches.CSS<typeof config>["borderRadius"]

  /** border radius top right*/
  rtr?: Stitches.CSS<typeof config>["borderRadius"]

  /** border radius top left */
  rtl?: Stitches.CSS<typeof config>["borderRadius"]

  /** border radius bottom right */
  rbr?: Stitches.CSS<typeof config>["borderRadius"]

  /** border radius bottom left */
  rbl?: Stitches.CSS<typeof config>["borderRadius"]

  /** shadow */
  shadow?: Stitches.CSS<typeof config>["boxShadow"]
}
