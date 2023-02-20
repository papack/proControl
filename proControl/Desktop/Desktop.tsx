import { History } from "@proControl/Widgets/History"
import { Center, Grid, Box, GridItem } from "@proControl/lib/ui/layout"
import { SlideIndicator } from "@proControl/lib/ui/components"
import { DesktopItem, DesktopSwitcher, useDesktop } from "./lib/ui/components/DesktopSwitcher"
import { useNavigationState } from "@proControl/Navigation"

export const Desktop = () => {
  //hooks
  const { location } = useNavigationState()
  const { currentDesktop, numberOfDesktops } = useDesktop()

  if (location !== "desktop") return null

  return (
    <Grid grdTemplateRows="1fr auto" h="100%" py="$lg" pr="$lg">
      <DesktopSwitcher>
        <DesktopItem>
          <Grid
            grdTemplateRows="repeat(2, 1fr)"
            grdTemplateColumns="repeat(4, 1fr)"
            h="100%"
            g="$md"
          >
            <GridItem grdColumn="1/3" grdRow="1/2">
              <History></History>
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
