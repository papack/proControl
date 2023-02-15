import { StoryFn, Meta } from "@storybook/react"
import { InfoText } from "./InfoText"
import { InfoTextProps } from "./types"

const story: Meta<InfoTextProps> = {
  title: "widgets/lib/ui/components/InfoText",
  component: InfoText,
  args: {
    title: "mein Label",
    text: "meine info"
  }
}
export default story

export const Default: StoryFn<InfoTextProps> = (args) => <InfoText {...args} />
