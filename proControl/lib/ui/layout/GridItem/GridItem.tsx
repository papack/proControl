import { forwardRef } from "react"
import { Box } from "../Box"
import { GridItemProps } from "./GridItemProps"

export const GridItem = forwardRef<HTMLDivElement, GridItemProps>((props, ref) => {
  return (
    <Box
      {...props}
      ref={ref}
      css={{
        gridArea: props.grdArea,
        gridColumn: props.grdColumn,
        gridRow: props.grdRow,

        ...props.css
      }}
    >
      {props.children}
    </Box>
  )
})
