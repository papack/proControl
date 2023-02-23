import { DashboardItemInterface } from "./DashboardItemInterface"

export interface DashboarItemStore {
  items: DashboardItemInterface[]
  setItems: (items: DashboardItemInterface[]) => void
  addItem: (item: DashboardItemInterface) => void
  removeItem: (item: DashboardItemInterface) => void
  moveItem: (item: DashboardItemInterface) => void
}
