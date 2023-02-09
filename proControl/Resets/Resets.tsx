import { useNavigationState } from "@proControl/Navigation"

export const Resets = () => {
  //hooks
  const { path: module } = useNavigationState()

  if (module !== "resets") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
