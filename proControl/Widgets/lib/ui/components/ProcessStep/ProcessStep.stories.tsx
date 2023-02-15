import { Box } from "@proControl/lib/ui/layout"
import { ProcessStep } from "./ProcessStep"
import { ProcessStepProps } from "./types"
import { StoryFn, Meta } from "@storybook/react"

const story: Meta<ProcessStepProps> = {
  title: "widgets/lib/ui/components/ProcessStep",
  component: ProcessStep,
  args: {
    title: "Baugruppe 1",
    titleWidth: "150px",
    value: 2,
    max: 4
  }
}
export default story

export const Default: StoryFn<ProcessStepProps> = (args) => (
  <Box b="1px dashed gray" w="500px" p="$md">
    <ProcessStep {...args} />
  </Box>
)
