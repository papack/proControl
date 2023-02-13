import { DigitalClock } from "./DigitalClock"
import { DigitalClockProps } from "./types"
import { StoryFn, Meta } from "@storybook/react"

const story: Meta<DigitalClockProps> = {
  title: "widgets/lib/ui/components/DigitalClock",
  component: DigitalClock,
  args: {
    date: new Date(),
    locale: "af"
  }
}
export default story

export const Default: StoryFn<DigitalClockProps> = (args) => <DigitalClock {...args} />
