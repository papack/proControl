import { Box } from "@proControl/lib/ui/layout"
import { InnerContainerProps } from "./types"
export const InnerContainer = ({ children }: InnerContainerProps) => {
  return (
    <Box s="100%" bg="white" p="$md" r="$md" b="1px solid $gray700">
      {children}
    </Box>
  )
}
