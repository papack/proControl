import { Box } from "@proControl/lib/ui/layout"
import { SinglePageTemplate } from "@proControl/lib/templates"
import { useNavigationState } from "@proControl/Navigation"
import { Raster } from "./Raster"

export const Dashboard = () => {
  //hooks
  const { location } = useNavigationState()

  if (location !== "dashboard") return null

  return (
    <SinglePageTemplate panelSize="normal" title="Dashboard">
      <Box h="100%">
        <Raster />
      </Box>
    </SinglePageTemplate>
  )
}
