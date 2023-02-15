import { TitleProps } from "./types"
import { Box } from "@proControl/lib/ui/layout"

export const Title = ({ title }: TitleProps) => {
  return (
    <Box fs="$2xl" fw="$bold" c="$gray900">
      {title}
    </Box>
  )
}
