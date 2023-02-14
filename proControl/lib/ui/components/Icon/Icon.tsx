import { IconProps } from "./types"
import { IconList } from "./IconList"

export const Icon = ({ name, color }: IconProps) => {
  //get the icon from the IconList
  const IconComponent = IconList[name]

  return <IconComponent color={color} />
}
