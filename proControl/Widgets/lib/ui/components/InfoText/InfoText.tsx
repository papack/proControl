import { Stack, Box } from "@proControl/lib/ui/layout"
import { InfoTextProps } from "./types"

export const InfoText = ({ text, title }: InfoTextProps) => {
  return (
    <Stack>
      <Box fw="$bold">{title}</Box>
      <Box>{text}</Box>
    </Stack>
  )
}
