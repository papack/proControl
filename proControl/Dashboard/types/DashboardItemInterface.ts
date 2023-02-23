import { WidgetType } from "@proControl/Widgets/types/"

export interface DashboardItemInterface {
  id: string
  widgetId: WidgetType
  xPos: number
  yPos: number
  height: number
  width: number
}
