import { produce } from "immer"
import { create } from "zustand"
import { DashboarItemStore, DashboardItemInterface } from "./types"

const useDashboardStore = create<DashboarItemStore>((set) => ({
  items: [],
  setItems: (items) =>
    set(
      produce((draft) => {
        draft.items = items
      })
    ),
  addItem: (item) =>
    set(
      produce((draft) => {
        draft.items.push(item)
      })
    ),
  removeItem: (item) =>
    set(
      produce((draft) => {
        draft.items = draft.items.filter((i: DashboardItemInterface) => i.id !== item.id)
      })
    ),
  moveItem: (item) =>
    set(
      produce((draft) => {
        draft.items = draft.items.map((i: DashboardItemInterface) => (i.id === item.id ? item : i))
      })
    )
}))

export const useDashboardState = () => {
  const store = useDashboardStore((state) => state)
  return {
    ...store
  }
}
