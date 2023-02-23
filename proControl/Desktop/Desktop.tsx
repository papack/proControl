import { Center, Grid } from "@proControl/lib/ui/layout"
import { SlideIndicator, AppIcon } from "@proControl/lib/ui/components"
import { useNavigationCommands } from "@proControl/Navigation"
import { DesktopItem, DesktopSwitcher, useDesktop } from "./lib/ui/components/DesktopSwitcher"
import { useNavigationState } from "@proControl/Navigation"
import { WidgetDisplay } from "@proControl/Dashboard/WidgetDisplay/"

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
          <WidgetDisplay />
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
      <Center pb="$lg">
        <SlideIndicator current={currentDesktop} total={numberOfDesktops} />
      </Center>
    </Grid>
  )
}
