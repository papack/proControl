import { Stack, Box } from "@proControl/lib/ui/layout"
import { WidgetContainer, Title } from "../lib/ui/layout"
import { ProcessStep } from "../lib/ui/components"

export const Cycles = () => {
  return (
    <WidgetContainer>
      <Box mb="$lg">
        <Title text="Akutelle Takte Baugruppe" />
      </Box>
      <Stack g="$md" p="$lg">
        <ProcessStep title="Baugruppe 1" max={4} value={3} titleWidth="120px" />
        <ProcessStep title="BG 2" max={2} value={1} titleWidth="120px" />
      </Stack>
    </WidgetContainer>
  )
}
