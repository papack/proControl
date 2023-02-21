import { Stack } from "@proControl/lib/ui/layout"
import { WidgetContainer } from "../lib/ui/layout"
import { InfoBox } from "../lib/ui/components"

export const Batch = () => {
  return (
    <WidgetContainer>
      <Stack g="$md">
        <InfoBox title="Chargennummer">C123</InfoBox>
        <InfoBox title="Chargenname">Schokolade - Nuss MHD: 01.06.2023</InfoBox>
        <InfoBox title="Chargenstart">12:23</InfoBox>
        <InfoBox title="Chargendauer">34min</InfoBox>
      </Stack>
    </WidgetContainer>
  )
}
