import { StoryFn, Meta } from "@storybook/react"
import { LegendProps } from "./types"
import { Legend } from "./Legend"
import { Box } from "@proControl/lib/ui/layout"

const story: Meta<LegendProps> = {
  title: "widgets/lib/ui/components/Legend",
  component: Legend,
  args: {
    color: "$blue300",
    decimalPlaces: 1,
    label: "mein Label",
    locale: "de",
    unit: "%",
    value: 42.23
  }
}
export default story

export const Default: StoryFn<LegendProps> = (args) => (
  <Box w="200px" b="0px dashed gray">
    <Legend {...args} />
  </Box>
)
