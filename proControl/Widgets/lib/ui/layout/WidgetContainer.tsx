import { Box } from "@proControl/lib/ui/layout/Box"
import { WidgetContainerProps } from "./types"

export const WidgetContainer = ({ children }: WidgetContainerProps) => {
  return (
    <Box p="$md" b="1px solid $border" r="$md" bg="$gray200" shadow="$boxShadow">
      {children}
    </Box>
  )
}
