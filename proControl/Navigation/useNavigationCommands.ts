import { PathType } from "./types"
import { useNavigationState } from "./useNavigationState"

export const useNavigationCommands = () => {
  const { setPath, setPrevPath, path } = useNavigationState()

  const navigateTo = (p: PathType) => {
    setPrevPath(path)
    setPath(p)
  }

  return { navigateTo }
}
