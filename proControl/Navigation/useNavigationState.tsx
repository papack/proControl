import { create } from "zustand"
import { produce } from "immer"
import { ModuleType, NavigationStoreInterface } from "./types"

const useNavigationStore = create<NavigationStoreInterface>((set) => ({
  module: "desktop",
  setModule: (module: ModuleType) =>
    set(
      produce((draft) => {
        draft.module = module
      })
    ),
  prevModule: "desktop",
  setPrevModule: (module: ModuleType) =>
    set(
      produce((draft) => {
        draft.prevModule = module
      })
    )
}))

export const useNavigationState = () => {
  const store = useNavigationStore()
  return { ...store }
}
