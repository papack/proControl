import { Box, Flex } from "@proControl/lib/ui/layout"
import { LegendProps } from "./types"

export const Legend = ({
  color = "$christ",
  decimalPlaces = 2,
  label = "",
  locale = "de",
  unit = "",
  value = null
}: LegendProps) => {
  return (
    <Flex jc="space-between">
      <Flex ai="center" g="$md">
        <Box bg={color} s="$lg" mt="1px" />
        <Box>{label}</Box>
      </Flex>
      <Flex ai="center">
        {value &&
          unit &&
          value.toLocaleString(locale, {
            maximumFractionDigits: decimalPlaces >= 0 ? decimalPlaces : 0,
            minimumFractionDigits: decimalPlaces >= 0 ? decimalPlaces : 0
          })}{" "}
        {unit && `[${unit}]`}
      </Flex>
    </Flex>
  )
}
