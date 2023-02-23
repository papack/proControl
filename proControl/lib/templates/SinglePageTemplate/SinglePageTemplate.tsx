import { Button, Headline } from "@proControl/lib/ui/components"
import { Box, Grid, Flex } from "@proControl/lib/ui/layout"
import { useNavigationCommands } from "@proControl/Navigation"
import { SinglePageTemplateProps } from "./types"

export const SinglePageTemplate = ({
  children = [],
  onClose = undefined,
  panelSize = "normal",
  title = ""
}: SinglePageTemplateProps) => {
  //commands
  const { navigateTo } = useNavigationCommands()

  //Default on Close
  if (!onClose) {
    onClose = () => {
      navigateTo("desktop")
    }
  }

  return (
    <Grid s="100%" grdTemplateRows="auto 1fr" p="$lg">
      <Flex w="100%" jc="space-between" ai="flex-start">
        {/** Headline */}
        <Box>
          <Headline title={title} />
        </Box>

        <Flex ai="center" g="$lg">
          {/** Close Icon */}
          <Box>
            <Button
              iconName="close"
              panelSize={panelSize}
              onClick={() => {
                onClose && onClose()
              }}
            />
          </Box>
        </Flex>
      </Flex>

      {/** Content */}
      <Box pt="$md">{children}</Box>
    </Grid>
  )
}
