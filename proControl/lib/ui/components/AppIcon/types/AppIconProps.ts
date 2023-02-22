import { IconType } from "@proControl/lib/ui/components/Icon/types"

export interface AppIconProps {
  /** the Title of the Icon */
  title: string

  /** the Click listener */
  onClick: () => void

  /** the Icon on the App */
  icon: IconType

  /** deactivated */
  isDeactivated?: boolean
}
