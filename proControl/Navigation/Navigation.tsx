import { useNavigationState } from "@proControl/Navigation"

export const Navigation = () => {
  //hooks
  const { path: module } = useNavigationState()

  if (module !== "navigation") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
