import { Stack, Box, Center, Grid } from "@proControl/lib/ui/layout"
import { Title, WidgetContainer } from "../lib/ui/layout"
import { RingChart, Legend } from "../lib/ui/components"

export const Distribution = () => {
  return (
    <WidgetContainer>
      <Stack h="100%" g="$md" pb="$lg">
        <Title text="Verteilung" />
        <Center h="100%">
          <Box s="180px" m="-8px">
            <RingChart
              unit="%"
              decimalPlaces={0}
              parts={[
                {
                  color: "$production",
                  value: 50
                },
                {
                  color: "$gray500",
                  value: 15
                },
                {
                  color: "$failure",
                  value: 35
                }
              ]}
              locale="de"
            ></RingChart>
          </Box>
        </Center>
        <Center p="$md">
          <Grid grdTemplateRows="1fr 1fr" grdTemplateColumns="1fr 1fr" w="100%">
            <Legend
              label="Produktion"
              decimalPlaces={0}
              value={50}
              locale="de"
              color="$production"
            />
            <Legend label="Pause/Stopp" decimalPlaces={0} value={15} locale="de" color="$gray500" />
            <Legend label="Störung" decimalPlaces={0} value={35} locale="de" color="$failure" />
          </Grid>
        </Center>
      </Stack>
    </WidgetContainer>
  )
}
