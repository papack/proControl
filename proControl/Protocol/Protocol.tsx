import { useNavigationState } from "@proControl/Navigation"

export const Protocol = () => {
  //hooks
  const { location: module } = useNavigationState()

  if (module !== "protocol") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
