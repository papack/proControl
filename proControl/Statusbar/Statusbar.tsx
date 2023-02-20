import { Grid } from "@proControl/lib/ui/layout"
import { Decoration } from "./Decoration"
import { Information } from "./Information"

export const Statusbar = () => {
  const panelSize = "normal"
  const packMLMode = "-"
  const packMLState = "-"
  const recipe = "-"
  const batch = "-"

  //hooks
  return (
    <Grid grdTemplateColumns="1fr auto" w="100%" fs={panelSize === "normal" ? "$md" : "$sm"}>
      <Decoration stripeColor="$christ" />
      <Information
        packMLModeTitle={"mode"}
        packMLModeText={packMLMode}
        packMLStateTitle={"state"}
        packMLStateText={packMLState}
        recipeTitle={"recipe"}
        recipeText={recipe}
        batchNumberTitle={"batch"}
        batchNumberText={batch}
      />
    </Grid>
  )
}
