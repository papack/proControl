import { useNavigationState } from "@proControl/Navigation"

export const PLC = () => {
  //hooks
  const { path: module } = useNavigationState()

  if (module !== "plc") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
