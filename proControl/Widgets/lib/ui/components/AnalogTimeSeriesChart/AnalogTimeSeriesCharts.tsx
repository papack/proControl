import { AnalogTimeSeriesChartsProps } from "./types"

export const AnalogTimeSeriesCharts = ({
  width = "600px",
  height = "300px",
  graphs = [],
  locale = "de",
  points = [],
  xMin = new Date("01.01.1970 01:00"),
  xMax = new Date("01.01.1970 02:00"),
  xSteps = 10,
  yMax = 100,
  yMin = 0,
  ySteps = 10
}: AnalogTimeSeriesChartsProps) => {
  return <div>AnalogTimeSeriesCharts: {locale}</div>
}
