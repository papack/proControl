import { Meta, StoryFn } from "@storybook/react"
import { Box } from "@proControl/lib/ui/layout"
import { SpeedGauge } from "./SpeedGauge"
import { SpeedGaugeProps } from "./types"

const story: Meta<SpeedGaugeProps> = {
  title: "widgets/lib/ui/components/SpeedGauge",
  component: SpeedGauge,
  args: {
    color: "green",
    hasSlider: false,
    locale: "de",
    max: 100,
    min: 0,
    value: 0,
    onSliderChange: (v) => {
      console.log(v)
    },
    sliderStartValue: 0,
    steps: 10,
    unit: "%"
  }
}
export default story

export const Default: StoryFn<SpeedGaugeProps> = (args) => (
  <Box b="1px dashed gray">
    <SpeedGauge {...args} />
  </Box>
)
