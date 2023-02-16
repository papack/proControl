import type * as Stitches from "@stitches/react"
import { config } from "@proControl/lib/ui/style/stitches.config"
import { LocaleType, TimeZoneType } from "@proControl/Application/Translation/types"

export interface AnalogTimeSeriesChartsProps {
  width: number
  height: number
  graphs: Graph[]
  points: Point[]
  locale: LocaleType
  timezone: TimeZoneType
  onSliderChange: (timestamp: number, values: { [key: string]: number }) => void
  xMin: number // unix Timestamp
  xMax: number // unix Timestamp
  xStepsInMin: number //render a step every x mins
  yMin: number
  yMax: number
  ySteps: number
  debug: boolean
}

export interface Graph {
  /** key for the callback */
  id: string

  /** color of graph line */
  color?: Stitches.CSS<typeof config>["color"]
}

export interface Point {
  /** unix timestamp */
  timestamp: number

  /** a timestamp can be missing (when machine is off or has no power) */
  isMissing?: boolean

  /** values match with graph eg. values[0] == graph[0] */
  values?: number[]
}
