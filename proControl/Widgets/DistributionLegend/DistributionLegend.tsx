import { Title, WidgetContainer } from "../lib/ui/layout"
import { Stack, Center, Absolute, Relative } from "@proControl/lib/ui/layout"
import { RingChart, Legend } from "../lib/ui/components"

export const DistributionLegend = () => {
  return (
    <WidgetContainer>
      <Stack h="100%">
        <Title text="Distribution Legend" />
        <Stack h="100%" jc="space-evenly" p="$md">
          <Legend
            label="Produktion"
            decimalPlaces={0}
            value={50}
            unit="%"
            locale="de"
            color="$production"
          />
          <Legend
            label="Pause/Stopp"
            decimalPlaces={0}
            value={15}
            locale="de"
            color="$gray500"
            unit="%"
          />
          <Legend
            label="Störung"
            decimalPlaces={0}
            value={35}
            locale="de"
            color="$failure"
            unit="%"
          />
        </Stack>
      </Stack>
    </WidgetContainer>
  )
}
