import type * as Stiches from "@stitches/react"
import { config } from "../../style/stitches.config"
import { BoxProps } from "../Box/BoxProps"

export interface FlexItemProps extends BoxProps {
  /** flex */
  flx?: Stiches.CSS<typeof config>["flex"]

  /** align Self */
  as?: Stiches.CSS<typeof config>["alignSelf"]

  /** Order */
  o?: Stiches.CSS<typeof config>["order"]

  /** flex-grow  */
  flxGrow?: Stiches.CSS<typeof config>["flexGrow"]

  /** flex-shrink */
  flxShrink?: Stiches.CSS<typeof config>["flexShrink"]

  /** flex-basis */
  flxBasis?: Stiches.CSS<typeof config>["flexBasis"]
}
