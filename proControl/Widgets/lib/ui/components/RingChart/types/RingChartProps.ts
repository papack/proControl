import type * as Stitches from "@stitches/react"
import { config } from "@proControl/lib/ui/style/stitches.config"
import { LocaleType } from "@proControl/Application/Translation/types"

export interface RingChartProps {
  /** values and colors */
  parts: part[]

  /** unit */
  unit: string

  /** locale */
  locale?: LocaleType

  /** decimal Places */
  decimalPlaces?: number

  /** show helper lines */
  debugMode?: boolean
}

interface part {
  value: number
  color: Stitches.CSS<typeof config>["color"]
}
