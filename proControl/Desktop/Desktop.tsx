import { useNavigationState } from "@proControl/Navigation"

export const Desktop = () => {
  //hooks
  const { module } = useNavigationState()

  if (module !== "desktop") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}