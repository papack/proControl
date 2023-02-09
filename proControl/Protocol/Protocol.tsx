import { useNavigationState } from "@proControl/Navigation"

export const Protocol = () => {
  //hooks
  const { path: module } = useNavigationState()

  if (module !== "protocol") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
