import { useNavigationState } from "@proControl/Navigation"

export const Widgets = () => {
  //hooks
  const { module } = useNavigationState()

  if (module !== "widgets") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}