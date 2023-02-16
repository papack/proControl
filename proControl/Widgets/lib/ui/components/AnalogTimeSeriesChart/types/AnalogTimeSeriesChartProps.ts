import type * as Stitches from "@stitches/react"
import { config } from "@proControl/lib/ui/style/stitches.config"
import { LocaleType } from "@proControl/Application/Translation/types"

export interface AnalogTimeSeriesChartsProps {
  width: string
  height: string
  graphs: Graph[]
  points: Point[]
  locale: LocaleType
  xMin: Date
  xMax: Date
  xSteps: number //eg. 5 results in 14:00, 20:00, 02:00, 08:00, 14:00 at 24h
  yMin: number
  yMax: number
  ySteps: number
}

interface Graph {
  /** color of graph line */
  color?: Stitches.CSS<typeof config>["color"]

  /** color under the graph*/
  color2?: Stitches.CSS<typeof config>["color"]
}

interface Point {
  /** unix timestamp */
  date: Date

  /** a timestamp can be missing (when machine is off or has no power) */
  isMissing?: boolean

  /** values match with graph eg. values[0] == graph[0] */
  values?: number[]
}
