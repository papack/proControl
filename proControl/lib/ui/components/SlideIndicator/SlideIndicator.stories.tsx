import { SlideIndicator } from "./SlideIndicator"
import { SlideIndicatorProps } from "./types"
import { StoryFn, Meta } from "@storybook/react"

const story: Meta<SlideIndicatorProps> = {
  title: "",
  component: SlideIndicator,
  args: {
    current: 2,
    total: 7
  }
}
export default story

export const Default: StoryFn<SlideIndicatorProps> = (args) => <SlideIndicator {...args} />
