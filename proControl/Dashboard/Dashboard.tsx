import { Button } from "@proControl/lib/ui/components"
import { SinglePageTemplate } from "@proControl/lib/templates"
import { useNavigationState } from "@proControl/Navigation"

export const Dashboard = () => {
  //hooks
  const { location: module } = useNavigationState()

  if (module !== "dashboard") return null

  return (
    <SinglePageTemplate panelSize="normal" title="Dashboard">
      <Button title="Hello World" panelSize="normal" variant="enabled" />
    </SinglePageTemplate>
  )
}
