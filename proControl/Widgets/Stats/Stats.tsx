import { Stack, Box, Grid, Scroll, Repeat } from "@proControl/lib/ui/layout"
import { WidgetContainer, Title, InnerContainer } from "../lib/ui/layout"
import { Check, InfoText, Bar } from "../lib/ui/components"

export const Stats = () => {
  return (
    <WidgetContainer>
      <Stack g="$md" h="100%">
        <Title text="Statistik" />
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
                      lable="Gut"
                      onClick={() => {}}
                      onClickDisabled={() => {}}
                      variant="check"
                      gap="$md"
                    />
                  </Box>
                  <Box>
                    <Check
                      checked={false}
                      lable="Auswurf schlecht"
                      onClick={() => {}}
                      onClickDisabled={() => {}}
                      variant="check"
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
                  unit=""
                  decimalPlaces={0}
                  value={100}
                  bold={false}
                  debug={false}
                  textColor="white"
                  innerTextRight="Gut"
                  locale="de"
                  barColor="$christ"
                />
                <Repeat n={15}>
                  <Bar
                    min={0}
                    titleWidth="30px"
                    max={100}
                    unit=""
                    decimalPlaces={0}
                    value={80}
                    bold={false}
                    debug={false}
                    textColor="black"
                    innerTextRight="Schlechtlesung"
                    locale="de"
                    barColor="$failure"
                  />
                </Repeat>
              </Stack>
            </Scroll>
          </Box>
        </Grid>
      </Stack>
    </WidgetContainer>
  )
}
