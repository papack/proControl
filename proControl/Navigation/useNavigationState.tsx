import { create } from "zustand"
import { produce } from "immer"
import { LocationType, NavigationStoreInterface } from "./types"

const useNavigationStore = create<NavigationStoreInterface>((set) => ({
  location: "desktop",
  setLocation: (l: LocationType) =>
    set(
      produce((draft: NavigationStoreInterface) => {
        draft.location = l
      })
    ),
  prevLocation: "desktop",
  setPrevLocation: (l: LocationType) =>
    set(
      produce((draft: NavigationStoreInterface) => {
        draft.prevLocation = l
      })
    )
}))

export const useNavigationState = () => {
  const store = useNavigationStore()
  return { ...store }
}
