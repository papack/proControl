import { Flex, Box, Center } from "@proControl/lib/ui/layout"
import { ProcessStepProps } from "./types"

export const ProcessStep = ({
  max = 5,
  title = "",
  value = 0,
  titleWidth = "100px"
}: ProcessStepProps) => {
  return (
    <Flex g="$md" ai="center">
      <Box w={titleWidth} fw="$bold">
        {title}
      </Box>
      <Box w="100%">
        <Flex g="$sm" w="100%">
          {[...Array(max)].map((_, i) => (
            <Center bg={value > i ? "$christ" : "$gray500"} c="$gray200" w="100%" r="$md">
              {i + 1}
            </Center>
          ))}
        </Flex>
      </Box>
    </Flex>
  )
}
