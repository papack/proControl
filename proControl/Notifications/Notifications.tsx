import { useNavigationState } from "@proControl/Navigation"

export const Notifications = () => {
  //hooks
  const { location: module } = useNavigationState()

  if (module !== "notifications") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
