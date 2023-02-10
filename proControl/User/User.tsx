import { useNavigationState } from "@proControl/Navigation"

export const User = () => {
  //hooks
  const { location: module } = useNavigationState()

  if (module !== "user") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
