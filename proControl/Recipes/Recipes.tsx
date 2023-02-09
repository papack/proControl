import { useNavigationState } from "@proControl/Navigation"

export const Recipes = () => {
  //hooks
  const { module } = useNavigationState()

  if (module !== "recipes") return null

  return (
    <>
      <div>{module}</div>
    </>
  )
}