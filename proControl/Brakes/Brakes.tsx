import { useNavigationState } from "@proControl/Navigation"

export const Brakes = () => {
  //hooks
  const { location: module } = useNavigationState()

  if (module !== "brakes") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
