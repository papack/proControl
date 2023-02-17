import { ChangeOfStateDiagram } from "./ChangeOfStateDiagram"
import { ChangeOfStateDiagramProps } from "./types"
import { StoryFn, Meta } from "@storybook/react"

const story: Meta<ChangeOfStateDiagramProps> = {
  title: "widgets/lib/ui/components/ChangeOfStateDiagram",
  component: ChangeOfStateDiagram,
  args: {
    height: 120,
    width: 600,
    locale: "de",
    timezone: "Europe/Berlin",
    min: new Date("2023-01-01T13:00:00.000Z").getTime(),
    max: new Date("2023-01-02T13:00:00.000Z").getTime(),
    stepsInMin: 60 * 3,
    onData: (ts, d) => {
      console.log(ts, d)
    },
    debug: false,
    changes: [
      {
        beginTimestamp: new Date("2023-01-01T13:30:00.000Z").getTime(),
        color: "$blue700",
        data: {
          packMLState: "1",
          packMLMode: "2",
          alarms: [{ id: 1, text: "qa" }]
        }
      },
      {
        beginTimestamp: new Date("2023-01-01T16:30:00.000Z").getTime(),
        color: "$red500",
        data: {
          packMLState: "2",
          packMLMode: "2",
          alarms: [{ id: 1, text: "qa" }]
        }
      },
      {
        beginTimestamp: new Date("2023-01-01T20:30:00.000Z").getTime(),
        color: "$green300",
        data: {
          packMLState: "3",
          packMLMode: "2",
          alarms: [{ id: 1, text: "qa" }]
        }
      },
      {
        beginTimestamp: new Date("2023-01-01T20:40:00.000Z").getTime(),
        color: "$gray300",
        data: {
          packMLState: "4",
          packMLMode: "2",
          alarms: [{ id: 1, text: "qa" }]
        }
      },
      {
        beginTimestamp: new Date("2023-01-02T00:40:00.000Z").getTime(),
        color: "$blue400",
        data: {
          packMLState: "5",
          packMLMode: "2",
          alarms: [{ id: 1, text: "qa" }]
        }
      }
    ]
  }
}
export default story

export const Default: StoryFn<ChangeOfStateDiagramProps> = (args) => (
  <ChangeOfStateDiagram {...args} />
)
