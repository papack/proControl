import { useNavigationState } from "@proControl/Navigation"

export const Keyboard = () => {
  //hooks
  const { module } = useNavigationState()

  if (module !== "keyboard") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}