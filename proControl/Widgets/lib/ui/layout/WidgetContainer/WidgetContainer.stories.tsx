import { Meta, StoryFn } from "@storybook/react"
import { WidgetContainerProps } from "./types"
import { WidgetContainer } from "./WidgetContainer"
import { Box } from "@proControl/lib/ui/layout/Box"

const story: Meta<WidgetContainerProps> = {
  title: "widgets/lib/ui/layout/WidgetContainer",
  component: WidgetContainer
}
export default story

export const Default: StoryFn<WidgetContainerProps> = (args) => (
  <WidgetContainer {...args}>
    <Box b="1px dashed gray">content</Box>
  </WidgetContainer>
)
