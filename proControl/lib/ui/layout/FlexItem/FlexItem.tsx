import { forwardRef } from "react"
import { Box } from "../Box"
import { FlexItemProps } from "./FlexItemProps"

export const FlexItem = forwardRef<HTMLDivElement, FlexItemProps>((props, ref) => {
  return (
    <Box
      {...props}
      ref={ref}
      css={{
        flex: props.flx,
        order: props.o,
        alignSelf: props.as,
        flexGrow: props.flxGrow,
        flexShrink: props.flxShrink,
        flexBasis: props.flxBasis,
        ...props.css
      }}
    >
      {props.children}
    </Box>
  )
})
