import { create } from "zustand"
import { produce } from "immer"
import { PathType, NavigationStoreInterface } from "./types"

const useNavigationStore = create<NavigationStoreInterface>((set) => ({
  path: "desktop",
  setPath: (p: PathType) =>
    set(
      produce((draft) => {
        draft.path = p
      })
    ),
  prevPath: "desktop",
  setPrevPath: (p: PathType) =>
    set(
      produce((draft) => {
        draft.prevPath = p
      })
    )
}))

export const useNavigationState = () => {
  const store = useNavigationStore()
  return { ...store }
}
