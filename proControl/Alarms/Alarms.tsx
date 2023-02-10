import { useNavigationState } from "@proControl/Navigation"
import { ReactNode } from "react"

export const Alarms = (): ReactNode => {
  //hooks
  const { location: module } = useNavigationState()

  if (module !== "alarms") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
