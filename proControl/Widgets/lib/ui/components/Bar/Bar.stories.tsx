import { Bar } from "./Bar"
import { Box } from "@proControl/lib/ui/layout"
import { BarProps } from "./types"
import { StoryFn, Meta } from "@storybook/react"

const story: Meta<BarProps> = {
  title: "widgets/lib/ui/components/Bar",
  component: Bar,
  args: {
    title: "Spendensammlung",
    titleWidth: "150px",
    value: 700,
    min: 0,
    max: 7000,
    decimalPlaces: 2,
    barColor: "$christ",
    textColor: "$gray900",
    innerTextLeft: "",
    innerTextCenter: "",
    innerTextRight: "noch 5 Minuten",
    locale: "de",
    unit: "₱",
    debug: false
  }
}
export default story

export const Default: StoryFn<BarProps> = (args) => (
  <Box b={args.debug ? "1px dashed gray" : undefined}>
    <Bar {...args} />
  </Box>
)
