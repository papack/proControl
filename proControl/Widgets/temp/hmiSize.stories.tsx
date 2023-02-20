import { Box, Grid, Repeat, Center } from "@proControl/lib/ui/layout"
import { Meta, StoryFn } from "@storybook/react"
import { HMI, HMIProps } from "./HMI"

const story: Meta<HMIProps> = {
  title: "hmi",
  args: {
    size: "normal"
  }
}
export default story

export const Fr4: StoryFn<HMIProps> = ({ size }) => (
  <HMI size={size}>
    <Box s="100%" p="$md">
      <Grid
        grdTemplateRows="repeat(2,1fr)"
        grdTemplateColumns="repeat(2,1fr)"
        s="100%"
        b="1px dashed gray"
        g="$md"
      >
        <Repeat n={4}>
          <Center bg="$gray600" h="100%" fs={size === "wide" ? "$sm" : "$md"}>
            content
          </Center>
        </Repeat>
      </Grid>
    </Box>
  </HMI>
)

export const Fr6: StoryFn<HMIProps> = ({ size }) => (
  <HMI size={size}>
    <Box s="100%" p="$md">
      <Grid
        grdTemplateRows="repeat(2,1fr)"
        grdTemplateColumns="repeat(3,1fr)"
        s="100%"
        b="1px dashed gray"
        g="$md"
      >
        <Repeat n={6}>
          <Center bg="$gray600" h="100%" fs={size === "wide" ? "$sm" : "$md"}>
            content
          </Center>
        </Repeat>
      </Grid>
    </Box>
  </HMI>
)

export const Fr8: StoryFn<HMIProps> = ({ size }) => (
  <HMI size={size}>
    <Box s="100%" p="$md">
      <Grid
        grdTemplateRows="repeat(2,1fr)"
        grdTemplateColumns="repeat(4,1fr)"
        s="100%"
        b="1px dashed gray"
        g="$md"
      >
        <Repeat n={8}>
          <Center bg="$gray600" h="100%" fs={size === "wide" ? "$sm" : "$md"}>
            content
          </Center>
        </Repeat>
      </Grid>
    </Box>
  </HMI>
)

export const Fr16: StoryFn<HMIProps> = ({ size }) => (
  <HMI size={size}>
    <Box s="100%" p="$md">
      <Grid
        grdTemplateRows="repeat(4,1fr)"
        grdTemplateColumns="repeat(4,1fr)"
        s="100%"
        b="1px dashed gray"
        g="$md"
      >
        <Repeat n={16}>
          <Center bg="$gray600" h="100%" fs={size === "wide" ? "$sm" : "$md"}>
            content
          </Center>
        </Repeat>
      </Grid>
    </Box>
  </HMI>
)
