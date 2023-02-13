import { forwardRef } from "react"
import { Flex } from "../Flex"
import { WrapProps } from "./WrapProps"

export const Wrap = forwardRef<HTMLDivElement, WrapProps>((props, ref) => {
  return (
    <Flex {...props} ref={ref} flxWrap="wrap">
      {props.children}
    </Flex>
  )
})
