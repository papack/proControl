import { forwardRef } from "react"
import { Relative } from "../Relative"
import { Absolute } from "../Absolute"
import { ScrollProps } from "./ScrollProps"

export const Scroll = forwardRef<HTMLDivElement, ScrollProps>((props, ref) => {
  return (
    <Relative s="100%" {...props} ref={ref}>
      <Absolute
        top="0"
        right="0"
        bottom="0"
        left="0"
        css={{ overflow: "auto" }}
        onPointerMove={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}
      >
        {props.children}
      </Absolute>
    </Relative>
  )
})
