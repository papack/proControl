import { Center, Grid, Box } from "@proControl/lib/ui/layout"
import { SlideIndicator } from "@proControl/lib/ui/components"
import { DesktopItem, DesktopSwitcher, useDesktop } from "./lib/ui/components/DesktopSwitcher"
import { useNavigationState } from "@proControl/Navigation"

export const Desktop = () => {
  //hooks
  const { location } = useNavigationState()
  const { currentDesktop, numberOfDesktops } = useDesktop()

  if (location !== "desktop") return null

  return (
    <Grid grdTemplateRows="1fr auto" h="100%" py="$md">
      <DesktopSwitcher>
        <DesktopItem>
          <Box s="100%">content</Box>
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
