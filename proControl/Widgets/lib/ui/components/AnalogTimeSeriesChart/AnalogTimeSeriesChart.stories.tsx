import { AnalogTimeSeriesCharts } from "./AnalogTimeSeriesCharts"
import { AnalogTimeSeriesChartsProps } from "./types"
import { StoryFn, Meta } from "@storybook/react"

const story: Meta<AnalogTimeSeriesChartsProps> = {
  title: "widgets/lib/ui/components/AnalogTimeSeriesChart",
  component: AnalogTimeSeriesCharts,
  args: {
    width: 500,
    height: 400,
    debug: true
  }
}
export default story

export const Default: StoryFn<AnalogTimeSeriesChartsProps> = (args) => (
  <AnalogTimeSeriesCharts {...args} />
)
