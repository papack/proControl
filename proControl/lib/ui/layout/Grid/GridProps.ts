import type * as Stiches from "@stitches/react"
import { config } from "../../style/stitches.config"
import { GridItemProps } from "../GridItem/GridItemProps"

export interface GridProps extends GridItemProps {
  /** gap */
  g?: Stiches.CSS<typeof config>["gridGap"]

  /** alignItems */
  ai?: Stiches.CSS<typeof config>["alignItems"]

  /** gridTemplateColums */
  grdTemplateColumns?: Stiches.CSS<typeof config>["gridTemplateColumns"]

  /** gridTemplateRows */
  grdTemplateRows?: Stiches.CSS<typeof config>["gridTemplateRows"]

  /** gridTemplateAreas */
  grdTemplateAreas?: Stiches.CSS<typeof config>["gridTemplateAreas"]

  /** gridTemplate */
  grdTemplate?: Stiches.CSS<typeof config>["gridTemplate"]

  /** gridAutoColumsn */
  grdAutoColumns?: Stiches.CSS<typeof config>["gridAutoColumns"]

  /** gridAutoRows */
  grdAutoRows?: Stiches.CSS<typeof config>["gridAutoRows"]

  /** gridAutoFlow */
  grdAutoFlow?: Stiches.CSS<typeof config>["gridAutoFlow"]

  /** grid */
  grd?: Stiches.CSS<typeof config>["grid"]

  /** gridRowStart */
  grdRowStart?: Stiches.CSS<typeof config>["gridRowStart"]

  /** gridColumnStart */
  grdColumnStart?: Stiches.CSS<typeof config>["gridColumnStart"]

  /** gridRowEnd */
  grdRowEnd?: Stiches.CSS<typeof config>["gridRowEnd"]

  /** gridColumnEnd */
  grdColumnEnd?: Stiches.CSS<typeof config>["gridColumnEnd"]

  /** gridRow */
  grdRow?: Stiches.CSS<typeof config>["gridRow"]

  /** gridColumn */
  grdColumn?: Stiches.CSS<typeof config>["gridColumn"]

  /** grdRowGap */
  grdRowGap?: Stiches.CSS<typeof config>["gridRowGap"]

  /** grdColumnGap */
  grdColumnGap?: Stiches.CSS<typeof config>["gridColumnGap"]

  /** grdGap */
  grdGap?: Stiches.CSS<typeof config>["gridGap"]
}
