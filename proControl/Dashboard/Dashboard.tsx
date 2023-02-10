import { useNavigationState } from "@proControl/Navigation"

export const Dashboard = () => {
  //hooks
  const { location: module } = useNavigationState()

  if (module !== "dashboard") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
