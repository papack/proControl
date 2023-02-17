import type * as Stitches from "@stitches/react"
import { config } from "@proControl/lib/ui/style/stitches.config"
import { LocaleType, TimeZoneType } from "@proControl/Application/Translation/types"

export interface ChangeOfStateDiagramProps {
  width: number
  height: number
  min: number //min Timestamp
  max: number // max Timestamp
  stepsInMin: number
  locale: LocaleType
  timezone: TimeZoneType
  changes: change[]
  debug: boolean
}

interface change {
  beginTimestamp: number
  color: Stitches.CSS<typeof config>["color"]
  data: { [key: string]: any }
}
