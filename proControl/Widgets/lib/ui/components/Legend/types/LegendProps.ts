import type * as Stitches from "@stitches/react"
import { config } from "@proControl/lib/ui/style/stitches.config"
import { LocaleType } from "@proControl/Application/Translation/types"

export interface LegendProps {
  /** color */
  color: Stitches.CSS<typeof config>["color"]

  /** text of the legend*/
  label: string

  /** locale */
  locale?: LocaleType

  /** decimal Places */
  decimalPlaces?: number

  /** unit */
  unit?: string

  /** value */
  value?: number | null
}
