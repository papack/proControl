import { useNavigationState } from "@proControl/Navigation"

export const Backup = () => {
  //hooks
  const { path: module } = useNavigationState()

  if (module !== "backup") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
