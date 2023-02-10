import { useNavigationState } from "@proControl/Navigation"

export const Modules = () => {
  //hooks
  const { location: module } = useNavigationState()

  if (module !== "modules") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
