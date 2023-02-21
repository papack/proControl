import { Stack, Flex, Center } from "@proControl/lib/ui/layout"
import { InnerContainer, Title, WidgetContainer } from "../lib/ui/layout"
import { KPIGauge } from "../lib/ui/components"

export const Current = () => {
  return (
    <WidgetContainer>
      <Stack g="$md" h="100%">
        <Title text="Aktuell" />
        <Flex s="100%" g="$md" p="$md">
          {/** Techn.  Wirkungsgrad*/}
          <InnerContainer>
            <Center h="100%">
              <KPIGauge
                color="$gray900"
                debug={false}
                decimalPlaces={1}
                title="Tech. Wirkungsgrad"
                unit="%"
                value={25}
                hasProgress={true}
                min={0}
                max={100}
                locale="de"
              />
            </Center>
          </InnerContainer>

          {/** Wirkungsgrad */}
          <InnerContainer>
            <Center h="100%">
              <KPIGauge
                color="$indigo600"
                debug={false}
                decimalPlaces={1}
                title="Wirkungsgrad"
                unit="%"
                value={75}
                hasProgress={true}
                min={0}
                max={100}
                locale="de"
              />
            </Center>
          </InnerContainer>

          {/** Tech. Verfügbarkeit. */}
          <InnerContainer>
            <Center h="100%">
              <KPIGauge
                color="$christ"
                debug={false}
                decimalPlaces={1}
                title="Tech. Verfügbarkeit"
                unit="%"
                value={50}
                hasProgress={true}
                min={0}
                max={100}
                locale="de"
              />
            </Center>
          </InnerContainer>
        </Flex>
      </Stack>
    </WidgetContainer>
  )
}
