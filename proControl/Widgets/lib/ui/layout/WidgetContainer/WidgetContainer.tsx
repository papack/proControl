import { Box } from "@proControl/lib/ui/layout/Box"
import { WidgetContainerProps } from "./types"

export const WidgetContainer = ({ children }: WidgetContainerProps) => {
  return (
    <Box h="100%" p="$md" b="1px solid $gray400" r="$md" bg="$gray100" shadow="$boxShadow">
      {children}
    </Box>
  )
}
