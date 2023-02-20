import { Box, Grid, Center, Absolute, Relative, Stack } from "@proControl/lib/ui/layout"

export interface HMIProps {
  children: React.ReactNode
  size: "normal" | "wide"
}

export const HMI = ({ size, children }: HMIProps) => {
  return (
    <Box
      w={size === "wide" ? "1366px" : "1280px"}
      h={size === "wide" ? "768px" : "800px"}
      b="10px solid black"
      bg="#fff"
    >
      <Grid s="100%" grdTemplateRows="auto 1fr">
        {/**Statusbar (placeholder) */}
        <Relative h="80px" w="100%" bg="$gray300">
          <Absolute bottom="0" left="0" bg="#fff" w="50%" h="30px" />
        </Relative>

        <Grid s="100%" grdTemplateColumns="auto 1fr">
          <Center s="100%" px="$lg" pb="$lg">
            {/**Toolbar (placeholder) */}
            <Box w="60px" h="100%" bg="$gray300"></Box>
          </Center>

          <Stack>
            <Box s="100%">{children}</Box>
            <Box h="50px" px="$md" pb="$lg">
              <Box s="100%" bg="$gray300"></Box>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}
