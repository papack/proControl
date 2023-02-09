import { PathType } from "./PathType"

export interface NavigationStoreInterface {
  path: PathType
  prevPath: PathType
  setPath: (module: PathType) => void
  setPrevPath: (module: PathType) => void
}
