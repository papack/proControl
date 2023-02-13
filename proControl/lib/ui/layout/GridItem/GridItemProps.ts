import type * as Stiches from "@stitches/react"
import { config } from "../../style/stitches.config"
import { BoxProps } from "../Box/BoxProps"

export interface GridItemProps extends BoxProps {
  /** gridArea */
  grdArea?: Stiches.CSS<typeof config>["gridArea"]

  /** gridColumn */
  grdColumn?: Stiches.CSS<typeof config>["gridColumn"]

  /** gridRow */
  grdRow?: Stiches.CSS<typeof config>["gridRow"]
}
