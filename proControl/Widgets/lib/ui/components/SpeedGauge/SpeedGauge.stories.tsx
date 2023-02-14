import { Meta, StoryFn } from "@storybook/react"
import { useState } from "react"
import { Box } from "@proControl/lib/ui/layout"
import { SpeedGauge } from "./SpeedGauge"
import { SpeedGaugeProps } from "./types"

const story: Meta<SpeedGaugeProps> = {
  title: "widgets/lib/ui/components/SpeedGauge",
  component: SpeedGauge,
  args: {
    value: 21,
    steps: 1,
    min: 0,
    max: 100,
    color: "$christ",
    hasSlider: false,
    sliderStartValue: 20,
    unit: "%",
    locale: "de",
    debug: false
  }
}
export default story

export const Default: StoryFn<SpeedGaugeProps> = (args) => {
  const [value, setValue] = useState<number>(args.value)

  return (
    <Box b="1px dashed gray">
      <SpeedGauge
        {...args}
        value={args.hasSlider ? value : args.value}
        onSliderChange={(v) => {
          setValue(v)
        }}
      />
    </Box>
  )
}
