import { useCallback } from "react"
import { useDashboardState } from "./useDashboardState"
import { DashboardItemInterface, DashboardEventType } from "./types"
import { useEvents } from "@proControl/sys/useEvents"

export const useDashboardCommands = () => {
  //hooks
  const { emit } = useEvents<DashboardEventType, DashboardItemInterface>()

  //store
  const { addItem, moveItem, removeItem } = useDashboardState()

  //add Item
  const addDashboardItem = useCallback(
    (item: DashboardItemInterface) => {
      addItem(item)
      emit("dashboardItemAdded", item)
    },
    [addItem, emit]
  )

  //remove Item
  const removeDashboardItem = useCallback(
    (item: DashboardItemInterface) => {
      removeItem(item)
      emit("dashboardItemRemoved", item)
    },
    [removeItem, emit]
  )

  //move Item
  const moveDashboardItem = useCallback(
    (item: DashboardItemInterface) => {
      moveItem(item)
      emit("dashboardItemMoved", item)
    },
    [moveItem, emit]
  )

  return {
    removeDashboardItem,
    moveDashboardItem,
    addDashboardItem
  }
}
