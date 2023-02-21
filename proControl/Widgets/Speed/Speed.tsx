import { Stack, Box, Center } from "@proControl/lib/ui/layout"
import { SpeedGauge } from "../lib/ui/components"
import { Title, WidgetContainer } from "../lib/ui/layout"

export const Speed = () => {
  return (
    <WidgetContainer>
      <Stack g="$md" jc="space-around" h="100%">
        <Title text="Speed" />
        <Center h="100%">
          <Box h="220px">
            <SpeedGauge
              min={0}
              max={40}
              steps={0.5}
              value={15.7}
              unit="Einheit"
              decimalPlaces={1}
              hasSlider={false}
              color="$christ"
              locale="de"
            />
          </Box>
        </Center>
      </Stack>
    </WidgetContainer>
  )
}
