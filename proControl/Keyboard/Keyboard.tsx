import { useNavigationState } from "@proControl/Navigation"

export const Keyboard = () => {
  //hooks
  const { location: module } = useNavigationState()

  if (module !== "keyboard") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
