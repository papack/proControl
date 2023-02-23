import { useCallback } from "react"
import { useDashboardState } from "./useDashboardState"

export const useDashboardRequest = () => {
  //store
  const { items } = useDashboardState()

  //get Position Info
  const requestPositionInfo = useCallback(
    (xPos: number, yPos: number) => {
      //find item on position
      for (const item of items) {
        //check if item is on position
        if (
          xPos >= item.xPos &&
          xPos <= item.xPos + item.width - 1 &&
          yPos >= item.yPos &&
          yPos <= item.yPos + item.height - 1
        ) {
          return item
        }
      }

      //no item found
      return null
    },
    [items]
  )

  //get Item Info
  const requestItemInfo = useCallback(
    (id: string) => {
      //find item
      for (const item of items) {
        //check if item is on position
        if (item.id === id) {
          return item
        }
      }

      //no item found
      return null
    },
    [items]
  )

  return {
    requestPositionInfo,
    requestItemInfo
  }
}
