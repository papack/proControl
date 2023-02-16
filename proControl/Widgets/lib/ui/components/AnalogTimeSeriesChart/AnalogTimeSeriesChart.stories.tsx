import { AnalogTimeSeriesCharts } from "./AnalogTimeSeriesCharts"
import { AnalogTimeSeriesChartsProps } from "./types"
import { StoryFn, Meta } from "@storybook/react"

const story: Meta<AnalogTimeSeriesChartsProps> = {
  title: "widgets/lib/ui/components/AnalogTimeSeriesChart",
  component: AnalogTimeSeriesCharts,
  args: {
    width: 500,
    height: 400,
    xMin: new Date("2023-01-01T13:00:00.000Z").getTime(),
    xMax: new Date("2023-01-02T13:00:00.000Z").getTime(),
    xStepsInMin: 60 * 3,
    yMin: 0,
    yMax: 1000,
    ySteps: 100,
    onSliderChange: (ts, d) => {
      console.log(new Date(ts).toJSON())
      console.log(d)
    },
    locale: "de",
    timezone: "Europe/Berlin",
    debug: false,
    graphs: [
      {
        id: "wirk",
        color: "$blue400"
      },
      {
        id: "tecWirk",
        color: "$green400"
      },
      {
        id: "tecVerf",
        color: "$red400"
      }
    ],
    points: [
      {
        timestamp: new Date("2023-01-01T13:00:00.000Z").getTime(),
        values: [100, 200, 350]
      },
      {
        timestamp: new Date("2023-01-01T13:30:00.000Z").getTime(),
        values: [100, 200, 350]
      },
      {
        timestamp: new Date("2023-01-01T16:00:00.000Z").getTime(),
        isMissing: true
      },
      {
        timestamp: new Date("2023-01-01T19:00:00.000Z").getTime(),
        values: [50, 50, 75]
      },
      {
        timestamp: new Date("2023-01-01T22:00:00.000Z").getTime(),
        values: [250, 500, 750]
      },
      {
        timestamp: new Date("2023-01-02T01:00:00.000Z").getTime(),
        values: [100, 200, 300]
      },
      {
        timestamp: new Date("2023-01-02T07:00:00.000Z").getTime(),
        values: [725, 250, 430]
      }
    ]
  }
}
export default story

export const Default: StoryFn<AnalogTimeSeriesChartsProps> = (args) => (
  <AnalogTimeSeriesCharts {...args} />
)
