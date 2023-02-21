import { TitleProps } from "./types"
import { Box } from "@proControl/lib/ui/layout"

export const Title = ({ text }: TitleProps) => {
  return (
    <Box fs="$md" fw="$semibold" c="$gray900">
      {text}
    </Box>
  )
}
