import { useState } from "react"
import { Stack, Box, Center } from "@proControl/lib/ui/layout"
import { SpeedGauge, Legend } from "../lib/ui/components"
import { Title, WidgetContainer } from "../lib/ui/layout"

export const SpeedWithTarget = () => {
  //state
  const [value, setValue] = useState<number>(15.7)
  const [valueTarget, setValueTarget] = useState<number>(15.7)

  return (
    <WidgetContainer>
      <Stack g="$md" jc="center" h="100%">
        <Title text="Speed" />
        <Stack p="$md" h="100%" jc="center">
          <Center s="100%">
            <Box s="90%" mt="-25px" mx="-10px">
              <SpeedGauge
                min={0}
                max={40}
                steps={0.5}
                value={value}
                sliderStartValue={15.7}
                onSliderChange={(v) => {
                  setValueTarget(v)
                  setTimeout(() => {
                    setValue(v)
                  }, 1_000)
                }}
                unit="Einheit"
                decimalPlaces={1}
                hasSlider={true}
                color="$christ"
                locale="de"
              />
            </Box>
          </Center>
          <Box px="$lg" mt="-20px">
            <Legend
              label="Soll"
              decimalPlaces={1}
              unit="Einheit"
              value={valueTarget}
              locale="de"
              color="$gray500"
            />
          </Box>
        </Stack>
      </Stack>
    </WidgetContainer>
  )
}
