import type * as Stitches from "@stitches/react"
import { config } from "@proControl/lib/ui/style/stitches.config"
import { LocaleType } from "@proControl/Application/Translation/types"

export interface ProgressGaugeProps {
  /** current value */
  value: number

  /** min */
  min: number

  /** max value -> to calc "100%"/"Finish state" */
  max: number

  /** unit eg. % */
  unit: string

  /** decimal places */
  decimalPlaces: number

  /** color */
  color: Stitches.CSS<typeof config>["color"]

  /** the Locale */
  locale: LocaleType

  /** debug*/
  debug: boolean
}
