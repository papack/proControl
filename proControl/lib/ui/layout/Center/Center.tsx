import { forwardRef } from "react"
import { CenterProps } from "./CenterProps"
import { Flex } from "../Flex"

export const Center = forwardRef<HTMLDivElement, CenterProps>((props, ref) => {
  return (
    <Flex
      {...props}
      ref={ref}
      css={{
        justifyContent: "center",
        alignItems: "center",

        ...props.css
      }}
    >
      {props.children}
    </Flex>
  )
})
