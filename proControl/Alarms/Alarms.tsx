import { useNavigationState } from "@proControl/Navigation"

export const Alarms = () => {
  //hooks
  const { module } = useNavigationState()

  if (module !== "alarms") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}