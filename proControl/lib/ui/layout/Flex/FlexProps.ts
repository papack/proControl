import type * as Stiches from "@stitches/react"
import { config } from "../../style/stitches.config"
import { FlexItemProps } from "../FlexItem/FlexItemProps"

export interface FlexProps extends FlexItemProps {
  /** justify content */
  jc?: Stiches.CSS<typeof config>["justifyContent"]

  /** align Items */
  ai?: Stiches.CSS<typeof config>["alignItems"]

  /** align content*/
  ac?: Stiches.CSS<typeof config>["alignContent"]

  /** gap */
  g?: Stiches.CSS<typeof config>["gap"]

  /** flex-direction */
  flxDirection?: Stiches.CSS<typeof config>["flexDirection"]

  /** flex-wrap */
  flxWrap?: Stiches.CSS<typeof config>["flexWrap"]

  /** flex-flow */
  flxFlow?: Stiches.CSS<typeof config>["flexFlow"]
}
