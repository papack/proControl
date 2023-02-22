import { Stack } from "@proControl/lib/ui/layout"
import { WidgetContainer, Title } from "../lib/ui/layout"
import { Bar } from "../lib/ui/components"

export const Material = () => {
  return (
    <WidgetContainer>
      <Stack g="$md" s="100%">
        <Title text="Material" />
        <Bar
          min={0}
          title="Material 1"
          titleWidth="120px"
          max={100}
          unit="%"
          decimalPlaces={0}
          value={3}
          bold={false}
          debug={false}
          textColor="$onFailure"
          innerTextRight="noch 1 Minute"
          innerTextCenter=""
          locale="de"
          barColor="$failure"
        />
        <Bar
          min={0}
          title="Material 2"
          titleWidth="120px"
          max={100}
          unit="%"
          decimalPlaces={0}
          value={10}
          bold={false}
          debug={false}
          textColor="black"
          innerTextRight="noch 5 Mintuen"
          innerTextCenter=""
          locale="de"
          barColor="$warning"
        />
        <Bar
          min={0}
          title="Material 3"
          titleWidth="120px"
          max={100}
          unit="%"
          decimalPlaces={0}
          value={75}
          bold={false}
          debug={false}
          textColor="white"
          innerTextRight=""
          innerTextCenter=""
          locale="de"
          barColor="$christ"
        />
        <Bar
          min={0}
          title="Material 5"
          titleWidth="120px"
          max={100}
          unit="%"
          decimalPlaces={0}
          value={100}
          bold={false}
          debug={false}
          textColor="white"
          innerTextRight=""
          innerTextCenter=""
          locale="de"
          barColor="$christ"
        />
      </Stack>
    </WidgetContainer>
  )
}
