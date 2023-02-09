import { useNavigationState } from "@proControl/Navigation"

export const Settings = () => {
  //hooks
  const { path: module } = useNavigationState()

  if (module !== "settings") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
