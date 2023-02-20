import { FlexItem } from "@proControl/lib/ui/layout"
import { DesktopProps } from "./interfaces"

export const DesktopItem = ({ children }: DesktopProps) => {
  return (
    <FlexItem s="100%" flxShrink={0} b="1px dashed gray">
      {children}
    </FlexItem>
  )
}
