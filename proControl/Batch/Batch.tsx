import { useNavigationState } from "@proControl/Navigation"

export const Batch = () => {
  //hooks
  const { module } = useNavigationState()

  if (module !== "batch") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}