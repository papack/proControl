import { useNavigationState } from "@proControl/Navigation"

export const Recipes = () => {
  //hooks
  const { path: module } = useNavigationState()

  if (module !== "recipes") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}
