import { Grid } from "@proControl/lib/ui/layout"
import { Leftpart, Rightpart } from "./ui"
import { DecorationProps } from "./interfaces"

export const Decoration = ({ stripeColor }: DecorationProps) => {
  return (
    <Grid grdTemplateColumns="1fr auto" w="100%" h="80px">
      <Leftpart stripeColor={stripeColor} />
      <Rightpart stripColor={stripeColor} />
    </Grid>
  )
}
