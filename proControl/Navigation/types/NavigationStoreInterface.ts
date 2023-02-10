import { LocationType } from "./LocationType"

export interface NavigationStoreInterface {
  location: LocationType
  prevLocation: LocationType
  setLocation: (location: LocationType) => void
  setPrevLocation: (location: LocationType) => void
}
