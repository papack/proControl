export * from "./Navigation"
export * from "./useNavigationCommands"

//useNavigationState: only read access to module and prevModule
import { useNavigationState as useNavigationStateIntern } from "./useNavigationState"
export const useNavigationState = () => {
  const state = useNavigationStateIntern()
  return { path: state.path, prevPath: state.prevPath }
}
