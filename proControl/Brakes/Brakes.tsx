import { useNavigationState } from "@proControl/Navigation"

export const Brakes = () => {
  //hooks
  const { path: module } = useNavigationState()

  if (module !== "brakes") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
