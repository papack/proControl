import { useNavigationState } from "@proControl/Navigation"

export const Resets = () => {
  //hooks
  const { location: module } = useNavigationState()

  if (module !== "resets") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
