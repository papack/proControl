import { Box } from "@proControl/lib/ui/layout"
import { KeyValueItem } from "./KeyValueItem"
import { KeyValueItemProps } from "./types"
import { StoryFn, Meta } from "@storybook/react"

const story: Meta<KeyValueItemProps> = {
  title: "widgets/lib/ui/components/KeyValueItem",
  component: KeyValueItem,
  args: {
    name: "PackML Status",
    value: "Stopped"
  }
}
export default story

export const Default: StoryFn<KeyValueItemProps> = (args) => (
  <Box w="200px" b="1px dashed gray">
    <KeyValueItem {...args} />
  </Box>
)
