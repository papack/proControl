import { forwardRef } from "react"
import { FixedProps } from "./FixedProps"
import { Box } from "../Box"

export const Fixed = forwardRef<HTMLDivElement, FixedProps>((props, ref) => {
  return (
    <Box
      {...props}
      ref={ref}
      css={{
        position: "fixed",
        top: props.top,
        bottom: props.bottom,
        left: props.left,
        right: props.right,
        zIndex: props.zIndex,

        ...props.css
      }}
    >
      {props.children}
    </Box>
  )
})
