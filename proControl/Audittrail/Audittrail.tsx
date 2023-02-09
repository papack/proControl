import { useNavigationState } from "@proControl/Navigation"

export const Audittrail = () => {
  //hooks
  const { path: module } = useNavigationState()

  if (module !== "audittrail") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
