import { useNavigationState } from "@proControl/Navigation"

export const Storage = () => {
  //hooks
  const { location: module } = useNavigationState()

  if (module !== "storage") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
