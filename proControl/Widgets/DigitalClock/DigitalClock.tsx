import { useState, useEffect } from "react"
import { Center, Box } from "@proControl/lib/ui/layout"
import { WidgetContainer } from "../lib/ui/layout"
import { DigitalClock as DigitalClockComponent } from "../lib/ui/components"

export const DigitalClock = () => {
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
      <Center h="100%">
        <Box>
          <DigitalClockComponent date={date} locale="de"></DigitalClockComponent>
        </Box>
      </Center>
    </WidgetContainer>
  )
}
