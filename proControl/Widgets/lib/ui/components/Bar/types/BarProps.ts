import type * as Stitches from "@stitches/react"
import { config } from "@proControl/lib/ui/style/stitches.config"
import { LocaleType } from "@proControl/Application/Translation/types"

export interface BarProps {
  /** current value */
  value: number

  /** title */
  title?: string

  /** title width */
  titleWidth: string

  /** min */
  min: number

  /** max value -> to calc "100%"/"Finish state" */
  max: number

  /** unit eg. % */
  unit: string

  /** inner text left */
  innerTextLeft?: string

  /** inner text right */
  innerTextRight?: string

  /** inner text center */
  innerTextCenter?: string

  /** decimal places */
  decimalPlaces: number

  /** color of Bar*/
  barColor: Stitches.CSS<typeof config>["color"]

  /** color of Text */
  textColor: Stitches.CSS<typeof config>["color"]

  /** bold */
  bold?: boolean

  /** the Locale */
  locale: LocaleType

  /** debug */
  debug?: boolean
}
