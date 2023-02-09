import { useNavigationState } from "@proControl/Navigation"

export const Debug = () => {
  //hooks
  const { path: module } = useNavigationState()

  if (module !== "debug") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
