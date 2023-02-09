import { useNavigationState } from "@proControl/Navigation"

export const Analytics = () => {
  //hooks
  const { path: module } = useNavigationState()

  if (module !== "analytics") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
