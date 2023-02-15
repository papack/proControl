import { Title } from "./Title"
import { TitleProps } from "./types"
import { StoryFn, Meta } from "@storybook/react"

const story: Meta<TitleProps> = {
  title: "widgets/lib/ui/layout/Title",
  component: Title,
  args: {
    title: "Meine Überschrift"
  }
}
export default story

export const Default: StoryFn<TitleProps> = (args) => <Title {...args} />
