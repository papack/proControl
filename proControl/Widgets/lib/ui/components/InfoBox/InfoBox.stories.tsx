import { StoryFn, Meta } from "@storybook/react"
import { Box } from "@proControl/lib/ui/layout"
import { InfoBox } from "./InfoBox"
import { InfoBoxProps } from "./types"

const story: Meta<InfoBoxProps> = {
  title: "widgets/lib/ui/components/InfoBox",
  component: InfoBox,
  args: {
    title: "Chargennummer"
  }
}
export default story

export const Default: StoryFn<InfoBoxProps> = (args) => (
  <Box w="200px">
    <InfoBox {...args}>
      <Box b="1px dashed black">content</Box>
    </InfoBox>
  </Box>
)
