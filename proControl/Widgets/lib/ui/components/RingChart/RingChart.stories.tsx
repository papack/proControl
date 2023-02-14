import { Box } from "@proControl/lib/ui/layout"
import { StoryFn, Meta } from "@storybook/react"
import { RingChart } from "./RingChart"
import { RingChartProps } from "./types"

const story: Meta<RingChartProps> = {
  title: "widgets/lib/ui/components/RingChart",
  component: RingChart,
  args: {
    parts: [
      {
        color: "$blue600",
        value: 1
      },
      {
        color: "$red600",
        value: 3
      },
      {
        color: "$green600",
        value: 3
      }
    ],
    unit: "km/h",
    decimalPlaces: 2,
    locale: "af",
    debugMode: false
  }
}
export default story

export const Default: StoryFn<RingChartProps> = (args) => (
  <Box w="300px" b="0px dashed gray">
    <RingChart {...args} />
  </Box>
)
