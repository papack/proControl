import { useNavigationState } from "@proControl/Navigation"

export const Playground = () => {
  //hooks
  const { module } = useNavigationState()

  if (module !== "playground") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}