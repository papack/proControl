import { useNavigationState } from "@proControl/Navigation"

export const Navigation = () => {
  //hooks
  const { location: module } = useNavigationState()

  if (module !== "navigation") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
