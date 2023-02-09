import { ModuleType } from "./types"
import { useNavigationState } from "./useNavigationState"

export const useNavigationCommands = () => {
  const { setModule, setPrevModule, module } = useNavigationState()

  const navigateTo = (navigateToThisModule: ModuleType) => {
    setPrevModule(module)
    setModule(navigateToThisModule)
  }

  return { navigateTo }
}
