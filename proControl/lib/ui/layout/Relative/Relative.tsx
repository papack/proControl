import { forwardRef } from "react"
import { Box } from "../Box"
import { RelativeProps } from "./RelativeProps"

export const Relative = forwardRef<HTMLDivElement, RelativeProps>((props, ref) => {
  return (
    <Box
      {...props}
      ref={ref}
      css={{
        position: "relative",
        zIndex: props.zIndex,
        ...props.css
      }}
    >
      {props.children}
    </Box>
  )
})
