import { Box } from "@proControl/lib/ui/layout"
import { InnerContainer } from "./InnerContainer"
import { InnerContainerProps } from "./types"
import { StoryFn, Meta } from "@storybook/react"

const story: Meta<InnerContainerProps> = {
  title: "widgets/lib/ui/layout/InnerContainer",
  component: InnerContainer
}
export default story

export const Default: StoryFn<InnerContainerProps> = () => (
  <InnerContainer>
    <Box b="1px dashed gray">content</Box>
  </InnerContainer>
)
