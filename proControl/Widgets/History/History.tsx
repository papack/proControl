import { Stack, Grid, Flex, Box } from "@proControl/lib/ui/layout"
import { InnerContainer, Title, WidgetContainer } from "../lib/ui/layout"
import { Check, KPI, AnalogTimeSeriesCharts } from "../lib/ui/components"

export const History = () => {
  return (
    <WidgetContainer>
      <Stack g="$md" s="100%">
        <Title text="Verlauf" />
        <Grid grdTemplateColumns="1fr 3fr" g="$md">
          {/** Time select */}
          <InnerContainer>
            <Stack g="$md" ai="flex-start" jc="center" h="100%">
              <Check
                checked
                lable="24h"
                onClick={() => {}}
                variant="radio"
                onClickDisabled={() => {}}
              />
              <Check
                checked={false}
                lable="Charge"
                onClick={() => {}}
                variant="radio"
                onClickDisabled={() => {}}
              />
            </Stack>
          </InnerContainer>

          {/** KPIs */}
          <InnerContainer>
            <Flex jc="space-around" ai="center">
              <Box h="100%">
                <KPI
                  title="Wirkungsgrad"
                  value={10}
                  decimalPlaces={1}
                  unit="%"
                  color="$gray900"
                  locale="de"
                />
              </Box>
              <KPI
                title="Techn. Wirkungsgrad"
                value={10}
                decimalPlaces={1}
                unit="%"
                color="$indigo600"
                locale="de"
              />
              <KPI
                title="Techn. Verfügbarkeit"
                value={10}
                decimalPlaces={1}
                unit="%"
                color="$christ"
                locale="de"
              />
            </Flex>
          </InnerContainer>
        </Grid>
        <AnalogTimeSeriesCharts
          graphs={[
            { id: "a", color: "$gray900" },
            { id: "b", color: "$indigo600" },
            { id: "c", color: "$christ" }
          ]}
          onSliderChange={() => {}}
          xStepsInMin={60 * 3}
          xMax={new Date("01.02.2023 14:00").getTime()}
          xMin={new Date("01.01.2023 14:00").getTime()}
          yMin={0}
          yMax={1000}
          ySteps={100}
          debug={false}
          timezone="Europe/Berlin"
          points={[]}
          locale="de"
        />
      </Stack>
    </WidgetContainer>
  )
}
