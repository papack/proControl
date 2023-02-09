import { useNavigationState } from "@proControl/Navigation"

export const Dialog = () => {
  //hooks
  const { module } = useNavigationState()

  if (module !== "dialog") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}