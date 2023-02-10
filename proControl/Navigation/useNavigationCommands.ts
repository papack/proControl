import { LocationType } from "./types"
import { useNavigationState } from "./useNavigationState"

export const useNavigationCommands = () => {
  const { setLocation, setPrevLocation, location } = useNavigationState()

  const navigateTo = (l: LocationType) => {
    setPrevLocation(location)
    setLocation(l)
  }

  return { navigateTo }
}
