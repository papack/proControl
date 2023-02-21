import { Stack, Center } from "@proControl/lib/ui/layout"
import { DigitalClockProps } from "./types"

export const DigitalClock = ({
  date = new Date("01.01.1970 00:00:00"),
  locale = "ca"
}: DigitalClockProps) => {
  return (
    <Stack g="$sm">
      {/** Time */}
      <Center fs="$5xl">{date.toLocaleTimeString(locale)}</Center>

      {/** Date */}
      <Center fs="$xl">
        {date.toLocaleDateString(locale, {
          weekday: "long",
          day: "2-digit",
          month: "2-digit",
          year: "numeric"
        })}
      </Center>
    </Stack>
  )
}
