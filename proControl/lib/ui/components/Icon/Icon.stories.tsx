import { StoryFn, Meta } from "@storybook/react"
import { IconProps } from "./types"
import { Icon } from "./Icon"

const story: Meta<IconProps> = {
  title: "lib/ui/components/Icon",
  component: Icon,
  args: {
    color: "$red300",
    name: "arrowToBottom"
  }
}
export default story

export const Default: StoryFn<IconProps> = (args) => <Icon {...args} />
