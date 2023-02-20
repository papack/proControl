import { Flex } from "@proControl/lib/ui/layout"
import { IconGroupProps } from "./interfaces"

export const ToolbarGroup = ({ children, jc = "center" }: IconGroupProps) => {
  return (
    <Flex flxDirection="column" g="$md" jc={jc} ai="center">
      {children}
    </Flex>
  )
}
