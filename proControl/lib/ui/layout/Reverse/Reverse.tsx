import { Children } from "react"
import { ReverseProps } from "./ReverseProps"

export const Reverse = ({ children, enabled = true }: ReverseProps) => {
  //dont reverse, if enable is false
  if (!enabled) {
    return <>{children}</>
  }

  //reverse children
  return <>{Children.toArray(children).reverse()}</>
}
