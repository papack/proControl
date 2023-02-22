import { IconType } from "@proControl/lib/ui/components/Icon/types"
import { PanelSize } from "@proControl/lib/hooks/usePanelSize/types"

export interface ButtonProps {
  /** Variant of the Button */
  variant?: "primary" | "secondary" | "enabled" | "deactivated"

  /** size */
  size?: "normal" | "small"

  /** PanelSize */
  panelSize: PanelSize

  /** title */
  title?: string

  /** icon */
  iconName?: IconType

  /** iconColor */
  iconColor?: string

  /** show */
  show?: boolean

  /** invert the colors */
  isOnDarkBackground?: boolean

  /** onClick */
  onClick?: () => void

  /** onClickDeactivated */
  onClickDeactivated?: () => void

  /** 100% width */
  fullWidth?: boolean

  /* 100% height */
  fullHeight?: boolean

  /** minW */
  minW?: string

  /** disable/prevent Focus after onClick
   *  a button normally gets the focus if onMouseDown was successful.
   * Sometimes we don't want this (e.g. keyboard to keep focus after input).
   */
  disableFocusRequest?: boolean

  /** onPointerDown */
  onPointerDown?: (event: React.PointerEvent<HTMLButtonElement>) => void

  /** onPointerUp */
  onPointerUp?: (event: React.PointerEvent<HTMLButtonElement>) => void
}
