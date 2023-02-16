import { StoryFn, Meta } from "@storybook/react"
import { Box } from "@proControl/lib/ui/layout"
import { IconProps } from "./types"
import { Icon } from "./Icon"

const story: Meta<IconProps> = {
  title: "lib/ui/components/Icon",
  component: Icon,
  args: {
    color: "$christ",
    name: "arrowToBottom"
  }
}
export default story

export const Default: StoryFn<IconProps> = (args) => (
  <Box s="64px" b="1px dashed gray">
    <Icon {...args} />
  </Box>
)
