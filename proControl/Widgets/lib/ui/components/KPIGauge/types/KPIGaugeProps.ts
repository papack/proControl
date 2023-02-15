import type * as Stitches from "@stitches/react"
import { config } from "@proControl/lib/ui/style/stitches.config"
import { LocaleType } from "@proControl/Application/Translation/types"

export interface KPIGaugeProps {
  /** Title */
  title: string

  /** current value */
  value: number

  /** hasProgress -> if false: dont show Progress */
  hasProgress?: boolean

  /** min */
  min?: number

  /** max value -> to calc "100%"/"Finish state" */
  max?: number

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
