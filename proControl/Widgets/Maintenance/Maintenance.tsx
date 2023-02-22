import { Stack } from "@proControl/lib/ui/layout"
import { WidgetContainer, Title } from "../lib/ui/layout"
import { Bar } from "../lib/ui/components"

export const Maintenance = () => {
  return (
    <WidgetContainer>
      <Stack g="$md" s="100%">
        <Title text="Wartung" />
        <Bar
          min={0}
          title="Aktor 1"
          titleWidth="120px"
          max={100}
          unit="%"
          decimalPlaces={0}
          value={102}
          bold={false}
          debug={false}
          textColor="$onFailure"
          innerTextRight=""
          innerTextCenter="Wartung erforderlich!"
          locale="de"
          barColor="$failure"
        />
        <Bar
          min={0}
          title="Aktor 2"
          titleWidth="120px"
          max={100}
          unit="%"
          decimalPlaces={0}
          value={92}
          bold={false}
          debug={false}
          textColor="white"
          innerTextRight=""
          innerTextCenter=""
          locale="de"
          barColor="$warning"
        />
        <Bar
          min={0}
          title="Aktor 3"
          titleWidth="120px"
          max={100}
          unit="%"
          decimalPlaces={0}
          value={25}
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
          title="Aktor 4"
          titleWidth="120px"
          max={100}
          unit="%"
          decimalPlaces={0}
          value={20}
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
