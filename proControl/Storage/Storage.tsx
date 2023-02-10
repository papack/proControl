import { useNavigationState } from "@proControl/Navigation"
import { ReactNode } from "react"

export const Storage = (): ReactNode => {
  //hooks
  const { location: module } = useNavigationState()

  if (module !== "storage") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
