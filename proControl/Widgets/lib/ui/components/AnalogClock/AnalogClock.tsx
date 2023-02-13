import { Box } from "@proControl/lib/ui/layout"
import { AnalogClockProps } from "./types"

export const AnalogClock = ({ date, locale }: AnalogClockProps) => {
  return (
    <Box bg="hotpink">
      AnalogClock: date: {date.toDateString()}, locale: {locale}
    </Box>
  )
}
