import { StoryFn, Meta } from "@storybook/react"
import { Check } from "./Check"
import { CheckProps } from "./types"

const story: Meta<CheckProps> = {
  title: "widgets/lib/ui/components/Check",
  component: Check,
  args: {
    variant: "check",
    lable: "mein Label",
    checked: false,
    disabled: false,
    gap: "$md"
  }
}
export default story

export const Default: StoryFn<CheckProps> = (args) => <Check {...args} />
