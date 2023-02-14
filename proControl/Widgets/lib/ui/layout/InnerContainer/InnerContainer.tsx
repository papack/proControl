import { Box } from "@proControl/lib/ui/layout"
import { InnerContainerProps } from "./types"
export const InnerContainer = ({ children }: InnerContainerProps) => {
  return (
    <Box bg="$gray300" p="$md" r="$md" b="1px solid $gray700">
      {children}
    </Box>
  )
}
