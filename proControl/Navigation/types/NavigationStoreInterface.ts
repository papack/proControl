import { ModuleType } from "./ModuleType"

export interface NavigationStoreInterface {
  module: ModuleType
  prevModule: ModuleType
  setModule: (module: ModuleType) => void
  setPrevModule: (module: ModuleType) => void
}
