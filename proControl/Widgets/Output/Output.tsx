import { useRef, useEffect, useState } from "react"
import { useForceUpdate } from "@proControl/lib/hooks"
import { Stack, Grid, Flex, Box, Center, Scroll } from "@proControl/lib/ui/layout"
import { Icon } from "@proControl/lib/ui/components"
import { InnerContainer, Title, WidgetContainer } from "../lib/ui/layout"
import { Check, Legend, AnalogTimeSeriesCharts } from "../lib/ui/components"

export const Output = () => {
  //hooks
  const { forceUpdate } = useForceUpdate()

  //state
  const [timestamp, setTimestamp] = useState<number>(0)
  const [good, setGood] = useState<number>(0)
  const [bad, setBad] = useState<number>(0)

  //refs
  const boxRef = useRef<HTMLDivElement>(null)

  //effects
  useEffect(() => {
    forceUpdate()
  }, [boxRef.current?.scrollWidth, boxRef.current?.scrollHeight])

  return (
    <WidgetContainer>
      <Stack g="$md" s="100%">
        <Title text="Output" />
        <Grid grdTemplateColumns="1fr 4fr" g="$md">
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
            <Grid
              grdTemplateColumns="repeat(2, 1fr)"
              grdTemplateRows="repeat(2,1fr)"
              h="100%"
              g="$md"
            >
              <Flex g="$md">
                <Center h="100%" s="1.2em">
                  <Icon name="uhrzeit" />
                </Center>
                <Box>
                  {new Date(timestamp).toLocaleDateString("de", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit"
                  })}
                </Box>
              </Flex>
              <Box></Box>
              {/** Wirkungsgrad */}
              <Legend
                label="Gut"
                color="$christ"
                value={good}
                decimalPlaces={1}
                unit="Stk."
                locale="de"
              />

              {/** tech Wirkungsgrad */}
              <Legend
                label="Bad"
                color="$failure"
                value={bad}
                decimalPlaces={1}
                unit="Stk."
                locale="de"
              />
            </Grid>
          </InnerContainer>
        </Grid>
        <InnerContainer>
          <Box ref={boxRef} h="100%" css={{ overflow: "hidden" }}>
            {boxRef.current && (
              <Scroll>
                <AnalogTimeSeriesCharts
                  graphs={[
                    { id: "a", color: "$christ" },
                    { id: "b", color: "$failure" }
                  ]}
                  width={boxRef.current.scrollWidth}
                  height={boxRef.current.scrollHeight}
                  onSliderChange={(ts, values) => {
                    setTimestamp(ts)
                    setGood(values.a)
                    setBad(values.b)
                  }}
                  xStepsInMin={60 * 3}
                  xMax={new Date("01.02.2023 14:00").getTime()}
                  xMin={new Date("01.01.2023 14:00").getTime()}
                  yMin={0}
                  yMax={100}
                  ySteps={20}
                  debug={false}
                  timezone="Europe/Berlin"
                  points={[
                    {
                      timestamp: new Date("2023-01-01T13:00:00.000Z").getTime(),
                      values: [10, 1]
                    },
                    {
                      timestamp: new Date("2023-01-01T13:30:00.000Z").getTime(),
                      values: [15, 2]
                    },
                    {
                      timestamp: new Date("2023-01-01T19:00:00.000Z").getTime(),
                      values: [20, 3]
                    },
                    {
                      timestamp: new Date("2023-01-01T22:00:00.000Z").getTime(),
                      values: [25, 10]
                    },
                    {
                      timestamp: new Date("2023-01-02T01:00:00.000Z").getTime(),
                      values: [40, 13]
                    },
                    {
                      timestamp: new Date("2023-01-02T07:00:00.000Z").getTime(),
                      values: [90, 20]
                    }
                  ]}
                  locale="de"
                />
              </Scroll>
            )}
          </Box>
        </InnerContainer>
      </Stack>
    </WidgetContainer>
  )
}
