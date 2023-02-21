import { Stack, Box } from "@proControl/lib/ui/layout"
import { WidgetContainer, Title } from "../lib/ui/layout"
import { ProgressGauge, Legend } from "../lib/ui/components"

export const Progress = () => {
  return (
    <WidgetContainer>
      <Stack g="$lg">
        <Title text="Fortschritt Charge" />
        <Box h="200px">
          <ProgressGauge
            min={0}
            max={100}
            value={23}
            unit="%"
            decimalPlaces={0}
            debug={false}
            locale="de"
            color="$christ"
          />
        </Box>

        <Box px="$md">
          <Legend label="Sollmenge" unit="Stück" value={203} color="$text" decimalPlaces={0} />
        </Box>
      </Stack>
    </WidgetContainer>
  )
}
