import { useNavigationState } from "@proControl/Navigation"

export const Assemblies = () => {
  //hooks
  const { module } = useNavigationState()

  if (module !== "assemblies") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}