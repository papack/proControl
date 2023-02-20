import { Flex, Box } from "@proControl/lib/ui/layout"
import { SlideIndicatorProps } from "./types"

export const SlideIndicator = ({ current, total }: SlideIndicatorProps) => {
  return (
    <Flex g="$md">
      {[...Array(total)].map((_, i) => (
        <Box key={i} r="999px" bg={current === i ? "$enabled" : "$gray400"} s="10px" />
      ))}
    </Flex>
  )
}
