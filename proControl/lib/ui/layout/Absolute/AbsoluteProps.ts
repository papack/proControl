import type * as Stiches from "@stitches/react"
import { config } from "../../style/stitches.config"
import { BoxProps } from "../Box/BoxProps"

export interface AbsoluteProps extends BoxProps {
  /** top */
  top?: Stiches.CSS<typeof config>["top"]

  /** right */
  right?: Stiches.CSS<typeof config>["right"]

  /** bottom */
  bottom?: Stiches.CSS<typeof config>["bottom"]

  /** left */
  left?: Stiches.CSS<typeof config>["left"]
}
