import { Box, Stack } from "@proControl/lib/ui/layout"
import { InfoBoxProps } from "./types"

export const InfoBox = ({ title, children }: InfoBoxProps) => {
  return (
    <Stack b="1px solid $gray900" r="$md">
      <Box
        p="$sm"
        bg="$gray800"
        c="$onDark"
        rt="$md"
        bx="1px solid $gray900"
        bt="1px solid $gray900"
        m="-1px"
      >
        {title}
      </Box>
      <Box p="$sm" bg="white" rb="$md">
        {children}
      </Box>
    </Stack>
  )
}
