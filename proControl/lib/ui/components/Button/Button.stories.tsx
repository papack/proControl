import { Button } from "./Button"
import { ButtonProps } from "./ButtonProps"
import { Meta, StoryFn } from "@storybook/react"
import { Box } from "../../layout"

const def: Meta<ButtonProps> = {
  title: "lib/ui/components/Button",
  component: Button
}

export default def

export const Default: StoryFn<ButtonProps> = (args) => (
  <Box b="1px dashed gray">
    <Button {...args} />
  </Box>
)
