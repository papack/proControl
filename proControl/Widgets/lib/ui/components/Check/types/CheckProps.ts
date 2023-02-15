import React from "react"

export interface CheckProps {
  /** status   */
  checked: boolean

  /** variant */
  variant: "check" | "radio"

  /** onChange   */
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void

  /** on Click on an Disabled Item */
  onClickDisabled: (e: React.MouseEvent<HTMLDivElement>) => void

  /** label   */
  lable: string

  /** disabled   */
  disabled?: boolean

  /** gap */
  gap?: string
}
