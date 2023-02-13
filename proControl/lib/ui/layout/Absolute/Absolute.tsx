import { forwardRef } from "react"
import { Box } from "../Box"
import { AbsoluteProps } from "./AbsoluteProps"

export const Absolute = forwardRef<HTMLDivElement, AbsoluteProps>((props, ref) => {
  return (
    <Box
      {...props}
      ref={ref}
      css={{
        position: "absolute",
        top: props.top,
        bottom: props.bottom,
        left: props.left,
        right: props.right,

        ...props.css
      }}
    >
      {props.children}
    </Box>
  )
})
