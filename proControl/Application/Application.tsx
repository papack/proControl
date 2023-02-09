import { useNavigationState } from "@proControl/Navigation"

export const Application = () => {
  //hooks
  const { path: module } = useNavigationState()

  if (module !== "application") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
