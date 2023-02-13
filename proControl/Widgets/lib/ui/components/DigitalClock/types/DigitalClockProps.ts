import { LocaleType } from "@proControl/Application/Translation/types"

export interface DigitalClockProps {
  /** the date to Display */
  date: Date

  /** the locale of the Type */
  locale: LocaleType
}
