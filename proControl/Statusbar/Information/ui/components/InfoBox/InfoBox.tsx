import { Box, Flex } from "@proControl/lib/ui/layout"
import { InfoBoxProps } from "./interfaces"

export const InfoBox = ({ text, title }: InfoBoxProps) => {
  return (
    <Flex flxDirection="column" c="$onDark">
      <Box fw="$bold">{title.toUpperCase()}</Box>
      <Box>{text}</Box>
    </Flex>
  )
}
