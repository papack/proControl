import { useState, useEffect } from "react"
import { Svg, Rect } from "@proControl/lib/ui/svg"
import { AnalogClockProps } from "./types/AnalogClockProps"
import { calculateStepLabel, clamp } from "@proControl/Widgets/lib/uitls"
import { timeToAngle } from "./lib/utils"

export const AnalogClock = ({ h = 0, m = 0 }: AnalogClockProps) => {
  //clamp values
  h = clamp(h, 0, 23)
  m = clamp(m, 0, 59)

  //state
  const [timeState, setTimeState] = useState(timeToAngle(new Date(0, 0, 0, h, m)))

  //
  // Effects
  //

  // Update time if time changes
  useEffect(() => {
    setTimeState(timeToAngle(new Date(0, 0, 0, h, m)))
  }, [h, m])

  return (
    <Svg viewBox="-100,-100,200,200" width="100%" height="100%">
      {/** background */}
      {calculateStepLabel(0, 12, 1, 0, 360).map(({ label, pos }) => {
        if (label === "0") {
          return
        }

        return (
          <Rect
            key={String(pos)}
            x={-1}
            y={-90}
            rx={2}
            width={2}
            height={10}
            transform={`rotate(${pos})`}
            css={{ fill: "$gray700" }}
          />
        )
      })}

      {/** Minutes */}
      <Rect
        x={-5}
        y={-5}
        height={10}
        width={80}
        rx="4"
        css={{ fill: "$blue900" }}
        transform={`
        rotate(${timeState.minutesAngle})
        `}
      />

      {/** Hours */}
      <Rect
        x={-5}
        y={-5}
        height={10}
        width={50}
        css={{ fill: "$blue900" }}
        rx="4"
        transform={`
        rotate(${timeState.hoursAngle})
        `}
      />
    </Svg>
  )
}
