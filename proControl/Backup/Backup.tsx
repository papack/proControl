import { useNavigationState } from "@proControl/Navigation"

export const Backup = () => {
  //hooks
  const { location: module } = useNavigationState()

  if (module !== "backup") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
