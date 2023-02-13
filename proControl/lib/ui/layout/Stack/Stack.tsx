import { forwardRef } from "react"
import { Flex } from "../Flex"
import { StackProps } from "./StackProps"

export const Stack = forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  return (
    <Flex flxDirection="column" {...props} ref={ref}>
      {props.children}
    </Flex>
  )
})
