import { useNavigationState } from "@proControl/Navigation"

export const User = () => {
  //hooks
  const { module } = useNavigationState()

  if (module !== "user") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}