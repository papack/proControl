import { forwardRef } from "react"
import { FlexProps } from "./FlexProps"
import { FlexItem } from "../FlexItem"

export const Flex = forwardRef<HTMLDivElement, FlexProps>((props, ref) => {
  return (
    <FlexItem
      {...props}
      ref={ref}
      css={{
        display: "flex",
        justifyContent: props.jc,
        alignItems: props.ai,
        alignContent: props.ac,
        gap: props.g,
        flexDirection: props.flxDirection,
        flexWrap: props.flxWrap,

        ...props.css
      }}
    >
      {props.children}
    </FlexItem>
  )
})
