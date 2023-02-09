import { useNavigationState } from "@proControl/Navigation"

export const Dashboard = () => {
  //hooks
  const { path: module } = useNavigationState()

  if (module !== "dashboard") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
