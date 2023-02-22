import { Center, Grid, GridItem } from "@proControl/lib/ui/layout"
import { SlideIndicator, AppIcon } from "@proControl/lib/ui/components"
import { useNavigationCommands } from "@proControl/Navigation"
import { DesktopItem, DesktopSwitcher, useDesktop } from "./lib/ui/components/DesktopSwitcher"
import { useNavigationState } from "@proControl/Navigation"

import { History } from "@proControl/Widgets/History"
import { Current } from "@proControl/Widgets/Current"
import { Distribution } from "@proControl/Widgets/Distribution"
import { Speed } from "@proControl/Widgets/Speed"
import { SpeedWithTarget } from "@proControl/Widgets/SpeedWithTarget"

export const Desktop = () => {
  //hooks
  const { location } = useNavigationState()
  const { currentDesktop, numberOfDesktops } = useDesktop()

  //commands
  const { navigateTo } = useNavigationCommands()

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

            {/** Speed */}
            <GridItem grdColumn="4/5" grdRow="2/3">
              <Speed />
            </GridItem>
          </Grid>
        </DesktopItem>
        <DesktopItem>
          <Grid
            h="100%"
            ai="start"
            grdTemplateColumns="repeat(6, 1fr)"
            grdTemplateRows="repeat(3, 1fr)"
            p="$lg"
            g="$lg"
          >
            <AppIcon
              title="Dashboard"
              icon="diagnose"
              isDeactivated={false}
              onClick={() => {
                navigateTo("dashboard")
              }}
            />
            <AppIcon
              title="Benutzerverwaltung"
              icon="benutzerverwaltung"
              isDeactivated={true}
              onClick={() => {
                console.log("not implemented yet!")
              }}
            />
            <AppIcon
              title="Charge"
              icon="charge"
              isDeactivated={true}
              onClick={() => {
                console.log("not implemented yet!")
              }}
            />
            <AppIcon
              title="Baugruppenparameter"
              icon="einrichten3"
              isDeactivated={true}
              onClick={() => {
                console.log("not implemented yet!")
              }}
            />
            <AppIcon
              title="Einstellungen"
              icon="einstellungen"
              isDeactivated={true}
              onClick={() => {
                console.log("not implemented yet!")
              }}
            />
            <AppIcon
              title="Bremse"
              icon="brakesBlue"
              isDeactivated={true}
              onClick={() => {
                console.log("not implemented yet!")
              }}
            />
            <AppIcon
              title="Reset"
              icon="zuruecksetzen"
              isDeactivated={true}
              onClick={() => {
                console.log("not implemented yet!")
              }}
            />
            <AppIcon
              title="Formate"
              icon="formate"
              isDeactivated={true}
              onClick={() => {
                console.log("not implemented yet!")
              }}
            />
            <AppIcon
              title="AuditTrail"
              icon="pfeil"
              isDeactivated={true}
              onClick={() => {
                console.log("not implemented yet!")
              }}
            />
            <AppIcon
              title="Protokoll"
              icon="einrichten"
              isDeactivated={true}
              onClick={() => {
                console.log("not implemented yet!")
              }}
            />
          </Grid>
        </DesktopItem>
      </DesktopSwitcher>
      <Center p="$md">
        <SlideIndicator current={currentDesktop} total={numberOfDesktops} />
      </Center>
    </Grid>
  )
}
