import { useState, useEffect } from "react"
import { Svg, Rect, Circle } from "@proControl/lib/ui/svg"
import { AnalogClockProps } from "./types/AnalogClockProps"
import { calculateStepLabel, clamp } from "@proControl/Widgets/lib/uitls"
import { timeToAngle } from "./lib/utils"

const HAND_WIDTH = 7
const HOUR_HAND_LENGTH = 45
const MINUTE_HAND_LENGTH = 60
const HAND_COLOR = "white"
const HAND_BORDER_COLOR = "$christ"
const CLOCKFACE_BACKGROUND_COLOR = "transparent"
const CLOCKFACE_BORDER_COLOR = "$christ"
const CLOCKFACE_BORDER_BACKGROUND_COLOR = "$gray300"
const LABEL_COLOR = "$gray800"
const HAND_BORDER_WIDTH = 0.75
const BORDER_WIDTH = 1

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
    <Svg viewBox="-100,-100,200,200" width="100%" height="100%" fill="none">
      {/** background */}
      <Circle
        x={-100}
        y={-100}
        r={99}
        css={{ stroke: CLOCKFACE_BORDER_COLOR, fill: CLOCKFACE_BORDER_BACKGROUND_COLOR }}
        strokeWidth={BORDER_WIDTH}
      />
      <Circle x={-100} y={-100} r={85} css={{ fill: CLOCKFACE_BACKGROUND_COLOR, stroke: "none" }} />

      {/** Label marks */}
      {calculateStepLabel(0, 60, 1, 0, 360).map(({ label, pos }) => {
        if (label === "0") {
          return
        }

        //5 Min Label
        if (Number(label) % 5 === 0) {
          return (
            <Rect
              key={String(pos)}
              x={-1}
              y={-98}
              width={2}
              height={14}
              transform={`rotate(${pos})`}
              css={{ fill: LABEL_COLOR }}
            />
          )
        }

        // Min Label
        return (
          <Rect
            key={String(pos)}
            x={-1}
            y={-98}
            width={0.5}
            height={14}
            transform={`rotate(${pos})`}
            css={{ fill: LABEL_COLOR }}
          />
        )
      })}

      {/** Hands */}

      {/** Minutes */}
      <Rect
        x={(HAND_WIDTH / 2) * -1}
        y={(HAND_WIDTH / 2) * -1}
        height={HAND_WIDTH}
        strokeWidth={HAND_BORDER_WIDTH}
        width={MINUTE_HAND_LENGTH}
        rx="4"
        css={{ fill: HAND_COLOR, stroke: HAND_BORDER_COLOR }}
        transform={`
        rotate(${timeState.minutesAngle})
        `}
      />

      {/** Hours */}
      <Rect
        x={(HAND_WIDTH / 2) * -1}
        y={(HAND_WIDTH / 2) * -1}
        strokeWidth={HAND_BORDER_WIDTH}
        height={HAND_WIDTH}
        width={HOUR_HAND_LENGTH}
        css={{ fill: HAND_COLOR, stroke: HAND_BORDER_COLOR }}
        rx="4"
        transform={`
        rotate(${timeState.hoursAngle})
        `}
      />
    </Svg>
  )
}
