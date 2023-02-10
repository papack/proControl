import { useNavigationState } from "@proControl/Navigation"

export const Desktop = () => {
  //hooks
  const { location: module } = useNavigationState()

  if (module !== "desktop") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
