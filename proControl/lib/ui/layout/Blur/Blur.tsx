import { forwardRef } from "react"
import { Background } from "../Background"
import { BlurProps } from "./BlurProps"

export const Blur = forwardRef<HTMLDivElement, BlurProps>((props, ref) => {
  return (
    <Background
      {...props}
      ref={ref}
      css={{
        backdropFilter: "blur(5px)",
        ...props.css
      }}
    >
      {props.children}
    </Background>
  )
})
