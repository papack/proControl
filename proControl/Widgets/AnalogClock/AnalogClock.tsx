import { useState, useEffect } from "react"
import { Stack, Box } from "@proControl/lib/ui/layout"
import { WidgetContainer } from "../lib/ui/layout"
import { AnalogClock as AnalogClockComponent } from "../lib/ui/components"

export const AnalogClock = () => {
  //state
  const [date, setDate] = useState<Date>(new Date())

  //effect
  useEffect(() => {
    const intervalID = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalID)
    }
  }, [])

  return (
    <WidgetContainer>
      <Stack ai="center" jc="center" h="100%" p="$md" g="$lg">
        <Box h="230px">
          <AnalogClockComponent h={date.getHours()} m={date.getMinutes()} />
        </Box>
        <Box>
          {date.toLocaleDateString("de", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "2-digit"
          })}
        </Box>
      </Stack>
    </WidgetContainer>
  )
}
