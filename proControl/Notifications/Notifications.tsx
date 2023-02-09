import { useNavigationState } from "@proControl/Navigation"

export const Notifications = () => {
  //hooks
  const { module } = useNavigationState()

  if (module !== "notifications") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}