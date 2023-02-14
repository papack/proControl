import type * as Stitches from "@stitches/react"
import { config } from "@proControl/lib/ui/style/stitches.config"
import { LocaleType } from "@proControl/Application/Translation/types"

export interface SpeedGaugeProps {
  /** the current value to display */
  value: number

  /** the min Value */
  min: number

  /** the max value (100%) */
  max: number

  /** the unit  */
  unit?: string

  /** decimal places */
  decimalPlaces?: number

  /** the step for the decoration  */
  steps: number

  /** the Locale */
  locale: LocaleType

  /** decimal places */
  color?: Stitches.CSS<typeof config>["color"]

  /** show slider/handle? */
  hasSlider?: boolean

  /** slider Start Value */
  sliderStartValue?: number

  /** callback for changes */
  onSliderChange?: (v: number) => void

  /** debug */
  debug?: boolean
}
