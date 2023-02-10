import { useNavigationState } from "@proControl/Navigation"

export const Simulation = () => {
  //hooks
  const { location: module } = useNavigationState()

  if (module !== "simulation") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
