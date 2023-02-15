import { StoryFn, Meta } from "@storybook/react"
import { Box } from "@proControl/lib/ui/layout"

import { ProgressGauge } from "./ProgressGauge"
import { ProgressGaugeProps } from "./types"

const story: Meta<ProgressGaugeProps> = {
  title: "widgets/lib/ui/components/ProgressGauge",
  component: ProgressGauge,
  args: {
    value: 50,
    min: 0,
    max: 100,
    unit: "%",
    color: "$christ",
    decimalPlaces: 2,
    locale: "de",
    debug: false
  }
}
export default story

export const Default: StoryFn<ProgressGaugeProps> = (args) => (
  <Box b={args.debug ? "1px dashed gray" : undefined} s="300px">
    <ProgressGauge {...args} />
  </Box>
)
