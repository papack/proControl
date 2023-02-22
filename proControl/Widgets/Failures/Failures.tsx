import { Stack, Box, Grid, Scroll } from "@proControl/lib/ui/layout"
import { WidgetContainer, Title, InnerContainer } from "../lib/ui/layout"
import { Check, InfoText, Bar } from "../lib/ui/components"

export const Failures = () => {
  return (
    <WidgetContainer>
      <Stack g="$md" h="100%">
        <Title text="Störungsübersicht" />
        <Grid grdTemplateColumns="3fr 9fr" g="$md" h="100%">
          {/**Left inner */}
          <Stack g="$lg">
            <InnerContainer>
              <Box>
                <Stack g="$md">
                  <Box>
                    <Check
                      checked
                      lable="24h"
                      onClick={() => {}}
                      onClickDisabled={() => {}}
                      variant="radio"
                      gap="$md"
                    />
                  </Box>
                  <Box>
                    <Check
                      checked={false}
                      lable="Charge"
                      onClick={() => {}}
                      onClickDisabled={() => {}}
                      variant="radio"
                      gap="$md"
                    />
                  </Box>
                </Stack>
              </Box>
            </InnerContainer>
            <InnerContainer>
              <Box>
                <Stack g="$md">
                  <Box>
                    <Check
                      checked
                      lable="Anzahl"
                      onClick={() => {}}
                      onClickDisabled={() => {}}
                      variant="radio"
                      gap="$md"
                    />
                  </Box>
                  <Box>
                    <Check
                      checked={false}
                      lable="Dauer"
                      onClick={() => {}}
                      onClickDisabled={() => {}}
                      variant="radio"
                      gap="$md"
                    />
                  </Box>
                  <Box>
                    <InfoText text="xxxx" title="Gesamt" />
                  </Box>
                </Stack>
              </Box>
            </InnerContainer>
          </Stack>

          {/**Right inner */}
          <Box s="100%">
            <Scroll>
              <Stack s="100%" g="$sm">
                <Bar
                  min={0}
                  titleWidth="30px"
                  max={100}
                  unit="%"
                  decimalPlaces={0}
                  value={80}
                  bold={false}
                  debug={false}
                  textColor=""
                  innerTextLeft="Alarmnr 123"
                  innerTextRight=""
                  locale="de"
                  barColor="$failure"
                />
                <Bar
                  min={0}
                  titleWidth="30px"
                  max={100}
                  unit="%"
                  decimalPlaces={0}
                  value={10}
                  bold={false}
                  debug={false}
                  textColor=""
                  innerTextLeft="Alarmnr 7"
                  innerTextRight=""
                  locale="de"
                  barColor="$failure"
                />
                <Bar
                  min={0}
                  titleWidth="30px"
                  max={100}
                  unit="%"
                  decimalPlaces={0}
                  value={5}
                  bold={false}
                  debug={false}
                  textColor=""
                  innerTextLeft="Alarmnr 2"
                  innerTextRight=""
                  locale="de"
                  barColor="$failure"
                />
                <Bar
                  min={0}
                  titleWidth="30px"
                  max={100}
                  unit="%"
                  decimalPlaces={0}
                  value={2}
                  bold={false}
                  debug={false}
                  textColor=""
                  innerTextLeft="Alarmnr 1"
                  innerTextRight=""
                  locale="de"
                  barColor="$failure"
                />
                <Bar
                  min={0}
                  titleWidth="30px"
                  max={100}
                  unit="%"
                  decimalPlaces={0}
                  value={1}
                  bold={false}
                  debug={false}
                  textColor=""
                  innerTextLeft="Alarmnr 3"
                  innerTextRight=""
                  locale="de"
                  barColor="$failure"
                />
              </Stack>
            </Scroll>
          </Box>
        </Grid>
      </Stack>
    </WidgetContainer>
  )
}
