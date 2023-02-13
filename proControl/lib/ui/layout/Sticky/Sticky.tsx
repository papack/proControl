import { forwardRef } from "react"
import { Box } from "../Box"
import { StickyProps } from "./StickyProps"

export const Sticky = forwardRef<HTMLDivElement, StickyProps>((props, ref) => {
  return (
    <Box
      {...props}
      ref={ref}
      css={{
        position: "sticky",
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
