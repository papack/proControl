import { useNavigationState } from "@proControl/Navigation"

export const Dashboard = () => {
  //hooks
  const { module } = useNavigationState()

  if (module !== "dashboard") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}