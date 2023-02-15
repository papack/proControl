import { Box } from "@proControl/lib/ui/layout"
import { KPIGauge } from "./KPIGauge"
import { KPIGaugeProps } from "./types"
import { StoryFn, Meta } from "@storybook/react"

const story: Meta<KPIGaugeProps> = {
  title: "widgets/lib/ui/components/KPIGauge",
  component: KPIGauge,
  args: {
    title: "Techn. Verfügbarkeit",
    value: 25,
    min: 0,
    max: 100,
    unit: "%",
    color: "$christ",
    decimalPlaces: 2,
    hasProgress: true,
    locale: "de",
    debug: false
  }
}
export default story

export const Default: StoryFn<KPIGaugeProps> = (args) => (
  <Box b={args.debug ? "1px dashed gray" : undefined}>
    <KPIGauge {...args} />
  </Box>
)
