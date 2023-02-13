import type * as Stiches from "@stitches/react"
import { config } from "../../style/stitches.config"
import { BoxProps } from "../Box/BoxProps"

export interface RelativeProps extends BoxProps {
  /** zIndex */
  zIndex?: Stiches.CSS<typeof config>["zIndex"]
}
