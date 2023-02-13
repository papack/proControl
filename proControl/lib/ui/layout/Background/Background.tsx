import { forwardRef } from "react"
import { Box } from "../Box"
import { BackgroundProps } from "./BackgroundProps"

export const Background = forwardRef<HTMLDivElement, BackgroundProps>((props, ref) => {
  //dont show, if show is false
  if (!props.show) {
    return null
  }

  return (
    <Box
      {...props}
      ref={ref}
      css={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        zIndex: props.zIndex,

        ...props.css
      }}
    >
      {props.children}
    </Box>
  )
})
