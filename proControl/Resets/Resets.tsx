import { useNavigationState } from "@proControl/Navigation"

export const Resets = () => {
  //hooks
  const { module } = useNavigationState()

  if (module !== "resets") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}