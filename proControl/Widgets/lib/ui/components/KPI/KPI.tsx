import { Stack, Center } from "@proControl/lib/ui/layout"
import { KPIProps } from "./types"

export const KPI = ({ locale, value, color, decimalPlaces, unit, title }: KPIProps) => {
  return (
    <Stack jc="center" ai="center" g="$sm" c={color} w="80px">
      <Center fs="$lg" css={{ textAlign: "center" }} fw="$medium">
        {title}
      </Center>
      <Center fs="$xl" fw="$black" css={{ wordBreak: "keep-all", whiteSpace: "nowrap" }}>
        {value.toLocaleString(locale, {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces
        })}
        {unit && ` ${unit}`}
      </Center>
    </Stack>
  )
}
