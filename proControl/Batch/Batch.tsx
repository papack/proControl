import { useNavigationState } from "@proControl/Navigation"

export const Batch = () => {
  //hooks
  const { location: module } = useNavigationState()

  if (module !== "batch") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
