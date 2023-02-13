import { Box, Center } from "@proControl/lib/ui/layout"
import { useNavigationState } from "@proControl/Navigation"

export const Playground = () => {
  //hooks
  const { location } = useNavigationState()

  if (location !== "playground") return null

  return (
    <Center h="100vh" bg="$">
      <Box b="1px solid $red200" p="$md" bg="$borderDanger">
        test
      </Box>
    </Center>
  )
}
