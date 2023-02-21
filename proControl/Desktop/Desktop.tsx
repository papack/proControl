import { Center, Grid, Box, GridItem } from "@proControl/lib/ui/layout"
import { SlideIndicator } from "@proControl/lib/ui/components"
import { DesktopItem, DesktopSwitcher, useDesktop } from "./lib/ui/components/DesktopSwitcher"
import { useNavigationState } from "@proControl/Navigation"

import { History } from "@proControl/Widgets/History"
import { Current } from "@proControl/Widgets/Current"
import { Distribution } from "@proControl/Widgets/Distribution"
import { DistributionLegend } from "@proControl/Widgets/DistributionLegend"
import { Speed } from "@proControl/Widgets/Speed"
import { SpeedWithTarget } from "@proControl/Widgets/SpeedWithTarget"

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
            <GridItem grdColumn="1/3" grdRow="1/2">
              <History />
            </GridItem>
            <GridItem grdColumn="3/5" grdRow="1/2">
              <Current />
            </GridItem>
            <GridItem grdColumn="2/3" grdRow="2/3">
              <SpeedWithTarget />
            </GridItem>
            <GridItem grdColumn="3/4" grdRow="2/3">
              <Distribution />
            </GridItem>
            <GridItem grdColumn="1/2" grdRow="2/3">
              <DistributionLegend />
            </GridItem>
            <GridItem grdColumn="4/5" grdRow="2/3">
              <Speed />
            </GridItem>
          </Grid>
        </DesktopItem>
        <DesktopItem>
          <Box s="100%">content</Box>
        </DesktopItem>
        <DesktopItem>
          <Box s="100%">content</Box>
        </DesktopItem>
      </DesktopSwitcher>
      <Center p="$md">
        <SlideIndicator current={currentDesktop} total={numberOfDesktops} />
      </Center>
    </Grid>
  )
}
