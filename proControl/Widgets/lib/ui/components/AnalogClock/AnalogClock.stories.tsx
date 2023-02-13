import { AnalogClockProps } from "./types"
import { AnalogClock } from "./AnalogClock"
import { StoryFn, Meta } from "@storybook/react"

const story: Meta<AnalogClockProps> = {
  title: "widgets/lib/ui/components/AnalogClock",
  args: {
    date: new Date(),
    locale: "af"
  },
  component: AnalogClock
}
export default story

export const Default: StoryFn<AnalogClockProps> = (args) => <AnalogClock {...args} />
