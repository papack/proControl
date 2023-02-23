import { Button } from "@proControl/lib/ui/components"
import { Flex, Grid, Box, Center } from "@proControl/lib/ui/layout"
import { WindowFrameProps } from "./types"

const BORDER_RADIUS = "$lg"
const PADDING = "$md"

export const WindowFrame = ({ onClose, title, children, bg = "$foreground" }: WindowFrameProps) => {
  return (
    <Grid
      w="auto"
      h="auto"
      b="1px solid $border"
      shadow="$boxShadow"
      grdTemplateRows="auto 1fr"
      r={BORDER_RADIUS}
    >
      {/* TitleBar */}
      <Flex jc="space-between" ai="center" p={PADDING} bg="$header" rt={BORDER_RADIUS}>
        {/* Title */}
        <Box c="$onHeader" fs="$lg" fw="$semiBold" pr={PADDING}>
          {title}
        </Box>

        {/* Close Btn */}
        <Box>
          <Button panelSize="normal" iconName="close" onClick={onClose} isOnDarkBackground />
        </Box>
      </Flex>

      {/* Content */}
      <Center bg={bg} s="100%" rb={BORDER_RADIUS} p={PADDING}>
        {children}
      </Center>
    </Grid>
  )
}
