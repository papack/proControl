import { Grid, GridItem, Center } from "@proControl/lib/ui/layout"
import { useDashboardState } from "../useDashboardState"

import { AnalogClock } from "@proControl/Widgets/AnalogClock"
import { Batch } from "@proControl/Widgets/Batch"
import { Current } from "@proControl/Widgets/Current"
import { Custom } from "@proControl/Widgets/Custom"
import { Cycles } from "@proControl/Widgets/Cycles"
import { DigitalClock } from "@proControl/Widgets/DigitalClock"
import { Distribution } from "@proControl/Widgets/Distribution"
import { Failures } from "@proControl/Widgets/Failures"
import { History } from "@proControl/Widgets/History"
import { MachineState } from "@proControl/Widgets/MachineState"
import { Maintenance } from "@proControl/Widgets/Maintenance"
import { Material } from "@proControl/Widgets/Material"
import { Output } from "@proControl/Widgets/Output"
import { Progress } from "@proControl/Widgets/Progress"
import { Speed } from "@proControl/Widgets/Speed"
import { SpeedWithTarget } from "@proControl/Widgets/SpeedWithTarget"
import { Stats } from "@proControl/Widgets/Stats"

export const WidgetDisplay = () => {
  //hooks
  const { items } = useDashboardState()

  if (items.length === 0) return <Center h="100%">no widgets yet!</Center>

  return (
    <Grid grdTemplateRows="repeat(2, 1fr)" grdTemplateColumns="repeat(4, 1fr)" h="100%" g="$lg">
      {items.map(({ xPos, yPos, height, id, width }, index) => (
        <GridItem
          key={index}
          grdColumn={`${xPos}/${xPos + width}`}
          grdRow={`${yPos}/${yPos + height}`}
        >
          {id === "AnalogClock" && <AnalogClock />}
          {id === "Batch" && <Batch />}
          {id === "Current" && <Current />}
          {id === "Custom" && <Custom />}
          {id === "Cycles" && <Cycles />}
          {id === "DigitalClock" && <DigitalClock />}
          {id === "Distribution" && <Distribution />}
          {id === "Failures" && <Failures />}
          {id === "History" && <History />}
          {id === "MachineState" && <MachineState />}
          {id === "Maintenance" && <Maintenance />}
          {id === "Material" && <Material />}
          {id === "Output" && <Output />}
          {id === "Progress" && <Progress />}
          {id === "Speed" && <Speed />}
          {id === "SpeedWithTarget" && <SpeedWithTarget />}
          {id === "Stats" && <Stats />}
        </GridItem>
      ))}
    </Grid>
  )
}
