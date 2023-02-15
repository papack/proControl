import type * as Stitches from "@stitches/react"
import { config } from "@proControl/lib/ui/style/stitches.config"
import { LocaleType } from "@proControl/Application/Translation/types"

export interface KPIProps {
  /** Title */
  title: string

  /** the current value to display */
  value: number

  /** the unit  */
  unit?: string

  /** decimal places */
  decimalPlaces?: number

  /** the Locale */
  locale: LocaleType

  /** decimal places */
  color?: Stitches.CSS<typeof config>["color"]
}
