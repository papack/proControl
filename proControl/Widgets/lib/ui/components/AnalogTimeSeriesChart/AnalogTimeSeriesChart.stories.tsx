import { AnalogTimeSeriesCharts } from "./AnalogTimeSeriesCharts"
import { AnalogTimeSeriesChartsProps } from "./types"
import { StoryFn, Meta } from "@storybook/react"

const story: Meta<AnalogTimeSeriesChartsProps> = {
  title: "widgets/lib/ui/components/AnalogTimeSeriesChart",
  component: AnalogTimeSeriesCharts,
  args: {
    width: 500,
    height: 400,
    yMin: 0,
    yMax: 1000,
    ySteps: 100,
    debug: true,
    graphs: [
      {
        color: "$blue400",
        color2: "$blue600"
      },
      {
        color: "$green200",
        color2: "$blue600"
      }
    ],
    points: [
      {
        timestamp: new Date("01.01.2023 14:00").getTime(),
        values: [100, 200, 350]
      },
      {
        timestamp: new Date("01.01.2023 17:00").getTime(),
        values: [250, 500, 750]
      },
      {
        timestamp: new Date("01.01.2023 20:00").getTime(),
        isMissing: true
      },
      {
        timestamp: new Date("01.01.2023 23:00").getTime(),
        values: [250, 500, 750]
      },
      {
        timestamp: new Date("01.01.2023 23:30").getTime(),
        values: [100, 200, 300]
      }
    ]
  }
}
export default story

export const Default: StoryFn<AnalogTimeSeriesChartsProps> = (args) => (
  <AnalogTimeSeriesCharts {...args} />
)
