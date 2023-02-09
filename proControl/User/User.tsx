import { useNavigationState } from "@proControl/Navigation"

export const User = () => {
  //hooks
  const { path: module } = useNavigationState()

  if (module !== "user") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
