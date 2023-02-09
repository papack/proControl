import { useNavigationState } from "@proControl/Navigation"

export const Desktop = () => {
  //hooks
  const { path: module } = useNavigationState()

  if (module !== "desktop") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
