import { useNavigationState } from "@proControl/Navigation"

export const Settings = () => {
  //hooks
  const { module } = useNavigationState()

  if (module !== "settings") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}