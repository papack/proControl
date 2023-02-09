import { useNavigationState } from "@proControl/Navigation"

export const Batch = () => {
  //hooks
  const { path: module } = useNavigationState()

  if (module !== "batch") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
