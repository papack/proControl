import { Grid } from "@proControl/lib/ui/layout"
import { Divider } from "@proControl/lib/ui/components"
import { InformationProps } from "./interfaces"
import { InfoBox } from "./ui"

const DIVIDER_SIZE = "75%"

export const Information = ({
  batchNumberText,
  batchNumberTitle,
  packMLStateText,
  recipeText,
  recipeTitle,
  packMLModeText,
  packMLModeTitle,
  packMLStateTitle
}: InformationProps) => {
  return (
    <Grid
      h="80px"
      w="650px"
      bg="$dark"
      g="$lg"
      pr="$lg"
      grdTemplateColumns="auto 1fr auto 1fr auto 1fr auto 1fr "
      ai="center"
    >
      <Divider direction="column" size={DIVIDER_SIZE} />
      <InfoBox title={packMLModeTitle} text={packMLModeText} />

      <Divider direction="column" size={DIVIDER_SIZE} />
      <InfoBox title={packMLStateTitle} text={packMLStateText} />

      <Divider direction="column" size={DIVIDER_SIZE} />
      <InfoBox title={recipeTitle} text={recipeText} />

      <Divider direction="column" size={DIVIDER_SIZE} />
      <InfoBox title={batchNumberTitle} text={batchNumberText} />
    </Grid>
  )
}
