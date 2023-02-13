import { DigitalClockProps } from "./types"
export const DigitalClock = ({
  date = new Date("01.01.1970 00:00:00"),
  locale = "de"
}: DigitalClockProps) => {
  return (
    <div>
      DigitalClock {date.toDateString()}, locale: {locale}
    </div>
  )
}
