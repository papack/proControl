import { KPI } from "./KPI"
import { KPIProps } from "./types"
import { StoryFn, Meta } from "@storybook/react"

const story: Meta<KPIProps> = {
  title: "widgets/lib/ui/components/KPI",
  component: KPI,
  args: {
    title: "techn. Wirkungsgrad",
    color: "$warning",
    decimalPlaces: 2,
    locale: "de",
    unit: "%",
    value: 70
  }
}
export default story

export const Default: StoryFn<KPIProps> = (args) => <KPI {...args} />
