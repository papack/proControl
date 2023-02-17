import { Flex, Box } from "@proControl/lib/ui/layout"
import { KeyValueItemProps } from "./types"

export const KeyValueItem = ({ name = "", value = "" }: KeyValueItemProps) => {
  return (
    <Flex jc="space-between" g="$md">
      <Box fw="$bold">{name}:</Box>
      <Box>{value}</Box>
    </Flex>
  )
}
