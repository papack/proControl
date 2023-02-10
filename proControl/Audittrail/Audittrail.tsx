import { useNavigationState } from "@proControl/Navigation"

export const Audittrail = () => {
  //hooks
  const { location: module } = useNavigationState()

  if (module !== "audittrail") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
