import type * as Stiches from "@stitches/react"
import { config } from "../../style/stitches.config"
import { BoxProps } from "../Box/BoxProps"

export interface BackgroundProps extends BoxProps {
  /** show Background */
  show: boolean

  /** the z-index */
  zIndex?: Stiches.CSS<typeof config>["zIndex"]
}
