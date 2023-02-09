import { useNavigationState } from "@proControl/Navigation"

export const Modules = () => {
  //hooks
  const { path: module } = useNavigationState()

  if (module !== "modules") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
