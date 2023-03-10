import { IconType } from "@proControl/lib/ui/components/Icon/types"

export interface ToolbarIconProps {
  /** Variant of the Toolbaricon*/
  variant: "primary" | "enabled" | "deactivated"

  /** should we show a border  */
  border?: boolean

  /** Name of the icon to use */
  iconName: IconType

  /** color of the icon */
  iconColor?: string

  /** onClick */
  onClick?: (geometry: DOMRect) => void

  /** onClickDeactivated */
  onClickDeactivated?: (geometry: DOMRect) => void
}
