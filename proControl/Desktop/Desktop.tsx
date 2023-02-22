import { Center, Grid, GridItem } from "@proControl/lib/ui/layout"
import { SlideIndicator } from "@proControl/lib/ui/components"
import { DesktopItem, DesktopSwitcher, useDesktop } from "./lib/ui/components/DesktopSwitcher"
import { useNavigationState } from "@proControl/Navigation"

import { History } from "@proControl/Widgets/History"
import { Current } from "@proControl/Widgets/Current"
import { Distribution } from "@proControl/Widgets/Distribution"
import { DistributionLegend } from "@proControl/Widgets/DistributionLegend"
import { Speed } from "@proControl/Widgets/Speed"
import { SpeedWithTarget } from "@proControl/Widgets/SpeedWithTarget"

import { AnalogClock } from "@proControl/Widgets/AnalogClock"
import { DigitalClock } from "@proControl/Widgets/DigitalClock"
import { Batch } from "@proControl/Widgets/Batch"
import { Progress } from "@proControl/Widgets/Progress"

import { Failures } from "@proControl/Widgets/Failures"
import { MachineState } from "@proControl/Widgets/MachineState"
import { Maintenance } from "@proControl/Widgets/Maintenance"
import { Material } from "@proControl/Widgets/Material"
import { Output } from "@proControl/Widgets/Output"
import { Stats } from "@proControl/Widgets/Stats"
import { Cycles } from "@proControl/Widgets/Cycles"

export const Desktop = () => {
  //hooks
  const { location } = useNavigationState()
  const { currentDesktop, numberOfDesktops } = useDesktop()

  if (location !== "desktop") return null

  return (
    <Grid grdTemplateRows="1fr auto" h="100%">
      <DesktopSwitcher>
        <DesktopItem>
          <Grid
            grdTemplateRows="repeat(2, 1fr)"
            grdTemplateColumns="repeat(4, 1fr)"
            h="100%"
            g="$lg"
          >
            {/** History */}
            <GridItem grdColumn="1/3" grdRow="1/2">
              <History />
            </GridItem>

            {/** Current */}
            <GridItem grdColumn="3/5" grdRow="1/2">
              <Current />
            </GridItem>

            {/** Speed (with Target)*/}
            <GridItem grdColumn="2/3" grdRow="2/3">
              <SpeedWithTarget />
            </GridItem>

            {/** Distribution */}
            <GridItem grdColumn="3/4" grdRow="2/3">
              <Distribution />
            </GridItem>

            {/** Distribution - Legend */}
            <GridItem grdColumn="1/2" grdRow="2/3">
              <DistributionLegend />
            </GridItem>

            {/** Speed */}
            <GridItem grdColumn="4/5" grdRow="2/3">
              <Speed />
            </GridItem>
          </Grid>
        </DesktopItem>
        <DesktopItem>
          <Grid
            grdTemplateRows="repeat(2, 1fr)"
            grdTemplateColumns="repeat(4, 1fr)"
            h="100%"
            g="$lg"
          >
            {/** Progress */}
            <GridItem grdColumn="1/2" grdRow="1/2">
              <Progress />
            </GridItem>
            {/** Batch */}
            <GridItem grdColumn="2/3" grdRow="1/2">
              <Batch />
            </GridItem>
            {/** Digital Clock*/}
            <GridItem grdColumn="3/4" grdRow="1/2">
              <DigitalClock />
            </GridItem>
            {/** Analog Clock*/}
            <GridItem grdColumn="4/5" grdRow="1/2">
              <AnalogClock />
            </GridItem>
            {/** Machine State */}
            <GridItem grdColumn="1/3" grdRow="2/3">
              <MachineState />
            </GridItem>
            {/** Maintenance */}
            <GridItem grdColumn="3/5" grdRow="2/3">
              <Maintenance />
            </GridItem>
          </Grid>
        </DesktopItem>
        <DesktopItem>
          <Grid
            grdTemplateRows="repeat(2, 1fr)"
            grdTemplateColumns="repeat(4, 1fr)"
            h="100%"
            g="$lg"
          >
            {/** Material */}
            <GridItem grdColumn="1/3" grdRow="1/2">
              <Material />
            </GridItem>
            {/** Cycles */}
            <GridItem grdColumn="3/5" grdRow="1/2">
              <Cycles />
            </GridItem>
            {/** Stats */}
            <GridItem grdColumn="1/3" grdRow="2/3">
              <Stats />
            </GridItem>
            {/** Failures */}
            <GridItem grdColumn="3/5" grdRow="2/3">
              <Failures />
            </GridItem>
          </Grid>
        </DesktopItem>
        <DesktopItem>
          <Grid
            grdTemplateRows="repeat(2, 1fr)"
            grdTemplateColumns="repeat(4, 1fr)"
            h="100%"
            g="$lg"
          >
            {/** Output */}
            <GridItem grdColumn="1/3" grdRow="1/2">
              <Output />
            </GridItem>
          </Grid>
        </DesktopItem>
      </DesktopSwitcher>
      <Center p="$md">
        <SlideIndicator current={currentDesktop} total={numberOfDesktops} />
      </Center>
    </Grid>
  )
}
