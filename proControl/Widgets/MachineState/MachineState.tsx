import { useRef, useEffect, useState } from "react"
import { useForceUpdate } from "@proControl/lib/hooks"
import { Stack, Box, Scroll, Grid, Center, Flex } from "@proControl/lib/ui/layout"
import { Span } from "@proControl/lib/ui/html"
import { Icon } from "@proControl/lib/ui/components"
import { WidgetContainer, Title } from "../lib/ui/layout"
import { ChangeOfStateDiagram, KPI } from "../lib/ui/components"

export const MachineState = () => {
  //state
  const [date, setDate] = useState<Date>(new Date())
  const [packML, setPackML] = useState<string>("")
  const [alarm, setAlarm] = useState<string>("")

  //hooks
  const { forceUpdate } = useForceUpdate()

  //ref
  const boxRef = useRef<HTMLDivElement>(null)

  //effects

  //force update, if box geometry change
  useEffect(() => {
    forceUpdate()
  }, [boxRef.current])

  return (
    <WidgetContainer>
      <Stack s="100%" g="$md">
        <Title text="Maschinenstatus 24h" />
        <Grid grdTemplateColumns="1fr 1fr 1fr" w="100%">
          <Center>
            <KPI
              title="Production"
              value={75}
              unit="%"
              decimalPlaces={0}
              color="$production"
              locale="de"
            />
          </Center>
          <Center>
            <KPI
              title="Pause/Stopp"
              value={10}
              unit="%"
              decimalPlaces={0}
              color="$gray900"
              locale="de"
            />
          </Center>
          <Center>
            <KPI
              title="Störung"
              value={15}
              unit="%"
              decimalPlaces={0}
              color="$failure"
              locale="de"
            />
          </Center>
        </Grid>
        <Box px="$xl">
          <Stack g="$sm">
            <Flex g="$md">
              <Box s="18px" p="1px">
                <Icon name="uhrzeit"></Icon>
              </Box>
              <Box>
                {date.toLocaleDateString("de", {
                  weekday: "long",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit"
                })}
              </Box>
            </Flex>
            <Box>
              <Span css={{ fontWeight: "$bold" }}>PackML:</Span> {packML}
              {alarm && (
                <>
                  <Span css={{ fontWeight: "$bold" }}> Alarm:</Span> {alarm}
                </>
              )}
            </Box>
          </Stack>
        </Box>
        <Box w="100%" h="120px" ref={boxRef}>
          <Scroll>
            {boxRef.current && (
              <ChangeOfStateDiagram
                debug={false}
                onData={(ts, d) => {
                  setDate(new Date(ts))
                  setPackML(d.packMLMode + "/" + d.packMLState)
                  setAlarm(d.alarm || "")
                }}
                stepsInMin={60 * 4}
                height={boxRef.current.scrollHeight}
                width={boxRef.current.scrollWidth}
                min={new Date("2023-01-01T13:00:00.000Z").getTime()}
                max={new Date("2023-01-02T13:00:00.000Z").getTime()}
                timezone="Europe/Berlin"
                locale="de"
                changes={[
                  {
                    beginTimestamp: new Date("2023-01-01T12:30:00.000Z").getTime(),
                    color: "$production",
                    data: {
                      packMLMode: "Production",
                      packMLState: "Execute"
                    }
                  },
                  {
                    beginTimestamp: new Date("2023-01-01T16:30:00.000Z").getTime(),
                    color: "$failure",
                    data: {
                      packMLMode: "Production",
                      packMLState: "Aborded",
                      alarm: "5, kritisch"
                    }
                  },
                  {
                    beginTimestamp: new Date("2023-01-02T00:40:00.000Z").getTime(),
                    color: "$production",
                    data: {
                      packMLMode: "Production",
                      packMLState: "Execute"
                    }
                  }
                ]}
              />
            )}
          </Scroll>
        </Box>
      </Stack>
    </WidgetContainer>
  )
}
