import { useNavigationState } from "@proControl/Navigation"

export const PLC = () => {
  //hooks
  const { location: module } = useNavigationState()

  if (module !== "plc") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
