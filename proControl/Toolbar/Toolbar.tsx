import { Center, Grid } from "@proControl/lib/ui/layout"
import { VerticalToggle, DriveEmptyIcon } from "./modules"
import { ToolbarIcon } from "./components"
import { ToolbarGroup } from "./wrapper"

export const Toolbar = () => {
  return (
    <Center h="100%">
      <Grid h="100%" bg="$dark" p="$md" r="$lg" g="$xl" grdTemplateRows="5fr 5fr 3fr">
        <ToolbarGroup>
          <ToolbarIcon variant="primary" iconName="benutzer" />
          <ToolbarIcon variant="deactivated" iconName="suchen" />
          <ToolbarIcon variant={"deactivated"} iconColor={"$gray800"} iconName="warning" />
        </ToolbarGroup>
        <ToolbarGroup jc="flex-end">
          <VerticalToggle />
        </ToolbarGroup>
        <ToolbarGroup jc="flex-end">
          <DriveEmptyIcon />
        </ToolbarGroup>
      </Grid>
    </Center>
  )
}
